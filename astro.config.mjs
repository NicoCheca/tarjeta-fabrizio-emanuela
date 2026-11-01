// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  // Publicado en GitHub Pages: https://nicocheca.github.io/tarjeta-fabrizio-emanuela
  // Con dominio propio: poner el dominio en `site`, borrar `base` y crear public/CNAME.
  site: 'https://nicocheca.github.io',
  base: '/tarjeta-fabrizio-emanuela',

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
