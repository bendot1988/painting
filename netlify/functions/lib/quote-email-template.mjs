/** @param {string} value */
export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * @param {{
 *   title: string;
 *   intro: string;
 *   rows: { label: string; value: string }[];
 * }} fields
 */
export function buildGenericFormEmailHtml(fields) {
  const { title, intro, rows } = fields;
  const siteUrl = 'https://as-painting.co.uk';
  const rowsHtml = rows
    .map(
      (row) => `
    <tr>
      <td style="padding:0 0 14px;border-bottom:1px solid #eeece6;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td width="140" valign="top" style="font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#6c6c72;padding-bottom:4px;">${row.label}</td>
            <td valign="top" style="font-size:15px;line-height:1.4;padding-bottom:4px;color:#0e0e10;font-weight:600;">${row.value.replace(/\n/g, '<br />')}</td>
          </tr>
        </table>
      </td>
    </tr>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f3f0;font-family:'Segoe UI',Helvetica,Arial,sans-serif;color:#0e0e10;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f4f3f0;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 6px 24px rgba(14,14,16,0.08);">
          <tr>
            <td style="background-color:#d4262c;padding:28px 32px 24px;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#ffd60a;">Maintenance plans</p>
              <h1 style="margin:0;font-size:22px;line-height:1.25;font-weight:800;color:#ffffff;">${title}</h1>
              <p style="margin:10px 0 0;font-size:14px;line-height:1.45;color:rgba(255,255,255,0.88);">${intro}</p>
            </td>
          </tr>
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#ffd60a 0%,#7ed321 35%,#ec008c 70%,#1f6feb 100%);font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:28px 32px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                ${rowsHtml}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 32px;background-color:#f7f7f7;border-top:1px solid #e8e6e0;">
              <p style="margin:0;font-size:12px;line-height:1.5;color:#6c6c72;">
                Sent from <a href="${siteUrl}/maintenance-plans/" style="color:#d4262c;font-weight:600;text-decoration:none;">A.S Painting maintenance plans</a>.
                Privacy consent: <strong style="color:#0e0e10;">yes</strong>.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * @param {{
 *   name: string;
 *   phone: string;
 *   email: string;
 *   jobLabel: string;
 *   messageHtml: string;
 * }} fields
 */
export function buildQuoteEmailHtml(fields) {
  const { name, phone, email, jobLabel, messageHtml } = fields;
  const siteUrl = 'https://as-painting.co.uk';
  const telHref = phone.replace(/\s+/g, '');

  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <title>New quote request — ${name}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f3f0;font-family:'Segoe UI',Helvetica,Arial,sans-serif;color:#0e0e10;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f4f3f0;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 6px 24px rgba(14,14,16,0.08);">
          <!-- Header -->
          <tr>
            <td style="background-color:#d4262c;padding:28px 32px 24px;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#ffd60a;">Website enquiry</p>
              <h1 style="margin:0;font-size:22px;line-height:1.25;font-weight:800;color:#ffffff;">New quote request</h1>
              <p style="margin:10px 0 0;font-size:14px;line-height:1.45;color:rgba(255,255,255,0.88);">Someone has asked for a free quote via as-painting.co.uk</p>
            </td>
          </tr>
          <!-- Accent bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#ffd60a 0%,#7ed321 35%,#ec008c 70%,#1f6feb 100%);font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:28px 32px 8px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                ${emailRow('Name', name)}
                ${emailRow('Phone', phone, `tel:${telHref}`)}
                ${emailRow('Email', email, `mailto:${email}`)}
                ${emailRow('Job type', jobLabel)}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 28px;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#6c6c72;">Project details</p>
              <div style="padding:16px 18px;background-color:#f7f7f7;border-radius:12px;border-left:4px solid #d4262c;font-size:15px;line-height:1.55;color:#1c1c1f;">
                ${messageHtml || '<em style="color:#6c6c72;">No message provided</em>'}
              </div>
            </td>
          </tr>
          <!-- CTA -->
          <tr>
            <td style="padding:0 32px 28px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="border-radius:10px;background-color:#0e0e10;">
                    <a href="mailto:${email}?subject=Re%3A%20Your%20quote%20request%20%E2%80%94%20A.S%20Painting" style="display:inline-block;padding:14px 22px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">Reply to ${name}</a>
                  </td>
                  <td width="10"></td>
                  <td style="border-radius:10px;border:2px solid #0e0e10;">
                    <a href="tel:${telHref}" style="display:inline-block;padding:12px 20px;font-size:14px;font-weight:700;color:#0e0e10;text-decoration:none;">Call ${phone}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:18px 32px;background-color:#f7f7f7;border-top:1px solid #e8e6e0;">
              <p style="margin:0;font-size:12px;line-height:1.5;color:#6c6c72;">
                Sent from the <a href="${siteUrl}" style="color:#d4262c;font-weight:600;text-decoration:none;">A.S Painting Contractors</a> quote form.
                Privacy consent: <strong style="color:#0e0e10;">yes</strong>.
              </p>
            </td>
          </tr>
        </table>
        <p style="margin:20px 0 0;font-size:11px;color:#9a9890;text-align:center;">A.S Painting Contractors · Leicester · LE19 4DG</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * @param {string} label
 * @param {string} value
 * @param {string} [href]
 */
function emailRow(label, value, href) {
  const valueHtml = href
    ? `<a href="${href}" style="color:#d4262c;font-weight:600;text-decoration:none;">${value}</a>`
    : `<span style="color:#0e0e10;font-weight:600;">${value}</span>`;

  return `
    <tr>
      <td style="padding:0 0 14px;border-bottom:1px solid #eeece6;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td width="110" valign="top" style="font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#6c6c72;padding-bottom:4px;">${label}</td>
            <td valign="top" style="font-size:15px;line-height:1.4;padding-bottom:4px;">${valueHtml}</td>
          </tr>
        </table>
      </td>
    </tr>`;
}
