/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import useMediaQuery from "../useMediaQuery";
import Image from "next/image";
import Link from "next/link";

export default function Landing({ variants }) {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.7,
      },
    },
  };

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 3,
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const fadeInUpMobile = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const fadeInUp2Mobile = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const fadeInUp2 = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 3.4,
        duration: 0.6,
        ease: easing,
      },
    },
  };

  return (
    <>
      <div className="mx-auto my-0 flex max-w-7xl flex-col justify-center px-4 lg:my-20 lg:items-center">
        <div className="relative flex justify-center">
          <AnimateSharedLayout type="crossfade">
            <motion.div variants={container} initial="hidden" animate="show">
              <div className="z-10 w-full text-center relative">
                <motion.div
                  variants={isDesktop ? fadeInUp : fadeInUpMobile}
                  className="mb-16 mt-8 lg:mt-12"
                >
                  <Image
                    src="/images/LOGO MUSEO.png"
                    alt="Museo de la Música Puertorriqueña"
                    width={300}
                    height={300}
                    className="mx-auto w-auto h-auto"
                    priority
                  />
                </motion.div>
                <h1 className="ogg-medium mb-4 text-[3.5rem] leading-[3.5rem] text-brandPurple-900 lg:text-[6.5rem] lg:leading-[6.5rem]">
                  Museo de la Música Puertorriqueña
                </h1>
                <h2 className="text-2xl mb-12 text-gray-700">
                  Un mosaico de nuestras músicas
                </h2>
              </div>
            </motion.div>
          </AnimateSharedLayout>
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-16">
            <p>
              El Instituto de Cultura Puertorriqueña, fiel a su misión de salvaguardar y promover el quehacer cultural de nuestra Isla, se enorgullece en presentar el Museo de la Música Puertorriqueña: un espacio curatorial concebido para rendir homenaje a los géneros, compositores e intérpretes que constituyen los pilares de nuestro patrimonio musical.
            </p>
            
            <p>
              A pesar de su condición colonial en el plano político, Puerto Rico ha sido —y continúa siendo— una potencia en el escenario musical internacional. Este museo nace para reconocer y celebrar esa grandeza.
            </p>
            
            <p>
              La exhibición permanente está compuesta por 53 exposiciones, diseñadas con un enfoque vanguardista y visualmente contrastante, nunca antes visto en una institución museística de la Isla. Cada sala forma parte de un mosaico que recorre la diversidad, profundidad y trascendencia de nuestras expresiones musicales, desde el periodo colonial hasta la década de 1990.
            </p>

            <p>
              Consciente de que la magnitud de nuestro legado merecería espacios museográficos de mayor escala, esta propuesta curatorial ha priorizado el valor histórico de las manifestaciones seleccionadas. La experiencia se enriquece con cientos de muestras auditivas, imágenes de avanzada estética y más de un centenar de piezas expositivas, entre instrumentos musicales, partituras y objetos de alto valor patrimonial.
            </p>

            <p>
              Reconociendo que resulta imposible abarcar la totalidad de nuestra expresión musical, el término mosaico se adopta como símbolo de síntesis: una invitación a contemplar, valorar y reencontrarnos con nuestra identidad cultural. Esta es una afirmación de orgullo nacional y de reconocimiento de nuestra música como reflejo vivo de la raíz, la historia y el alma del pueblo puertorriqueño.
            </p>

            <div className="mt-8 text-right">
              <p className="text-brandPurple-700 font-semibold">Dr. José Antonio López</p>
              <p className="text-gray-600">Curador</p>
              <p className="text-gray-600">25 de junio de 2025</p>
            </div>
          </div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bomba Room */}
            <Link href="/bomba" className="group">
              <div className="p-8 rounded-lg transition-all duration-300 bg-white hover:bg-orange-100 border border-gray-200 flex flex-col items-center">
                <Image
                  src="/images/Bomba LOGO (BLACK).svg"
                  alt="Bomba"
                  width={200}
                  height={100}
                  className="w-auto h-24 mb-4"
                />
              </div>
            </Link>

            {/* Danza Room */}
            <Link href="/danza" className="group">
              <div className="p-8 rounded-lg transition-all duration-300 bg-white hover:bg-gray-100 border border-gray-200 flex flex-col items-center">
                <Image
                  src="/images/Danza Puertorriquena LOGO (BLACK).svg"
                  alt="Danza"
                  width={200}
                  height={100}
                  className="w-auto h-24 mb-4"
                />
              </div>
            </Link>

            {/* Música de Concierto Room */}
            <Link href="/musica-concierto" className="group">
              <div className="p-8 rounded-lg transition-all duration-300 bg-white hover:bg-red-100 border border-gray-200 flex flex-col items-center">
                <Image
                  src="/images/Musica Concierto LOGO (BLACK).svg"
                  alt="Música de Concierto"
                  width={200}
                  height={100}
                  className="w-auto h-24 mb-4"
                />
              </div>
            </Link>

            {/* Galería del Cuatro Room */}
            <Link href="/cuatro" className="group">
              <div className="p-8 rounded-lg transition-all duration-300 bg-white hover:bg-blue-100 border border-gray-200 flex flex-col items-center">
                <Image
                  src="/images/Galeria del Cuatro LOGO (BLACK).svg"
                  alt="Galería del Cuatro"
                  width={200}
                  height={100}
                  className="w-auto h-24 mb-4"
                />
              </div>
            </Link>

            {/* Plena Room */}
            <Link href="/plena" className="group">
              <div className="p-8 rounded-lg transition-all duration-300 bg-white hover:bg-green-100 border border-gray-200 flex flex-col items-center">
                <Image
                  src="/images/PLENA LOGO (BLACK).svg"
                  alt="Plena"
                  width={200}
                  height={100}
                  className="w-auto h-24 mb-4"
                />
              </div>
            </Link>

            {/* Canción Popular Room */}
            <Link href="/cancion-popular" className="group">
              <div className="p-8 rounded-lg transition-all duration-300 bg-white hover:bg-amber-100 border border-gray-200 flex flex-col items-center">
                <Image
                  src="/images/CANCION POPULAR LOGO (BLACK).svg"
                  alt="Canción Popular"
                  width={200}
                  height={100}
                  className="w-auto h-24 mb-4"
                />
              </div>
            </Link>

            {/* Bolero Room */}
            <Link href="/bolero" className="group">
              <div className="p-8 rounded-lg transition-all duration-300 bg-white hover:bg-gray-100 border border-gray-200 flex flex-col items-center">
                <Image
                  src="/images/Bolero LOGO (BLACK).svg"
                  alt="Bolero"
                  width={200}
                  height={100}
                  className="w-auto h-24 mb-4"
                />
              </div>
            </Link>

            {/* Salsa Room */}
            <Link href="/salsa" className="group">
              <div className="p-8 rounded-lg transition-all duration-300 bg-white hover:bg-orange-100 border border-gray-200 flex flex-col items-center">
                <Image
                  src="/images/SALSA LOGO (BLACK).svg"
                  alt="Salsa"
                  width={200}
                  height={100}
                  className="w-auto h-24 mb-4"
                />
              </div>
            </Link>

            {/* Salón Güiro Room */}
            <Link href="/salon-guiro" className="group">
              <div className="p-8 rounded-lg transition-all duration-300 bg-white hover:bg-purple-100 border border-gray-200 flex flex-col items-center">
                <Image
                  src="/images/Salon Guiro LOGO (BLACK).svg"
                  alt="Salón Güiro"
                  width={200}
                  height={100}
                  className="w-auto h-24 mb-4"
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
