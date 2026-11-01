# Tarjeta de casamiento · Fabrizio & Emanuela

Invitación web en tres idiomas (italiano, español, rumano) con estética Dolce Vita.
Hecha con [Astro](https://astro.build): sale como HTML estático, sin frameworks en el navegador.

- `/` italiano (principal) · `/es/` español · `/ro/` rumano
- La primera vez que alguien entra a `/`, si su navegador está en español o rumano lo lleva a su idioma.

## Editar los datos

Todo lo que cambia está en un solo archivo: `src/config.ts`.
Los valores marcados con `TODO` hay que completarlos antes de publicar:

| Dato | Dónde |
| --- | --- |
| Hora de la ceremonia y de la fiesta | `dateISO`, `ceremonyTime`, `receptionTime` |
| Número de WhatsApp para confirmar | `whatsapp` (con código de país, sin espacios) |
| Fecha límite para confirmar | `rsvpDeadlineISO` |
| IBAN y titular para regalos (vacío = no se muestra) | `gift` |
| Playlist de Spotify (vacío = sugieren por WhatsApp) | `playlistUrl` |
| Dominio final | `site` acá y en `astro.config.mjs` |

Los textos de cada idioma están en `src/i18n/it.ts`, `es.ts` y `ro.ts`.
Las fotos están en `src/assets/photos/`; Astro genera solo las versiones AVIF/WebP en varios tamaños.

## Correr en local

```bash
npm install
npm run dev
```

## Publicar

`npm run build` deja el sitio listo en `dist/`. Sirve cualquier hosting estático.

Para GitHub Pages ya está el workflow en `.github/workflows/deploy.yml`:

1. Subir el repo a GitHub.
2. En *Settings → Pages* elegir **GitHub Actions** como origen.
3. Si el sitio va a vivir en `usuario.github.io/repo`, agregar `base: '/repo'` en `astro.config.mjs`.
   Si va con dominio propio, poner el dominio en `site` y crear `public/CNAME` con el dominio.

## Estructura

```
src/
  config.ts          datos del evento
  i18n/              textos por idioma y helpers de fecha
  layouts/Base.astro head, fuentes, metadatos, hreflang
  components/        Hero, Countdown, EventDetails, Story, Info, Rsvp, Footer, Lemon, LangSwitcher
  scripts/main.ts    contador, agendar (.ics / Google Calendar), copiar IBAN, aparición al scroll
  styles/global.css  paleta, tipografía, botones
  pages/             index.astro (it), es/index.astro, ro/index.astro
```
