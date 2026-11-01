/**
 * Datos del evento. Todo lo que cambia de una boda a otra vive acá.
 * Los valores marcados con TODO hay que completarlos antes de publicar.
 */
export const event = {
  groom: 'Fabrizio',
  groomFull: 'Fabrizio Dalla Bona',
  bride: 'Emanuela',
  brideFull: 'Emanuela Valentina Istodor',

  /** Fecha y hora de inicio en hora de Italia (CEST en agosto). */
  dateISO: '2027-08-28T17:00:00+02:00', // TODO: confirmar hora de la ceremonia
  endISO: '2027-08-29T02:00:00+02:00',
  timeZone: 'Europe/Rome',
  ceremonyTime: '17:00', // TODO: confirmar
  receptionTime: '19:00', // TODO: confirmar

  venue: {
    name: 'Boutique Hotel Municipio 1815',
    street: 'Borgo Berti 6',
    town: '31049 San Pietro di Barbozza',
    region: 'Valdobbiadene (TV), Italia',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('Boutique Hotel Municipio 1815, Borgo Berti 6, 31049 San Pietro di Barbozza TV, Italia'),
    website: 'https://www.instagram.com/municipio1815/',
  },

  /** Número de WhatsApp para confirmar asistencia, con código de país y sin espacios. */
  whatsapp: '+39000000000', // TODO: número de Fabrizio o Emanuela

  /** Fecha límite para confirmar. */
  rsvpDeadlineISO: '2027-06-30',

  /** Playlist colaborativa (Spotify) o vacío para pedir canciones por WhatsApp. */
  playlistUrl: '', // TODO: opcional

  /** Datos para regalos. Dejar vacío lo que no se quiera mostrar. */
  gift: {
    iban: 'IT00 X000 0000 0000 0000 0000 000', // TODO
    holder: 'Fabrizio Dalla Bona e Emanuela Istodor', // TODO
  },

  /** Dominio final del sitio, para los metadatos. */
  site: 'https://nicocheca.github.io/tarjeta-fabrizio-emanuela', // TODO: dominio propio si lo compran
} as const;

export type Locale = 'it' | 'es' | 'ro';
export const locales: Locale[] = ['it', 'es', 'ro'];
export const defaultLocale: Locale = 'it';
