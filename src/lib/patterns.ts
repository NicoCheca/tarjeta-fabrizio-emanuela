/**
 * Patrones decorativos como SVG embebido en CSS.
 * Referencias: azulejo de mayólica vietrese (azul cobalto sobre blanco, estrella
 * central y abanicos en las esquinas), rayas Riviera y textura de papel de algodón.
 */

const BLUE = '#1E4E8C';
const WHITE = '#FFFDF8';
const LEMON = '#F4D23C';

const uri = (svg: string) => `url("data:image/svg+xml,${encodeURIComponent(svg.replace(/\s+/g, ' ').trim())}")`;

/** Azulejo 64x64: estrella de ocho puntas con centro limón y cuartos de círculo en las esquinas. */
export const majolica = uri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" fill="${WHITE}"/>
  <g fill="${BLUE}">
    <path d="M0 0h14a14 14 0 0 1-14 14z"/>
    <path d="M64 0v14a14 14 0 0 1-14-14z"/>
    <path d="M0 64v-14a14 14 0 0 1 14 14z"/>
    <path d="M64 64h-14a14 14 0 0 1 14-14z"/>
  </g>
  <g fill="none" stroke="${WHITE}" stroke-width="1.6">
    <path d="M0 8a8 8 0 0 0 8-8M56 0a8 8 0 0 0 8 8M0 56a8 8 0 0 1 8 8M64 56a8 8 0 0 0-8 8"/>
  </g>
  <g fill="${BLUE}">
    <path d="M32 10l4 16 16 6-16 6-4 16-4-16-16-6 16-6z"/>
    <path d="M32 18l2.4 11.6L46 32l-11.6 2.4L32 46l-2.4-11.6L18 32l11.6-2.4z" fill="${WHITE}"/>
    <path d="M32 24l1.6 6.4L40 32l-6.4 1.6L32 40l-1.6-6.4L24 32l6.4-1.6z"/>
  </g>
  <circle cx="32" cy="32" r="3" fill="${LEMON}"/>
  <g fill="${BLUE}">
    <circle cx="32" cy="4" r="1.6"/><circle cx="32" cy="60" r="1.6"/>
    <circle cx="4" cy="32" r="1.6"/><circle cx="60" cy="32" r="1.6"/>
  </g>
  <rect x="0.5" y="0.5" width="63" height="63" fill="none" stroke="${BLUE}" stroke-width="1"/>
</svg>`);

/** Rayas Riviera azul y blanco, verticales. */
export const stripes = `linear-gradient(90deg, ${BLUE} 0 50%, ${WHITE} 50% 100%)`;

/** Textura de papel: ruido fractal muy tenue, se tiñe con mix-blend-mode. */
export const paper = uri(`
<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240">
  <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
  <feColorMatrix values="0 0 0 0 0.35 0 0 0 0 0.3 0 0 0 0 0.22 0 0 0 0.35 0"/></filter>
  <rect width="240" height="240" filter="url(#n)"/>
</svg>`);
