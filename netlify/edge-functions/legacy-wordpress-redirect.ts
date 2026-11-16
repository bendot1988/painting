/**
 * Collapse www/http + old WordPress paths into one 301.
 * Netlify's automatic www → apex redirect would otherwise keep the old path
 * and force a second hop via _redirects. Edge functions run before redirects.
 */
const FINAL: Record<string, string> = {
  "/domestic-painting-decorating": "https://as-painting.co.uk/domestic/",
  "/domestic-painting-decorating/": "https://as-painting.co.uk/domestic/",
  "/comercial-painting-decorating": "https://as-painting.co.uk/commercial/",
  "/comercial-painting-decorating/": "https://as-painting.co.uk/commercial/",
  "/commercial-painting-decorating": "https://as-painting.co.uk/commercial/",
  "/commercial-painting-decorating/": "https://as-painting.co.uk/commercial/",
  "/gallery": "https://as-painting.co.uk/work/",
  "/gallery/": "https://as-painting.co.uk/work/",
  "/platering": "https://as-painting.co.uk/plastering/",
  "/platering/": "https://as-painting.co.uk/plastering/",
  "/contact-us": "https://as-painting.co.uk/contact/",
  "/contact-us/": "https://as-painting.co.uk/contact/",
  "/address": "https://as-painting.co.uk/contact/",
  "/address/": "https://as-painting.co.uk/contact/",
  "/home-1": "https://as-painting.co.uk/",
  "/home-1/": "https://as-painting.co.uk/",
  "/our-services": "https://as-painting.co.uk/",
  "/our-services/": "https://as-painting.co.uk/",
  "/sample-page": "https://as-painting.co.uk/",
  "/sample-page/": "https://as-painting.co.uk/",
  "/feed": "https://as-painting.co.uk/",
  "/feed/": "https://as-painting.co.uk/",
  "/comments/feed": "https://as-painting.co.uk/",
  "/comments/feed/": "https://as-painting.co.uk/",
};

export default async (request: Request) => {
  const url = new URL(request.url);
  const dest = FINAL[url.pathname];
  if (!dest) return;

  // Already on the final apex URL — let the page (or apex _redirects) handle it.
  if (url.origin === "https://as-painting.co.uk" && url.pathname === new URL(dest).pathname) {
    return;
  }

  return Response.redirect(dest, 301);
};

export const config = {
  path: Object.keys(FINAL),
};
