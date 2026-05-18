import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.as-painting.co.uk',
  server: { port: 9821, host: true },
  preview: { port: 9821, host: true },
  devToolbar: { enabled: false }
});
