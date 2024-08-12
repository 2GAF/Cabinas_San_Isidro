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

    const renderOpcionSection = () => (
        <div className="flex justify-center font-ovo mt-4 sm:mt-8 py-[0.813rem]">
            <Opcion setter={setActiveTab} text='Habitaciones' isActive={activeTab} />
            <hr className="border-2 border-blue-1 h-auto rounded-3xl sm:mx-7 mx-5" />
            <Opcion setter={setActiveTab} text='Cabinas' isActive={activeTab} />
        </div>
    );
    
    const renderButtonSection = (posicion) => (
        <div className="flex justify-center py-5 md:py-14">
            <button className="w-custom-img relative py-3" onClick={manejarClick} ref={tarjetaRef}>
                <img className={`transition-transform duration-500 ease-in-out rounded-2xl ${tarjetaAlFrente ? 'z-0' : 'z-10'}`} src={imagenes[indiceActual]} alt="" />
                <div className={`absolute top-1 lg:top-12 ${posicion} md:right-[-6rem] w-[11.25rem] h-[12.375rem] md:w-[20.375rem] md:h-[15.375rem] lg:w-[20rem] lg:h-[20rem] md:top-2 bg-blue-1 font-outfit text-white flex items-center justify-center shadow-black shadow-lg rounded-lg transition-transform duration-500 ease-in-out ${tarjetaAlFrente ? 'z-0 transform translate-x-0 ' : `z-[-10] transform ${posicion === 'right-[-2rem]' ? '-translate-x-10' : 'translate-x-10'}`}`}>
                    <div className="px-[0.626rem] flex flex-col gap-y-[0.625rem]">
                        <h1 className="text-3xl font-medium hidden md:block">{cabinaEscogida?.titulo}</h1>
                        <h1 className="text-xl font-bold md:font-light">{cabinaEscogida?.precio}</h1>
                        <p className="font-outfit text-base hidden lg:block">
                            {cabinaEscogida?.descripcion}
                        </p>
                        <p className="text-center text-base font-light lg:hidden">{activeTab === 'Cabinas' ? 'Ideal para las familias pequeñas y grandes.' : 'Ideal para parejas y trabajadores.'}</p>
                        <a href="https://wa.me/message/ZGYH7OW6HZAEN1"><div className="bg-white rounded-xl py-[0.313rem] flex justify-center text-blue-1 text-ovo text-base">Reservar</div></a>
                    </div>
                </div>
            </button>
        </div>
    );
    
    const renderMobileCapSection = (options) => (
        <section className="flex justify-center items-center gap-x-[0.938rem] py-[1.625rem] lg:hidden">
            <h1 className="font-outfit text-links font-medium">Personas:</h1>
            {options.map((option) => (
                <Cantidad key={option} setter={setActiveCap} text={option} isActive={activeCap} />
            ))}
        </section>
    );
    
    const renderDesktopCapSection = (options) => (
        <section className="justify-center items-center gap-x-[0.938rem] py-[1.625rem] hidden lg:flex">
            {options.map(({ text, servicio }) => (
                <CabinaCard key={text} setter={setActiveCap} text={text} isActive={activeCap} servicio={servicio} />
            ))}
        </section>
    );
    
    const renderServiceSection = (serviceIcon) => (
        <section className="lg:hidden">
            <h1 className="font-outfit text-links font-medium">Descripción:</h1>
            <p className="font-outfit text-base lg:hidden">{cabinaEscogida?.descripcion}</p>
            <div className="flex gap-x-[0.938rem] py-[0.813rem]">
                <h1 className="font-outfit text-links font-medium">Servicios:</h1>
                <img src={serviceIcon} alt="" />
                <img src={tvBlue} alt="" />
            </div>
        </section>
    );
    
    const renderReserveButton = () => (
        <div className="bg-blue-1 rounded-xl py-[0.626rem] flex justify-center mb-[1.625rem] lg:hidden">
            <a className="text-white text-ovo text-base" href="https://wa.me/message/ZGYH7OW6HZAEN1">Reservar</a>
        </div>
    );
    
    const renderWarning = (message) => (
        <p className="font-links text-gray-1 font-outfit text-center pb-14">{message}</p>
    );

    return (
        <div>
            <div className=" mx-4 my-[2.875rem] sm:mx-[3.75rem]">
                <Header />
            </div>

            {/* Sección para las cabinas */}
            
        {activeTab === 'Cabinas' && (
            <div className="md:px-[3.125rem] px-[1rem]">
                {renderOpcionSection()}
                {renderButtonSection('right-[-2rem]')}
                {renderMobileCapSection(['3-4', '5-6', '5-6*', '8-9'])}
                {renderDesktopCapSection([
                    { text: '3-4 Personas', servicio: 'Abanico' },
                    { text: '5-6 Personas', servicio: 'Abanico' },
                    { text: '5-6* Personas', servicio: 'A/C' },
                    { text: '8-9 Personas', servicio: 'Abanico' },
                ])}
                {renderServiceSection(cabinaEscogida.servicio === 'Abanico' ? fanBlue : acBlue)}
                {renderReserveButton()}
                {renderWarning('Se permite máximo una persona adicional en cada cabina (esto por motivos de seguridad), la cual debe cancelar un monto de ₡5.000 cada noche y debe traer su propio colchón.')}
            </div>
        )}
        {activeTab === 'Habitaciones' && (
            <div className="md:px-[3.125rem] px-[1rem]">
                {renderOpcionSection()}
                {renderButtonSection('left-[-2rem]')}
                {renderMobileCapSection(['1', '2', '3', '4'])}
                {renderDesktopCapSection([
                    { text: '1 Persona', servicio: 'A/C' },
                    { text: '2 Personas', servicio: 'A/C' },
                    { text: '3 Personas', servicio: 'A/C' },
                    { text: '4 Personas', servicio: 'A/C' },
                ])}
                {renderServiceSection(acBlue)}
                {renderReserveButton()}
                {renderWarning('Es prohibido cocinar dentro de la habitación, ya que el espacio no es apto para realizar esta actividad.')}
            </div>
        )}

            <Footer />
        </div>
    );
}
