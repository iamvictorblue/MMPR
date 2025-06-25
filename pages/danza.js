import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Danza() {
  return (
    <>
      <Head>
        <title>Danza Puertorriqueña | Museo de la Música Puertorriqueña</title>
        <meta name="description" content="La Danza es la máxima expresión de la cultura puertorriqueña, con su riqueza melódica y armónica que define nuestra identidad musical." />
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
                src="/images/Danza Puertorriquena LOGO (BLACK).svg"
                alt="Danza Puertorriqueña Logo"
                width={500}
                height={250}
                className="mx-auto"
              />
            </div>
            <h1 className="ogg-regular text-4xl text-danza-700 mb-4 lg:text-6xl">
              LA DANZA ES LA MÁXIMA EXPRESIÓN<br />
              DE LA CULTURA PUERTORRIQUEÑA
            </h1>
            {/* Danza Gallery Image */}
            <div className="mt-8 flex justify-center">
              <Image
                src="/images/DANZA/Danza Puertorriquena.png"
                alt="Danza Puertorriqueña"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-danza-50 to-danza-100 p-8">
                <p className="plain-regular text-lg text-gray-700 leading-relaxed">
                  "Por su riqueza melódica y armónica, así como por su forma y carácter, es la Danza la máxima expresión de la cultura puertorriqueña. Las hay románticas y melancólicas: con frases largas, armonías variadas y tres o más partes claramente definidas. Otras son alegres y festivas: de forma breve y caracter retozón. Algunas juegan entre ambas variantes, pero todas conservan la esencia que caracteriza esa forma musical."
                </p>
                <p className="text-right text-danza-700 font-semibold mt-4">
                  — Luciano Quiñones
                </p>
              </div>

              <div className="bg-danza-600 text-white p-8">
                <h3 className="ogg-medium text-2xl mb-4">El Tresillo Elástico</h3>
                <p className="text-lg leading-relaxed">
                  El tresillo elástico es una característica rítmica distintiva de la danza puertorriqueña. Este patrón rítmico flexible permite una expresión única que distingue a la danza de otros géneros musicales.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-danza-500 to-danza-700 text-white p-8">
                <h3 className="ogg-medium text-xl mb-4">Características de la Danza</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Melodías elaboradas</li>
                  <li>• Armonías complejas</li>
                  <li>• Estructura definida</li>
                  <li>• Expresión romántica</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-danza-600 p-8">
                <h3 className="ogg-medium text-2xl text-danza-900 mb-4">Origen Histórico</h3>
                <p className="text-lg text-gray-700">
                  El origen de la Danza Puertorriqueña no está claramente definido, pero la mayoría de los expertos coinciden en que sus comienzos fueron alrededor de mitad del siglo XIX, cerca del año 1840 y guarda paralelismos con la Contradanza cubana.
                </p>
              </div>
            </div>
          </div>

          {/* La Borinqueña Section */}
          <div className="mb-16 bg-gradient-to-r from-danza-50 to-danza-100 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="ogg-medium text-3xl text-danza-900 mb-4">DANZA</h2>
              <div className="w-32 h-1 bg-danza-600 mx-auto"></div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <Image
                  src="/images/DANZA/Danza Puertorriquena (LA BORINQUENA).png"
                  alt="La Borinqueña"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
              <div className="flex-1 space-y-6 text-lg text-gray-700 leading-relaxed">
                <h3 className="ogg-medium text-2xl text-danza-900 mb-6 text-center lg:text-left">
                  LA BORINQUEÑA
                </h3>
                <p>
                  El hecho de que el himno nacional de Puerto Rico sea una danza dice mucho, ya que se aparta de la tradición universal en la cual los himnos suelen ser marchas marciales. Es un himno de características singulares: la belleza de su tonalidad menor, unida a su aire romántico y rítmico, tan característicos de la danza puertorriqueña, lo dotan de una esencia única.
                </p>
                <p>
                  Estos elementos envuelven a <strong>La Borinqueña</strong> en un lirismo que la distingue, convirtiéndola en un himno excepcional y sin paralelo en el mundo.
                </p>
                <p>
                  El misterio que envuelve la autoría de nuestro himno nacional continúa sin resolverse. Diversas versiones atribuyen su creación, tanto en la letra como en la música, a figuras como <strong>Francisco Ramírez de Arellano</strong> y <strong>Félix Astol Artés</strong>, dejando una incertidumbre en torno a sus orígenes.
                </p>
              </div>
            </div>
          </div>

          {/* Amaury Veray Quote */}
          <div className="mb-16 bg-danza-800 text-white p-12">
            <div className="text-center mb-8">
              <h2 className="ogg-medium text-3xl mb-4">
                EN LA DANZA SE IMPRIME POR PRIMERA VEZ EL SELLO DE NUESTRA PROPIA PERSONALIDAD PUERTORRIQUEÑA
              </h2>
              <div className="w-32 h-1 bg-danza-400 mx-auto"></div>
            </div>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              "Es evidente que la danza puertorriqueña es la forma musical donde se imprime por primera vez el sello de nuestra propia personalidad puertorriqueña. El derrotero político de la Isla sirve de marco a la danza puertorriqueña."
            </p>
            <p className="text-right text-danza-200 font-semibold mt-4">
              — Amaury Veray
            </p>
          </div>

          {/* Three Periods */}
          <div className="bg-gradient-to-br from-danza-50 to-danza-100 p-8">
            <h2 className="ogg-medium text-3xl text-danza-900 mb-8 text-center">Tres Épocas Fundamentales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-danza-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">I</span>
                </div>
                <h3 className="font-semibold text-danza-900 mb-2 text-xl">Época de Tavárez</h3>
                <p className="text-gray-600">Formación de la danza puertorriqueña</p>
                <p className="text-danza-700 font-semibold mt-2">Período separatista</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-danza-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">II</span>
                </div>
                <h3 className="font-semibold text-danza-900 mb-2 text-xl">Época de Morel Campos</h3>
                <p className="text-gray-600">Plenitud de la danza puertorriqueña</p>
                <p className="text-danza-700 font-semibold mt-2">Período asimilista y autonomista</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-danza-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">III</span>
                </div>
                <h3 className="font-semibold text-danza-900 mb-2 text-xl">Época de Quintón</h3>
                <p className="text-gray-600">Consecuencia de la danza puertorriqueña</p>
                <p className="text-danza-700 font-semibold mt-2">Cambio de soberanía</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-6">
            La danza puertorriqueña es "la expresión más refinada de nuestra música" y representa un momento crucial en la historia cultural de Puerto Rico.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            La danza es "el género que elevó la música puertorriqueña" a nuevas alturas de sofisticación y expresión artística.
          </p>
        </main>

        <Footer />
      </div>
    </>
  )
} 