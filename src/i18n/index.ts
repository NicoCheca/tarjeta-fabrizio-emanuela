import { it, type Dict } from './it';
import { es } from './es';
import { ro } from './ro';
import { event, startISO, type Locale } from '../config';

const dicts: Record<Locale, Dict> = { it, es, ro };

export function getDict(locale: Locale): Dict {
  return dicts[locale];
}

/** "Sabato 28 agosto 2027" según el idioma, con solo la inicial en mayúscula. */
export function formatEventDate(locale: Locale): string {
  const s = new Intl.DateTimeFormat(dicts[locale].tag, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: event.timeZone,
  }).format(new Date(startISO));
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Fecha límite de confirmación, o null si no está definida. */
export function formatDeadline(locale: Locale): string | null {
  if (!event.rsvpDeadline) return null;
  return new Intl.DateTimeFormat(dicts[locale].tag, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: event.timeZone,
  }).format(new Date(`${event.rsvpDeadline}T12:00:00${event.utcOffset}`));
}

/** Link a WhatsApp con mensaje precargado, o null si el número está vacío. */
export function whatsappUrl(phone: string, message: string): string | null {
  const digits = phone.replace(/[^\d]/g, '');
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/** Contactos con número cargado, cada uno con su link. */
export function contactLinks(message: string): { name: string; href: string }[] {
  const out: { name: string; href: string }[] = [];
  for (const c of event.contacts) {
    const href = whatsappUrl(c.whatsapp, message);
    if (href) out.push({ name: c.name, href });
  }
  return out;
}
