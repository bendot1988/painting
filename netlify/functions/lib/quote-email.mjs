import { Resend } from 'resend';
import { buildGenericFormEmailHtml, buildQuoteEmailHtml, escapeHtml } from './quote-email-template.mjs';

/**
 * @param {Record<string, string>} data
 * @returns {Promise<{ ok: true } | { ok: false, status: number, message: string }>}
 */
export async function sendQuoteEmail(data) {
  if (data['bot-field']) {
    return { ok: true };
  }

  if (data.consent !== 'yes') {
    return { ok: false, status: 422, message: 'Consent required' };
  }

  const formName = (data['form-name'] || 'quote').trim();
  if (formName === 'survey-request' || formName === 'contract-enquiry' || formName === 'maintenance-enquiry') {
    return sendNamedFormEmail(data, formName);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.RESEND_TO;
  if (!apiKey || !from || !to) {
    console.error('Missing RESEND_API_KEY, RESEND_FROM, or RESEND_TO');
    return { ok: false, status: 500, message: 'Email not configured' };
  }

  const jobTypes = [];
  if (data.job_commercial === 'yes') jobTypes.push('Commercial');
  if (data.job_domestic === 'yes') jobTypes.push('Domestic');
  if (data.job_not_sure === 'yes') jobTypes.push('Not sure yet');
  const jobLabel = jobTypes.length ? jobTypes.join(', ') : 'Not specified';

  const name = escapeHtml(data.name ?? '');
  const phone = escapeHtml(data.phone ?? '');
  const email = escapeHtml(data.email ?? '');
  const messageHtml = escapeHtml(data.message ?? '').replace(/\n/g, '<br />');

  const bcc = process.env.RESEND_BCC?.trim();
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    ...(bcc ? { bcc: [bcc] } : {}),
    replyTo: data.email || undefined,
    subject: `Quote request — ${data.name || 'A.S Painting website'}`,
    html: buildQuoteEmailHtml({ name, phone, email, jobLabel: escapeHtml(jobLabel), messageHtml }),
  });

  if (error) {
    console.error('Resend error:', error);
    return { ok: false, status: 500, message: 'Failed to send email' };
  }

  return { ok: true };
}

/**
 * @param {Record<string, string>} data
 * @param {string} formName
 */
async function sendNamedFormEmail(data, formName) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.RESEND_TO;
  if (!apiKey || !from || !to) {
    console.error('Missing RESEND_API_KEY, RESEND_FROM, or RESEND_TO');
    return { ok: false, status: 500, message: 'Email not configured' };
  }

  const titles = {
    'survey-request': 'Site survey request',
    'contract-enquiry': 'Maintenance contract enquiry',
    'maintenance-enquiry': 'Maintenance plan enquiry',
  };

  const fieldLabels = {
    name: 'Name',
    company: 'Company / organisation',
    property_type: 'Property type',
    units: 'Number of units / buildings',
    phone: 'Phone',
    email: 'Email',
    situation: 'Current situation',
    preferred_plan: 'Preferred plan',
  };

  const skipKeys = new Set(['form-name', 'bot-field', 'consent']);
  const rows = Object.entries(data)
    .filter(([key, value]) => !skipKeys.has(key) && String(value).trim())
    .map(([key, value]) => ({
      label: fieldLabels[key] || key.replace(/_/g, ' '),
      value: escapeHtml(String(value)),
    }));

  const subjectName = data.name?.trim() || 'A.S Painting website';
  const replyTo = data.email?.trim() || undefined;
  const bcc = process.env.RESEND_BCC?.trim();
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    ...(bcc ? { bcc: [bcc] } : {}),
    replyTo,
    subject: `${titles[formName] || 'Enquiry'} — ${subjectName}`,
    html: buildGenericFormEmailHtml({
      title: titles[formName] || 'Website enquiry',
      intro: `Submitted via the maintenance plans page on as-painting.co.uk`,
      rows,
    }),
  });

  if (error) {
    console.error('Resend error:', error);
    return { ok: false, status: 500, message: 'Failed to send email' };
  }

  return { ok: true };
}
