import { Resend } from 'resend';

/** @param {import('@netlify/functions').HandlerEvent} event */
export const handler = async (event) => {
  if (!event.body) {
    return { statusCode: 400, body: 'Missing body' };
  }

  let payload;
  try {
    ({ payload } = JSON.parse(event.body));
  } catch {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  if (payload?.form_name !== 'quote') {
    return { statusCode: 200, body: 'Ignored' };
  }

  const data = payload.data ?? {};

  if (data['bot-field']) {
    return { statusCode: 200, body: 'Spam ignored' };
  }

  if (data.consent !== 'yes') {
    console.error('Quote form submitted without consent');
    return { statusCode: 422, body: 'Consent required' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.RESEND_TO;
  if (!apiKey || !from || !to) {
    console.error('Missing RESEND_API_KEY, RESEND_FROM, or RESEND_TO');
    return { statusCode: 500, body: 'Email not configured' };
  }

  const jobTypes = [];
  if (data.job_commercial === 'yes') jobTypes.push('Commercial');
  if (data.job_domestic === 'yes') jobTypes.push('Domestic');
  if (data.job_not_sure === 'yes') jobTypes.push('Not sure yet');
  const jobLabel = jobTypes.length ? jobTypes.join(', ') : 'Not specified';

  const name = escapeHtml(data.name ?? '');
  const phone = escapeHtml(data.phone ?? '');
  const email = escapeHtml(data.email ?? '');
  const message = escapeHtml(data.message ?? '').replace(/\n/g, '<br />');

  const bcc = process.env.RESEND_BCC?.trim();
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    ...(bcc ? { bcc: [bcc] } : {}),
    replyTo: data.email || undefined,
    subject: `Quote request — ${data.name || 'A.S Painting website'}`,
    html: `
      <h2>New quote request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Job type:</strong> ${escapeHtml(jobLabel)}</p>
      <p><strong>Project details:</strong><br />${message || '<em>No message</em>'}</p>
      <hr />
      <p style="color:#666;font-size:12px;">
        Sent from the A.S Painting Contractors website quote form.
        Privacy consent: yes.
      </p>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return { statusCode: 500, body: JSON.stringify(error) };
  }

  return { statusCode: 200, body: 'Email sent' };
};

/** @param {string} value */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
