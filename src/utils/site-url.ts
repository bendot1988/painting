/** Production origin — must match astro.config site and Netlify domain */
export const SITE_ORIGIN = 'https://www.as-painting.co.uk';

/** Default Open Graph / Twitter card image (1200×630) */
export const OG_IMAGE_PATH = '/images/brand/og-card.jpg';

/**
 * Normalise a pathname to the live URL format: trailing slash on all paths except
 * root. Skips paths that look like files (contain a dot in the last segment).
 */
export function normalizeTrailingSlash(pathname: string): string {
  const path = pathname.split('?')[0].split('#')[0];
  if (path === '/' || path === '') return '/';
  const lastSegment = path.split('/').filter(Boolean).pop() ?? '';
  if (lastSegment.includes('.')) return path;
  return path.endsWith('/') ? path : `${path}/`;
}

/** Absolute canonical / sitemap URL for a pathname */
export function absoluteUrl(pathname: string): string {
  return `${SITE_ORIGIN}${normalizeTrailingSlash(pathname)}`;
}
