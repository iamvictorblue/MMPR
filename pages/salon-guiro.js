import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function SalonGuiro() {
  return (
    <>
      <Head>
        <title>Salón Güiro | Museo de la Música Puertorriqueña</title>
        <meta name="description" content="El Salón Güiro es un espacio dedicado a la preservación y celebración de la música tradicional puertorriqueña y sus instrumentos autóctonos." />
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
                src="/images/Salon Guiro LOGO (BLACK).svg"
                alt="Salón Güiro Logo"
                width={500}
                height={250}
                className="mx-auto"
              />
            </div>
            <h1 className="ogg-regular text-4xl text-brandPurple-900 mb-4 lg:text-6xl">
              SALÓN GÜIRO
            </h1>
          </div>

          {/* Main Content */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-brandPurple-50 to-brandPurple-100 p-8 rounded-lg mb-12">
              <p className="plain-regular text-xl text-gray-700 leading-relaxed text-center">
                El Salón Güiro es un espacio dedicado a la preservación y celebración de la música tradicional puertorriqueña. Aquí se honra el legado de nuestros instrumentos autóctonos y se mantiene viva la tradición musical que define nuestra identidad cultural.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-brandPurple-600 text-white p-8 rounded-lg">
                <h2 className="ogg-medium text-2xl mb-4">Preservación Cultural</h2>
                <p className="text-lg leading-relaxed">
                  Este salón está dedicado a preservar y difundir la rica tradición musical puertorriqueña, especialmente aquella que utiliza instrumentos autóctonos como el güiro, las maracas, el cuatro y otros elementos fundamentales de nuestra música.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-brandPurple-500 to-brandPurple-700 text-white p-8 rounded-lg">
                <h2 className="ogg-medium text-2xl mb-4">Celebración Musical</h2>
                <p className="text-lg leading-relaxed">
                  Un espacio donde se celebran las tradiciones musicales que han sido transmitidas de generación en generación, manteniendo vivo el espíritu de nuestra cultura musical puertorriqueña.
                </p>
              </div>
            </div>
          </div>

          {/* Instrumentos Autóctonos */}
          <div className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="ogg-medium text-3xl text-brandPurple-900 mb-8 text-center">Instrumentos Autóctonos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-brandPurple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🥥</span>
                </div>
                <h3 className="ogg-medium text-xl text-brandPurple-900 mb-3">Güiro</h3>
                <p className="text-gray-700">
                  Instrumento de percusión hecho de calabaza seca, fundamental en la música tradicional
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-brandPurple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🎵</span>
                </div>
                <h3 className="ogg-medium text-xl text-brandPurple-900 mb-3">Cuatro</h3>
                <p className="text-gray-700">
                  Instrumento nacional de Puerto Rico, líder de la música campesina
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-brandPurple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🥜</span>
                </div>
                <h3 className="ogg-medium text-xl text-brandPurple-900 mb-3">Maracas</h3>
                <p className="text-gray-700">
                  Instrumentos de percusión tradicionales hechos de higüera
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-brandPurple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🥁</span>
                </div>
                <h3 className="ogg-medium text-xl text-brandPurple-900 mb-3">Barriles</h3>
                <p className="text-gray-700">
                  Tambores tradicionales utilizados en la bomba y otros géneros
                </p>
              </div>
            </div>
          </div>

          {/* Cultural Mission */}
          <div className="mb-16 bg-brandPurple-900 text-white p-12 rounded-lg text-center">
            <h2 className="ogg-medium text-3xl mb-6">
              NUESTRA MISIÓN CULTURAL
            </h2>
            <div className="w-32 h-1 bg-brandPurple-400 mx-auto mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-20 h-20 bg-brandPurple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">📚</span>
                </div>
                <h3 className="ogg-medium text-xl mb-2">Educación</h3>
                <p className="text-brandPurple-200">
                  Educar sobre la importancia de nuestros instrumentos tradicionales
                </p>
              </div>
              
              <div>
                <div className="w-20 h-20 bg-brandPurple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🎵</span>
                </div>
                <h3 className="ogg-medium text-xl mb-2">Preservación</h3>
                <p className="text-brandPurple-200">
                  Preservar las técnicas y tradiciones de interpretación musical
                </p>
              </div>
              
              <div>
                <div className="w-20 h-20 bg-brandPurple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🌟</span>
                </div>
                <h3 className="ogg-medium text-xl mb-2">Celebración</h3>
                <p className="text-brandPurple-200">
                  Celebrar la riqueza y diversidad de nuestra música tradicional
                </p>
              </div>
            </div>
          </div>

          {/* Traditional Music Genres */}
          <div className="mb-16 bg-gradient-to-br from-brandPurple-50 to-brandPurple-100 p-8 rounded-lg">
            <h2 className="ogg-medium text-3xl text-brandPurple-900 mb-8 text-center">Géneros Musicales Tradicionales</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="ogg-medium text-xl text-brandPurple-900 mb-3">Música Campesina</h3>
                <p className="text-gray-700">
                  Géneros como seises, aguinaldos, mazurcas y danzas que reflejan la vida rural
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="ogg-medium text-xl text-brandPurple-900 mb-3">Bomba</h3>
                <p className="text-gray-700">
                  Música afro-puertorriqueña con comunicación entre barril y bailador
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="ogg-medium text-xl text-brandPurple-900 mb-3">Plena</h3>
                <p className="text-gray-700">
                  "El periódico del pueblo" que narra sucesos cotidianos e históricos
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="ogg-medium text-3xl text-brandPurple-900 mb-6 text-center">Experiencias Interactivas</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="ogg-medium text-2xl text-brandPurple-900 mb-4">Demostraciones</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  El Salón Güiro ofrece demostraciones en vivo de instrumentos tradicionales, permitiendo a los visitantes experimentar de primera mano el sonido y la técnica de interpretación de nuestros instrumentos autóctonos.
                </p>
              </div>
              
              <div>
                <h3 className="ogg-medium text-2xl text-brandPurple-900 mb-4">Talleres Educativos</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Talleres interactivos donde los visitantes pueden aprender sobre la historia, construcción y uso de instrumentos tradicionales puertorriqueños, manteniendo viva nuestra herencia musical.
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