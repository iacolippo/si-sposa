import Image from 'next/image';
import RSVPForm from './components/RSVPForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Compact */}
      <nav className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md shadow-sm z-50 border-b border-crema/50">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex justify-center gap-6 text-xs font-medium tracking-wide uppercase">
            <a href="#home" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">Home</a>
            <a href="#about" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">Info</a>
            <a href="#rsvp" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">RSVP</a>
            <a href="#honeymoon" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">Viaggio</a>
            <a href="#trieste" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">Trieste</a>
            <a href="#contacts" className="text-bordeaux/70 hover:text-bordeaux transition-colors py-1">Contatti</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Compact */}
      <section id="home" className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-crema via-white to-crema relative overflow-hidden pt-14">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-24 h-24 border border-bordeaux/20 rounded-full"></div>
          <div className="absolute bottom-32 right-20 w-20 h-20 border border-bordeaux/20 rounded-full"></div>
        </div>

        <div className="text-center px-6 relative z-10">
          {/* Small Ornament */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-bordeaux/50"></div>
            <svg className="w-3 h-3 text-bordeaux/40" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 3.5L11.5 8h4.5l-3.5 2.5 1.5 4.5L10 12.5 6.5 15 8 10.5 4.5 8H9z"/>
            </svg>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-bordeaux/50"></div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-bordeaux mb-3 tracking-tight">
            Ines <span className="text-3xl md:text-4xl lg:text-5xl font-light mx-1">&</span> Iacopo
          </h1>

          <div className="flex items-center justify-center gap-3 my-5">
            <div className="h-px w-16 bg-bordeaux/40"></div>
            <div className="w-1 h-1 bg-bordeaux/40 rounded-full rotate-45"></div>
            <div className="h-px w-16 bg-bordeaux/40"></div>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 mb-2 font-light">26 Settembre 2026</p>
          <p className="text-sm text-gray-500 tracking-widest uppercase">Trieste · Capriva del Friuli</p>
        </div>
      </section>

      {/* Combined: Chi Siamo + Matrimonio Side by Side */}
      <section id="about" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Chi Siamo - Left */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-serif text-bordeaux mb-3">Chi Siamo</h2>
                <div className="w-12 h-px bg-bordeaux/30"></div>
              </div>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-gray-700">
                  Due anime che si sono incontrate, due cuori che battono all'unisono,
                  due vite che diventano una. Siamo Ines e Iacopo, e siamo felicissimi
                  di condividere con voi il giorno più importante della nostra vita.
                </p>
                <p className="text-sm leading-relaxed text-gray-600 italic border-l-2 border-bordeaux/20 pl-4">
                  Dalla prima volta che ci siamo visti, abbiamo capito che eravamo fatti
                  l'uno per l'altra. Ora, non vediamo l'ora di celebrare il nostro amore
                  circondati dalle persone che più amiamo.
                </p>
              </div>
            </div>

            {/* Il Matrimonio - Right */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-serif text-bordeaux mb-3">Il Matrimonio</h2>
                <div className="w-12 h-px bg-bordeaux/30"></div>
              </div>

              <div className="space-y-4">
                {/* Ceremony */}
                <div className="bg-gradient-to-br from-crema/30 to-white rounded-sm border border-crema/50 overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/san-bartolomeo.jpg"
                      alt="Chiesa di San Bartolomeo, Barcola"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bordeaux/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-white">
                      <p className="font-serif text-base leading-tight">Chiesa di San Bartolomeo</p>
                      <p className="text-xs opacity-80">Barcola, Trieste</p>
                    </div>
                  </div>
                  <div className="p-4 flex items-start gap-3">
                    <div className="text-2xl opacity-80">⛪</div>
                    <div className="flex-1">
                      <h3 className="text-base font-serif text-bordeaux mb-1">Cerimonia</h3>
                      <div className="space-y-1.5 text-sm text-gray-700 mt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-bordeaux/60 text-xs">🕒</span>
                          <span className="font-medium">Ore 15:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reception */}
                <div className="bg-gradient-to-br from-crema/30 to-white rounded-sm border border-crema/50 overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/il-castello-di-spessa.jpg"
                      alt="Castello di Spessa, Capriva del Friuli"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bordeaux/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-white">
                      <p className="font-serif text-base leading-tight">Castello di Spessa</p>
                      <p className="text-xs opacity-80">Capriva del Friuli (GO)</p>
                    </div>
                  </div>
                  <div className="p-4 flex items-start gap-3">
                    <div className="text-2xl opacity-80">🏰</div>
                    <div className="flex-1">
                      <h3 className="text-base font-serif text-bordeaux mb-1">Ricevimento</h3>
                      <div className="space-y-1.5 text-sm text-gray-700 mt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-bordeaux/60 text-xs">🕒</span>
                          <span className="font-medium">A seguire la cerimonia</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-12 bg-gradient-to-b from-crema/30 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-bordeaux mb-3">RSVP</h2>
            <div className="w-12 h-px bg-bordeaux/30 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm">
              Conferma la tua presenza entro il <strong className="text-bordeaux">30 Giugno 2026</strong>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* Navetta - Left */}
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
                      <p className="text-gray-600">— da definire —</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-bordeaux/60 mt-0.5">🕒</span>
                    <div>
                      <p className="font-medium text-gray-800">Orario andata</p>
                      <p className="text-gray-600">— da definire —</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-bordeaux/60 mt-0.5">🌙</span>
                    <div>
                      <p className="font-medium text-gray-800">Orario ritorno</p>
                      <p className="text-gray-600">Prima corsa: circa mezzanotte</p>
                      <p className="text-gray-600">Seconda corsa: circa le 2:00</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-500 italic pt-2 border-t border-gray-100">
                  Se hai bisogno della navetta, seleziona &quot;Sì&quot; nel form RSVP.
                </p>
              </div>
            </div>

            {/* RSVP Form - Right */}
            <div>
              <RSVPForm />
            </div>

          </div>
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
            <div className="bg-gradient-to-br from-crema/30 to-white p-8 rounded-sm border border-crema/50">
              <div className="text-center mb-5">
                <div className="text-4xl mb-3 opacity-90">🏝️</div>
                <h3 className="text-xl font-serif text-bordeaux mb-2">Messico - Yucatán</h3>
                <div className="w-10 h-px bg-bordeaux/20 mx-auto mb-4"></div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed text-center">
                Partiremo per un'avventura indimenticabile nella splendida penisola dello Yucatán,
                tra spiagge paradisiache, rovine Maya e cenotes cristallini.
              </p>
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
              <div className="bg-white p-5 rounded-sm border border-bordeaux/10">
                <p className="font-mono text-xs text-gray-800 text-center break-all mb-1">
                  <strong className="text-bordeaux text-sm">IBAN</strong><br/>
                  <span className="text-sm">IT00X0000000000000000000000</span>
                </p>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Intestato a: Ines e Iacopo
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
                "La vita ghe me voglio<br/>e a Barcola su uno scoglio"
              </p>
              <div className="w-10 h-px bg-bordeaux/20 mx-auto mt-4"></div>
            </div>

            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-gray-700 text-center">
                Prima di ripartire, godetevi una giornata rilassante a Trieste.
                Passeggiate lungo il molo, sedetevi su uno scoglio a Barcola, e lasciatevi
                abbracciare dalla Bora e dal profumo del mare.
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
                  <a href="mailto:ines@example.com" className="hover:text-crema transition-colors inline-block border-b border-white/20 hover:border-crema pb-0.5">
                    ines@example.com
                  </a>
                </p>
                <p>
                  <a href="mailto:iacopo@example.com" className="hover:text-crema transition-colors inline-block border-b border-white/20 hover:border-crema pb-0.5">
                    iacopo@example.com
                  </a>
                </p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-serif mb-4">Wedding Planner</h3>
              <p className="mb-2 text-sm opacity-90">Stefano Pilotto</p>
              <p className="text-sm">
                <a href="mailto:stefano.pilotto@example.com" className="hover:text-crema transition-colors inline-block border-b border-white/20 hover:border-crema pb-0.5">
                  stefano.pilotto@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="text-center">
          <p className="text-xs text-gray-400">© 2026 Ines & Iacopo · Con amore da Trieste</p>
        </div>
      </footer>
    </div>
  );
}
