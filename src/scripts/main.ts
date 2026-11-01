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

/* ---------- Contador ---------- */
const cd = document.querySelector<HTMLElement>('[data-countdown]');
if (cd) {
  const target = new Date(cd.dataset.target ?? '').getTime();
  const msg = document.querySelector<HTMLElement>('[data-countdown-msg]');
  const num = (k: string) => cd.querySelector<HTMLElement>(`[data-cd="${k}"]`);
  const pad = (n: number) => String(n).padStart(2, '0');

  const tick = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      cd.hidden = true;
      if (msg) {
        const sameDay = diff > -24 * 3600 * 1000;
        msg.textContent = sameDay ? (cd.dataset.today ?? '') : (cd.dataset.past ?? '');
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

/* ---------- Agendar (.ics o Google Calendar en Android) ---------- */
document.querySelectorAll<HTMLButtonElement>('[data-ics]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const d = btn.dataset;
    if (/android/i.test(navigator.userAgent) && d.icsGcal) {
      window.open(d.icsGcal, '_blank', 'noopener');
      return;
    }
    const fmt = (iso: string) => new Date(iso).toISOString().replace(/[-:]|\.\d{3}/g, '');
    const esc = (s = '') => s.replace(/\\/g, '\\\\').replace(/[,;]/g, (m) => `\\${m}`);
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Fabrizio & Emanuela//Matrimonio//IT',
      'BEGIN:VEVENT',
      `UID:${fmt(d.icsStart ?? '')}-matrimonio@fabrizio-emanuela`,
      `DTSTAMP:${fmt(new Date().toISOString())}`,
      `DTSTART:${fmt(d.icsStart ?? '')}`,
      `DTEND:${fmt(d.icsEnd ?? '')}`,
      `SUMMARY:${esc(d.icsTitle)}`,
      `LOCATION:${esc(d.icsLocation)}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');
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
