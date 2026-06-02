'use client';

import Image from 'next/image';
import { useState } from 'react';

type Lang = 'it' | 'fr';

const translations = {
  it: {
    nav: { home: 'Home', info: 'Il Matrimonio', viaggio: 'Viaggio' },
    hero: {
      date: '26 Settembre 2026',
      text: 'Nel giorno in cui il nostro amore si fa promessa, desideriamo avervi accanto assieme alla nostra piccola Sophie.',
    },
    matrimonio: {
      title: 'Il Matrimonio', cerimonia: 'Cerimonia', ora: 'Ore 15:00', maps: 'Vedi su Maps 🗺️',
      cerimoniaData: 'Sabato 26 settembre',
      festaData: 'Domenica 27 settembre',
      festaTitolo: 'Ci piacerebbe festeggiare con voi il nostro Matrimonio con un apericena. Vi preghiamo di confermare la vostra presenza con una email al nostro super wedding planner Stefano Pilotto a ',
      festaEmail: 'stefano.pilotto@mib.edu',
      festaOra: 'Ore 18.00',
      festaLuogo: 'Villa Russiz',
      festaIndirizzo: 'Via Russiz 4/6, Capriva del Friuli',
    },
    honeymoon: {
      title: 'Viaggio di Nozze', destination: 'Messico - Yucatán', caption: 'Il nostro viaggio di nozze',
      desc: "Partiremo per un'avventura indimenticabile nella splendida penisola dello Yucatán, tra spiagge paradisiache, rovine Maya e cenotes cristallini.",
      contribuire: 'Vuoi contribuire?',
      contribuireDesc: 'Il regalo più grande è la vostra presenza, ma se desiderate contribuire al nostro viaggio di nozze:',
      beneficiario: 'Beneficiario', bicLabel: 'BIC banca corrispondente:',
    },
    footer: '© 2026 Ines & Iacopo · Con amore da Parigi',
  },
  fr: {
    nav: { home: 'Accueil', info: 'Le Mariage', viaggio: 'Voyage' },
    hero: {
      date: '26 Septembre 2026',
      text: "Le jour où notre amour devient promesse, nous souhaitons vous avoir à nos côtés avec notre petite Sophie.",
    },
    matrimonio: {
      title: 'Le Mariage', cerimonia: 'Cérémonie', ora: '15h00', maps: 'Voir sur Maps 🗺️',
      cerimoniaData: 'Samedi 26 septembre',
      festaData: 'Dimanche 27 septembre',
      festaTitolo: "Nous aimerions célébrer notre mariage avec vous autour d'un apéritif dînatoire. Merci de confirmer votre présence par un email à notre super wedding planner Stefano Pilotto à ",
      festaEmail: 'stefano.pilotto@mib.edu',
      festaOra: '18h00',
      festaLuogo: 'Villa Russiz',
      festaIndirizzo: 'Via Russiz 4/6, Capriva del Friuli',
    },
    honeymoon: {
      title: 'Voyage de Noces', destination: 'Mexique - Yucatán', caption: 'Notre voyage de noces',
      desc: "Nous partirons pour une aventure inoubliable dans la splendide péninsule du Yucatán, entre plages paradisiaques, ruines Maya et cénotes cristallins.",
      contribuire: 'Vous souhaitez contribuer ?',
      contribuireDesc: 'Le plus beau cadeau est votre présence, mais si vous souhaitez contribuer à notre voyage de noces :',
      beneficiario: 'Bénéficiaire', bicLabel: 'BIC banque correspondante :',
    },
    footer: '© 2026 Ines & Iacopo · Avec amour depuis Paris',
  },
};

export default function VillaRussiz() {
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
            <a href="#honeymoon" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">{tx.nav.viaggio}</a>
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

          {/* Left: text */}
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
          {/* Film strip edges */}
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
            {/* Ceremony - church only */}
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
              <div className="p-4">
                <p className="text-lg md:text-xl font-bold text-bordeaux mb-3">{tx.matrimonio.cerimoniaData}</p>
                <div className="flex items-start gap-3">
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
            </div>

            {/* Festeggiamento - Villa Russiz */}
            <div className="bg-gradient-to-br from-crema/30 to-white rounded-sm border border-crema/50 overflow-hidden flex flex-col">
              <div className="p-6 flex flex-col items-center text-center justify-center flex-1 gap-4">
                <p className="text-lg md:text-xl font-bold text-bordeaux">{tx.matrimonio.festaData}</p>
                <div className="text-3xl opacity-80">🥂</div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {tx.matrimonio.festaTitolo}
                </p>
                <a href={`mailto:${tx.matrimonio.festaEmail}`} className="font-sans text-base md:text-lg text-bordeaux underline underline-offset-2 hover:text-bordeaux/70 transition-colors break-all">{tx.matrimonio.festaEmail}</a>
                <div className="w-10 h-px bg-bordeaux/20"></div>
                <div className="space-y-1 text-sm text-gray-700">
                  <p className="flex items-center justify-center gap-2">
                    <span className="text-bordeaux/60 text-xs">🕒</span>
                    <span className="font-medium">{tx.matrimonio.festaOra}</span>
                  </p>
                  <p className="font-medium text-gray-800">{tx.matrimonio.festaLuogo}</p>
                  <p className="text-gray-600">{tx.matrimonio.festaIndirizzo}</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Villa+Russiz,+Via+Russiz+4/6,+Capriva+del+Friuli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-bordeaux transition-colors"
                  title="Apri in Google Maps"
                >{tx.matrimonio.maps}</a>
              </div>
            </div>
          </div>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="text-center">
          <p className="text-xs text-gray-400">{tx.footer}</p>
        </div>
      </footer>
    </div>
  );
}
