/* eslint-disable @next/next/no-html-link-for-pages */
import Facebook from "../public/svgs/facebook.svg";
import Twitter from "../public/svgs/twitter.svg";
import YouTube from "../public/svgs/youtube.svg";
import Pinterest from "../public/svgs/pinterest.svg";
import Instagram from "../public/svgs/instagram.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="w-full border-t-[1px] border-brandPurple-200 bg-white">
        <div className="plain-regular flex  flex-wrap px-5 py-16 md:flex-row md:flex-nowrap md:items-start lg:container lg:mx-auto lg:items-start xl:pl-2">
          <div className="w-64 flex-shrink-0 text-left tracking-wide text-gray-600 lg:mx-auto">
            <a href="/" className="flex md:justify-start">
              <Image
                src="/images/LOGO MUSEO MUSICA PR (BLACK).svg"
                alt="Museo de la Música Puertorriqueña"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </a>
            <div className="mt-12 lg:mt-24">
              <p className="text-sm">Museo de la Música Puertorriqueña</p>
              <p className=" text-sm">Calle Principal #123</p>
              <p className="text-sm">San Juan, Puerto Rico 00901</p>
            </div>
            <div className="mt-6 lg:mt-12">
              <p className="text-sm">Teléfono: 787-555-0123</p>
            </div>
            <div className="mt-6 lg:mt-12">
              <p className="text-sm">Horario de Visita:</p>
              <p className="text-sm">Martes - Domingo</p>
              <p className="text-sm">9:00 AM - 6:00 PM</p>
              <p className="text-sm">Lunes: Cerrado</p>
            </div>
            <div className="mt-6 lg:mt-12">
              <p className="text-sm">Email: info@mmpr.org</p>
            </div>
          </div>
          <div className="-mb-10 mt-10 flex flex-grow flex-wrap md:mt-0 lg:pl-0 xl:pl-56">
            <div className="w-full lg:px-4 mb-[4.7rem]">
              <div className="ogg-medium mb-10 text-brandPurple-900">
                <h3 className="text-[1.7rem]">
                  Mantente conectado con la música
                </h3>
              </div>
              <div>
                <input
                  className="mr-7 h-14 xl:w-[32rem] lg:w-[30rem] md:w-[20rem] sm:w-[22rem] w-full rounded-xl border-2 border-brandPurple-200 bg-white px-4 py-3 placeholder-gray-400 focus:border-brandPurple-400 focus:outline-none"
                  placeholder="Email"
                />
                <button className="rounded-xl border-2 border-brandPurple-600 bg-brandPurple-600 text-white px-8 py-3 xl:w-[8rem] lg:w-[8rem] md:w-[8rem] sm:w-[8rem] w-full mt-4 sm:mt-0 hover:bg-brandPurple-700 hover:border-brandPurple-700 transition-colors">
                  Enviar
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 lg:px-4">
              <div className="plain-regular mb-10 list-none space-y-5 text-gray-700">
                <li>
                  <a href="/" className="hover:text-brandPurple-600 transition-colors">Sobre el Museo</a>
                </li>
                <li>
                  <a href="/" className="hover:text-brandPurple-600 transition-colors">Misión e Historia</a>
                </li>
                <li>
                  <a href="/" className="hover:text-brandPurple-600 transition-colors">Colección</a>
                </li>
                <li>
                  <a href="/" className="hover:text-brandPurple-600 transition-colors">Conservación</a>
                </li>
                <li>
                  <a href="/" className="hover:text-brandPurple-600 transition-colors">Prensa</a>
                </li>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:ml-32 lg:w-1/6 lg:pl-4 xl:ml-32">
              <div className="plain-regular mb-10 list-none space-y-5 text-gray-700">
                <li>
                  <a href="/" className="hover:text-brandPurple-600 transition-colors">Apoyar</a>
                </li>
                <li>
                  <a href="/" className="hover:text-brandPurple-600 transition-colors">Membresía</a>
                </li>
                <li>
                  <a href="/" className="hover:text-brandPurple-600 transition-colors">Eventos</a>
                </li>
                <li>
                  <a href="/" className="hover:text-brandPurple-600 transition-colors">Visitas Guiadas</a>
                </li>
                <li>
                  <a href="/" className="hover:text-brandPurple-600 transition-colors">Donaciones</a>
                </li>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:ml-24 lg:w-1/4 lg:px-4">
              <div className="plain-regular mb-10 list-none space-y-5 text-gray-700">
                <li>
                  <a href="/" className="hover:text-brandPurple-600 transition-colors">Mapa del Sitio</a>
                </li>
                <li>
                  <a href="/" className="hover:text-brandPurple-600 transition-colors">Términos y Condiciones</a>
                </li>
                <li>
                  <a href="/" className="hover:text-brandPurple-600 transition-colors">Política de Privacidad</a>
                </li>
                <li>
                  <a href="/" className="hover:text-brandPurple-600 transition-colors">Información de Contacto</a>
                </li>
              </div>
            </div>
            <div className="w-full lg:px-4 mt-2 mb-[4.7rem]">
              <div className="plain-regular mb-10 text-brandPurple-900 flex flex-row items-center space-x-2">
                <h3 className="text-[1.1rem] mr-12 sm:block hidden">
                  Síguenos
                </h3>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-brandPurple-600 rounded-full flex items-center justify-center">
                    <Facebook className="w-4 h-4 text-white"/>
                  </div>
                  <div className="w-8 h-8 bg-brandPurple-600 rounded-full flex items-center justify-center">
                    <Twitter className="w-4 h-4 text-white"/>
                  </div>
                  <div className="w-8 h-8 bg-brandPurple-600 rounded-full flex items-center justify-center">
                    <Pinterest className="w-4 h-4 text-white"/>
                  </div>
                  <div className="w-8 h-8 bg-brandPurple-600 rounded-full flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-white"/>
                  </div>
                  <div className="w-8 h-8 bg-brandPurple-600 rounded-full flex items-center justify-center">
                    <YouTube className="w-4 h-4 text-white"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
