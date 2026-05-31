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
  if (
    formName === 'survey-request' ||
    formName === 'contract-enquiry' ||
    formName === 'maintenance-enquiry' ||
    formName === 'maintenance-quick'
  ) {
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
    'maintenance-quick': 'Quick maintenance request',
  };

  const fieldLabels = {
    name: 'Name',
    company: 'Company name',
    property_type: 'Property type',
    units: 'Number of properties / sites',
    properties_count: 'Number of properties / sites',
    phone: 'Phone number',
    email: 'Email',
    situation: 'Message / details',
    message: 'Message / details',
    preferred_plan: 'Preferred package',
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

  if (replyTo) {
    await sendCustomerConfirmation({
      resend,
      from,
      to: replyTo,
      name: data.name?.trim() || 'there',
      formName,
    }).catch((err) => {
      console.error('Customer confirmation email failed:', err);
    });
  }

  return { ok: true };
}

/**
 * @param {{ resend: Resend, from: string, to: string, name: string, formName: string }} args
 */
async function sendCustomerConfirmation({ resend, from, to, name, formName }) {
  const greetingName = escapeHtml(name);
  const subject =
    formName === 'maintenance-quick' || formName === 'maintenance-enquiry' || formName === 'survey-request'
      ? "Thanks — we've got your maintenance request"
      : "Thanks — we've got your enquiry";

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #0E0E10;">
      <h1 style="margin: 0 0 12px; font-size: 24px; color: #0E0E10;">Thanks, ${greetingName}!</h1>
      <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.55; color: #555;">
        We've received your request and a member of the A.S Painting Contractors team will be in touch
        within one working day to arrange a free site survey or answer any questions about our
        maintenance plans.
      </p>
      <div style="background: #FFF8DC; border-left: 4px solid #FFD60A; padding: 16px 20px; border-radius: 8px; margin: 20px 0;">
        <strong style="color: #0E0E10;">What happens next?</strong>
        <ol style="margin: 8px 0 0; padding-left: 18px; color: #555; line-height: 1.6;">
          <li>We'll review your details and call or email you back.</li>
          <li>We'll arrange a free site survey if needed.</li>
          <li>You'll receive a tailored maintenance agreement to review.</li>
        </ol>
      </div>
      <p style="margin: 20px 0 8px; font-size: 14.5px; color: #555;">
        Need to speak sooner? Call us on
        <a href="tel:01162914746" style="color: #D4262C; font-weight: 600; text-decoration: none;">0116 291 4746</a>
        or
        <a href="tel:07394758177" style="color: #D4262C; font-weight: 600; text-decoration: none;">07394 758 177</a>.
      </p>
      <p style="margin: 24px 0 4px; font-size: 14.5px; color: #555;">Warm regards,</p>
      <p style="margin: 0; font-weight: 700; color: #0E0E10;">A.S Painting Contractors Group Limited</p>
      <p style="margin: 16px 0 0; font-size: 12px; color: #999;">
        24 Naver Road, Leicester, LE19 4DG · Company Registration No. 15292374 · VAT 512 6050 35
      </p>
    </div>
  `;

  await resend.emails.send({
    from,
    to: [to],
    subject,
    html,
  });
}
