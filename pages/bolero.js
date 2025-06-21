import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'
import AnimatedContainer from '../components/AnimatedContainer'

export default function Bolero() {
  return (
    <>
      <Head>
        <title>Bolero Puertorriqueño | Museo de la Música Puertorriqueña</title>
        <meta name="description" content="El bolero puertorriqueño abarca una rica expresión que celebra el amor, la belleza de nuestra isla y clama por la soberanía política." />
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
          <AnimatedContainer delay={0.2}>
            <div className="mb-16 text-center">
              <div className="mb-8">
                <Image
                  src="/images/Bolero LOGO (BLACK).svg"
                  alt="Bolero Puertorriqueño Logo"
                  width={500}
                  height={250}
                  className="mx-auto"
                />
              </div>
              <h1 className="ogg-regular text-4xl text-bolero-700 mb-4 lg:text-6xl">
                BOLERO PUERTORRIQUEÑO
              </h1>
            </div>
          </AnimatedContainer>

          {/* Agustín Lara Quote */}
          <AnimatedContainer delay={0.4}>
            <div className="mb-16">
              <div className="bg-gradient-to-br from-bolero-50 to-bolero-100 p-8">
                <div className="text-center">
                  <p className="plain-regular text-xl text-gray-700 leading-relaxed mb-4">
                    En una ocasión, al maestro Agustín Lara se le preguntó qué era un bolero, y él respondió con sencillez y profundidad: "El bolero es una canción que se canta bajito al oído".
                  </p>
                  <p className="text-right text-bolero-700 font-semibold">
                    — Agustín Lara
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContainer>

          {/* Characteristics Grid */}
          <AnimatedContainer delay={0.6}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-bolero-600 text-white p-8">
                  <h3 className="ogg-medium text-2xl mb-4">Características del Bolero</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Ritmo romántico</li>
                    <li>• Letras poéticas</li>
                    <li>• Melodías suaves</li>
                    <li>• Armonías sofisticadas</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-bolero-500 to-bolero-700 text-white p-8">
                  <h3 className="ogg-medium text-xl mb-4">Temas Principales</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Amor romántico</li>
                    <li>• Desamor</li>
                    <li>• Nostalgia</li>
                    <li>• Pasión</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border-l-4 border-bolero-600 p-8">
                  <h3 className="ogg-medium text-2xl text-bolero-900 mb-4">Historia en Puerto Rico</h3>
                  <p className="text-lg text-gray-700">
                    El bolero en Puerto Rico tiene una rica historia que se remonta a principios del siglo XX. Los compositores puertorriqueños han contribuido significativamente al desarrollo del género, creando un estilo distintivo que ha influido en toda la música latina.
                  </p>
                </div>

                <div className="bg-bolero-800 text-white p-8">
                  <h3 className="ogg-medium text-2xl mb-4">Compositores Destacados</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-bolero-200 pl-4">
                      <p className="text-lg">
                        Rafael Hernández, Pedro Flores, Bobby Capó y Sylvia Rexach son algunos de los compositores más influyentes del bolero puertorriqueño, cuyas obras han trascendido fronteras y generaciones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContainer>

          {/* Legacy Section */}
          <AnimatedContainer delay={0.8}>
            <div className="bg-bolero-900 text-white p-12 mt-16 rounded-lg">
              <div className="text-center mb-8">
                <h2 className="ogg-medium text-4xl mb-4">
                  LA ÉPOCA DORADA DEL BOLERO
                </h2>
                <div className="w-32 h-1 bg-bolero-400 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-20 h-20 bg-bolero-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">I</span>
                  </div>
                  <h3 className="text-xl mb-2">Orígenes</h3>
                  <p className="text-bolero-200">
                    Principios del siglo XX
                  </p>
                </div>

                <div>
                  <div className="w-20 h-20 bg-bolero-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">II</span>
                  </div>
                  <h3 className="text-xl mb-2">Apogeo</h3>
                  <p className="text-bolero-200">
                    Décadas de 1940-1960
                  </p>
                </div>

                <div>
                  <div className="w-20 h-20 bg-bolero-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">III</span>
                  </div>
                  <h3 className="text-xl mb-2">Legado</h3>
                  <p className="text-bolero-200">
                    Influencia en la música actual
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContainer>

          {/* Mission Section */}
          <AnimatedContainer delay={1}>
            <div className="bg-brandPurple-900 text-white p-12 mt-16 rounded-lg text-center">
              <h2 className="ogg-medium text-3xl mb-6">
                NUESTRA MISIÓN
              </h2>
              <div className="w-32 h-1 bg-brandPurple-400 mx-auto mb-8"></div>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-brandPurple-200 leading-relaxed">
                  En esta sala, se enaltecerá la importante trascendencia del bolero nacional, destacando a sus grandes compositores e intérpretes, pero, sobre todo, reflejando lo profundamente arraigado que está en la esencia y el espíritu del pueblo puertorriqueño.
                </p>
              </div>
            </div>
          </AnimatedContainer>
        </main>

        <Footer />
      </div>
    </>
  )
} 