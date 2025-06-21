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
        </main>

        <Footer />
      </div>
    </>
  )
} 