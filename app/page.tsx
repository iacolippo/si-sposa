import Image from 'next/image';
import RSVPForm from './components/RSVPForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Compact */}
      <nav className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md shadow-sm z-50 border-b border-crema/50">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex justify-center gap-2 md:gap-6 text-[10px] md:text-xs font-medium tracking-wide uppercase flex-wrap">
            <a href="#home" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">Home</a>
            <a href="#about" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">Info</a>
            <a href="#programma" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">Programma</a>
            <a href="#rsvp" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">RSVP</a>
            <a href="#honeymoon" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">Viaggio</a>
            <a href="#trieste" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">Trieste</a>
            <a href="#contacts" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">Contatti</a>
          </div>
        </div>
      </nav>

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

            <p className="text-xl md:text-2xl text-gray-700 mb-2 font-light">26 Settembre 2026</p>
            <p className="text-sm text-gray-500 tracking-widest uppercase">Trieste · Capriva del Friuli</p>

            <div className="mt-8 pt-8 border-t border-bordeaux/10 space-y-4">
              <p className="text-base leading-relaxed text-gray-700">
                Nel giorno in cui il nostro amore si fa promessa, desideriamo avervi accanto assieme alla nostra piccola Sophie.
              </p>
            </div>
          </div>

          {/* Right: logo */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={1000}
              height={1000}
              className="w-full max-w-[1000px] scale-125 lg:scale-130"
              style={{ filter: 'invert(12%) sepia(40%) saturate(2000%) hue-rotate(325deg) brightness(45%) contrast(120%)' }}
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
            <h2 className="text-2xl md:text-3xl font-serif text-bordeaux mb-3">Il Matrimonio</h2>
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
                  <h3 className="text-base font-serif text-bordeaux mb-1">Cerimonia</h3>
                  <div className="space-y-1.5 text-sm text-gray-700 mt-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-bordeaux/60 text-xs">🕒</span>
                        <span className="font-medium">Ore 15:00</span>
                      </div>
                      <a
                        href="https://maps.google.com/?q=Chiesa+di+San+Bartolomeo,+Barcola,+Trieste"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-medium text-gray-700 hover:text-bordeaux transition-colors"
                        title="Apri in Google Maps"
                      >Vedi su Maps 🗺️</a>
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
                  <h3 className="text-base font-serif text-bordeaux mb-1">Ricevimento</h3>
                  <div className="space-y-1.5 text-sm text-gray-700 mt-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-bordeaux/60 text-xs">🕒</span>
                        <span className="font-medium">A seguire la cerimonia</span>
                      </div>
                      <a
                        href="https://maps.google.com/?q=Castello+di+Spessa,+Capriva+del+Friuli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-medium text-gray-700 hover:text-bordeaux transition-colors"
                        title="Apri in Google Maps"
                      >Vedi su Maps 🗺️</a>
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
            <div className="relative">
              {/* Frame image - sets the container size via natural aspect ratio */}
              <img
                src="/images/CORNICE.png"
                alt=""
                className="w-full h-auto block pointer-events-none"
                style={{ filter: 'invert(12%) sepia(40%) saturate(2000%) hue-rotate(325deg) brightness(45%) contrast(120%)' }}
              />
              {/* Content positioned inside the frame */}
              <div className="absolute top-[18%] bottom-[16%] left-[20%] right-[20%] flex flex-col items-center justify-start overflow-hidden">
                <div className="text-center mb-2">
                  <h2 className="text-xl md:text-2xl font-serif text-bordeaux mb-1">Programma</h2>
                  <div className="w-10 h-px bg-bordeaux/30 mx-auto"></div>
                </div>

                <div className="relative w-full">
                  <div className="absolute left-[3rem] top-0 bottom-0 w-px bg-bordeaux/15"></div>
                  <div className="space-y-3.5">
                    {[
                      { time: '15:00', icon: '🚶', label: 'Arrivo degli invitati', sub: 'Chiesa di San Bartolomeo, Barcola' },
                      { time: '15:15', icon: '⛪', label: 'Inizio cerimonia', sub: 'Rito religioso' },
                      { time: '17:00', icon: '🚌', label: 'Partenza navetta', sub: 'Verso il Castello di Spessa' },
                      { time: '17:45', icon: '🥂', label: 'Aperitivo', sub: 'Giardino del castello' },
                      { time: '18:00', icon: '💍', label: 'Arrivo degli sposi', sub: 'Finalmente marito e moglie!' },
                      { time: '20:00', icon: '🍽️', label: 'Cena', sub: 'Salone del castello' },
                      { time: '23:00', icon: '🎶', label: 'Festa', sub: 'Musica & balli' },
                    ].map(({ time, icon, label, sub }) => (
                      <div key={time} className="flex items-center gap-1.5">
                        <div className="w-10 text-right shrink-0">
                          <span className="text-[10px] font-mono text-bordeaux/70 font-semibold">{time}</span>
                        </div>
                        <div className="relative flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-full bg-crema border border-bordeaux/20 flex items-center justify-center text-[10px] shrink-0 z-10">
                            {icon}
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-800 leading-tight">{label}</p>
                            <p className="text-[10px] text-gray-500 leading-tight">{sub}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navetta - Right (no cornice) */}
            <div className="bg-gradient-to-br from-crema/30 to-white p-8 rounded-sm border border-crema/50">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">🚌</span>
                <h3 className="text-xl font-serif text-bordeaux">Servizio Navetta</h3>
              </div>
              <div className="w-10 h-px bg-bordeaux/20 mb-5"></div>

              <div className="space-y-4 text-sm text-gray-700">
                <p className="leading-relaxed">
                  Per agevolare gli spostamenti, organizziamo un servizio navetta
                  da Trieste fino al Castello di Spessa e ritorno.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <span className="text-bordeaux/60 mt-0.5">📍</span>
                    <div>
                      <p className="font-medium text-gray-800">Partenza</p>
                      <p className="text-gray-600">Piazzale di fronte alla Chiesa di San Bartolomeo a Barcola</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-bordeaux/60 mt-0.5">🕒</span>
                    <div>
                      <p className="font-medium text-gray-800">Orario andata</p>
                      <p className="text-gray-600">~ 17:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-bordeaux/60 mt-0.5">🌙</span>
                    <div>
                      <p className="font-medium text-gray-800">Orario ritorno</p>
                      <p className="text-gray-600">Prima corsa: 00:00</p>
                      <p className="text-gray-600">Seconda corsa: 2:00</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-500 italic pt-2 border-t border-gray-100">
                  Se hai bisogno della navetta, seleziona &quot;Sì&quot; nel form RSVP.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="pt-32 pb-12 md:py-20 bg-gradient-to-br from-bordeaux to-bordeaux/90 text-white relative overflow-hidden">
        {/* Corner ornaments */}
        <Image src="/images/corner.png" alt="" width={500} height={500} className="absolute top-0 left-0 pointer-events-none" style={{ filter: 'invert(1) brightness(100)', opacity: 0.8 }} />
        <Image src="/images/corner.png" alt="" width={500} height={500} className="absolute top-0 right-0 -scale-x-100 pointer-events-none" style={{ filter: 'invert(1) brightness(100)', opacity: 0.8 }} />
        <Image src="/images/corner.png" alt="" width={500} height={500} className="hidden md:block absolute bottom-0 left-0 -scale-y-100 pointer-events-none" style={{ filter: 'invert(1) brightness(100)', opacity: 0.8 }} />
        <Image src="/images/corner.png" alt="" width={500} height={500} className="hidden md:block absolute bottom-0 right-0 -scale-x-100 -scale-y-100 pointer-events-none" style={{ filter: 'invert(1) brightness(100)', opacity: 0.8 }} />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-serif text-crema mb-3">RSVP</h2>
            <div className="w-12 h-px bg-white/40 mx-auto mb-4"></div>
            <p className="text-white/80 text-sm">
              Conferma la tua presenza entro il <strong className="text-crema">30 Luglio 2026</strong>
            </p>
          </div>
          <RSVPForm />
        </div>
      </section>

      {/* Honeymoon Section - Side by Side */}
      <section id="honeymoon" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-bordeaux mb-3">Viaggio di Nozze</h2>
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
                  <p className="font-serif text-base leading-tight font-semibold">Messico - Yucatán</p>
                  <p className="text-xs">Il nostro viaggio di nozze</p>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Partiremo per un'avventura indimenticabile nella splendida penisola dello Yucatán,
                  tra spiagge paradisiache, rovine Maya e cenotes cristallini.
                </p>
              </div>
            </div>

            {/* IBAN - Right */}
            <div className="bg-gradient-to-br from-crema/30 to-white p-8 rounded-sm border border-crema/50">
              <h4 className="text-base font-medium text-bordeaux mb-3 text-center">
                Vuoi contribuire?
              </h4>
              <p className="text-gray-600 text-xs mb-5 text-center">
                Il regalo più grande è la vostra presenza, ma se desiderate contribuire
                al nostro viaggio di nozze:
              </p>
              <div className="bg-white p-5 rounded-sm border border-bordeaux/10 space-y-3">
                <p className="font-mono text-xs text-gray-800 text-center break-all">
                  <strong className="text-bordeaux text-sm">Beneficiario</strong><br/>
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
                  BIC banca corrispondente: CHASDEFX
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
              Domenica a Trieste
            </h2>
            <div className="w-12 h-px bg-bordeaux/30 mx-auto"></div>
          </div>

          <div className="bg-white p-8 rounded-sm border border-bordeaux/10 shadow-sm">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4 opacity-90">☀️</div>
              <p className="text-lg md:text-xl font-serif text-bordeaux italic mb-2 leading-relaxed">
                "La vita che voio<br/>xe a barcola su un scoio"
              </p>
              <div className="w-10 h-px bg-bordeaux/20 mx-auto mt-4"></div>
            </div>

            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-gray-700 text-center">
                Prima di ripartire, godetevi una giornata rilassante a Trieste.
                Passeggiate lungo il molo, sedetevi su uno scoglio a Barcola, 
                godetevi un ottimo pranzo di pesce,e lasciatevi
                abbracciare dal profumo del mare.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-gray-200/50">
                <div className="text-center p-3">
                  <span className="text-xl mb-1 block">✨</span>
                  <p className="font-medium text-gray-800 text-xs">Barcola</p>
                  <p className="text-xs text-gray-600 mt-0.5">La spiaggia più amata</p>
                </div>
                <div className="text-center p-3">
                  <span className="text-xl mb-1 block">☕</span>
                  <p className="font-medium text-gray-800 text-xs">Caffè Tommaseo</p>
                  <p className="text-xs text-gray-600 mt-0.5">Il caffè storico</p>
                </div>
                <div className="text-center p-3">
                  <span className="text-xl mb-1 block">🏛️</span>
                  <p className="font-medium text-gray-800 text-xs">Piazza Unità</p>
                  <p className="text-xs text-gray-600 mt-0.5">Una delle piazze più belle d'Europa</p>
                </div>
                <div className="text-center p-3">
                  <span className="text-xl mb-1 block">🏰</span>
                  <p className="font-medium text-gray-800 text-xs">Castello di Miramare</p>
                  <p className="text-xs text-gray-600 mt-0.5">Un gioiello sul mare</p>
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
            <h2 className="text-2xl md:text-3xl font-serif mb-3">Contatti</h2>
            <div className="w-12 h-px bg-white/40 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-serif mb-4">Gli Sposi</h3>
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
          <p className="text-xs text-gray-400">© 2026 Ines & Iacopo · Con amore da Parigi</p>
        </div>
      </footer>
    </div>
  );
}
