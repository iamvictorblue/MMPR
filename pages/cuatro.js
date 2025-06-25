import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Cuatro() {
  return (
    <>
      <Head>
        <title>Galería del Cuatro - Instrumento Nacional | Museo de la Música Puertorriqueña</title>
        <meta name="description" content="El Cuatro es el Instrumento Nacional de Puerto Rico, más pequeño que una guitarra y más grande que una mandolina, con una rica historia y evolución." />
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
                src="/images/Galeria del Cuatro LOGO (BLACK).svg"
                alt="Galería del Cuatro Logo"
                width={500}
                height={250}
                className="mx-auto"
              />
            </div>
            <h1 className="ogg-regular text-4xl text-cuatro-700 mb-4 lg:text-6xl">
              GALERÍA DEL CUATRO PUERTORRIQUEÑO
            </h1>
            {/* Galería del Cuatro Gallery Image */}
            <div className="mt-8 flex justify-center">
              <Image
                src="/images/GALERIA DEL CUATRO/Galeria del Cuatro.png"
                alt="Galería del Cuatro"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Intro Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-cuatro-50 to-cuatro-100 p-8">
              <p className="plain-regular text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                La Galería del Cuatro Puertorriqueño estará dedicada a honrar el legado del instrumento nacional, así como a los grandes intérpretes, compositores y artesanos que le han dado vida. A través de la exhibición de cuatros antiguos y modernos, esta exposición celebrará su trayectoria como símbolo de nuestra identidad cultural.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6">
                <div className="bg-cuatro-600 text-white p-8">
                  <h3 className="ogg-medium text-2xl mb-4">Características del Cuatro</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Cinco pares de cuerdas dobles</li>
                    <li>• Cuerpo en forma de violín</li>
                    <li>• Sonido brillante y penetrante</li>
                    <li>• Construcción artesanal</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-cuatro-500 to-cuatro-700 text-white p-8">
                  <h3 className="ogg-medium text-xl mb-4">Géneros Musicales</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Aguinaldo</li>
                    <li>• Seis</li>
                    <li>• Danza</li>
                    <li>• Música Jíbara</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border-l-4 border-cuatro-600 p-8">
                  <h3 className="ogg-medium text-2xl text-cuatro-900 mb-4">Historia y Evolución</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    El cuatro puertorriqueño es &quot;el instrumento nacional de Puerto Rico&quot; y &quot;el corazón de nuestra música jíbara&quot;.
                  </p>
                  <p className="text-lg text-gray-700">
                    Sus orígenes se remontan a instrumentos europeos traídos durante la colonización, pero su forma y sonido únicos son producto de la creatividad y necesidades musicales del pueblo puertorriqueño.
                  </p>
                </div>

                <div className="bg-cuatro-800 text-white p-8">
                  <h3 className="ogg-medium text-2xl mb-4">Artesanos Destacados</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-cuatro-200 pl-4">
                      <p className="text-lg">
                        Los artesanos del cuatro han transmitido sus conocimientos de generación en generación, preservando técnicas tradicionales mientras incorporan innovaciones modernas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ladi Martínez Otero Quote */}
          <div className="mb-16 bg-cuatro-600 text-white p-12">
            <div className="text-center mb-8">
              <p className="ogg-medium text-3xl leading-relaxed">
                "Yo no me puedo imaginar una Navidad en Puerto Rico sin que se escuche el cuatro puertorriqueño."
              </p>
              <p className="text-right text-cuatro-200 font-semibold mt-4">
                — Ladi Martínez Otero
              </p>
            </div>
          </div>

          {/* Key Figures */}
          <h2 className="ogg-medium text-3xl text-cuatro-900 mb-8 text-center">FIGURAS CLAVE</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 shadow-md text-center">
              <div className="w-20 h-20 bg-cuatro-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">LM</span>
              </div>
              <h3 className="ogg-medium text-xl text-cuatro-900 mb-3">Ladi Martínez Otero</h3>
              <p className="text-gray-700">Pionero del cuatro</p>
            </div>
            
            <div className="bg-white p-6 shadow-md text-center">
              <div className="w-20 h-20 bg-cuatro-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">MR</span>
              </div>
              <h3 className="ogg-medium text-xl text-cuatro-900 mb-3">Maso Rivera</h3>
              <p className="text-gray-700">Innovador del cuatro</p>
            </div>
            
            <div className="bg-white p-6 shadow-md text-center">
              <div className="w-20 h-20 bg-cuatro-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">NR</span>
              </div>
              <h3 className="ogg-medium text-xl text-cuatro-900 mb-3">Nieves Quintero</h3>
              <p className="text-gray-700">Compositor prolífico</p>
            </div>
            
            <div className="bg-white p-6 shadow-md text-center">
              <div className="w-20 h-20 bg-cuatro-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">YR</span>
              </div>
              <h3 className="ogg-medium text-xl text-cuatro-900 mb-3">Yomo Toro</h3>
              <p className="text-gray-700">El "Jimi Hendrix" del cuatro</p>
            </div>
          </div>

          {/* Legacy Section */}
          <div className="bg-cuatro-900 text-white p-12">
            <div className="text-center mb-8">
              <h2 className="ogg-medium text-4xl mb-4">
                LEGADO MUSICAL
              </h2>
              <div className="w-32 h-1 bg-cuatro-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-cuatro-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">I</span>
                </div>
                <h3 className="text-xl mb-2">Tradición</h3>
                <p className="text-cuatro-200">
                  Símbolo de la música tradicional
                </p>
              </div>

              <div>
                <div className="w-20 h-20 bg-cuatro-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">II</span>
                </div>
                <h3 className="text-xl mb-2">Innovación</h3>
                <p className="text-cuatro-200">
                  Adaptación a nuevos géneros
                </p>
              </div>

              <div>
                <div className="w-20 h-20 bg-cuatro-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">III</span>
                </div>
                <h3 className="text-xl mb-2">Futuro</h3>
                <p className="text-cuatro-200">
                  Nuevas generaciones de cuatristas
                </p>
              </div>
            </div>
          </div>

          {/* Ladislao Martínez y Paquito López Cruz Section */}
          <div className="mb-16 bg-gradient-to-r from-cuatro-50 to-cuatro-100 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="ogg-medium text-3xl text-cuatro-900 mb-4">CUATRO</h2>
              <div className="w-32 h-1 bg-cuatro-600 mx-auto"></div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="flex-1">
                <Image
                  src="/images/GALERIA DEL CUATRO/Galeria del Cuatro (LADI).png"
                  alt="Ladislao Martínez"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-1 space-y-6 text-lg text-gray-700 leading-relaxed">
                <h3 className="ogg-medium text-2xl text-cuatro-900 mb-4">Ladislao Martínez</h3>
                <p>"El Maestro Ladí" fue el responsable del Cuatro Moderno, el cual utiliza cinco cuerdas dobles.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="flex-1">
                <Image
                  src="/images/GALERIA DEL CUATRO/Galeria del Cuatro (PAQUITO LOPEZ CRUZ.png"
                  alt="Paquito López Cruz"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-1 space-y-6 text-lg text-gray-700 leading-relaxed">
                <h3 className="ogg-medium text-2xl text-cuatro-900 mb-4">Paquito López Cruz</h3>
                <p>Como folclorista, Paquito López Cruz contribuyó de manera significativa a difundir el conocimiento sobre el instrumento del cuatro. Una de sus principales contribuciones como educador fue la creación del primer "Método para la enseñanza del cuatro puertorriqueño", el cual fue publicado en 1967 por el Instituto de Cultura Puertorriqueña (ICP). Este método se convirtió en una referencia fundamental para aquellos que deseaban aprender a tocar el cuatro y contribuyó a la preservación y promoción de la tradición musical puertorriqueña.</p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
} 