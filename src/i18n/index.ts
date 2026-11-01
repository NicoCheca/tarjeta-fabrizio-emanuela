import { it, type Dict } from './it';
import { es } from './es';
import { ro } from './ro';
import { event, type Locale } from '../config';

const dicts: Record<Locale, Dict> = { it, es, ro };

export function getDict(locale: Locale): Dict {
  return dicts[locale];
}

/** "sabato 28 agosto 2027" según el idioma. */
export function formatEventDate(locale: Locale): string {
  const s = new Intl.DateTimeFormat(dicts[locale].tag, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: event.timeZone,
  }).format(new Date(event.dateISO));
  // Solo la inicial en mayúscula: "Sabato 28 agosto 2027".
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function formatDeadline(locale: Locale): string {
  return new Intl.DateTimeFormat(dicts[locale].tag, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: event.timeZone,
  }).format(new Date(event.rsvpDeadlineISO + 'T12:00:00'));
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${event.whatsapp.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
}
