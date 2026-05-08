// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ai.gamaniaocc.org',

  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW', 'en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'zh-TW',
        locales: {
          'zh-TW': 'zh-Hant-TW',
          en: 'en',
          ja: 'ja-JP',
        },
      },
    }),
  ],
});
