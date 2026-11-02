// Comportamiento mínimo de la tarjeta: contador, agendar, copiar IBAN,
// recordar idioma y aparición suave de las secciones.

document.documentElement.classList.add('js');

/* ---------- Idioma elegido ---------- */
document.querySelectorAll<HTMLAnchorElement>('[data-lang]').forEach((a) => {
  a.addEventListener('click', () => {
    try {
      localStorage.setItem('lang', a.dataset.lang ?? '');
    } catch {
      /* navegación privada: sin memoria, sin drama */
    }
  });
});

/* ---------- Barra fija de celular: aparece al pasar la portada ---------- */
const dock = document.querySelector<HTMLElement>('[data-dock]');
if (dock) {
  const onScroll = () => dock.classList.toggle('show', window.scrollY > window.innerHeight * 0.7);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- Contador ---------- */
const cd = document.querySelector<HTMLElement>('[data-countdown]');
if (cd) {
  const target = new Date(cd.dataset.target ?? '').getTime();
  const tz = cd.dataset.tz || 'Europe/Rome';
  const eventDay = cd.dataset.date ?? '';
  const msg = document.querySelector<HTMLElement>('[data-countdown-msg]');
  const num = (k: string) => cd.querySelector<HTMLElement>(`[data-cd="${k}"]`);
  const pad = (n: number) => String(n).padStart(2, '0');
  // Día de hoy en la zona horaria del evento, como YYYY-MM-DD
  const todayIn = () => new Intl.DateTimeFormat('en-CA', { timeZone: tz }).format(new Date());

  const tick = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      cd.hidden = true;
      if (msg) {
        msg.textContent = todayIn() === eventDay ? (cd.dataset.today ?? '') : (cd.dataset.past ?? '');
        msg.hidden = false;
      }
      return;
    }
    const s = Math.floor(diff / 1000);
    num('d')!.textContent = String(Math.floor(s / 86400));
    num('h')!.textContent = pad(Math.floor((s % 86400) / 3600));
    num('m')!.textContent = pad(Math.floor((s % 3600) / 60));
    num('s')!.textContent = pad(s % 60);
    setTimeout(tick, 1000 - (Date.now() % 1000));
  };
  tick();
}

/* ---------- Agendar: Google Calendar en Android, .ics en el resto ---------- */
document.querySelectorAll<HTMLButtonElement>('[data-ics]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const d = btn.dataset;
    const ua = navigator.userAgent;
    if (/android/i.test(ua) && d.icsGcal) {
      window.open(d.icsGcal, '_blank', 'noopener');
      return;
    }
    const stamp = (iso: string) => new Date(iso).toISOString().replace(/[-:]|\.\d{3}/g, '');
    const esc = (s = '') => s.replace(/\\/g, '\\\\').replace(/[,;]/g, (m) => `\\${m}`);
    const allDay = d.icsAllday === '1';
    const dates = allDay
      ? [`DTSTART;VALUE=DATE:${d.icsDate?.replace(/-/g, '')}`, `DTEND;VALUE=DATE:${d.icsDateEnd?.replace(/-/g, '')}`]
      : [`DTSTART:${stamp(d.icsStart ?? '')}`, `DTEND:${stamp(d.icsEnd ?? '')}`];
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Fabrizio & Emanuela//Matrimonio//IT',
      'BEGIN:VEVENT',
      `UID:${d.icsDate}-matrimonio@fabrizio-emanuela`,
      `DTSTAMP:${stamp(new Date().toISOString())}`,
      ...dates,
      `SUMMARY:${esc(d.icsTitle)}`,
      `LOCATION:${esc(d.icsLocation)}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    // iOS no descarga blobs de forma fiable: un data: URL abierto directo va a Calendario.
    if (/iPad|iPhone|iPod/i.test(ua)) {
      window.open(`data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`, '_blank');
      return;
    }
    const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }));
    const a = Object.assign(document.createElement('a'), { href: url, download: 'matrimonio-fabrizio-emanuela.ics' });
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
});

/* ---------- Copiar IBAN ---------- */
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  const label = btn.textContent;
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy ?? '');
      btn.textContent = btn.dataset.copied ?? label;
      btn.dataset.done = '';
      setTimeout(() => {
        btn.textContent = label;
        delete btn.dataset.done;
      }, 1800);
    } catch {
      /* sin permiso de portapapeles: el IBAN queda visible para copiarlo a mano */
    }
  });
});

/* ---------- Aparición al hacer scroll ---------- */
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && reveals.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('in'));
}
