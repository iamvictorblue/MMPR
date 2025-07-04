import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'
import AnimatedContainer from '../components/AnimatedContainer'

export default function Bomba() {
  return (
    <>
      <Head>
        <title>Bomba - Herencia Africana | Museo de la Música Puertorriqueña</title>
        <meta name="description" content="Descubre la Bomba, la herencia afro-puertorriqueña que encuentra su esencia en la comunicación entre barril y bailador." />
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
                  src="/images/Bomba LOGO (BLACK).svg"
                  alt="Bomba Logo"
                  width={400}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <h1 className="ogg-regular text-4xl text-bomba-700 mb-4 lg:text-6xl">
                Herencia Africana
              </h1>
              {/* Bomba Gallery Images */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                <Image
                  src="/images/BOMBA/Bomba.png"
                  alt="Bomba Escena"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
                <Image
                  src="/images/BOMBA/Bomba2.png"
                  alt="Bomba Escena 2"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
                <Image
                  src="/images/BOMBA/Bomba FAMILIA CEPEDA.png"
                  alt="Familia Cepeda"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </AnimatedContainer>

          {/* Content Section */}
          <AnimatedContainer delay={0.4}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-bomba-50 to-bomba-100 p-8">
                  <p className="plain-regular text-lg text-gray-700 leading-relaxed">
                    "La herencia afro-puertorriqueña encuentra en la Bomba su esencia. Entre los siglos XVI y XIX, los europeos capturaron a millones de africanos para llevarlos al Caribe. En Puerto Rico, fueron esclavizados y obligados a trabajar en la producción de caña de azúcar. Ellos resistieron a esta opresión y buscaron refugio en la música para preservar su memoria cultural. La Bomba, conocida por la comunicación entre barril y bailador, su canción de llamada y respuesta y la dinámica de dos tipos de barril se ha convertido en elemento central de la historia de Puerto Rico".
                  </p>
                  <p className="text-right text-bomba-600 font-semibold mt-4">
                    — Odalys Lugo Morales
                  </p>
                </div>

                <div className="bg-bomba-600 text-white p-8">
                  <h3 className="ogg-medium text-2xl mb-4">Elementos Principales</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• El baile y el ritmo</li>
                    <li>• Los barriles</li>
                    <li>• El canto</li>
                    <li>• La improvisación</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-bomba-500 to-bomba-700 text-white p-8">
                  <h3 className="ogg-medium text-xl mb-4">Regiones y Estilos</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Bomba de Loíza</li>
                    <li>• Bomba de Ponce</li>
                    <li>• Bomba de Mayagüez</li>
                    <li>• Bomba de Santurce</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-bomba-600 p-8">
                  <h3 className="ogg-medium text-2xl text-bomba-900 mb-4">Legado Cultural</h3>
                  <p className="text-lg text-gray-700">
                    La Bomba es más que música y baile; es un testimonio vivo de resistencia, creatividad y supervivencia cultural. Su práctica continúa siendo un espacio de celebración, memoria y afirmación de la identidad afro-puertorriqueña.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContainer>

          {/* Historical Context */}
          <AnimatedContainer delay={0.6}>
            <div className="mt-16 bg-bomba-900 text-white p-12">
              <div className="text-center mb-8">
                <h2 className="ogg-medium text-4xl mb-4">
                  CONTEXTO HISTÓRICO
                </h2>
                <div className="w-32 h-1 bg-bomba-400 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-20 h-20 bg-bomba-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">I</span>
                  </div>
                  <h3 className="text-xl mb-2">Orígenes</h3>
                  <p className="text-bomba-200">
                    Siglos XVI-XIX: Llegada y establecimiento
                  </p>
                </div>

                <div>
                  <div className="w-20 h-20 bg-bomba-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">II</span>
                  </div>
                  <h3 className="text-xl mb-2">Desarrollo</h3>
                  <p className="text-bomba-200">
                    Siglo XX: Preservación y evolución
                  </p>
                </div>

                <div>
                  <div className="w-20 h-20 bg-bomba-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">III</span>
                  </div>
                  <h3 className="text-xl mb-2">Actualidad</h3>
                  <p className="text-bomba-200">
                    Siglo XXI: Renacimiento y difusión
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContainer>

          {/* Rafael Cepeda Atiles Section */}
          <AnimatedContainer delay={0.8}>
            <div className="mb-16 bg-gradient-to-r from-bomba-50 to-bomba-100 p-8 rounded-lg">
              <div className="text-center mb-8">
                <h2 className="ogg-medium text-3xl text-bomba-900 mb-4">BOMBA</h2>
                <div className="w-32 h-1 bg-bomba-600 mx-auto"></div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <Image
                    src="/images/BOMBA/Bomba RAFAEL CEPEDA.png"
                    alt="Rafael Cepeda Atiles"
                    width={500}
                    height={600}
                    className="rounded-lg shadow-lg object-cover w-full h-auto"
                  />
                </div>
                <div className="flex-1 space-y-6 text-lg text-gray-700 leading-relaxed">
                  <h3 className="ogg-medium text-2xl text-bomba-900 mb-6 text-center lg:text-left">RAFAEL CEPEDA ATILES<br/>EL PATRIARCA DE LA BOMBA</h3>
                  <p>
                    Don Rafael Cepeda fue un brillante y prolífico compositor, músico, director y folclorista auténtico, reconocido como una de las figuras más destacadas de la cultura puertorriqueña. Su legado como patriarca indiscutible de la música y el baile de la Bomba y la Plena trascendió las fronteras de Puerto Rico, dejando una huella imborrable en la historia cultural de la isla.
                  </p>
                  <p>
                    Cepeda dedicó su vida a cultivar, defender y exponer la expresión cultural de la Bomba, asegurando su preservación y transmisión a nuevas generaciones. Gracias a su contribución, el Smithsonian Institute lo condecoró como "el mejor folclorista del mundo," un reconocimiento que subraya el impacto global de la música tradicional puertorriqueña.
                  </p>
                  <p>
                    Sus composiciones han sido interpretadas por agrupaciones tanto locales como internacionales. Entre sus plenas más destacadas se incluyen <em>El Bombón de Elena</em> y <em>A la Verdegué</em>, las cuales continúan resonando en la tradición musical puertorriqueña.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedContainer>
        </main>

        <Footer />
      </div>
    </>
  )
} 