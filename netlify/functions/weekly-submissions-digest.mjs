import { Resend } from 'resend';
import { escapeHtml } from './lib/quote-email-template.mjs';
import { initBlobs, listSubmissions } from './lib/submissions-store.mjs';

/** Schedule is set in netlify.toml (Mondays 08:00 UTC) */
export const handler = async (event) => {
  initBlobs(event);

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.DIGEST_TO?.trim() || process.env.RESEND_TO;
  if (!apiKey || !from || !to) {
    console.error('Missing RESEND_API_KEY / RESEND_FROM / RESEND_TO for digest');
    return { statusCode: 500, body: 'Email not configured' };
  }

  const sinceMs = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const rows = await listSubmissions({ sinceMs, limit: 1000 });
  const okRows = rows.filter((r) => r.status === 'ok');
  const spamRows = rows.filter((r) => r.status === 'spam');

  const weekLabel = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const html = buildDigestHtml({ okRows, spamRows, weekLabel });
  const bcc = process.env.RESEND_BCC?.trim();
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    ...(bcc ? { bcc: [bcc] } : {}),
    subject: `Weekly form digest — ${okRows.length} real, ${spamRows.length} spam (${weekLabel})`,
    html,
  });

  if (error) {
    console.error('Digest send failed:', error);
    return { statusCode: 500, body: JSON.stringify(error) };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, real: okRows.length, spam: spamRows.length }),
  };
};

/**
 * @param {{
 *   okRows: Array<Record<string, any>>,
 *   spamRows: Array<Record<string, any>>,
 *   weekLabel: string,
 * }} args
 */
function buildDigestHtml({ okRows, spamRows, weekLabel }) {
  const inboxUrl = 'https://as-painting.co.uk/.netlify/functions/submissions-inbox';

  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:680px;margin:0 auto;padding:28px 20px;color:#0E0E10;">
    <h1 style="margin:0 0 8px;font-size:22px;">Weekly form digest</h1>
    <p style="margin:0 0 20px;color:#555;font-size:15px;line-height:1.5;">
      Everything submitted through as-painting.co.uk in the last 7 days (week ending ${escapeHtml(weekLabel)}),
      including messages we blocked as spam so nothing gets lost.
    </p>
    <p style="margin:0 0 24px;padding:12px 14px;background:#F7F7F7;border-radius:10px;font-size:14px;">
      <strong>${okRows.length}</strong> delivered to inbox ·
      <strong>${spamRows.length}</strong> blocked as spam ·
      <a href="${inboxUrl}" style="color:#D4262C;font-weight:600;">Open submissions inbox</a>
    </p>

    <h2 style="margin:28px 0 12px;font-size:17px;">Real enquiries</h2>
    ${okRows.length ? renderTable(okRows) : '<p style="color:#777;">No real enquiries this week.</p>'}

    <h2 style="margin:32px 0 12px;font-size:17px;">Blocked spam (for review)</h2>
    ${spamRows.length ? renderTable(spamRows, true) : '<p style="color:#777;">No spam caught this week.</p>'}

    <p style="margin:28px 0 0;font-size:12px;color:#999;">
      Spam is stored but not emailed live. If something looks like a real lead in the spam list, reply from the inbox page details.
    </p>
  </div>`;
}

/**
 * @param {Array<Record<string, any>>} rows
 * @param {boolean} [showReason]
 */
function renderTable(rows, showReason = false) {
  const items = rows
    .map((row) => {
      const fields = row.fields || {};
      const when = formatWhen(row.createdAt);
      const name = escapeHtml(fields.name || '—');
      const email = escapeHtml(fields.email || '—');
      const phone = escapeHtml(fields.phone || '—');
      const form = escapeHtml(String(row.formName || 'quote'));
      const message = escapeHtml(String(fields.message || fields.situation || '').slice(0, 280));
      const reason = showReason ? escapeHtml(String(row.reason || '')) : '';

      return `
      <tr>
        <td style="padding:10px 8px;border-top:1px solid #E8E8E6;vertical-align:top;font-size:13px;white-space:nowrap;">${when}</td>
        <td style="padding:10px 8px;border-top:1px solid #E8E8E6;vertical-align:top;font-size:13px;">
          <strong>${name}</strong><br/>
          <span style="color:#555;">${email}</span><br/>
          <span style="color:#555;">${phone}</span><br/>
          <span style="color:#888;">${form}</span>
          ${reason ? `<br/><span style="color:#A01B21;">${reason}</span>` : ''}
        </td>
        <td style="padding:10px 8px;border-top:1px solid #E8E8E6;vertical-align:top;font-size:13px;color:#444;">${message || '—'}</td>
      </tr>`;
    })
    .join('');

  return `
  <table style="width:100%;border-collapse:collapse;">
    <thead>
      <tr>
        <th align="left" style="padding:8px;font-size:12px;color:#888;text-transform:uppercase;">When</th>
        <th align="left" style="padding:8px;font-size:12px;color:#888;text-transform:uppercase;">Contact</th>
        <th align="left" style="padding:8px;font-size:12px;color:#888;text-transform:uppercase;">Message</th>
      </tr>
    </thead>
    <tbody>${items}</tbody>
  </table>`;
}

/** @param {string} iso */
function formatWhen(iso) {
  try {
    return new Date(iso).toLocaleString('en-GB', {
      timeZone: 'Europe/London',
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return escapeHtml(String(iso || ''));
  }
}
