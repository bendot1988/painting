/** A submission that hangs longer than this is treated as the form being down. */
const SUBMIT_TIMEOUT_MS = 20000;

const SKIP_KEYS = new Set(['form-name', 'bot-field', 'website', 'form_loaded_at', 'consent']);

const FIELD_LABELS: Record<string, string> = {
  name: 'Name',
  phone: 'Phone',
  email: 'Email',
  company: 'Company',
  property_type: 'Property type',
  properties_count: 'Number of properties',
  units: 'Number of properties',
  preferred_plan: 'Preferred package',
  message: 'Message',
  situation: 'Message',
};

const JOB_LABELS: Record<string, string> = {
  job_commercial: 'Commercial',
  job_domestic: 'Domestic',
  job_not_sure: 'Not sure yet',
};

export function submitSignal(): AbortSignal | undefined {
  return typeof AbortSignal.timeout === 'function' ? AbortSignal.timeout(SUBMIT_TIMEOUT_MS) : undefined;
}

type NetlifyBackup = { name: string; fields: Record<string, unknown> };

/** When the main email failed, post the backup to Netlify Forms from the visitor's browser. Never throws. */
export async function sendNetlifyBackup(backup: NetlifyBackup | undefined) {
  if (!backup?.name || !backup.fields) return;
  try {
    const body = new URLSearchParams({ 'form-name': backup.name });
    for (const [key, value] of Object.entries(backup.fields)) {
      if (value !== undefined && value !== null) body.set(key, String(value));
    }
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
      signal: typeof AbortSignal.timeout === 'function' ? AbortSignal.timeout(5000) : undefined,
    });
  } catch {
    /* the lead is already saved server-side */
  }
}

export function hideFormFallback(form: HTMLFormElement) {
  form.querySelector<HTMLElement>('[data-form-fallback]')?.setAttribute('hidden', '');
}

/** Show the call / WhatsApp box, with the visitor's details pre-filled into the WhatsApp message. */
export function showFormFallback(form: HTMLFormElement, body: URLSearchParams) {
  const box = form.querySelector<HTMLElement>('[data-form-fallback]');
  if (!box) return;

  const whatsapp = box.querySelector<HTMLAnchorElement>('[data-form-fallback-whatsapp]');
  if (whatsapp) {
    const base = whatsapp.href.split('?')[0];
    whatsapp.href = `${base}?text=${encodeURIComponent(whatsappMessage(body))}`;
  }

  box.removeAttribute('hidden');
  box.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function whatsappMessage(body: URLSearchParams): string {
  const lines = ["Hi A.S Painting, I tried to send an enquiry on your website but the form didn't go through. My details:"];
  const jobs: string[] = [];

  for (const [key, raw] of body.entries()) {
    const value = raw.trim();
    if (!value || SKIP_KEYS.has(key) || key.startsWith('lv_')) continue;
    if (JOB_LABELS[key]) {
      jobs.push(JOB_LABELS[key]);
      continue;
    }
    lines.push(`${FIELD_LABELS[key] ?? key.replace(/_/g, ' ')}: ${value}`);
  }
  if (jobs.length) lines.push(`Job type: ${jobs.join(', ')}`);

  return lines.join('\n');
}
