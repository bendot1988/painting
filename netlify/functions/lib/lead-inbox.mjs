const DEFAULT_LEAD_INBOX_URL =
  'https://monitor.dotwall.co.uk/api/public/leads/069915337e212464245e22628121aaa441421973006f5a6c';

const TIMEOUT_MS = 5000;

const FORM_LABELS = {
  quote: 'Quote request',
  'survey-request': 'Site survey request',
  'contract-enquiry': 'Maintenance contract enquiry',
  'maintenance-enquiry': 'Maintenance plan enquiry',
  'maintenance-quick': 'Quick maintenance request',
};

const SKIP_KEYS = new Set(['form-name', 'bot-field', 'website', 'form_loaded_at', 'consent', 'message', 'situation']);

/**
 * Send a genuine lead to the dotwall monitor Lead Inbox.
 * Never throws: email delivery must not depend on the inbox being up.
 * @param {Record<string, string>} data
 * @param {string} formName
 * @returns {Promise<boolean>}
 */
export async function forwardToLeadInbox(data, formName) {
  const url = process.env.LEAD_INBOX_URL?.trim() || DEFAULT_LEAD_INBOX_URL;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: buildLeadBody(data, formName),
      redirect: 'manual',
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });

    if (response.status >= 400) {
      console.error('Lead Inbox rejected lead:', response.status, await response.text().catch(() => ''));
      return false;
    }
    return true;
  } catch (err) {
    console.error('Lead Inbox request failed:', err);
    return false;
  }
}

/**
 * Lead Inbox stores name, email and message; everything else (phone, job type,
 * company…) is folded into the message so nothing is lost.
 * @param {Record<string, string>} data
 * @param {string} formName
 */
function buildLeadBody(data, formName) {
  const jobTypes = [];
  if (data.job_commercial === 'yes') jobTypes.push('Commercial');
  if (data.job_domestic === 'yes') jobTypes.push('Domestic');
  if (data.job_not_sure === 'yes') jobTypes.push('Not sure yet');

  const details = Object.entries(data)
    .filter(([key, value]) => !SKIP_KEYS.has(key) && !key.startsWith('job_') && String(value).trim())
    .filter(([key]) => key !== 'name' && key !== 'email')
    .map(([key, value]) => `${key.replace(/_/g, ' ')}: ${String(value).trim()}`);
  if (jobTypes.length) details.push(`job type: ${jobTypes.join(', ')}`);

  const userMessage = String(data.message ?? data.situation ?? '').trim();
  const message = [
    `[${FORM_LABELS[formName] || formName}]`,
    userMessage,
    details.length ? `\n${details.join('\n')}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const body = new URLSearchParams({
    name: String(data.name ?? '').trim(),
    email: String(data.email ?? '').trim(),
    message,
  });
  if (data.phone?.trim()) body.set('phone', data.phone.trim());
  if (data.company?.trim()) body.set('company', data.company.trim());
  body.set('form', formName);
  body.set('source', 'as-painting.co.uk');
  return body;
}
