/**
 * Spam checks for website forms.
 * Always return a reason when blocked so we can log it.
 */

const SPAM_KEYWORDS = [
  'viagra',
  'cialis',
  'crypto',
  'bitcoin',
  'forex',
  'seo services',
  'backlink',
  'guest post',
  'onlyfans',
  'casino',
  'porn',
  'xxx',
  'click here',
  'make money fast',
  'weight loss',
];

const MIN_FILL_MS = 2800;
const MAX_FILL_MS = 1000 * 60 * 60 * 24; // 24h — reject absurdly old timestamps

/**
 * @param {Record<string, string>} data
 * @param {{ now?: number }} [opts]
 * @returns {{ spam: false } | { spam: true, reason: string }}
 */
export function assessSpam(data, opts = {}) {
  const now = opts.now ?? Date.now();

  if (String(data['bot-field'] ?? '').trim()) {
    return { spam: true, reason: 'honeypot_bot_field' };
  }

  if (String(data.website ?? '').trim()) {
    return { spam: true, reason: 'honeypot_website' };
  }

  const loadedAt = Number(data.form_loaded_at);
  if (Number.isFinite(loadedAt) && loadedAt > 0) {
    const elapsed = now - loadedAt;
    if (elapsed < MIN_FILL_MS) {
      return { spam: true, reason: 'submitted_too_fast' };
    }
    if (elapsed > MAX_FILL_MS) {
      return { spam: true, reason: 'stale_timing' };
    }
  }

  const name = String(data.name ?? '');
  const email = String(data.email ?? '').toLowerCase();
  const message = String(data.message ?? data.situation ?? '');
  const haystack = `${name} ${email} ${message}`.toLowerCase();

  for (const word of SPAM_KEYWORDS) {
    if (haystack.includes(word)) {
      return { spam: true, reason: `keyword:${word}` };
    }
  }

  const urlMatches = message.match(/https?:\/\//gi) || [];
  if (urlMatches.length >= 3) {
    return { spam: true, reason: 'too_many_urls' };
  }

  // Random gibberish names: long strings with no spaces and few vowels
  const compactName = name.replace(/\s+/g, '');
  if (compactName.length >= 18 && !/[aeiou]/i.test(compactName.slice(0, 12))) {
    return { spam: true, reason: 'gibberish_name' };
  }

  return { spam: false };
}
