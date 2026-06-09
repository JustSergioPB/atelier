// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Spanish at the root (no prefix); English under /en (served as en-US).
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: [
      'es',
      { path: 'en', codes: ['en-US', 'en'] },
    ],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
