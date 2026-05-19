import { sendQuoteEmail } from './lib/quote-email.mjs';

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

  const result = await sendQuoteEmail(payload.data ?? {});
  if (!result.ok) {
    return { statusCode: result.status, body: result.message };
  }

  return { statusCode: 200, body: 'Email sent' };
};
