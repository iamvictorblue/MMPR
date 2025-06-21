/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Search from "../public/svgs/search.svg";
import METLogo from "../public/svgs/logo.svg";
import useMediaQuery from "./useMediaQuery";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Nav({ animate = false }) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let easing = [0.6, 0.05, 0.01, 0.99];

  const fadeInUp = {
    hidden: { opacity: 0 },
    initial: {
      y: 30,
      opacity: 0,
      transition: { duration: 0.4, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: easing,
      },
    },
  };

  const staggerMenuItems = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const menuItems = [
    { href: "/bomba", logo: "/images/Bomba LOGO (BLACK).svg", name: "BOMBA" },
    { href: "/danza", logo: "/images/Danza Puertorriquena LOGO (BLACK).svg", name: "DANZA" },
    { href: "/musica-concierto", logo: "/images/Musica Concierto LOGO (BLACK).svg", name: "MÚSICA DE CONCIERTO" },
    { href: "/cuatro", logo: "/images/Galeria del Cuatro LOGO (BLACK).svg", name: "CUATRO" },
    { href: "/plena", logo: "/images/PLENA LOGO (BLACK).svg", name: "PLENA" },
    { href: "/cancion-popular", logo: "/images/CANCION POPULAR LOGO (BLACK).svg", name: "CANCIÓN POPULAR" },
    { href: "/bolero", logo: "/images/Bolero LOGO (BLACK).svg", name: "BOLERO" },
    { href: "/salsa", logo: "/images/SALSA LOGO (BLACK).svg", name: "SALSA" },
    { href: "/salon-guiro", logo: "/images/Salon Guiro LOGO (BLACK).svg", name: "SALÓN GÜIRO" },
  ];

  const NavContent = () => (
    <>
      <div className="mx-auto flex flex-row items-center pr-5 pt-5 pb-5 pl-5 lg:max-w-7xl lg:pr-0 xl:container xl:pr-5 bg-white">
        <div className="mb-4 mr-12 flex items-center font-medium text-brandPurple-900 md:mb-0 xl:mr-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/LOGO MUSEO MUSICA PR (BLACK).svg"
              alt="Museo de la Música Puertorriqueña"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>
        <div className="plain-medium hidden flex-wrap items-center justify-center gap-x-8 text-[0.9rem] text-brandPurple-700 md:ml-auto md:mr-auto lg:flex">
          <Link href="/bomba" className="transition hover:text-bomba-600">
            BOMBA
          </Link>
          <Link href="/musica-concierto" className="transition hover:text-concierto-600">
            MÚSICA DE CONCIERTO
          </Link>
          <Link href="/danza" className="transition hover:text-danza-600">
            DANZA
          </Link>
          <Link href="/cancion-popular" className="transition hover:text-cancion-600">
            CANCIÓN POPULAR
          </Link>
          <Link href="/salsa" className="transition hover:text-salsa-600">
            SALSA
          </Link>
          <Link href="/bolero" className="transition hover:text-bolero-600">
            BOLERO
          </Link>
          <Link href="/cuatro" className="transition hover:text-cuatro-600">
            CUATRO
          </Link>
          <Link href="/plena" className="transition hover:text-plena-600">
            PLENA
          </Link>
          <Link href="/salon-guiro" className="transition hover:text-brandPurple-600">
            SALÓN GÜIRO
          </Link>
        </div>
        <div className="grow xl:hidden" />
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path
                d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
                fill="#AC3A89"
              />
              <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-50 bg-white lg:hidden overflow-y-auto"
        >
          <div className="flex justify-between items-center p-5 border-b border-brandPurple-200">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/LOGO MUSEO MUSICA PR (BLACK).svg"
                alt="Museo de la Música Puertorriqueña"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#AC3A89"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="container mx-auto p-5">
            <motion.div
              variants={staggerMenuItems}
              initial="initial"
              animate="animate"
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={fadeInUp}
                  className="relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href={item.href}>
                    <div className="bg-white rounded-lg p-4 transition-all duration-300 hover:bg-gray-50 flex flex-col items-center">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={120}
                        height={60}
                        className="w-auto h-auto mb-2"
                      />
                      <span className="text-sm text-brandPurple-700 text-center plain-medium">{item.name}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );

  if (animate) {
    return (
      <motion.div
        initial="hidden"
        animate="animate"
        exit={{ opacity: 0 }}
        variants={fadeInUp}
      >
        <NavContent />
      </motion.div>
    );
  }

  return <NavContent />;
}
