import { connectLambda, getStore } from '@netlify/blobs';

const STORE_NAME = 'form-submissions';
const RATE_LIMIT_PER_DAY = 8;

/**
 * Must be called once per Lambda invocation before any Blobs use.
 * Classic Netlify Functions (export const handler) need this.
 * @param {import('@netlify/functions').HandlerEvent} [event]
 */
export function initBlobs(event) {
  if (event) {
    connectLambda(event);
  }
}

/**
 * @returns {ReturnType<typeof getStore>}
 */
function store() {
  const siteID = process.env.SITE_ID || process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_BLOBS_TOKEN || process.env.NETLIFY_API_TOKEN;

  // Prefer explicit credentials when available (scheduled jobs / local fallback)
  if (siteID && token) {
    return getStore({
      name: STORE_NAME,
      siteID,
      token,
      consistency: 'strong',
    });
  }

  return getStore({ name: STORE_NAME, consistency: 'strong' });
}

/**
 * @param {string} iso
 */
function dayKey(iso = new Date().toISOString()) {
  return iso.slice(0, 10);
}

/**
 * @param {import('@netlify/functions').HandlerEvent} event
 */
export function clientIp(event) {
  const forwarded = event.headers['x-forwarded-for'] || event.headers['X-Forwarded-For'] || '';
  const first = String(forwarded).split(',')[0]?.trim();
  return first || event.headers['client-ip'] || event.headers['x-nf-client-connection-ip'] || 'unknown';
}

/**
 * @param {string} ip
 * @returns {Promise<{ allowed: boolean, count: number }>}
 */
export async function checkRateLimit(ip) {
  const key = `rate/${dayKey()}/${encodeURIComponent(ip)}`;
  const s = store();
  const raw = await s.get(key);
  const count = raw ? Number(raw) || 0 : 0;
  if (count >= RATE_LIMIT_PER_DAY) {
    return { allowed: false, count };
  }
  await s.set(key, String(count + 1), {
    metadata: { updatedAt: new Date().toISOString() },
  });
  return { allowed: true, count: count + 1 };
}

/**
 * @param {{
 *   formName: string,
 *   status: 'ok' | 'spam',
 *   reason?: string,
 *   fields: Record<string, string>,
 *   ip?: string,
 * }} entry
 */
export async function saveSubmission(entry) {
  const createdAt = new Date().toISOString();
  const id = `${createdAt.replace(/[:.]/g, '-')}-${Math.random().toString(36).slice(2, 8)}`;
  const record = {
    id,
    createdAt,
    formName: entry.formName,
    status: entry.status,
    reason: entry.reason || null,
    ip: entry.ip || null,
    fields: sanitizeFields(entry.fields),
  };

  await store().setJSON(`items/${id}.json`, record, {
    metadata: {
      createdAt,
      status: record.status,
      formName: record.formName,
    },
  });

  return record;
}

/**
 * @param {Record<string, string>} fields
 */
function sanitizeFields(fields) {
  const out = {};
  for (const [key, value] of Object.entries(fields)) {
    if (key === 'bot-field' || key === 'website' || key === 'form_loaded_at') continue;
    out[key] = String(value ?? '').slice(0, 4000);
  }
  return out;
}

/**
 * @param {{ sinceMs?: number, limit?: number }} [opts]
 */
export async function listSubmissions(opts = {}) {
  const sinceMs = opts.sinceMs ?? 0;
  const limit = opts.limit ?? 500;
  const s = store();
  const listed = await s.list({ prefix: 'items/' });
  const blobs = listed.blobs || [];

  /** @type {Array<Record<string, unknown>>} */
  const rows = [];
  for (const blob of blobs) {
    const record = await s.get(blob.key, { type: 'json' });
    if (!record?.createdAt) continue;
    const ts = Date.parse(String(record.createdAt));
    if (Number.isFinite(ts) && ts >= sinceMs) {
      rows.push(record);
    }
  }

  rows.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
  return rows.slice(0, limit);
}
