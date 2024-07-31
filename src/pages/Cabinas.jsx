import { Header } from "../common/Header.jsx";
import { Footer } from "../common/Footer.jsx";
import { Opcion } from "../buttons/Opcion.jsx";
import { useState, useEffect } from "react";
import cabina from "../assets/imgs/cabina.jpg";
import habitacion from "../assets/imgs/habitacion.jpg";
import { Cantidad } from "../buttons/Cantidad.jsx";
import fanBlue from "../assets/fanBlack.svg";
import tvBlue from "../assets/tvBlack.svg";
import { useCabInfo } from "../hooks/useCabInfo.js";
import { CabinaCard } from "../buttons/CabinaCard.jsx";

export function Cabinas() {

    const [activeTab, setActiveTab] = useState('Cabinas');
    const [activeCap, setCapacidad] = useState('3-4');
    console.log(activeCap);
    const { cabinaEscogida } = useCabInfo(activeCap);

    //inidica cuando tarjeta esta al frente
    const [indiceActual, setIndiceActual] = useState(0);
    const [tarjetaAlFrente, setTarjetaAlFrente] = useState(true);

    //Arreglo que contiene las imagenes de la cabina escogida
    const imagenes = [
        cabina,
        habitacion,
    ];

    //permite cambiar la imagen cada 3 segundos
    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndiceActual((prevIndice) => (prevIndice + 1) % imagenes.length);
        }, 3000); // Cambia de imagen cada 3 segundos

        return () => clearInterval(intervalo);
    }, [imagenes.length]);

    //camabia la tarjeta de la cabina al hacer click
    const manejarClick = () => {
        setTarjetaAlFrente(!tarjetaAlFrente);
    };

    return (
        <div>
            <Header />
            {/* Seccion para las cabinas */}
            {activeTab == 'Cabinas' && (
                <div className="md:px-[3.125rem] px-[1rem]">
                    <div className="flex justify-center mt-4 sm:mt-8 py-[0.813rem]">
                        <Opcion setter={setActiveTab} text='Habitaciones' isActive={activeTab} />
                        <hr className="border-2 border-blue-1 h-auto rounded-3xl sm:mx-7 mx-5" />
                        <Opcion setter={setActiveTab} text='Cabinas' isActive={activeTab} />
                    </div>
                    <div className=" flex  justify-center">
                        <div className=" w-custom-img relative py-3w" onClick={manejarClick} role="button">
                            <img className={` transition-transform duration-500 ease-in-out ${tarjetaAlFrente ? 'z-0' : 'z-10'}`} src={imagenes[indiceActual]} alt="" />
                            <div
                                className={`absolute top-5 lg:top-16 right-[-2rem] md:right-[-6rem] w-[11.25rem] h-[12.375rem] md:w-[22.375rem] md:h-[20.375rem] lg:w-[20rem] md:top-2 bg-blue-1 font-outfit text-white flex items-center justify-center shadow-black shadow-lg rounded-lg transition-transform duration-500 ease-in-out ${tarjetaAlFrente ? 'z-0 transform translate-x-0 ' : 'z-[-10] transform -translate-x-10'}`}
                            >
                                <div className="px-[0.626rem] flex flex-col gap-y-[0.625rem]">
                                    <h1 className="text-3xl font-medium hidden md:block">{cabinaEscogida.titulo}</h1>
                                    <h1 className="text-xl font-bold md:font-light">{cabinaEscogida.precio}</h1>
                                    <p className="font-outfit text-base hidden md:block">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad repudiandae dolores excepturi perspiciatis blanditiis rem consequatur eveniet alias, cum sit voluptate accusamus optio hic dicta id tenetur? Perferendis, molestiae!
                                    </p>
                                    <p className="text-center text-base font-light md:hidden">Lorem ipsum dolor sit amet. Ex voluptatem autem ut suscipit</p>
                                    <a href="/"><div className="bg-white rounded-xl py-[0.313rem] flex justify-center text-blue-1 text-ovo text-base">Reservar</div></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* selector de la capacidad de la cabina movil */}
                    <section className="flex justify-center items-center gap-x-[0.938rem] py-[1.625rem] lg:hidden">
                        <h1 className="font-outfit text-links font-medium">Personas:</h1>
                        <Cantidad setter={setCapacidad} text='3-4' isActive={activeCap} />
                        <Cantidad setter={setCapacidad} text='5-6' isActive={activeCap} />
                        <Cantidad setter={setCapacidad} text='5-6*' isActive={activeCap} />
                        <Cantidad setter={setCapacidad} text='8-9' isActive={activeCap} />
                    </section>

                    {/* selector de la capacidad de la cabina desktop */}
                    <section className="justify-center items-center gap-x-[0.938rem] py-[1.625rem] hidden lg:flex">
                        <CabinaCard setter={setActiveTab} text='3-4 Personas' isActive={activeTab} />
                        <CabinaCard setter={setActiveTab} text='5-6 Personas' isActive={activeTab} />
                        <CabinaCard setter={setActiveTab} text='5-6* Personas' isActive={activeTab} />
                        <CabinaCard setter={setActiveTab} text='8-9 Personas' isActive={activeTab} />
                    </section>


                    <section className="md:hidden">
                        <h1 className="font-outfit text-links font-medium">Descripción:</h1>
                        <p className="font-outfit text-base md:hidden">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad repudiandae dolores excepturi perspiciatis blanditiis rem consequatur eveniet alias, cum sit voluptate accusamus optio hic dicta id tenetur? Perferendis, molestiae!</p>

                        <div className="flex gap-x-[0.938rem] py-[0.813rem]">
                            <h1 className="font-outfit text-links font-medium">Servicios:</h1>
                            <img src={fanBlue} alt="" />
                            <img src={tvBlue} alt="" />
                        </div>
                    </section>

                    <div className="bg-blue-1 rounded-xl py-[0.626rem] flex justify-center mb-[1.625rem] lg:hidden">
                        <a className="text-white text-ovo text-base" href="#">Reservar</a>
                    </div>
                    <p className="font-texto text-gray-1 font-outfit text-center pb-14">Lorem ipsum dolor sit amet. Ex voluptatem autem ut suscipitLorem ipsum dolor sit amet. Ex voluptatem autem ut suscipitLorem ipsum dolor sit amet. Ex voluptatem autem ut suscipit</p>
                </div>
            )}
            {/* Seccion para las habitaciones */}
            {activeTab == 'Habitaciones' && (
                <div className="md:px-[3.125rem] px-[1rem]">
                    <div className="flex justify-center mt-4 sm:mt-8 py-[0.813rem]">
                        <Opcion setter={setActiveTab} text='Habitaciones' isActive={activeTab} />
                        <hr className="border-2 border-blue-1 h-auto rounded-3xl sm:mx-7 mx-5" />
                        <Opcion setter={setActiveTab} text='Cabinas' isActive={activeTab} />
                    </div>
                    <div className=" flex  justify-center">
                        <div className=" w-custom-img relative py-3w" onClick={manejarClick} role="button">
                            <img className={` transition-transform duration-500 ease-in-out ${tarjetaAlFrente ? 'z-0' : 'z-10'}`} src={imagenes[indiceActual]} alt="" />
                            <div
                                className={`absolute top-5 lg:top-16 left-[-2rem] md:left-[-6rem] w-[11.25rem] h-[12.375rem] md:w-[22.375rem] md:h-[20.375rem] lg:w-[20rem] md:top-2 bg-red-700 font-outfit text-white flex items-center justify-center shadow-black shadow-lg rounded-lg transition-transform duration-500 ease-in-out ${tarjetaAlFrente ? 'z-0 -transform translate-x-0 ' : 'z-[-10] transform translate-x-10'}`}
                            >
                                <div className="px-[0.626rem] flex flex-col gap-y-[0.625rem]">
                                    <h1 className="text-3xl font-medium hidden md:block">{cabinaEscogida.titulo}</h1>
                                    <h1 className="text-xl font-bold md:font-light">{cabinaEscogida.precio}</h1>
                                    <p className="font-outfit text-base hidden md:block">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad repudiandae dolores excepturi perspiciatis blanditiis rem consequatur eveniet alias, cum sit voluptate accusamus optio hic dicta id tenetur? Perferendis, molestiae!
                                    </p>
                                    <p className="text-center text-base font-light md:hidden">Lorem ipsum dolor sit amet. Ex voluptatem autem ut suscipit</p>
                                    <a href="/"><div className="bg-white rounded-xl py-[0.313rem] flex justify-center text-blue-1 text-ovo text-base">Reservar</div></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* selector de la capacidad de la cabina movil */}
                    <section className="flex justify-center items-center gap-x-[0.938rem] py-[1.625rem] lg:hidden">
                        <h1 className="font-outfit text-links font-medium">Personas:</h1>
                        <Cantidad setter={setCapacidad} text='1' isActive={activeCap} />
                        <Cantidad setter={setCapacidad} text='2' isActive={activeCap} />
                        <Cantidad setter={setCapacidad} text='3' isActive={activeCap} />
                        <Cantidad setter={setCapacidad} text='4' isActive={activeCap} />
                    </section>

                    {/* selector de la capacidad de la cabina desktop */}
                    <section className="justify-center items-center gap-x-[0.938rem] py-[1.625rem] hidden lg:flex">
                        <CabinaCard setter={setActiveTab} text='1 Persona' isActive={activeTab} />
                        <CabinaCard setter={setActiveTab} text='2 Personas' isActive={activeTab} />
                        <CabinaCard setter={setActiveTab} text='3 Personas' isActive={activeTab} />
                        <CabinaCard setter={setActiveTab} text='4 Personas' isActive={activeTab} />
                    </section>


                    <section className="md:hidden">
                        <h1 className="font-outfit text-links font-medium">Descripción:</h1>
                        <p className="font-outfit text-base md:hidden">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad repudiandae dolores excepturi perspiciatis blanditiis rem consequatur eveniet alias, cum sit voluptate accusamus optio hic dicta id tenetur? Perferendis, molestiae!</p>

                        <div className="flex gap-x-[0.938rem] py-[0.813rem]">
                            <h1 className="font-outfit text-links font-medium">Servicios:</h1>
                            <img src={fanBlue} alt="" />
                            <img src={tvBlue} alt="" />
                        </div>
                    </section>

                    <div className="bg-blue-1 rounded-xl py-[0.626rem] flex justify-center mb-[1.625rem] lg:hidden">
                        <a className="text-white text-ovo text-base" href="#">Reservar</a>
                    </div>
                    <p className="font-texto text-gray-1 font-outfit text-center pb-14">Lorem ipsum dolor sit amet. Ex voluptatem autem ut suscipitLorem ipsum dolor sit amet. Ex voluptatem autem ut suscipitLorem ipsum dolor sit amet. Ex voluptatem autem ut suscipit</p>
                </div>
            )}



            <Footer />
        </div>
    )
}