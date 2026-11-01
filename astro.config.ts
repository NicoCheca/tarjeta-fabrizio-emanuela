import { defineConfig, fontProviders } from 'astro/config';
import { event } from './src/config';

// `site` y `base` salen de la URL pública en src/config.ts, la única fuente.
const publicUrl = new URL(event.site);
const base = publicUrl.pathname.replace(/\/$/, '');

export default defineConfig({
  site: publicUrl.origin,
  ...(base ? { base } : {}),

  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'es', 'ro'],
    routing: { prefixDefaultLocale: false },
  },

  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },

  fonts: [
    {
      name: 'Cormorant Garamond',
      cssVariable: '--font-display',
      provider: fontProviders.google(),
      weights: [400, 500, 600],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      name: 'Italianno',
      cssVariable: '--font-script',
      provider: fontProviders.google(),
      weights: [400],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['cursive'],
    },
    {
      name: 'Jost',
      cssVariable: '--font-body',
      provider: fontProviders.google(),
      weights: [300, 400, 500],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
  ],
});
