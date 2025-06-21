import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function CancionPopular() {
  return (
    <>
      <Head>
        <title>Canción Popular | Museo de la Música Puertorriqueña</title>
        <meta name="description" content="La Canción Popular en Puerto Rico refleja la identidad, tradiciones y transformaciones de la sociedad puertorriqueña." />
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
                src="/images/CANCION POPULAR LOGO (BLACK).svg"
                alt="Canción Popular Logo"
                width={500}
                height={250}
                className="mx-auto"
              />
            </div>
            <h1 className="ogg-regular text-4xl text-cancion-700 mb-4 lg:text-6xl">
              CANCIÓN POPULAR
            </h1>
          </div>

          {/* Main Content */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-cancion-50 to-cancion-100 p-8">
              <p className="plain-regular text-xl text-gray-700 leading-relaxed text-center">
                La Canción Popular en Puerto Rico es un fenómeno sociocultural que refleja la identidad, las tradiciones y las transformaciones de la sociedad puertorriqueña. A través del tiempo, ha logrado adaptarse a diversos contextos históricos y sociales, convirtiéndose en un símbolo vivo de nuestro patrimonio cultural, con un impacto que ha trascendido generaciones.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6">
                <div className="bg-cancion-600 text-white p-8">
                  <h3 className="ogg-medium text-2xl mb-4">Elementos Característicos</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Melodías memorables</li>
                    <li>• Letras poéticas</li>
                    <li>• Arreglos orquestales</li>
                    <li>• Temas universales</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-cancion-500 to-cancion-700 text-white p-8">
                  <h3 className="ogg-medium text-xl mb-4">Temas Recurrentes</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Amor y desamor</li>
                    <li>• Identidad nacional</li>
                    <li>• Vida cotidiana</li>
                    <li>• Crítica social</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border-l-4 border-cancion-600 p-8">
                  <h3 className="ogg-medium text-2xl text-cancion-900 mb-4">Evolución Histórica</h3>
                  <p className="text-lg text-gray-700">
                    La canción popular puertorriqueña ha evolucionado desde sus raíces en la música jíbara y la danza hasta incorporar elementos de diversos géneros musicales. Esta evolución refleja los cambios sociales y culturales de nuestra sociedad a lo largo del tiempo.
                  </p>
                </div>

                <div className="bg-cancion-800 text-white p-8">
                  <h3 className="ogg-medium text-2xl mb-4">Compositores Destacados</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-cancion-200 pl-4">
                      <p className="text-lg">
                        Rafael Hernández, Pedro Flores, Sylvia Rexach y Bobby Capó son algunos de los compositores más influyentes que han contribuido al desarrollo de la canción popular puertorriqueña.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legacy Section */}
          <div className="bg-cancion-900 text-white p-12">
            <div className="text-center mb-8">
              <h2 className="ogg-medium text-4xl mb-4">
                LEGADO MUSICAL
              </h2>
              <div className="w-32 h-1 bg-cancion-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-cancion-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">I</span>
                </div>
                <h3 className="text-xl mb-2">Raíces</h3>
                <p className="text-cancion-200">
                  Tradición musical puertorriqueña
                </p>
              </div>

              <div>
                <div className="w-20 h-20 bg-cancion-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">II</span>
                </div>
                <h3 className="text-xl mb-2">Desarrollo</h3>
                <p className="text-cancion-200">
                  Evolución y transformación
                </p>
              </div>

              <div>
                <div className="w-20 h-20 bg-cancion-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">III</span>
                </div>
                <h3 className="text-xl mb-2">Influencia</h3>
                <p className="text-cancion-200">
                  Impacto en la música latina
                </p>
              </div>
            </div>
          </div>

          {/* Música Campesina Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="ogg-medium text-4xl text-brandPurple-900 mb-4">MÚSICA CAMPESINA</h2>
              <div className="w-32 h-1 bg-brandPurple-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="plain-regular text-lg text-gray-700 leading-relaxed">
                  Nuestra música tradicional campesina se despliega como un amplio abanico de ramificaciones, que abarca una diversidad de géneros como los Seises, Aguinaldos, Mazurcas, Danzas, Pasillos y Foxtrot. En el centro de esta rica cultura campesina se encuentra el Cuatro Puertorriqueño, instrumento que lidera y da vida a un universo inmenso de talento.
                </p>
              </div>
              
              <div className="bg-brandPurple-600 text-white p-8 rounded-lg">
                <h3 className="ogg-medium text-2xl mb-4">Elementos Fundamentales</h3>
                <ul className="space-y-3 text-lg">
                  <li>• Cuatro Puertorriqueño</li>
                  <li>• Trovadores e improvisadores</li>
                  <li>• Conjuntos típicos</li>
                  <li>• Güiro</li>
                  <li>• Guitarra campesina</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="plain-regular text-lg text-gray-700">
                Entre los destacados trovadores e improvisadores, los conjuntos típicos, el Güiro y la majestuosa guitarra campesina, nuestra tradición musical se enriquece y se mantiene viva, representando una parte invaluable de nuestra identidad cultural.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
} 