import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Salsa() {
  return (
    <>
      <Head>
        <title>La Salsa Puertorriqueña - Identidad y Nación | Museo de la Música Puertorriqueña</title>
        <meta name="description" content="La salsa puertorriqueña posee una personalidad propia, distinta a la de otros países hermanos, con un discurso marcado por nuestros refranes y vivencias cotidianas." />
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
                src="/images/SALSA LOGO (BLACK).svg"
                alt="Salsa Puertorriqueña Logo"
                width={500}
                height={250}
                className="mx-auto"
              />
            </div>
            <h1 className="ogg-regular text-4xl text-salsa-700 mb-4 lg:text-6xl">
              LA SALSA PUERTORRIQUEÑA<br />
              Identidad y Nación
            </h1>
          </div>

          {/* Main Content */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-salsa-50 to-salsa-100 p-8">
              <p className="plain-regular text-xl text-gray-700 leading-relaxed">
                Para contar la historia de la salsa puertorriqueña, se necesitaría un museo con un tamaño de un edificio entero. La magnitud de figuras —cantantes, músicos, arreglistas y compositores— es tan vasta que trasciende cualquier vitrina o pasillo expositivo. Y no es casualidad: en discotecas de todo el mundo, la salsa que resuena con mayor fuerza es la que nace del corazón boricua.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6">
                <div className="bg-salsa-600 text-white p-8">
                  <h3 className="ogg-medium text-2xl mb-4">Elementos Musicales</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Ritmo clave 2-3 o 3-2</li>
                    <li>• Percusión afrocaribeña</li>
                    <li>• Sección de metales</li>
                    <li>• Improvisación (soneo)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-salsa-500 to-salsa-700 text-white p-8">
                  <h3 className="ogg-medium text-xl mb-4">Características</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Fusión de ritmos</li>
                    <li>• Letras narrativas</li>
                    <li>• Baile energético</li>
                    <li>• Expresión cultural</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border-l-4 border-salsa-600 p-8">
                  <h3 className="ogg-medium text-2xl text-salsa-900 mb-4">Origen e Historia</h3>
                  <p className="text-lg text-gray-700">
                    La salsa puertorriqueña emerge como una fusión de diversos ritmos afrocaribeños, con una fuerte influencia del son cubano, la bomba y la plena. En las décadas de 1960 y 1970, Nueva York se convirtió en el crisol donde los músicos puertorriqueños desarrollaron este género único.
                  </p>
                </div>

                <div className="bg-salsa-800 text-white p-8">
                  <h3 className="ogg-medium text-2xl mb-4">Figuras Legendarias</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-salsa-200 pl-4">
                      <p className="text-lg">
                        Héctor Lavoe, Willie Colón, Eddie Palmieri, El Gran Combo de Puerto Rico y La Sonora Ponceña son algunos de los exponentes más importantes que han llevado la salsa puertorriqueña a nivel mundial.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Historical Moments */}
          <div className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="ogg-medium text-3xl text-salsa-900 mb-8 text-center">Momentos Históricos</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-salsa-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl">1956</span>
                  </div>
                </div>
                <h3 className="ogg-medium text-xl text-salsa-900 mb-3 text-center">Taverna India</h3>
                <p className="text-gray-700 text-center">
                  Fue en la mítica Taverna India, en 1956, donde Cortijo y su Combo ofrecen un momento fundacional de la salsa puertorriqueña.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-salsa-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl">1970s</span>
                  </div>
                </div>
                <h3 className="ogg-medium text-xl text-salsa-900 mb-3 text-center">Fania All Stars</h3>
                <p className="text-gray-700 text-center">
                  Casi quince años después, ese sonido e identidad encontrarían eco global con la Fania All Stars, formación en la que brillaban nombres esenciales de nuestra isla.
                </p>
              </div>
            </div>
          </div>

          {/* Identity Statement */}
          <div className="bg-salsa-900 text-white p-12 rounded-lg text-center">
            <h2 className="ogg-medium text-4xl mb-6">
              LA SALSA PUERTORRIQUEÑA NO IMITA, NOS AFIRMA
            </h2>
            <div className="w-32 h-1 bg-salsa-400 mx-auto mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-20 h-20 bg-salsa-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🏠</span>
                </div>
                <h3 className="ogg-medium text-xl mb-2">Nuestro Pueblo</h3>
                <p className="text-salsa-200">
                  Afirmación de nuestra identidad colectiva
                </p>
              </div>
              
              <div>
                <div className="w-20 h-20 bg-salsa-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">💬</span>
                </div>
                <h3 className="ogg-medium text-xl mb-2">Nuestro Lenguaje</h3>
                <p className="text-salsa-200">
                  Expresión de nuestro idioma propio
                </p>
              </div>
              
              <div>
                <div className="w-20 h-20 bg-salsa-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🎵</span>
                </div>
                <h3 className="ogg-medium text-xl mb-2">Nuestro Ritmo</h3>
                <p className="text-salsa-200">
                  La clave que convierte en himno de nuestra nación
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-xl text-salsa-200">
                Es afirmación de nuestro pueblo, de nuestro lenguaje propio, de nuestro ritmo. Y esa clave, la convierte en un himno de nuestra nación.
              </p>
            </div>
          </div>

          {/* Legacy Section */}
          <div className="bg-salsa-900 text-white p-12">
            <div className="text-center mb-8">
              <h2 className="ogg-medium text-4xl mb-4">
                LA SALSA COMO IDENTIDAD
              </h2>
              <div className="w-32 h-1 bg-salsa-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-salsa-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">I</span>
                </div>
                <h3 className="text-xl mb-2">Raíces</h3>
                <p className="text-salsa-200">
                  Fusión de ritmos caribeños
                </p>
              </div>

              <div>
                <div className="w-20 h-20 bg-salsa-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">II</span>
                </div>
                <h3 className="text-xl mb-2">Evolución</h3>
                <p className="text-salsa-200">
                  De Nueva York al mundo
                </p>
              </div>

              <div>
                <div className="w-20 h-20 bg-salsa-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">III</span>
                </div>
                <h3 className="text-xl mb-2">Legado</h3>
                <p className="text-salsa-200">
                  Influencia global
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
} 