/**
 * Datos del evento. Todo lo que cambia de una boda a otra vive acá.
 * Lo que todavía no está confirmado se deja VACÍO: la tarjeta lo oculta o avisa
 * que falta, nunca muestra un dato inventado.
 */
export const event = {
  groom: 'Fabrizio',
  groomFull: 'Fabrizio Dalla Bona',
  bride: 'Emanuela',
  brideFull: 'Emanuela Valentina Istodor',

  /** Día del casamiento (YYYY-MM-DD). */
  date: '2027-08-28',
  /** Horarios en hora de Italia, formato HH:MM. Vacío = sin confirmar. */
  ceremonyTime: '15:00',
  receptionTime: '', // a continuación de la ceremonia, en el mismo lugar
  timeZone: 'Europe/Rome',
  /** Desfase horario de Italia en agosto (CEST). */
  utcOffset: '+02:00',

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

  /** Contactos de WhatsApp para confirmar, con código de país. Lista vacía = la tarjeta avisa que falta. */
  contacts: [
    { name: 'Emanuela', whatsapp: '+39 353 308 7305' },
    { name: 'Fabrizio', whatsapp: '+39 351 945 1955' },
  ],

  /** Fecha límite para confirmar (YYYY-MM-DD). Vacío = no se menciona. */
  rsvpDeadline: '',

  /** Playlist colaborativa (Spotify). Vacío = se sugieren canciones por WhatsApp. */
  playlistUrl: '',

  /** Datos para regalos. IBAN vacío = la tarjeta de regalos no se muestra. */
  gift: {
    iban: '',
    holder: '',
  },

  /**
   * URL pública del sitio. Es la única fuente: astro.config toma de acá `site` y `base`.
   * Con dominio propio: 'https://ejemplo.com' y crear public/CNAME.
   */
  site: 'https://nicocheca.github.io/tarjeta-fabrizio-emanuela',
} as const;

export type Locale = 'it' | 'es' | 'ro';
export const locales: Locale[] = ['it', 'es', 'ro'];
export const defaultLocale: Locale = 'it';

/* ---- Derivados ---- */

/** Hay hora confirmada para la ceremonia. */
export const hasTime = Boolean(event.ceremonyTime);

const nextDay = (ymd: string) => {
  const d = new Date(`${ymd}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10);
};

/** Inicio del evento. Sin hora confirmada, la medianoche del día (para la cuenta regresiva). */
export const startISO = `${event.date}T${event.ceremonyTime || '00:00'}:00${event.utcOffset}`;
/** Fin del evento: la madrugada siguiente. */
export const endISO = `${nextDay(event.date)}T${hasTime ? '02:00' : '00:00'}:00${event.utcOffset}`;
/** Día siguiente, para eventos de día completo en el calendario. */
export const dateEnd = nextDay(event.date);
