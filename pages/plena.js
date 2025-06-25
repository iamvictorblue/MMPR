import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Plena() {
  return (
    <>
      <Head>
        <title>La Plena Puertorriqueña | Museo de la Música Puertorriqueña</title>
        <meta name="description" content="La Plena es conocida como 'el periódico del pueblo', narrando los sucesos cotidianos y acontecimientos significativos de la historia de Puerto Rico." />
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
                src="/images/PLENA LOGO (BLACK).svg"
                alt="Plena Puertorriqueña Logo"
                width={500}
                height={250}
                className="mx-auto"
              />
            </div>
            <h1 className="ogg-regular text-4xl text-plena-700 mb-4 lg:text-6xl">
              LA PLENA PUERTORRIQUEÑA
            </h1>
          </div>

          {/* Main Content */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-plena-50 to-plena-100 p-8">
              <p className="plain-regular text-xl text-gray-700 leading-relaxed">
                La Plena es una manifestación musical profundamente vinculada a la esencia de la identidad puertorriqueña y a la riqueza de nuestro patrimonio cultural. Es conocida también como "el periódico del pueblo", pues su expresión musical narra los sucesos cotidianos de la vida del pueblo, así como acontecimientos significativos de la historia de nuestra isla.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6">
                <div className="bg-plena-600 text-white p-8">
                  <h3 className="ogg-medium text-2xl mb-4">Instrumentos Tradicionales</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Pandero Seguidor</li>
                    <li>• Pandero Segundo</li>
                    <li>• Pandero Requinto</li>
                    <li>• Güiro</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-plena-500 to-plena-700 text-white p-8">
                  <h3 className="ogg-medium text-xl mb-4">Características</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Ritmo sincopado</li>
                    <li>• Canto narrativo</li>
                    <li>• Improvisación</li>
                    <li>• Baile colectivo</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border-l-4 border-plena-600 p-8">
                  <h3 className="ogg-medium text-2xl text-plena-900 mb-4">Origen e Historia</h3>
                  <p className="text-lg text-gray-700">
                    La plena surge a principios del siglo XX en los barrios obreros de Ponce. Se desarrolló como una expresión musical que permitía narrar los acontecimientos diarios, las luchas sociales y las historias de la comunidad, convirtiéndose en un medio de comunicación popular.
                  </p>
                </div>

                <div className="bg-plena-800 text-white p-8">
                  <h3 className="ogg-medium text-2xl mb-4">Pleneros Destacados</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-plena-200 pl-4">
                      <p className="text-lg">
                        Manuel "El Canario" Jiménez, César Concepción, Mon Rivera y Los Pleneros de la 23 Abajo son algunos de los exponentes más destacados que han contribuido al desarrollo y preservación de la plena.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pleneros Históricos Section */}
          <div className="mb-16 bg-gradient-to-r from-plena-50 to-plena-100 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="ogg-medium text-3xl text-plena-900 mb-4">PLENEROS HISTÓRICOS</h2>
              <div className="w-32 h-1 bg-plena-600 mx-auto"></div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
              {/* Letra P */}
              <div>
                <h3 className="ogg-medium text-2xl text-plena-900 mb-2">Letra P</h3>
                <p className="text-lg text-gray-700 mb-2 font-semibold">Manuel Jiménez "Canario”<br/>Pionero de la Plena</p>
                <p className="text-lg text-gray-700">El nombre de Manuel Jiménez, conocido como "Canario", está profundamente ligado al origen y desarrollo de la Plena en Puerto Rico. En 1929, realizó grabaciones históricas de este género musical, logrando que estas se difundieran rápidamente por toda la isla y consolidando a la Plena como una de las expresiones culturales más emblemáticas de nuestra identidad. Entre estas piezas destaca Cortaron a Elena, una plena compuesta por el ponceño Joselino "Bumbum" Oppenheimer, considerado el primer virtuoso del género. La canción está dedicada a Elena Sánchez, una bailadora que sufrió un ataque en la Avenida Hostos de Ponce.</p>
              </div>
              {/* Letra L */}
              <div>
                <h3 className="ogg-medium text-2xl text-plena-900 mb-2">Letra L</h3>
                <p className="text-lg text-gray-700 mb-2 font-semibold">Gumersindo "Sindo" Mangual<br/>Un plenero del Mar</p>
                <p className="text-lg text-gray-700">Gumersindo "Sindo" Mangual, oriundo de Ponce, se estableció en Fajardo como trabajador en la industria azucarera. Allí fundó y lideró el grupo Los Pleneros del Este, convirtiéndose en un referente dentro del género de la Plena. Entre sus composiciones más destacadas se encuentra la célebre plena Tintorera del Mar. Sindo Mangual es reconocido como uno de los grandes pleneros de Puerto Rico.</p>
              </div>
              {/* Letra E */}
              <div>
                <h3 className="ogg-medium text-2xl text-plena-900 mb-2">Letra E</h3>
                <p className="text-lg text-gray-700 mb-2 font-semibold">Efraín "Mon" Rivera<br/>El Rey del Trabalenguas</p>
                <p className="text-lg text-gray-700">Efraín "Mon" Rivera, conocido como "El rey del trabalenguas", nació el 25 de mayo de 1925 en Mayagüez, Puerto Rico. Su estilo único de interpretar la plena fue una herencia directa de su padre, Ramón Rivera Alers, apodado "El viejo Mon". Este último recorría las calles de Mayagüez con su pandero, improvisando y componiendo plenas que capturaban con maestría la vida cotidiana de su comunidad. La versatilidad de Mon Rivera como multiinstrumentista le permitió alcanzar el éxito cuando se trasladó a Nueva York a mediados de la década de 1950. En esa ciudad, consolidó una destacada carrera musical, dejando un legado de composiciones memorables que enriquecieron el repertorio de la plena. Entre sus obras más icónicas se encuentran: Karakatis-ki, Aló, ¿quién llama? y Qué gente averiguá.</p>
              </div>
              {/* Letra N */}
              <div>
                <h3 className="ogg-medium text-2xl text-plena-900 mb-2">Letra N</h3>
                <p className="text-lg text-gray-700 mb-2 font-semibold">Marcial Reyes<br/>"El Sastre" de la Plena</p>
                <p className="text-lg text-gray-700">Fue conocido como "El Sastre" por su inigualable habilidad como fabricante de panderos. Sus instrumentos, considerados auténticas joyas, son altamente valorados como piezas de colección por quienes tienen el privilegio de poseerlos. Reyes fue el fundador de dos agrupaciones fundamentales para la historia de este género musical: Marcial Reyes y sus Pleneros y, más tarde, Los Pleneros de la 21, establecidos en la ciudad de Nueva York. Además de su maestría como artesano, se destacó como compositor, cantante y bailarín, demostrando ser un artista completo y un pilar de la plena. De acuerdo con el testimonio de Ramón Pedraza, "fue Marcial Reyes quien enseñó a Rafael Cortijo a tocar la plena".</p>
              </div>
              {/* Letra A */}
              <div>
                <h3 className="ogg-medium text-2xl text-plena-900 mb-2">Letra A</h3>
                <p className="text-lg text-gray-700 mb-2 font-semibold">Tito Matos<br/>"El Requinto de la Plena, pupilo de Félix Díaz"</p>
                <p className="text-lg text-gray-700">Tito matos no era solo músico, fue uno de los gestores culturales y comunitarios más activos de Puerto Rico. Dividía su tiempo entre presentaciones musicales, eventos culturales, iniciativas para la comunidad y familia. Nació en Santurce e hizo suyo el pandero, instrumento que no dejó de tocar y fomentar entre las nuevas generaciones. Perteneció a múltiples agrupaciones, comenzando por Los Sapos del Caño, Pleneros del Almendro, Grupo Agüeybaná, Pleneros del Pueblo, Pleneros del Coquí, Pleneros de la 23, Pleneros de la 21  y Viento de Agua. Falleció el 18 de enero de 2022".<br/><br/><span className="italic">El Nuevo Día, 11 de junio de 2023</span></p>
              </div>
            </div>
          </div>

          {/* Legacy Section */}
          <div className="bg-plena-900 text-white p-12">
            <div className="text-center mb-8">
              <h2 className="ogg-medium text-4xl mb-4">
                EL PERIÓDICO CANTADO DEL PUEBLO
              </h2>
              <div className="w-32 h-1 bg-plena-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-20 h-20 bg-plena-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">I</span>
                </div>
                <h3 className="text-xl mb-2">Origen Social</h3>
                <p className="text-plena-200">
                  Barrios obreros de Ponce
                </p>
              </div>

              <div>
                <div className="w-20 h-20 bg-plena-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">II</span>
                </div>
                <h3 className="text-xl mb-2">Función</h3>
                <p className="text-plena-200">
                  Crónica social cantada
                </p>
              </div>

              <div>
                <div className="w-20 h-20 bg-plena-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">III</span>
                </div>
                <h3 className="text-xl mb-2">Evolución</h3>
                <p className="text-plena-200">
                  De lo tradicional a lo contemporáneo
                </p>
              </div>
            </div>
          </div>

          {/* Performance Contexts */}
          <div className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="ogg-medium text-3xl text-brandPurple-900 mb-8 text-center">Contextos de Interpretación</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-brandPurple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🏘️</span>
                </div>
                <h3 className="ogg-medium text-xl text-brandPurple-900 mb-3">Esquinas de Barrios</h3>
                <p className="text-gray-700">
                  Interpretación espontánea en las calles y esquinas de los barrios
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-brandPurple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🎭</span>
                </div>
                <h3 className="ogg-medium text-xl text-brandPurple-900 mb-3">Festividades Culturales</h3>
                <p className="text-gray-700">
                  Presentaciones en eventos culturales y celebraciones tradicionales
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-brandPurple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">⚽</span>
                </div>
                <h3 className="ogg-medium text-xl text-brandPurple-900 mb-3">Eventos Deportivos</h3>
                <p className="text-gray-700">
                  Animación en eventos deportivos y competencias
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-brandPurple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🎄</span>
                </div>
                <h3 className="ogg-medium text-xl text-brandPurple-900 mb-3">Celebraciones Navideñas</h3>
                <p className="text-gray-700">
                  Presencia en las tradicionales celebraciones navideñas
                </p>
              </div>
            </div>
          </div>

          {/* Additional Contexts */}
          <div className="mb-16 bg-brandPurple-900 text-white p-12 rounded-lg">
            <h2 className="ogg-medium text-3xl mb-8 text-center">Otros Contextos Importantes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-brandPurple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">✊</span>
                </div>
                <h3 className="ogg-medium text-xl mb-2">Movimientos Huelguísticos</h3>
                <p className="text-brandPurple-200">
                  La plena ha sido voz de protesta y solidaridad en momentos de lucha obrera
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-brandPurple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🗳️</span>
                </div>
                <h3 className="ogg-medium text-xl mb-2">Actos Políticos</h3>
                <p className="text-brandPurple-200">
                  Presencia en manifestaciones y eventos políticos importantes
                </p>
              </div>
            </div>
          </div>

          {/* Cultural Significance */}
          <div className="mb-16 bg-gradient-to-br from-brandPurple-50 to-brandPurple-100 p-8 rounded-lg">
            <h2 className="ogg-medium text-3xl text-brandPurple-900 mb-6 text-center">Significado Cultural</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="ogg-medium text-2xl text-brandPurple-900 mb-4">Identidad Puertorriqueña</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  La Plena está profundamente vinculada a la esencia de la identidad puertorriqueña, reflejando la vida cotidiana, las luchas y las celebraciones de nuestro pueblo.
                </p>
              </div>
              
              <div>
                <h3 className="ogg-medium text-2xl text-brandPurple-900 mb-4">Patrimonio Cultural</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Como parte fundamental de nuestro patrimonio cultural, la Plena preserva y transmite las historias y emociones que definen nuestra experiencia colectiva como puertorriqueños.
                </p>
              </div>
            </div>
          </div>

          {/* Musical Characteristics */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="ogg-medium text-3xl text-brandPurple-900 mb-8 text-center">Características Musicales</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-brandPurple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">📰</span>
                </div>
                <h3 className="font-semibold text-brandPurple-900 mb-2 text-xl">Narrativa</h3>
                <p className="text-gray-600">Cuenta historias y sucesos cotidianos</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-brandPurple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">👥</span>
                </div>
                <h3 className="font-semibold text-brandPurple-900 mb-2 text-xl">Colectiva</h3>
                <p className="text-gray-600">Interpretación grupal y participación comunitaria</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-brandPurple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">💃</span>
                </div>
                <h3 className="font-semibold text-brandPurple-900 mb-2 text-xl">Bailable</h3>
                <p className="text-gray-600">Ritmo que invita al baile y la celebración</p>
              </div>
            </div>
          </div>

          {/* Imágenes para añadir en PLENA */}
          <div className="mb-16 bg-gradient-to-r from-plena-50 to-plena-100 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="ogg-medium text-3xl text-plena-900 mb-4">Imágenes para añadir en PLENA</h2>
              <div className="w-32 h-1 bg-plena-600 mx-auto"></div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <a href="https://app.box.com/s/56jhkven10kr46l55mmcujb5xw8oxxdq" target="_blank" rel="noopener noreferrer" className="text-plena-700 underline text-lg">
                Ver imágenes de la sala Plena
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
} 