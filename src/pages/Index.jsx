import { Header } from "../common/Header.jsx";
import { Footer } from "../common/Footer.jsx";
import hero_img from "../assets/hero-img.jpg"
import { Opcion } from "../buttons/Opcion.jsx";
import { useState } from "react";
import { Carrusel } from "../components/Carrusel.jsx";
import icon_parqueo from "../assets/icon-parqueo.png"
import icon_zonas from "../assets/icon-zonas.png"
import icon_mar from "../assets/icon-mar.png"
import icon_piscina from "../assets/icon-piscina.png"
import { Caracteristica } from "../components/Caracteristica.jsx";
import habitaciones from '../assets/imgs/H5.jpg'
import cabinas from '../assets/imgs/Inst20.jpg'
import { VerMas } from "../buttons/VerMas.jsx";
import { CarruselUsers } from "../components/CarruselUsers.jsx";
import { useEffect } from "react";


export function Index() {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  const [activeTab, setActiveTab] = useState('Habitaciones');

  return (
    <div className="font-ovo">
      <div className="mx-4 my-[2.875rem] sm:mx-[3.75rem]">
        <Header />

      </div>
      {/* Hero */}
      <div className="relative my-2 2xl:h-[60rem] xl:h-[50rem] lg:h-[40rem]">
        <img src={hero_img} alt="Hotel & Cabinas San Isidro" className="object-cover w-full h-full" />

        <div className="absolute inset-0 text-white flex items-center justify-center bg-black bg-opacity-50">
          <div className="mx-8 flex flex-col items-center justify-center">

            <h1 className="text-[clamp(30px,_7.3vw,_8rem)] text-center">Hotel & Cabinas San Isidro</h1>
            <p className="mt-4 text-[clamp(12px,_2.2vw,_2.66rem)]">Más que cabinas, su lugar familiar.</p>
          </div>
        </div>
      </div>
      {/* Hero */}

      <div className="mx-6 sm:mx-14 md:mx-[10%] 2xl:mx-[15%] mb-5">
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
              <div className="fade-in grid lg:grid-cols-3 sm:gap-8 gap-4 sm:mx-0 mx-6">
                <div className="col-start-1 col-end-3">
                  <img className="w-[133rem] object-cover rounded-xl h-full max-h-[40rem] object-bottom" src={habitaciones} alt="Imagen habitaciones" />
                </div>
                <div className="flex flex-col justify-center col-start-1 col-end-3 lg:col-start-3 lg:col-end-4">
                  <h3 className="text-[clamp(26px,_2.8vw,_3.438rem)] text-blue-1">Habitaciones</h3>
                  <p className="font-outfit text-[clamp(16px,_1.7vw,_22.66px)]">¡Bienvenidos a nuestras acogedoras habitaciones con aire acondicionado, perfectas para parejas o trabajadores que buscan comodidad y conveniencia en Puntarenas! Ideal para descansar después de un día de actividades. Disfrute de dormitorios espaciosos y confortables, aire acondicionado para mantener una temperatura agradable, acceso a 5 piscinas, zonas verdes y al mar, proporcionando todo lo necesario para una estancia placentera y productiva.</p>
                  <div>
                    <VerMas option={'Habitaciones'} enlace={'/Hospedaje'} text={'Ver más'} />
                  </div>
                </div>
              </div>
            )}
            {activeTab == 'Cabinas' && (
              <div className="fade-out grid lg:grid-cols-3 sm:gap-8 gap-4 sm:mx-0 mx-6">
                <div className="col-start-1 col-end-3 block lg:hidden">
                  <img className="w-[133rem] object-cover rounded-xl h-full" src={cabinas} alt="Imagen habitaciones" />
                </div>
                <div className="flex flex-col justify-center col-start-1 col-end-3 lg:col-start-1 lg:col-end-2">
                  <h3 className="text-[clamp(26px,_2.8vw,_3.438rem)] text-blue-1">Cabinas</h3>
                  <p className="font-outfit text-[clamp(16px,_1.7vw,_22.66px)]">¡Bienvenidos a nuestras encantadoras cabinas, perfectas para unas vacaciones inolvidables. Estas cuentan con utensilios básicos de cocina y refrigeradora, ideal para preparar comidas sencillas durante su estancia. Disfrute de amplias áreas comunes donde la familia puede reunirse, acceso a 5 piscinas, zonas verdes y al mar, ofreciendo todo lo necesario para una experiencia vacacional memorable.</p>
                  <div>
                    <VerMas enlace={'/Hospedaje'} text={'Ver más'} />
                  </div>
                </div>
                <div className="col-start-2 md:col-end-4">
                  <img className="w-[133rem] object-cover rounded-xl h-full hidden lg:block max-h-[40rem]" src={cabinas} alt="Imagen habitaciones" />
                </div>
              </div>

            )}
          </div>
        </section>
        {/* Opciones */}

        {/* Servicios ofrecidos */}
        <section className="mt-6 sm:mt-10">
          <h2 className="text-center text-[clamp(26px,_2.8vw,_3.438rem)]">Servicios Ofrecidos:</h2>
          <Carrusel />
          <div className="flex justify-around mt-4">
            <Caracteristica icon={icon_parqueo} texto={'Parqueo Interno'} />
            <Caracteristica icon={icon_zonas} texto={'Zonas Verdes'} />
            <Caracteristica icon={icon_mar} texto={'Frente al mar'} />
            <Caracteristica icon={icon_piscina} texto={'Cinco piscinas'} />
          </div>
        </section>
        {/* Servicios ofrecidos */}
        {/* Opiniones */}
        <section className="mt-6 sm:mt-10 mb-8 sm:mb-12">
          <h2 className="text-center text-[clamp(26px,_2.8vw,_3.438rem)]">Opiniones de nuestros clientes</h2>
          <CarruselUsers/>
        </section>
        {/* Opiniones */}
      </div>
      <Footer />
    </div>
  )
}