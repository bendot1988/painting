const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/**
 * Check a Cloudflare Turnstile token. Never throws.
 * @param {string | undefined} token
 * @param {string} [ip]
 * @returns {Promise<boolean>}
 */
export async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!secret) {
    console.error('Missing TURNSTILE_SECRET_KEY');
    return false;
  }
  if (!token?.trim()) return false;

  try {
    const body = new URLSearchParams({ secret, response: token.trim() });
    if (ip && ip !== 'unknown') body.set('remoteip', ip);
    const res = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
      signal: AbortSignal.timeout(5000),
    });
    const result = await res.json().catch(() => null);
    if (!result?.success) {
      console.warn('Turnstile rejected:', result?.['error-codes']);
      return false;
    }
    return true;
  } catch (err) {
    console.error('Turnstile verify failed:', err);
    return false;
  }
}
