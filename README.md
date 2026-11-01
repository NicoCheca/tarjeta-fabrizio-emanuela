# Tarjeta de casamiento · Fabrizio & Emanuela

Invitación web en tres idiomas (italiano, español, rumano) con estética Dolce Vita.
Hecha con [Astro](https://astro.build): sale como HTML estático, sin frameworks en el navegador.

- `/` italiano (principal) · `/es/` español · `/ro/` rumano
- La primera vez que alguien entra a `/`, si su navegador está en español o rumano lo lleva a su idioma.

## Editar los datos

Todo lo que cambia está en un solo archivo: `src/config.ts`.
Lo que todavía no está confirmado se deja **vacío**: la tarjeta lo oculta o avisa que falta,
nunca muestra un dato inventado.

| Dato | Campo | Si está vacío |
| --- | --- | --- |
| Hora de la ceremonia y de la fiesta | `ceremonyTime`, `receptionTime` | Dice "horarios a confirmar" y agenda el día completo |
| Número de WhatsApp para confirmar | `whatsapp` (con código de país) | La sección de confirmación avisa que pronto se informa |
| Fecha límite para confirmar | `rsvpDeadline` | No se menciona |
| IBAN y titular para regalos | `gift` | La tarjeta de regalos no se muestra |
| Playlist de Spotify | `playlistUrl` | Se sugieren canciones por WhatsApp |
| URL pública del sitio | `site` | Es la única fuente: de ahí salen `site` y `base` de Astro |

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
3. Con dominio propio: poner la URL en `site` de `src/config.ts` y crear `public/CNAME` con el dominio.
   Para `usuario.github.io/repo` alcanza con que `site` incluya `/repo`.

## Diseño

Estética Dolce Vita según cómo se trabaja en bodas y papelería italiana:
paleta limón / azul mayólica / oliva / marfil / terracota, azulejo de mayólica
como marco y cinta, ramas de limonero y olivo como bordes, toldos a rayas Riviera,
papel con textura, caligrafía italiana para los acentos y monograma en corona de olivo.
Los patrones son SVG propios en `src/lib/patterns.ts` y las ilustraciones en
`src/components/LemonBranch.astro`, `Olive.astro` y `Monogram.astro`.

Fuentes: guía Dolce Vita 2026 de iliadecreation.fr, guía de invitaciones italianas
de paperlust.co y artículo sobre el tema en dilei.it.

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
