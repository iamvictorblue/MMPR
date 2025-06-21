import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function MusicaConcierto() {
  return (
    <>
      <Head>
        <title>Música de Concierto en Puerto Rico | Museo de la Música Puertorriqueña</title>
        <meta name="description" content="Descubre la música de concierto puertorriqueña y la figura legendaria de Antonio Paoli, el primer tenor puertorriqueño de fama internacional." />
        <link rel="icon" href="/images/LOGO MUSEO.png" />
      </Head>

      <div className="relative isolate bg-white">
        <div 
            className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/images/proceres7.png')", opacity: 0.1 }}
        ></div>
        <Nav />
        
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <div className="mb-8">
              <Image
                src="/images/Musica Concierto LOGO (BLACK).svg"
                alt="Música de Concierto Logo"
                width={500}
                height={250}
                className="mx-auto"
              />
            </div>
            <h1 className="ogg-regular text-4xl text-concierto-700 mb-4 lg:text-6xl">
              EN PUERTO RICO
            </h1>
          </div>

          {/* Antonio Paoli Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="ogg-medium text-5xl text-concierto-800 mb-4">ANTONIO PAOLI</h2>
              <div className="w-24 h-1 bg-concierto-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-concierto-50 to-concierto-100 p-8">
                  <p className="plain-regular text-lg text-gray-700 leading-relaxed">
                    La cultura musical puertorriqueña se honra al contar con Antonio Paoli como el primer músico y artista puertorriqueño en alcanzar fama internacional. Nacido en Ponce el 14 de abril de 1871, Paoli se trasladó a España a los 12 años. Más tarde, gracias a la intervención de su hermana Amalia, recibió una formación vocal completa en Italia, reconocida mundialmente como la cuna del Bel Canto.
                  </p>
                </div>

                <div className="bg-concierto-600 text-white p-8">
                  <h3 className="ogg-medium text-2xl mb-4">Logros Internacionales</h3>
                  <p className="text-lg leading-relaxed">
                    Antonio Paoli fue aclamado como "El Rey de los Tenores" y "El Tenor de los Reyes". Su carrera lo llevó a presentarse en los principales teatros de ópera del mundo, incluyendo La Scala de Milán y el Royal Opera House de Londres.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-concierto-500 to-concierto-700 text-white p-8">
                  <h3 className="ogg-medium text-xl mb-4">Ciudades Conquistadas</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Milán - La Scala</li>
                    <li>• Londres - Royal Opera House</li>
                    <li>• París - Opéra Garnier</li>
                    <li>• Buenos Aires - Teatro Colón</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-concierto-600 p-8">
                  <h3 className="ogg-medium text-2xl text-concierto-900 mb-4">Reconocimientos</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-concierto-600 pl-4">
                      <p className="text-lg text-gray-700">
                        En Milán, cuna de la ópera, fue honrado con el título de <strong>"Primo Tenore"</strong>.
                      </p>
                    </div>
                    <div className="border-l-4 border-concierto-600 pl-4">
                      <p className="text-lg text-gray-700">
                        Fue seleccionado para inaugurar el <strong>Teatro Colón de Buenos Aires</strong>, uno de los escenarios más prestigiosos del mundo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-concierto-900 text-white p-12">
            <h2 className="ogg-medium text-3xl mb-8 text-center">Cronología de Antonio Paoli</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-concierto-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">1871</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Nacimiento</h3>
                <p className="text-concierto-200">Nace en Ponce, Puerto Rico</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-concierto-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">1883</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Traslado a España</h3>
                <p className="text-concierto-200">Se traslada a España a los 12 años</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-concierto-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">1890s</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Formación en Italia</h3>
                <p className="text-concierto-200">Recibe formación vocal completa en Italia</p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
} 