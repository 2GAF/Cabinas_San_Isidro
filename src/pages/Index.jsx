import { Header } from "../common/Header.jsx";
import { Footer } from "../common/Footer.jsx";
import hero_img from "../assets/hero-img.jpg"
import habitaciones from "../assets/habitaciones.jpg"
import { Link } from 'react-router-dom';
import { Opcion } from "../buttons/Opcion.jsx";
import { useState } from "react";
import { Carrusel } from "../components/Carrusel.jsx";
import icon_parqueo from "../assets/icon-parqueo.png"
import icon_zonas from "../assets/icon-zonas.png"
import icon_mar from "../assets/icon-mar.png"
import icon_piscina from "../assets/icon-piscina.png"
import { Caracteristica } from "../components/Caracteristica.jsx";

export function Index() {

  const [activeTab, setActiveTab] = useState('Habitaciones');

  return (
    <div className="font-ovo">
      <div className="mx-4 my-[2.875rem] sm:mx-[3.75rem]">
        <Header />

      </div>
      {/* Hero */}
      <div className="relative mx-4 my-2 sm:mx-[3.75rem]">
        <img src={hero_img} alt="Hotel & Cabinas San Isidro" className="w-full h-auto rounded-[2.5rem] " />

        <div className="absolute inset-0 text-white flex items-center justify-center bg-black bg-opacity-50 rounded-[2.5rem]">
          <div className="mx-8 flex flex-col items-center justify-center">

            <h1 className="text-[clamp(30px,_7.3vw,_8rem)] text-center">Hotel & Cabinas San Isidro</h1>
            <p className="mt-4 text-[clamp(12px,_2.2vw,_2.66rem)]">Más que cabinas, su lugar familiar.</p>
          </div>
        </div>
      </div>
      {/* Hero */}

      {/* Opciones */}
      <section className="mt-6 sm:mt-10">
        <h1 className="text-center text-[clamp(26px,_2.8vw,_3.438rem)]">Contamos con 2 opciones de reservación: </h1>
        <div className="flex justify-center mt-4 sm:mt-8">
          <Opcion setter={setActiveTab} text='Habitaciones' isActive={activeTab} />
          <hr className="border-2 border-blue-1 h-auto rounded-3xl sm:mx-7 mx-5" />
          <Opcion setter={setActiveTab} text='Cabinas' isActive={activeTab} />

        </div>
        <div className="flex h-auto mt-12">
          {activeTab == 'Habitaciones' && (
            <div className="fade-in grid sm:grid-cols-2 sm:gap-8 gap-4 sm:mx-0 sm:mr-8 mx-6">
              <div className="bg-blue-1 p-3 sm:pl-0 rounded-lg ">
                <img className="w-[133rem] sm:h-[25rem] h-[19rem] object-cover rounded-xl" src={habitaciones} alt="Imagen habitaciones" />
              </div>
              <div className="flex flex-col justify-center ">
                <h3 className="text-[clamp(26px,_2.8vw,_3.438rem)] text-blue-1">Habitaciones</h3>
                <p className="font-outfit text-[clamp(16px,_1.7vw,_34px)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, porro quo. Consectetur nam voluptatum in blanditiis recusandae odio voluptates earum magnam quia? Illo praesentium neque ipsum? Quod non nesciunt atque!</p>
                <div>
                  <Link to="/habitaciones" className="block text-center text-[clamp(16px,_1.7vw,_34px)] bg-blue-1 py-4 text-white w-full rounded-2xl mt-4">Ver más</Link>
                </div>
              </div>
            </div>
          )}
          {activeTab == 'Cabinas' && (
            <div className="fade-out grid sm:grid-cols-2 sm:gap-8 gap-4 sm:mx-0 sm:ml-8 mx-6">
              <div className="bg-blue-1 p-3 rounded-lg block sm:hidden">
                <img className="w-[133rem] sm:h-[25rem] h-[19rem] object-cover rounded-xl" src={habitaciones} alt="Imagen habitaciones" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[clamp(26px,_2.8vw,_3.438rem)] text-blue-1">Cabinas</h3>
                <p className="font-outfit text-[clamp(16px,_1.7vw,_34px)]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, porro quo. Consectetur nam voluptatum in blanditiis recusandae odio voluptates earum magnam quia? Illo praesentium neque ipsum? Quod non nesciunt atque!</p>
                <Link to="/cabinas" className="block text-center text-[clamp(16px,_1.7vw,_34px)] bg-blue-1 py-4 text-white w-full rounded-2xl mt-4">Ver más</Link>
              </div>
              <div className="bg-blue-1 p-3 sm:pr-0 rounded-lg hidden sm:block">
                <img className="w-[133rem] h-[25rem] object-cover rounded-xl" src={habitaciones} alt="Imagen habitaciones" />
              </div>
            </div>

          )}
        </div>
      </section>
      {/* Opciones */}

      {/* Servicios ofrecidos */}
      <section className="mt-6 sm:mt-10 mx-4 sm:mx-[3.75rem] mb-8">
        <h2 className="text-center text-[clamp(26px,_2.8vw,_3.438rem)]">Servicios Ofrecidos:</h2>
          <Carrusel />
          <div className="flex justify-around mt-4">
            <Caracteristica icon={icon_parqueo} texto={'Parqueo Interno'}/>
            <Caracteristica icon={icon_zonas} texto={'Zonas Verdes'}/>
            <Caracteristica icon={icon_mar} texto={'Frente al mar'}/>
            <Caracteristica icon={icon_piscina} texto={'Cinco piscinas'}/>
          </div>
      </section>
      {/* Servicios ofrecidos */}
      <Footer/>
    </div>
  )
}