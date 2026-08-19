'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RSVPForm from './components/RSVPForm';

type Lang = 'it' | 'fr';

const translations = {
  it: {
    nav: { home: 'Home', info: 'Info', programma: 'Programma', rsvp: 'RSVP', viaggio: 'Viaggio', trieste: 'Trieste', galleria: 'Galleria', contatti: 'Contatti' },
    hero: {
      date: '26 Settembre 2026',
      text: 'Nel giorno in cui il nostro amore si fa promessa, desideriamo avervi accanto assieme alla nostra piccola Sophie.',
    },
    matrimonio: {
      title: 'Il Matrimonio', cerimonia: 'Cerimonia', ora: 'Ore 15:00', maps: 'Vedi su Maps 🗺️',
      ricevimento: 'Ricevimento', aSeguire: 'A seguire la cerimonia',
    },
    programma: {
      title: 'Programma',
      items: [
        { time: '15:00', icon: '🚶', label: 'Arrivo degli invitati', sub: 'Chiesa di San Bartolomeo, Barcola' },
        { time: '15:15', icon: '⛪', label: 'Inizio cerimonia', sub: 'Rito religioso' },
        { time: '17:00', icon: '🚌', label: 'Partenza navetta', sub: 'Verso il Castello di Spessa' },
        { time: '17:45', icon: '🥂', label: 'Aperitivo', sub: 'Giardino del castello' },
        { time: '18:00', icon: '💍', label: 'Arrivo degli sposi', sub: 'Finalmente marito e moglie!' },
        { time: '20:00', icon: '🍽️', label: 'Cena', sub: 'Salone del castello' },
        { time: '23:00', icon: '🎶', label: 'Festa', sub: 'Musica & balli' },
      ],
    },
    navetta: {
      title: 'Servizio Navetta',
      desc: 'Per agevolare gli spostamenti, organizziamo un servizio navetta da Trieste fino al Castello di Spessa e ritorno.',
      partenza: 'Partenza', partenzaDesc: 'Piazzale di fronte alla Chiesa di San Bartolomeo a Barcola',
      andataLabel: 'Orario andata', andataTime: '~ 17:00',
      ritornoLabel: 'Orario ritorno', primaCorsa: 'Prima corsa: 00:00', ultimaCorsa: 'Ultima corsa: ~2:00 (fine ricevimento)',
      note: 'Se hai bisogno della navetta, seleziona "Sì" nel form RSVP.',
    },
    alloggio: {
      title: 'Dove Dormire',
      text1: 'Per chi viene da fuori, ci piacerebbe occuparci del vostro alloggio per la notte del matrimonio.',
      text2pre: 'Se avete esigenze particolari, non esitate a', link: 'contattarci',
    },
    rsvp: { deadline: 'Conferma la tua presenza entro il', date: '30 Luglio 2026' },
    honeymoon: {
      title: 'Viaggio di Nozze', destination: 'Messico - Yucatán', caption: 'Il nostro viaggio di nozze',
      desc: "Partiremo per un'avventura indimenticabile nella splendida penisola dello Yucatán, tra spiagge paradisiache, rovine Maya e cenotes cristallini.",
      contribuire: 'Vuoi contribuire?',
      contribuireDesc: 'Il regalo più grande è la vostra presenza, ma se desiderate contribuire al nostro viaggio di nozze:',
      beneficiario: 'Beneficiario', bicLabel: 'BIC banca corrispondente:',
    },
    trieste: {
      title: 'Domenica a Trieste',
      desc: "Prima di ripartire, godetevi una giornata rilassante a Trieste. Passeggiate lungo il molo, sedetevi su uno scoglio a Barcola, godetevi un ottimo pranzo di pesce, e lasciatevi abbracciare dal profumo del mare.",
      barcola: 'La spiaggia più amata', tommaseo: 'Il caffè storico',
      piazza: "Una delle piazze più belle d'Europa", castello: 'Un gioiello sul mare',
    },
    contacts: { title: 'Contatti', sposi: 'Gli Sposi' },
    footer: '© 2026 Ines & Iacopo · Con amore da Parigi',
  },
  fr: {
    nav: { home: 'Accueil', info: 'Infos', programma: 'Programme', rsvp: 'RSVP', viaggio: 'Voyage', trieste: 'Trieste', galleria: 'Galerie', contatti: 'Contacts' },
    hero: {
      date: '26 Septembre 2026',
      text: "Le jour où notre amour devient promesse, nous souhaitons vous avoir à nos côtés avec notre petite Sophie.",
    },
    matrimonio: {
      title: 'Le Mariage', cerimonia: 'Cérémonie', ora: '15h00', maps: 'Voir sur Maps 🗺️',
      ricevimento: 'Réception', aSeguire: 'À la suite de la cérémonie',
    },
    programma: {
      title: 'Programme',
      items: [
        { time: '15:00', icon: '🚶', label: "Arrivée des invités", sub: "Église Saint-Barthélemy, Barcola" },
        { time: '15:15', icon: '⛪', label: 'Début de la cérémonie', sub: 'Cérémonie religieuse' },
        { time: '17:00', icon: '🚌', label: 'Départ navette', sub: 'Vers le Château de Spessa' },
        { time: '17:45', icon: '🥂', label: 'Apéritif', sub: 'Jardin du château' },
        { time: '18:00', icon: '💍', label: 'Arrivée des mariés', sub: 'Enfin mari et femme !' },
        { time: '20:00', icon: '🍽️', label: 'Dîner', sub: 'Salon du château' },
        { time: '23:00', icon: '🎶', label: 'Fête', sub: 'Musique & danses' },
      ],
    },
    navetta: {
      title: 'Service Navette',
      desc: "Pour faciliter les déplacements, nous organisons un service de navette de Trieste jusqu'au Château de Spessa et retour.",
      partenza: 'Départ', partenzaDesc: "Parvis en face de l'Église Saint-Barthélemy à Barcola",
      andataLabel: 'Aller', andataTime: '~ 17h00',
      ritornoLabel: 'Retour', primaCorsa: 'Premier départ : 00h00', ultimaCorsa: 'Dernier départ : ~2h00 (fin de réception)',
      note: 'Si vous avez besoin de la navette, sélectionnez « Oui » dans le formulaire RSVP.',
    },
    alloggio: {
      title: 'Hébergement',
      text1: 'Pour ceux qui viennent de loin, nous aimerions nous occuper de votre hébergement pour la nuit du mariage.',
      text2pre: "Si vous avez des besoins particuliers, n'hésitez pas à", link: 'nous contacter',
    },
    rsvp: { deadline: 'Confirmez votre présence avant le', date: '30 juillet 2026' },
    honeymoon: {
      title: 'Voyage de Noces', destination: 'Mexique - Yucatán', caption: 'Notre voyage de noces',
      desc: "Nous partirons pour une aventure inoubliable dans la splendide péninsule du Yucatán, entre plages paradisiaques, ruines Maya et cénotes cristallins.",
      contribuire: 'Vous souhaitez contribuer ?',
      contribuireDesc: 'Le plus beau cadeau est votre présence, mais si vous souhaitez contribuer à notre voyage de noces :',
      beneficiario: 'Bénéficiaire', bicLabel: 'BIC banque correspondante :',
    },
    trieste: {
      title: 'Dimanche à Trieste',
      desc: "Avant de repartir, profitez d'une journée relaxante à Trieste. Promenez-vous le long du quai, asseyez-vous sur un rocher à Barcola, savourez un excellent déjeuner de poisson, et laissez-vous envelopper par le parfum de la mer.",
      barcola: 'La plage préférée', tommaseo: 'Le café historique',
      piazza: "L'une des plus belles places d'Europe", castello: 'Un joyau sur la mer',
    },
    contacts: { title: 'Contacts', sposi: 'Les Mariés' },
    footer: '© 2026 Ines & Iacopo · Avec amour depuis Paris',
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>('it');
  const tx = translations[lang];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Compact */}
      <nav className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md shadow-sm z-50 border-b border-crema/50">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex justify-center gap-2 md:gap-6 text-[10px] md:text-xs font-medium tracking-wide uppercase flex-wrap">
            <a href="#home" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">{tx.nav.home}</a>
            <a href="#about" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">{tx.nav.info}</a>
            <a href="#programma" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">{tx.nav.programma}</a>
            <a href="#rsvp" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">{tx.nav.rsvp}</a>
            <a href="#honeymoon" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">{tx.nav.viaggio}</a>
            <a href="#trieste" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">{tx.nav.trieste}</a>
            <Link href="/gallery" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">{tx.nav.galleria}</Link>
            <a href="#contacts" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">{tx.nav.contatti}</a>
          </div>
        </div>
      </nav>

      {/* Floating language toggle */}
      <button
        onClick={() => setLang(lang === 'it' ? 'fr' : 'it')}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 bg-white/95 backdrop-blur-md hover:bg-white border border-bordeaux/20 rounded-full px-3 py-2 shadow-lg transition-all"
        aria-label="Cambia lingua"
      >
        <span className={`text-base leading-none transition-all duration-200 ${lang === 'it' ? 'opacity-100 scale-110' : 'opacity-40 scale-90'}`}>🇮🇹</span>
        <span className="relative w-7 h-3.5 rounded-full bg-bordeaux/20 shrink-0">
          <span className={`absolute top-0.5 w-2.5 h-2.5 rounded-full bg-bordeaux transition-all duration-200 ${lang === 'it' ? 'left-0.5' : 'left-4'}`} />
        </span>
        <span className={`text-base leading-none transition-all duration-200 ${lang === 'fr' ? 'opacity-100 scale-110' : 'opacity-40 scale-90'}`}>🇫🇷</span>
      </button>

      {/* Hero Section - Two columns */}
      <section id="home" className="min-h-[85vh] bg-gradient-to-br from-crema via-white to-crema relative overflow-hidden pt-14">
        <div className="max-w-6xl mx-auto px-6 h-full min-h-[calc(85vh-3.5rem)] grid lg:grid-cols-2 gap-0 lg:gap-0 items-center">

          {/* Left: text + chi siamo */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-0 order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-16 h-px bg-gradient-to-l from-bordeaux/50 to-transparent lg:hidden"></div>
              <svg className="w-3 h-3 text-bordeaux/40" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5L11.5 8h4.5l-3.5 2.5 1.5 4.5L10 12.5 6.5 15 8 10.5 4.5 8H9z"/>
              </svg>
              <div className="w-16 h-px bg-gradient-to-r from-bordeaux/50 to-transparent"></div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-script text-bordeaux mb-3">
              Ines <span className="text-3xl md:text-4xl lg:text-5xl mx-1">&</span> Iacopo
            </h1>

            <div className="flex items-center gap-3 my-5">
              <div className="h-px w-16 bg-gradient-to-l from-bordeaux/40 to-transparent lg:hidden"></div>
              <div className="w-1 h-1 bg-bordeaux/40 rounded-full rotate-45"></div>
              <div className="h-px w-16 bg-gradient-to-r from-bordeaux/40 to-transparent"></div>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 mb-2 font-light">{tx.hero.date}</p>
            <p className="text-sm text-gray-500 tracking-widest uppercase">Trieste</p>

            <div className="mt-8 pt-8 border-t border-bordeaux/10 space-y-4">
              <p className="text-base leading-relaxed text-gray-700">
                {tx.hero.text}
              </p>
            </div>
          </div>

          {/* Right: logo */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <Image
              src="/images/logo bordeaux.svg"
              alt="Logo"
              width={1000}
              height={1000}
              className="w-full max-w-[1000px] scale-125 lg:scale-130"
              priority
            />
          </div>

        </div>
      </section>

      {/* Photo Roll Carrousel */}
      <section className="py-10 bg-gradient-to-b from-crema/40 to-crema/10 overflow-hidden">
        <div className="relative">
          {/* Film strip top edge */}
          <div className="absolute top-0 left-0 right-0 h-px bg-bordeaux/10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-bordeaux/10"></div>

          {/* Scrolling strip */}
          <div className="flex animate-scroll hover:[animation-play-state:paused]">
            {[
              { src: '/images/carrousel/carrousel01.jpg', rotate: '-2deg' },
              { src: '/images/carrousel/carrousel02.jpeg', rotate: '1.5deg' },
              { src: '/images/carrousel/carrousel03.jpeg', rotate: '-1deg' },
              { src: '/images/carrousel/carrousel04.jpeg', rotate: '2deg' },
              { src: '/images/carrousel/carrousel05.jpeg', rotate: '-1.5deg' },
              { src: '/images/carrousel/carrousel06.jpeg', rotate: '1deg' },
              { src: '/images/carrousel/carrousel07.jpeg', rotate: '-2.5deg' },
              { src: '/images/carrousel/carrousel08.jpeg', rotate: '1.8deg' },
            ].concat([
              { src: '/images/carrousel/carrousel01.jpg', rotate: '-2deg' },
              { src: '/images/carrousel/carrousel02.jpeg', rotate: '1.5deg' },
              { src: '/images/carrousel/carrousel03.jpeg', rotate: '-1deg' },
              { src: '/images/carrousel/carrousel04.jpeg', rotate: '2deg' },
              { src: '/images/carrousel/carrousel05.jpeg', rotate: '-1.5deg' },
              { src: '/images/carrousel/carrousel06.jpeg', rotate: '1deg' },
              { src: '/images/carrousel/carrousel07.jpeg', rotate: '-2.5deg' },
              { src: '/images/carrousel/carrousel08.jpeg', rotate: '1.8deg' },
            ]).map((photo, i) => (
              <div
                key={i}
                className="shrink-0 mx-3 my-4"
                style={{ transform: `rotate(${photo.rotate})` }}
              >
                <div className="bg-white p-2 pb-8 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-sm">
                  <div className="relative w-[70vw] md:w-[28vw] aspect-[3/4] overflow-hidden">
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="224px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Il Matrimonio */}
      <section id="about" className="py-12 bg-gradient-to-b from-crema/20 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-bordeaux mb-3">{tx.matrimonio.title}</h2>
            <div className="w-12 h-px bg-bordeaux/30"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 max-w-3xl mx-auto">
            {/* Ceremony */}
            <div className="bg-gradient-to-br from-crema/30 to-white rounded-sm border border-crema/50 overflow-hidden">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/chiesa-di-barcola.jpg"
                  alt="Chiesa di San Bartolomeo, Barcola"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 flex items-start gap-3">
                <div className="text-2xl opacity-80">⛪</div>
                <div className="flex-1">
                  <h3 className="text-base font-serif text-bordeaux mb-1">{tx.matrimonio.cerimonia}</h3>
                  <div className="space-y-1.5 text-sm text-gray-700 mt-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-bordeaux/60 text-xs">🕒</span>
                        <span className="font-medium">{tx.matrimonio.ora}</span>
                      </div>
                      <a
                        href="https://maps.google.com/?q=Chiesa+di+San+Bartolomeo,+Barcola,+Trieste"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-medium text-gray-700 hover:text-bordeaux transition-colors"
                        title="Apri in Google Maps"
                      >{tx.matrimonio.maps}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reception */}
            <div className="bg-gradient-to-br from-crema/30 to-white rounded-sm border border-crema/50 overflow-hidden">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/castello-di-spessa.jpeg"
                  alt="Castello di Spessa, Capriva del Friuli"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 flex items-start gap-3">
                <div className="text-2xl opacity-80">🏰</div>
                <div className="flex-1">
                  <h3 className="text-base font-serif text-bordeaux mb-1">{tx.matrimonio.ricevimento}</h3>
                  <div className="space-y-1.5 text-sm text-gray-700 mt-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-bordeaux/60 text-xs">🕒</span>
                        <span className="font-medium">{tx.matrimonio.aSeguire}</span>
                      </div>
                      <a
                        href="https://maps.google.com/?q=Castello+di+Spessa,+Capriva+del+Friuli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-medium text-gray-700 hover:text-bordeaux transition-colors"
                        title="Apri in Google Maps"
                      >{tx.matrimonio.maps}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programma + Navetta Section */}
      <section id="programma" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Timeline inside cornice */}
            <div className="relative max-w-md mx-auto">
              {/* Frame image - sets the container size via natural aspect ratio */}
              <img
                src="/images/CORNICE.svg"
                alt=""
                className="w-full h-auto block pointer-events-none"
                style={{ filter: 'brightness(0) saturate(100%) invert(14%) sepia(53%) saturate(2083%) hue-rotate(327deg) brightness(82%) contrast(96%)' }}
              />
              {/* Content positioned inside the frame */}
              <div className="absolute top-[12%] bottom-[10%] left-[14%] right-[14%] flex flex-col items-center justify-center overflow-hidden text-[clamp(10px,2.8vw,15px)]">
                <div className="text-center mb-[0.5em]">
                  <h2 className="text-[1.8em] font-serif text-bordeaux mb-[0.2em]">{tx.programma.title}</h2>
                  <div className="w-10 h-px bg-bordeaux/30 mx-auto"></div>
                </div>

                <div className="relative w-full flex justify-center">
                  <div className="relative">
                  <div className="absolute left-[4.05em] top-0 bottom-0 w-px bg-bordeaux/15"></div>
                  <div className="space-y-[0.8em]">
                    {tx.programma.items.map(({ time, icon, label, sub }) => (
                      <div key={time} className="flex items-center gap-[0.3em]">
                        <div className="w-[3em] text-right shrink-0">
                          <span className="text-[0.8em] font-mono text-bordeaux/70 font-semibold">{time}</span>
                        </div>
                        <div className="relative flex items-center gap-[0.3em]">
                          <div className="w-[1.5em] h-[1.5em] rounded-full bg-crema border border-bordeaux/20 flex items-center justify-center text-[0.8em] shrink-0 z-10">
                            {icon}
                          </div>
                          <div>
                            <p className="text-[1em] font-medium text-gray-800 leading-tight">{label}</p>
                            <p className="text-[0.8em] text-gray-500 leading-tight">{sub}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Navetta + Alloggio */}
            <div className="space-y-6">
              {/* Navetta */}
              <div className="bg-gradient-to-br from-crema/30 to-white p-8 rounded-sm border border-crema/50">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-2xl">🚌</span>
                  <h3 className="text-xl font-serif text-bordeaux">{tx.navetta.title}</h3>
                </div>
                <div className="w-10 h-px bg-bordeaux/20 mb-5"></div>

                <div className="space-y-4 text-sm text-gray-700">
                  <p className="leading-relaxed">{tx.navetta.desc}</p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <span className="text-bordeaux/60 mt-0.5">📍</span>
                      <div>
                        <p className="font-medium text-gray-800">{tx.navetta.partenza}</p>
                        <p className="text-gray-600">{tx.navetta.partenzaDesc}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-bordeaux/60 mt-0.5">🕒</span>
                      <div>
                        <p className="font-medium text-gray-800">{tx.navetta.andataLabel}</p>
                        <p className="text-gray-600">{tx.navetta.andataTime}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-bordeaux/60 mt-0.5">🌙</span>
                      <div>
                        <p className="font-medium text-gray-800">{tx.navetta.ritornoLabel}</p>
                        <p className="text-gray-600">{tx.navetta.primaCorsa}</p>
                        <p className="text-gray-600">{tx.navetta.ultimaCorsa}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 italic pt-2 border-t border-gray-100">
                    {tx.navetta.note}
                  </p>
                </div>
              </div>

              {/* Alloggio */}
              <div className="bg-gradient-to-br from-crema/30 to-white p-8 rounded-sm border border-crema/50">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-2xl">🏨</span>
                  <h3 className="text-xl font-serif text-bordeaux">{tx.alloggio.title}</h3>
                </div>
                <div className="w-10 h-px bg-bordeaux/20 mb-5"></div>

                <div className="space-y-4 text-sm text-gray-700">
                  <p className="leading-relaxed">{tx.alloggio.text1}</p>
                  <p className="leading-relaxed">
                    {tx.alloggio.text2pre} <a href="#contacts" className="text-bordeaux underline underline-offset-2 hover:text-bordeaux/70 transition-colors font-medium">{tx.alloggio.link}</a>.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="pt-16 pb-12 md:py-20 bg-gradient-to-br from-bordeaux to-bordeaux/90 text-white relative overflow-hidden">
        {/* Corner ornaments */}
        <Image src="/images/CORIC3.svg" alt="" width={400} height={400} className="absolute -top-12 -left-6 w-[200px] md:w-[400px] pointer-events-none" style={{ filter: 'invert(1)', opacity: 0.8 }} />
        <Image src="/images/CORIC3.svg" alt="" width={400} height={400} className="absolute -top-12 -right-6 w-[200px] md:w-[400px] -scale-x-100 pointer-events-none" style={{ filter: 'invert(1)', opacity: 0.8 }} />
        <Image src="/images/CORIC3.svg" alt="" width={400} height={400} className="hidden md:block absolute bottom-0 -left-6 w-[400px] -scale-y-100 pointer-events-none" style={{ filter: 'invert(1)', opacity: 0.8 }} />
        <Image src="/images/CORIC3.svg" alt="" width={400} height={400} className="hidden md:block absolute bottom-0 -right-6 w-[400px] -scale-x-100 -scale-y-100 pointer-events-none" style={{ filter: 'invert(1)', opacity: 0.8 }} />
        <div className="max-w-2xl mx-auto px-8 md:px-6 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-serif text-crema mb-3">RSVP</h2>
            <div className="w-12 h-px bg-white/40 mx-auto mb-4"></div>
            <p className="text-white/80 text-sm">
              {tx.rsvp.deadline} <strong className="text-crema whitespace-nowrap">{tx.rsvp.date}</strong>
            </p>
          </div>
          <RSVPForm lang={lang} />
        </div>
      </section>

      {/* Honeymoon Section - Side by Side */}
      <section id="honeymoon" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-bordeaux mb-3">{tx.honeymoon.title}</h2>
            <div className="w-12 h-px bg-bordeaux/30 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">

            {/* Viaggio Info - Left */}
            <div className="bg-gradient-to-br from-crema/30 to-white rounded-sm border border-crema/50 overflow-hidden">
              <div className="relative h-86 w-full">
                <Image
                  src="/images/yucatan.jpg"
                  alt="Yucatán, Messico"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white [text-shadow:0_2px_8px_rgba(0,0,0,1),0_1px_3px_rgba(0,0,0,1)]">
                  <p className="font-serif text-base leading-tight font-semibold">{tx.honeymoon.destination}</p>
                  <p className="text-xs">{tx.honeymoon.caption}</p>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-sm text-gray-700 leading-relaxed">{tx.honeymoon.desc}</p>
              </div>
            </div>

            {/* IBAN - Right */}
            <div className="bg-gradient-to-br from-crema/30 to-white p-8 rounded-sm border border-crema/50">
              <h4 className="text-base font-medium text-bordeaux mb-3 text-center">
                {tx.honeymoon.contribuire}
              </h4>
              <p className="text-gray-600 text-xs mb-5 text-center">
                {tx.honeymoon.contribuireDesc}
              </p>
              <div className="bg-white p-5 rounded-sm border border-bordeaux/10 space-y-3">
                <p className="font-mono text-xs text-gray-800 text-center break-all">
                  <strong className="text-bordeaux text-sm">{tx.honeymoon.beneficiario}</strong><br/>
                  <span className="text-sm">Iacopo Poli & Ines Pilotto</span>
                </p>
                <p className="font-mono text-xs text-gray-800 text-center break-all">
                  <strong className="text-bordeaux text-sm">IBAN</strong><br/>
                  <span className="text-sm">FR76 2823 3000 0144 8058 6060 520</span>
                </p>
                <p className="font-mono text-xs text-gray-800 text-center break-all">
                  <strong className="text-bordeaux text-sm">BIC/SWIFT</strong><br/>
                  <span className="text-sm">REVOFRP2</span>
                </p>
                <p className="text-xs text-gray-500 text-center">
                  Revolut Bank UAB · 10 avenue Kléber, 75116, Paris
                </p>
                <p className="text-xs text-gray-500 text-center">
                  {tx.honeymoon.bicLabel} CHASDEFX
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sunday in Trieste Section - Compact */}
      <section id="trieste" className="py-12 bg-gradient-to-b from-crema/30 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-bordeaux mb-3">
              {tx.trieste.title}
            </h2>
            <div className="w-12 h-px bg-bordeaux/30 mx-auto"></div>
          </div>

          <div className="bg-white p-8 rounded-sm border border-bordeaux/10 shadow-sm">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4 opacity-90">☀️</div>
              <p className="text-lg md:text-xl font-serif text-bordeaux italic mb-2 leading-relaxed">
                &ldquo;La vita che voio<br/>xe a barcola su un scoio&rdquo;
              </p>
              <div className="w-10 h-px bg-bordeaux/20 mx-auto mt-4"></div>
            </div>

            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-gray-700 text-center">
                {tx.trieste.desc}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-gray-200/50">
                <div className="text-center p-3">
                  <span className="text-xl mb-1 block">✨</span>
                  <p className="font-medium text-gray-800 text-xs">Barcola</p>
                  <p className="text-xs text-gray-600 mt-0.5">{tx.trieste.barcola}</p>
                </div>
                <div className="text-center p-3">
                  <span className="text-xl mb-1 block">☕</span>
                  <p className="font-medium text-gray-800 text-xs">Caffè Tommaseo</p>
                  <p className="text-xs text-gray-600 mt-0.5">{tx.trieste.tommaseo}</p>
                </div>
                <div className="text-center p-3">
                  <span className="text-xl mb-1 block">🏛️</span>
                  <p className="font-medium text-gray-800 text-xs">Piazza Unità</p>
                  <p className="text-xs text-gray-600 mt-0.5">{tx.trieste.piazza}</p>
                </div>
                <div className="text-center p-3">
                  <span className="text-xl mb-1 block">🏰</span>
                  <p className="font-medium text-gray-800 text-xs">Castello di Miramare</p>
                  <p className="text-xs text-gray-600 mt-0.5">{tx.trieste.castello}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section - Compact */}
      <section id="contacts" className="py-14 bg-gradient-to-br from-bordeaux to-bordeaux/90 text-white relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-32 h-32 border border-white/30 rounded-full"></div>
          <div className="absolute bottom-10 left-20 w-24 h-24 border border-white/30 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif mb-3">{tx.contacts.title}</h2>
            <div className="w-12 h-px bg-white/40 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-serif mb-4">{tx.contacts.sposi}</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <a href="mailto:inespilotto94@gmail.com" className="hover:text-crema transition-colors inline-block border-b border-white/20 hover:border-crema pb-0.5">
                    inespilotto94@gmail.com
                  </a>
                </p>
                <p>
                  <a href="mailto:iacopo.poli93@gmail.com" className="hover:text-crema transition-colors inline-block border-b border-white/20 hover:border-crema pb-0.5">
                    iacopo.poli93@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-serif mb-4">Wedding Planner</h3>
              <p className="mb-2 text-sm opacity-90">Stefano Pilotto</p>
              <p className="text-sm">
                <a href="mailto:stefano.pilotto@example.com" className="hover:text-crema transition-colors inline-block border-b border-white/20 hover:border-crema pb-0.5">
                  stefano.pilotto@mib.edu
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="text-center">
          <p className="text-xs text-gray-400">{tx.footer}</p>
        </div>
      </footer>
    </div>
  );
}
