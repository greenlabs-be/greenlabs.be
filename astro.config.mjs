// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://greenlabs.be',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'nl'],
    routing: { prefixDefaultLocale: false },
  },
});
