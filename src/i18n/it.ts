export const it = {
  tag: 'it-IT',
  meta: {
    title: 'Fabrizio & Emanuela · 28 agosto 2027',
    description:
      'Ci sposiamo! Sabato 28 agosto 2027 al Boutique Hotel Municipio 1815, Valdobbiadene. Tutte le informazioni e la conferma.',
  },
  lang: { label: 'Lingua', it: 'Italiano', es: 'Español', ro: 'Română' },
  nav: { event: 'Il giorno', story: 'Noi', info: 'Info', rsvp: 'Conferma' },
  hero: {
    cta: 'Conferma la presenza',
    ctaMap: 'Come arrivare',
    kicker: 'Ci sposiamo',
    place: 'Valdobbiadene, Italia',
    tagline: 'Celebriamo la Dolce Vita',
    scroll: 'Scorri',
    photoAlt: 'Fabrizio ed Emanuela abbracciati in riva al mare',
  },
  countdown: {
    title: 'Manca poco',
    days: 'giorni',
    hours: 'ore',
    minutes: 'minuti',
    seconds: 'secondi',
    today: 'È oggi!',
    past: 'Ci siamo sposati!',
  },
  event: {
    title: 'Il grande giorno',
    when: 'Quando',
    where: 'Dove',
    ceremony: 'Cerimonia',
    reception: 'Festa',
    at: 'ore',
    venueNote: 'Tra le colline del Prosecco, patrimonio UNESCO',
    officiants: 'Celebrano il Sindaco di Valdobbiadene e il pastore della chiesa di Emanuela. Cerimonia e festa nello stesso luogo.',
    timeTbd: 'Orari da confermare',
    travel: {
      title: 'Come arrivare',
      text: 'Aeroporti: Treviso (TSF) a circa 40 km, Venezia Marco Polo (VCE) a circa 80 km. In treno fino a Treviso o Conegliano, poi bus o taxi. Valdobbiadene non ha stazione.',
    },
    addToCalendar: 'Salva la data',
    directions: 'Come arrivare',
  },
  schedule: {
    eyebrow: 'Il programma',
    title: 'La giornata',
    later: 'A seguire',
    items: { ceremony: 'Cerimonia', party: 'Festa' },
  },
  faq: {
    eyebrow: 'Domande frequenti',
    title: 'Domande e risposte',
    items: {
      rsvp: ['Come confermo la presenza?', 'Scrivendo su WhatsApp a Emanuela o a Fabrizio con i pulsanti in fondo alla pagina: nome, numero di persone e eventuali intolleranze.'],
      dress: ['Come devo vestirmi?', 'Elegante.'],
      travel: ['Come si arriva?', 'L’aeroporto più comodo è Treviso (TSF), a circa 40 km; Venezia Marco Polo (VCE) è a circa 80 km. In treno fino a Treviso o Conegliano, poi bus o taxi.'],
      lang: ['Il sito è in altre lingue?', 'Sì: italiano, spagnolo e romeno, dal selettore in alto a destra.'],
    },
  },
  story: {
    eyebrow: 'La nostra storia',
    title: 'Noi due',
    text: 'Dalla nostra prima conversazione c’è stato qualcosa di speciale, una sensazione difficile da spiegare, come se ci conoscessimo da sempre. Così è iniziata la nostra storia. E dopo tanti momenti, viaggi e ricordi, alle Maldive è arrivato il «sì» più importante della nostra vita.',
    alts: {
      anillo: "Emanuela mostra l'anello di fidanzamento sorridendo accanto a Fabrizio",
      atardecer: 'Fabrizio ed Emanuela in barca al tramonto',
    },
  },
  info: {
    eyebrow: 'Per gli ospiti',
    title: 'Informazioni utili',
    dress: {
      title: 'Dress code',
      text: 'Elegante.',
    },
    gifts: {
      title: 'Regali',
      text: 'La vostra presenza è il regalo più grande. Se desiderate contribuire al nostro viaggio di nozze:',
      iban: 'IBAN',
      holder: 'Intestato a',
      copy: 'Copia',
      copied: 'Copiato!',
    },
    playlist: {
      title: 'Musica',
      text: 'Quale canzone non può mancare alla festa? Suggeriscila!',
      cta: 'Suggerisci una canzone',
      message: 'Ciao! Una canzone che non può mancare alla festa: ',
      spotifyText: 'La colonna sonora della festa la scriviamo insieme: ascoltate la playlist e aggiungete le vostre canzoni.',
      spotifyCta: 'Apri la playlist su Spotify',
    },
  },
  rsvp: {
    title: 'Conferma la tua presenza',
    text: 'Vi aspettiamo! Confermate entro il {deadline} scrivendoci su WhatsApp.',
    eyebrow: 'Conferma',
    textNoDeadline: 'Vi aspettiamo! Confermate appena potete scrivendoci su WhatsApp.',
    pending: 'A breve vi diremo come confermare la presenza.',
    cta: 'WhatsApp',
    message:
      'Ciao! Confermo la mia presenza al vostro matrimonio del 28 agosto 2027.\nNome e cognome: \nNumero di persone: \nIntolleranze o allergie: ',
  },
  footer: {
    text: 'Con amore, Fabrizio & Emanuela',
    date: '28 · 08 · 2027',
  },
};

export type Dict = typeof it;
