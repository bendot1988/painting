import { defineConfig } from 'astro/config';

export default defineConfig({
  /** Must match Netlify primary domain to avoid www ↔ apex redirect loops */
  site: 'https://as-painting.co.uk',
  trailingSlash: 'always',
  server: { port: 9821, host: true },
  preview: { port: 9821, host: true },
  devToolbar: { enabled: false }
});
