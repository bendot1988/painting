import { createHmac, timingSafeEqual } from 'node:crypto';
import { escapeHtml } from './lib/quote-email-template.mjs';
import { initBlobs, listSubmissions } from './lib/submissions-store.mjs';

const COOKIE = 'as_subs_auth';
const MAX_AGE_SEC = 60 * 60 * 12; // 12 hours

/** @param {import('@netlify/functions').HandlerEvent} event */
export const handler = async (event) => {
  initBlobs(event);

  const password = process.env.SUBMISSIONS_PASSWORD?.trim();
  if (!password) {
    return html(503, pageShell('Inbox not configured', '<p>Set <code>SUBMISSIONS_PASSWORD</code> in Netlify environment variables.</p>'));
  }

  if (event.httpMethod === 'POST') {
    const body = parseForm(event);
    if (body.action === 'logout') {
      return {
        statusCode: 302,
        headers: {
          Location: '/.netlify/functions/submissions-inbox',
          'Set-Cookie': `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
        },
        body: '',
      };
    }

    if (passwordsMatch(body.password || '', password)) {
      return {
        statusCode: 302,
        headers: {
          Location: '/.netlify/functions/submissions-inbox',
          'Set-Cookie': `${COOKIE}=${sign(password)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${MAX_AGE_SEC}`,
        },
        body: '',
      };
    }

    return html(401, loginPage('Wrong password. Try again.'));
  }

  if (!isAuthed(event, password)) {
    return html(200, loginPage());
  }

  const format = (event.queryStringParameters?.format || '').toLowerCase();
  const days = Math.min(90, Math.max(1, Number(event.queryStringParameters?.days) || 30));
  const sinceMs = Date.now() - days * 24 * 60 * 60 * 1000;
  const rows = await listSubmissions({ sinceMs, limit: 2000 });

  if (format === 'csv') {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="as-painting-submissions-${days}d.csv"`,
      },
      body: toCsv(rows),
    };
  }

  return html(200, inboxPage(rows, days));
};

/** @param {import('@netlify/functions').HandlerEvent} event */
function parseForm(event) {
  const raw = event.isBase64Encoded
    ? Buffer.from(event.body || '', 'base64').toString('utf8')
    : event.body || '';
  return Object.fromEntries(new URLSearchParams(raw));
}

/** @param {string} password */
function sign(password) {
  const exp = Math.floor(Date.now() / 1000) + MAX_AGE_SEC;
  const payload = String(exp);
  const sig = createHmac('sha256', password).update(payload).digest('hex');
  return `${payload}.${sig}`;
}

/**
 * @param {import('@netlify/functions').HandlerEvent} event
 * @param {string} password
 */
function isAuthed(event, password) {
  const cookieHeader = event.headers.cookie || event.headers.Cookie || '';
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${COOKIE}=([^;]+)`));
  if (!match) return false;
  const [payload, sig] = decodeURIComponent(match[1]).split('.');
  if (!payload || !sig) return false;
  const exp = Number(payload);
  if (!Number.isFinite(exp) || exp * 1000 < Date.now()) return false;
  const expected = createHmac('sha256', password).update(payload).digest('hex');
  try {
    return timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  } catch {
    return false;
  }
}

/** @param {string} a @param {string} b */
function passwordsMatch(a, b) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

/** @param {string} [error] */
function loginPage(error = '') {
  return pageShell(
    'Submissions inbox',
    `
    <p>Sign in to review form submissions (including blocked spam) stored on Netlify.</p>
    ${error ? `<p style="color:#A01B21;font-weight:600;">${escapeHtml(error)}</p>` : ''}
    <form method="POST" style="max-width:360px;margin-top:20px;">
      <label style="display:block;font-size:13px;font-weight:700;margin-bottom:6px;">Password</label>
      <input type="password" name="password" required autocomplete="current-password"
        style="width:100%;padding:12px 14px;border:1px solid #ccc;border-radius:10px;font-size:16px;" />
      <button type="submit" style="margin-top:14px;padding:12px 18px;border:0;border-radius:999px;background:#D4262C;color:#fff;font-weight:700;cursor:pointer;">
        Sign in
      </button>
    </form>
  `,
  );
}

/**
 * @param {Array<Record<string, any>>} rows
 * @param {number} days
 */
function inboxPage(rows, days) {
  const ok = rows.filter((r) => r.status === 'ok').length;
  const spam = rows.filter((r) => r.status === 'spam').length;

  const cards = rows
    .map((row) => {
      const fields = row.fields || {};
      const when = formatWhen(row.createdAt);
      const badge =
        row.status === 'spam'
          ? `<span style="background:#FEE2E2;color:#A01B21;padding:3px 8px;border-radius:999px;font-size:12px;font-weight:700;">Spam · ${escapeHtml(String(row.reason || ''))}</span>`
          : `<span style="background:#DCFCE7;color:#166534;padding:3px 8px;border-radius:999px;font-size:12px;font-weight:700;">Delivered</span>`;

      const details = Object.entries(fields)
        .map(
          ([k, v]) =>
            `<div style="display:grid;grid-template-columns:140px 1fr;gap:8px;padding:6px 0;border-top:1px solid #eee;font-size:14px;"><strong>${escapeHtml(k)}</strong><span>${escapeHtml(String(v))}</span></div>`,
        )
        .join('');

      return `
      <article style="background:#fff;border:1px solid #E8E8E6;border-radius:14px;padding:16px 18px;margin:0 0 14px;">
        <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between;margin-bottom:10px;">
          <div>
            <div style="font-weight:800;font-size:16px;">${escapeHtml(fields.name || 'Unknown')}</div>
            <div style="color:#666;font-size:13px;">${escapeHtml(String(row.formName || ''))} · ${when}</div>
          </div>
          ${badge}
        </div>
        ${details}
      </article>`;
    })
    .join('');

  return pageShell(
    'Submissions inbox',
    `
    <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;margin-bottom:18px;">
      <p style="margin:0;color:#555;">Last ${days} days · <strong>${ok}</strong> real · <strong>${spam}</strong> spam</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <a href="?days=${days}&format=csv" style="padding:10px 14px;border-radius:999px;background:#0E0E10;color:#fff;text-decoration:none;font-weight:700;font-size:13px;">Download CSV</a>
        <form method="POST" style="margin:0;">
          <input type="hidden" name="action" value="logout" />
          <button type="submit" style="padding:10px 14px;border-radius:999px;border:1px solid #ccc;background:#fff;font-weight:700;font-size:13px;cursor:pointer;">Log out</button>
        </form>
      </div>
    </div>
    <p style="margin:0 0 16px;font-size:13px;color:#777;">
      Also try <a href="?days=7">7 days</a> · <a href="?days=30">30 days</a> · <a href="?days=90">90 days</a>
    </p>
    ${cards || '<p>No submissions stored yet.</p>'}
  `,
  );
}

/** @param {number} status @param {string} body */
function html(status, body) {
  return {
    statusCode: status,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
    body,
  };
}

/** @param {string} title @param {string} content */
function pageShell(title, content) {
  return `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex,nofollow" />
  <title>${escapeHtml(title)} · A.S Painting</title>
</head>
<body style="margin:0;background:#F7F7F7;color:#0E0E10;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <main style="max-width:860px;margin:0 auto;padding:32px 18px 64px;">
    <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#888;">A.S Painting Contractors</p>
    <h1 style="margin:0 0 18px;font-size:28px;">${escapeHtml(title)}</h1>
    ${content}
  </main>
</body>
</html>`;
}

/** @param {Array<Record<string, any>>} rows */
function toCsv(rows) {
  const headers = ['createdAt', 'status', 'reason', 'formName', 'name', 'email', 'phone', 'message', 'company', 'ip'];
  const lines = [headers.join(',')];
  for (const row of rows) {
    const f = row.fields || {};
    lines.push(
      [
        row.createdAt,
        row.status,
        row.reason,
        row.formName,
        f.name,
        f.email,
        f.phone,
        f.message || f.situation,
        f.company,
        row.ip,
      ]
        .map(csvCell)
        .join(','),
    );
  }
  return lines.join('\n');
}

/** @param {unknown} value */
function csvCell(value) {
  const s = String(value ?? '');
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

/** @param {string} iso */
function formatWhen(iso) {
  try {
    return new Date(iso).toLocaleString('en-GB', {
      timeZone: 'Europe/London',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return String(iso || '');
  }
}
