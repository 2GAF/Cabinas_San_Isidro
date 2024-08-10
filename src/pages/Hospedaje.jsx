import { Header } from "../common/Header.jsx";
import { Footer } from "../common/Footer.jsx";
import { Opcion } from "../buttons/Opcion.jsx";
import { useState, useEffect, useRef  } from "react";
import { Cantidad } from "../buttons/Cantidad.jsx";
import fanBlue from "../assets/fanBlack.svg";
import tvBlue from "../assets/tvBlack.svg";
import acBlue from "../assets/acBlack.svg";
import { useCabInfo } from "../hooks/useCabInfo.js";
import { CabinaCard } from "../buttons/CabinaCard.jsx";
import { useLocation } from "react-router-dom";


export function Hospedaje() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.state||'Cabinas');
    const [activeCap, setActiveCap] = useState('3-4');
    const { cabinaEscogida } = useCabInfo(activeCap);

    // Indica cuando la tarjeta está al frente
    const [indiceActual, setIndiceActual] = useState(0);
    const [tarjetaAlFrente, setTarjetaAlFrente] = useState(true);
    const tarjetaRef = useRef(null);

    // Arreglo que contiene las imágenes de la cabina escogida
    const imagenes = cabinaEscogida?.image ?? [];

    // Permite cambiar la imagen cada 1.8 segundos
    useEffect(() => {
        if (imagenes.length > 0) {
            const intervalo = setInterval(() => {
                setIndiceActual((prevIndice) => (prevIndice + 1) % imagenes.length);
            }, 1800); // Cambia de imagen cada 3 segundos

            return () => clearInterval(intervalo);
        }
    }, [imagenes.length]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Cambia la tarjeta de la cabina al hacer click
    const manejarClick = () => {
        setTarjetaAlFrente(!tarjetaAlFrente);
    };

    useEffect(() => {
        if (activeTab === 'Cabinas') {
            setActiveCap('3-4');
        } else {
            setActiveCap('1');
        }
    }, [activeTab]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tarjetaRef.current && !tarjetaRef.current.contains(event.target)) {
                setTarjetaAlFrente(true);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [tarjetaRef]);

    return (
        <div>
            <div className=" mx-4 my-[2.875rem] sm:mx-[3.75rem]">
                <Header />
            </div>

            {/* Sección para las cabinas */}
            {activeTab === 'Cabinas' && (
                <div className="md:px-[3.125rem] px-[1rem]">
                    <div className="flex justify-center font-ovo mt-4 sm:mt-8 py-[0.813rem]">
                        <Opcion setter={setActiveTab} text='Habitaciones' isActive={activeTab} />
                        <hr className="border-2 border-blue-1 h-auto rounded-3xl sm:mx-7 mx-5" />
                        <Opcion setter={setActiveTab} text='Cabinas' isActive={activeTab} />
                    </div>
                    <div className="flex  justify-center py-5 md:py-14">
                        <button className="w-custom-img relative py-3w" onClick={manejarClick} ref={tarjetaRef}>
                            <img className={`transition-transform duration-500 ease-in-out ${tarjetaAlFrente ? 'z-0' : 'z-10'}`} src={imagenes[indiceActual]} alt="" />
                            <div className={`absolute top-1 lg:top-12 right-[-2rem] md:right-[-6rem] w-[11.25rem] h-[12.375rem] md:w-[20.375rem] md:h-[15.375rem] lg:w-[20rem] lg:h-[20rem] md:top-2 bg-blue-1 font-outfit text-white flex items-center justify-center shadow-black shadow-lg rounded-lg transition-transform duration-500 ease-in-out ${tarjetaAlFrente ? 'z-0 transform translate-x-0 ' : 'z-[-10] transform -translate-x-10'}`}>
                                <div className="px-[0.626rem] flex flex-col gap-y-[0.625rem]">
                                    <h1 className="text-3xl font-medium hidden md:block">{cabinaEscogida?.titulo}</h1>
                                    <h1 className="text-xl font-bold md:font-light">{cabinaEscogida?.precio}</h1>
                                    <p className="font-outfit text-base hidden lg:block">
                                        {cabinaEscogida?.descripcion}
                                    </p>
                                    <p className="text-center text-base font-light lg:hidden">Ideal para las familias pequeñas y grandes.</p>
                                    <a href="https://wa.me/message/ZGYH7OW6HZAEN1"><div className="bg-white rounded-xl py-[0.313rem] flex justify-center text-blue-1 text-ovo text-base">Reservar</div></a>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Selector de la capacidad de la cabina móvil */}
                    <section className="flex flex-wrap justify-center items-center gap-x-[0.938rem] py-[1.625rem] lg:hidden">
                        <h1 className="font-outfit text-links font-medium">Personas:</h1>
                        <Cantidad setter={setActiveCap} text='3-4' isActive={activeCap} />
                        <Cantidad setter={setActiveCap} text='5-6' isActive={activeCap} />
                        <Cantidad setter={setActiveCap} text='5-6*' isActive={activeCap} />
                        <Cantidad setter={setActiveCap} text='8-9' isActive={activeCap} />
                    </section>

                    {/* Selector de la capacidad de la cabina desktop */}
                    <section className="justify-center items-center gap-x-[0.938rem] py-[1.625rem] hidden lg:flex">
                        <CabinaCard setter={setActiveCap} text='3-4 Personas' isActive={activeCap} servicio={'Abanico'} />
                        <CabinaCard setter={setActiveCap} text='5-6 Personas' isActive={activeCap} servicio={'Abanico'} />
                        <CabinaCard setter={setActiveCap} text='5-6* Personas' isActive={activeCap} servicio={'A/C'} />
                        <CabinaCard setter={setActiveCap} text='8-9 Personas' isActive={activeCap} servicio={'Abanico'} />
                    </section>

                    <section className="lg:hidden">
                        <h1 className="font-outfit text-links font-medium">Descripción:</h1>
                        <p className="font-outfit text-base lg:hidden">{cabinaEscogida?.descripcion}</p>

                        <div className="flex gap-x-[0.938rem] py-[0.813rem]">
                            <h1 className="font-outfit text-links font-medium">Servicios:</h1>
                            <img src={cabinaEscogida.servicio === 'Abanico' ? fanBlue : acBlue} alt="" />
                            <img src={tvBlue} alt="" />
                        </div>
                    </section>

                    <div className="bg-blue-1 rounded-xl py-[0.626rem] flex justify-center mb-[1.625rem] lg:hidden">
                        <a className="text-white text-ovo text-base" href="https://wa.me/message/ZGYH7OW6HZAEN1">Reservar</a>
                    </div>
                    <p className="font-links text-gray-1 font-outfit text-center pb-14">Ser permite máximo una persona adicional en cada cabina (esto por motivos de seguridad), la cual debe cancelar un monto de ₡5.000 cada noche y debe traer su propio colchón.</p>
                </div>
            )}
            {/* Sección para las habitaciones */}
            {activeTab === 'Habitaciones' && (
                <div className="md:px-[3.125rem] px-[1rem]">
                    <div className="flex justify-center mt-4 sm:mt-8 py-[0.813rem]">
                        <Opcion setter={setActiveTab} text='Habitaciones' isActive={activeTab} />
                        <hr className="border-2 border-blue-1 h-auto rounded-3xl sm:mx-7 mx-5" />
                        <Opcion setter={setActiveTab} text='Cabinas' isActive={activeTab} />
                    </div>
                    <div className="flex justify-center py-5 md:py-14">
                        <div className="w-custom-img relative py-3w" onClick={manejarClick} ref={tarjetaRef} role="button" tabIndex="0">
                            <img className={`transition-transform duration-500 ease-in-out ${tarjetaAlFrente ? 'z-0' : 'z-10'}`} src={imagenes[indiceActual]} alt="" />
                            <button className={`absolute top-1 lg:top-16 left-[-2rem] md:left-[-6rem] w-[11.25rem] h-[12.375rem] md:w-[22.375rem] md:h-[20.375rem] lg:w-[20rem] md:top-2 bg-blue-1 font-outfit text-white flex items-center justify-center shadow-black shadow-lg rounded-lg transition-transform duration-500 ease-in-out ${tarjetaAlFrente ? 'z-0 -transform translate-x-0 ' : 'z-[-10] transform translate-x-10'}`}>
                                <div className="px-[0.626rem] flex flex-col gap-y-[0.625rem]">
                                    <h1 className="text-3xl font-medium hidden md:block">{cabinaEscogida?.titulo}</h1>
                                    <h1 className="text-xl font-bold md:font-light">{cabinaEscogida?.precio}</h1>
                                    <p className="font-outfit text-base hidden md:block">
                                        {cabinaEscogida?.descripcion}
                                    </p>
                                    <p className="text-center text-base font-light md:hidden">Ideal para parejas y trabajadores.</p>
                                    <a href="https://wa.me/message/ZGYH7OW6HZAEN1"><div className="bg-white rounded-xl py-[0.313rem] flex justify-center text-blue-1 text-ovo text-base">Reservar</div></a>
                                </div>
                                </button>

                        </div>
                    </div>

                    {/* Selector de la capacidad de la cabina móvil */}
                    <section className="flex flex-wrap justify-center items-center gap-x-[0.938rem] py-[1.625rem] lg:hidden">
                        <h1 className="font-outfit text-links font-medium">Personas:</h1>
                        <Cantidad setter={setActiveCap} text='1' isActive={activeCap} />
                        <Cantidad setter={setActiveCap} text='2' isActive={activeCap} />
                        <Cantidad setter={setActiveCap} text='3' isActive={activeCap} />
                        <Cantidad setter={setActiveCap} text='4' isActive={activeCap} />
                    </section>

                    {/* Selector de la capacidad de la cabina desktop */}
                    <section className="justify-center items-center gap-x-[0.938rem] py-[1.625rem] hidden lg:flex">
                        <CabinaCard setter={setActiveCap} text='1 Personas' isActive={activeCap} servicio={'A/C'} />
                        <CabinaCard setter={setActiveCap} text='2 Personas' isActive={activeCap} servicio={'A/C'} />
                        <CabinaCard setter={setActiveCap} text='3 Personas' isActive={activeCap} servicio={'A/C'} />
                        <CabinaCard setter={setActiveCap} text='4 Personas' isActive={activeCap} servicio={'A/C'} />
                    </section>

                    <section className="md:hidden">
                        <h1 className="font-outfit text-links font-medium">Descripción:</h1>
                        <p className="font-outfit text-base md:hidden">{cabinaEscogida?.descripcion}</p>

                        <div className="flex gap-x-[0.938rem] py-[0.813rem]">
                            <h1 className="font-outfit text-links font-medium">Servicios:</h1>
                            <img src={acBlue} alt="" />
                            <img src={tvBlue} alt="" />
                        </div>
                    </section>

                    <div className="bg-blue-1 rounded-xl py-[0.626rem] flex justify-center mb-[1.625rem] lg:hidden">
                        <a className="text-white text-ovo text-base" href="https://wa.me/message/ZGYH7OW6HZAEN1">Reservar</a>
                    </div>
                    <p className="font-links text-gray-1 font-outfit text-center pb-14">Es prohibido cocinar dentro de la habitación, ya que el espacio no es apto para realizar esta actividad.</p>
                </div>
            )}

            <Footer />
        </div>
    );
}
