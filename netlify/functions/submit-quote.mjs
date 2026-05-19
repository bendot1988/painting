import { sendQuoteEmail } from './lib/quote-email.mjs';

const ALLOWED_HOSTS = ['as-painting.co.uk', 'www.as-painting.co.uk', 'as-painting.netlify.app'];

/** @param {import('@netlify/functions').HandlerEvent} event */
export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders(event), body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return json(405, { ok: false, message: 'Method not allowed' }, event);
  }

  if (!isAllowedOrigin(event)) {
    return json(403, { ok: false, message: 'Forbidden' }, event);
  }

  let data;
  try {
    data = parseBody(event);
  } catch {
    return json(400, { ok: false, message: 'Invalid form data' }, event);
  }

  if (!data.name?.trim() || !data.phone?.trim() || !data.email?.trim()) {
    return json(400, { ok: false, message: 'Name, phone and email are required' }, event);
  }

  const result = await sendQuoteEmail(data);
  if (!result.ok) {
    return json(result.status, { ok: false, message: result.message }, event);
  }

  return json(200, { ok: true }, event);
};

/** @param {import('@netlify/functions').HandlerEvent} event */
function isAllowedOrigin(event) {
  const origin = event.headers.origin || event.headers.Origin || '';
  const referer = event.headers.referer || event.headers.Referer || '';
  const source = origin || referer;
  if (!source) return true;
  try {
    const host = new URL(source).hostname;
    return ALLOWED_HOSTS.includes(host);
  } catch {
    return false;
  }
}

/** @param {import('@netlify/functions').HandlerEvent} event */
function parseBody(event) {
  const contentType = event.headers['content-type'] || event.headers['Content-Type'] || '';
  const raw = event.isBase64Encoded
    ? Buffer.from(event.body || '', 'base64').toString('utf8')
    : event.body || '';

  if (contentType.includes('application/x-www-form-urlencoded')) {
    return Object.fromEntries(new URLSearchParams(raw));
  }

  if (contentType.includes('application/json')) {
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed !== null ? parsed : {};
  }

  return Object.fromEntries(new URLSearchParams(raw));
}

/** @param {number} status @param {Record<string, unknown>} body @param {import('@netlify/functions').HandlerEvent} event */
function json(status, body, event) {
  return {
    statusCode: status,
    headers: { ...corsHeaders(event), 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
}

/** @param {import('@netlify/functions').HandlerEvent} event */
function corsHeaders(event) {
  const origin = event.headers.origin || event.headers.Origin;
  const allowed =
    origin && isAllowedOrigin(event) ? origin : 'https://www.as-painting.co.uk';
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
