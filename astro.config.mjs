import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.as-painting.co.uk',
  server: { port: 4321, host: true },
  devToolbar: { enabled: false }
});
