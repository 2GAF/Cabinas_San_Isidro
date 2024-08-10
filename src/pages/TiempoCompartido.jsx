import React, { useEffect, useRef, useState } from 'react';
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import instalaciones from "../assets/instalaciones.svg";
import tortuga from "../assets/tortuga-santa.svg";
import balija from "../assets/balija.svg";
import descuento from "../assets/descuento.svg";
import Tortuga from "../assets/tortuga-compartido.png";
import fondo from "../assets/fondo-carta-2.svg"
import fondo2 from "../assets/fondo-gris.svg"
import { Cantidad } from '../buttons/Cantidad';
import { useCabInfo } from "../hooks/useCabInfo.js";
import fanBlue from "../assets/fanBlack.svg";
import tvBlue from "../assets/tvBlack.svg";
import acBlue from "../assets/acBlack.svg";
import { CantidadCompartido } from '../buttons/CantidadCompartido.jsx';
import '../App.css';
import fanWhite from "../assets/fanWhite.svg";
import tvWhite from "../assets/tvWhite.svg";
import acWhite from "../assets/acWhite.svg";
import ACOPRIBANACIO from "../assets/Patrocinio/ACOPRIBANACIO.svg";
import ASEC from "../assets/Patrocinio/ASEC.svg";
import ASECONSA from "../assets/Patrocinio/ASECONSA.svg";
import ASEINDER from "../assets/Patrocinio/ASEINDER.svg";
import ASEPBS from "../assets/Patrocinio/ASEPBS.svg";
import ASEUNED from "../assets/Patrocinio/ASEUNED.svg";
import COPESALUD from "../assets/Patrocinio/COPESALUD.svg";
import SITET from "../assets/Patrocinio/SITET.svg";
import UNDECA from "../assets/Patrocinio/UNDECA.svg";

const images = [
    { src: ACOPRIBANACIO, name: "ACOPRIBANACIO" },
    { src: ASEC, name: "ASEC" },
    { src: ASECONSA, name: "ASECONSA" },
    { src: ASEINDER, name: "ASEINDER" },
    { src: ASEPBS, name: "ASEPBS" },
    { src: ASEUNED, name: "ASEUNED" },
    { src: COPESALUD, name: "COPESALUD" },
    { src: SITET, name: "SITET" },
    { src: UNDECA, name: "UNDECA" },
];


export function TiempoCompartido() {
    const [activeCap, setActiveCap] = useState('1');
    const [activeTab, setActiveTab] = useState('Cabinas');
    const { cabinaEscogida } = useCabInfo(activeCap);
    const [indiceActual, setIndiceActual] = useState(0);
    const [tarjetaAlFrente, setTarjetaAlFrente] = useState(true);
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState('1');
    const carouselRef = useRef(null);


    useEffect(() => {
        const carousel = carouselRef.current;
        const originalContent = carousel.innerHTML;
        carousel.innerHTML += originalContent; // Duplicate the content

        let scrollAmount = 0;
        const scrollStep = 1;
        const scrollInterval = 15; // Adjust the speed of scrolling

        const scroll = () => {
            scrollAmount += scrollStep;
            if (scrollAmount >= carousel.scrollWidth / 2) {
                scrollAmount = 0; // Reset to the start of the duplicated content
                carousel.scrollTo({
                    left: scrollAmount,
                    behavior: 'auto', // Instant scroll without animation
                });
            } else {
                carousel.scrollTo({
                    left: scrollAmount,
                    behavior: 'auto', // Smooth scroll for normal scrolling
                });
            }
        };

        const intervalId = setInterval(scroll, scrollInterval);

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);

    const tarjetas = {
        '1': [
            {
                id: 1,
                precio: '₡200 mil',
                temporada: 'Temporada A',
                texto: 'El uso de semana del año en curso abarca Semana Santa, Vacaciones de 15 días, ni Semana 52 (específicamente para la temporada según su contrato) y debe hacerse con al menos un mes de anticipación.',
                imagen: tortuga,
                fondo: fondo2,
                hover: fondo,
            },
        ],
        '2': [
            {
                id: 2,
                precio: '₡183 mil',
                temporada: 'Temporada B',
                texto: 'El uso de semana del año en curso abarca todo el año (excepto Semana Santa, Vacaciones de 15 días, ni Semana 52) y debe hacerse con al menos un mes de anticipación.',
                imagen: tortuga,
                fondo: fondo2,
                hover: fondo,
            },
        ],
        '3': [
            {
                id: 3,
                precio: '₡150 mil',
                temporada: 'Temporada CD',
                texto: 'El uso de semana del año en curso va de marzo a noviembre, esta puede fraccionarse de lunes a jueves y de jueves a lunes. Debe hacerse con al menos un mes de anticipación.',
                imagen: tortuga,
                fondo: fondo2,
                hover: fondo,
            },
        ],
    };

    const beneficios = [
        {
            id: 1,
            titulo: 'Uso de semana',
            descripcion: 'Disfrute de una semana al año de lunes a lunes acorde a la capacidad de la accion adquirida.',
            imagen: balija,

        },
        {
            id: 2,
            titulo: 'Descuentos',
            descripcion: 'Descuento del 50% sobre la tarifa rack en todas las cabinas equipadas. Descuento del 20% en alimentos y bebidas en el Resturante Cocos.',
            imagen: descuento,

        },
        {
            id: 3,
            titulo: 'Uso de instalaciones',
            descripcion: 'Disfrute gratuito de las piscinas, zonas verdes, duchas, vestidores y acceso al mar, en cualquier época del año en horario de 8:00am a 5:00pm.',
            imagen: instalaciones,

        },
    ];




    const info = {};

    const tarjetaSeleccionada = tarjetas[cantidadSeleccionada][0];
    const imagenes = cabinaEscogida && cabinaEscogida.image ? cabinaEscogida.image : [];
    const manejarClick = () => {
        setTarjetaAlFrente(!tarjetaAlFrente);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="mb-3vh font-ovo ">
                <div className=" mx-4 my-[2.875rem] sm:mx-[3.75rem]">
                    <Header />
                </div>

                <div className="mx-6  md:mx-[10%] 2xl:mx-[15%]">
                    <div className='flex flex-col justify-center text-[#2C5CA3] font-semibold'>
                        <h1 className=" text-center font-outfit text-[clamp(26px,_2.8vw,_3.438rem)] leading-none">¡Conoce tus beneficios como socio!</h1>

                        <div className='flex  items-center justify-center'>
                            <img className='' src={Tortuga} alt="a" />
                        </div>

                        <div className='mt-[3vh] flex flex-col gap-3 md:flex-row w-[100%] justify-center'>
                            {beneficios.map((beneficio) => (
                                <div key={beneficio.id} className='flex flex-row gap-6 lg md:flex-col md:w-[33.5%]'>
                                    <img className='md:h-[6vw] ' src={beneficio.imagen} alt="" />
                                    <div className='flex flex-col px-6 text-ju '>
                                        <h1 className='text-[clamp(16px,_1.5vw,_2rem)] font-outfit text-black md:text-center'>{beneficio.titulo}</h1>
                                        <div className='flex justify-end'>
                                            <h2 className='text-[clamp(15px,_1.4vw,_2.66rem)] font-outfit font-light text-black md:text-center'>{beneficio.descripcion}</h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h1 className="my-[6vh] md:my-[3vw] font-outfit text-center text-[clamp(26px,_2.8vw,_3.438rem)] leading-none">Cuotas de mantenimiento 2024</h1>

                        <div className=' flex flex-row gap-6 lg:flex-row lg:hidden'>

                            <div className='flex flex-col h-[450px] md:h-[400px] bg-white rounded-[30px] shadow-lg'>
                                <div className='relative min-h-[45%] min-w-full rounded-t-[30px] overflow-hidden'>
                                    <img className='absolute top-0 left-0 w-full h-full object-cover' src={fondo} alt="Fondo" />
                                    <div className='absolute top-4 left-4 text-white'>
                                        <h3 className='text-2xl font-bold font-outfit'>{tarjetaSeleccionada.precio}</h3>
                                        <p className='text-lg font-outfit'>{tarjetaSeleccionada.temporada}</p>
                                    </div>
                                    <img className='absolute top-0 right-4  h-full' src={tortuga} alt="Tortuga Santa" />
                                </div>
                                <div className='px-4 py-2 font-light'>
                                    <p className='font-outfit text-[clamp(16px,_1.8vw,_1.4125rem)]'>{tarjetaSeleccionada.texto}</p>
                                </div>
                                <div className='flex px-4 py-2 mx-4 justify-center'>
                                    <button className='w-[75%] py-4 text-white font-outfit bg-blue-1 rounded-[30px] hover:bg-blue-2'>Reservar</button>
                                </div>
                            </div>
                        </div>


                        <div className='flex flex-row gap-6'>
                            {Object.keys(tarjetas).map(key =>
                                tarjetas[key].map((tarjeta) => (
                                    < div key={tarjeta.id} className='hidden lg:flex flex-col w-[33.5%] h-[480px]  bg-white rounded-[30px] shadow-lg group'>

                                        <div className='relative min-h-[45%] min-w-full rounded-t-[30px] overflow-hidden '>
                                            <img
                                                className=' z-20 absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100'
                                                src={tarjeta.hover}
                                                alt="Fondo 1"
                                                
                                            />
                                            <img
                                                className=' z-10 absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 opacity-100'
                                                src={tarjeta.fondo}
                                                alt="Fondo 2"
                                                
                                            />



                                            <div className='z-40 absolute top-4 left-4 text-white opacity-100 '>
                                                <h3 className='text-2xl font-bold font-outfit'>{tarjeta.precio}</h3>
                                                <p className='text-lg font-outfit'>{tarjeta.temporada}</p>
                                            </div>

                                            <img className='z-30 absolute top-0 right-1  h-full opacity-0 group-hover:opacity-100' src={tortuga} alt="Tortuga Santa" />
                                        </div>
                                        <div className='mx-3 my-2 font-light'>
                                            <p className='font-outfit text-[clamp(12px,_1.2vw,_1rem)]'>{tarjeta.texto}</p>
                                        </div>
                                        <div className='flex mx-6 pb-6  justify-center mt-auto'>
                                            <button
                                                className='w-[75%] py-4 text-white font-outfit bg-blue-1 rounded-[30px] hover:bg-blue-2'
                                                onClick={() => window.location.href = 'https://wa.me/message/ZGYH7OW6HZAEN1'}
                                            >
                                                Reservar
                                            </button>
                                        </div>

                                    </div>
                                ))
                            )}
                        </div>
                        <section className="flex justify-center items-center gap-x-[0.938rem] py-[1.625rem] lg:hidden ">
                            <h1 className="font-outfit text-links font-medium">Acción:</h1>
                            <Cantidad setter={setCantidadSeleccionada} text="1" isActive={cantidadSeleccionada} />
                            <Cantidad setter={setCantidadSeleccionada} text="2" isActive={cantidadSeleccionada} />
                            <Cantidad setter={setCantidadSeleccionada} text="3" isActive={cantidadSeleccionada} />
                        </section>
                    </div>

                    <h1 className=" font-semibold text-[#2C5CA3] my-[6vh] md:my-[3vw] font-outfit text-center text-[clamp(26px,_2.8vw,_3.438rem)] leading-none">Descuentos en hospedaje para socios</h1>

                    {activeTab === 'Cabinas' && (
                        <div className="">
                            <section className="flex justify-center items-center gap-x-[0.938rem] ">
                                <CantidadCompartido setter={setActiveCap} text='3-4 Personas' isActive={activeCap} />
                                <CantidadCompartido setter={setActiveCap} text='5-6 Personas' isActive={activeCap} />
                                <CantidadCompartido setter={setActiveCap} text='5-6* Personas' isActive={activeCap} />
                                <CantidadCompartido setter={setActiveCap} text='8-9 Personas' isActive={activeCap} />
                            </section>
                            <div className="flex justify-center font-ovo mt-4 sm:mt-8 py-[0.813rem]">
                            </div>
                            <div className="flex justify-center">
                                <div className="w-custom-img relative py-3w" onClick={manejarClick} role="button" tabIndex="0">
                                    <img className={`transition-transform duration-500 ease-in-out ${tarjetaAlFrente ? 'z-0' : 'z-10'}`} src={imagenes[indiceActual]} alt="" />
                                    <button className={`absolute top-1 lg:top-16 right-[-2rem] md:right-[-6rem] w-[11.25rem] h-[12.375rem] md:w-[22.375rem] md:h-[20.375rem] lg:w-[20rem] md:top-2 bg-blue-1 font-outfit text-white flex items-center justify-center shadow-black shadow-lg rounded-lg transition-transform duration-500 ease-in-out ${tarjetaAlFrente ? 'z-0 transform translate-x-0 ' : 'z-[-10] transform -translate-x-10'}`}>
                                        <div className="px-[0.626rem] flex flex-col gap-y-[0.625rem]">
                                            <h1 className="text-3xl font-medium hidden md:block">{cabinaEscogida?.titulo}</h1>
                                            <h1 className="text-xl font-bold md:font-light">{cabinaEscogida?.precio}</h1>
                                            <p className="font-outfit text-base hidden md:block">
                                                {cabinaEscogida?.descripcion}
                                            </p>
                                            <p className="text-center text-base font-light md:hidden">Ideal para las familias pequeñas y grandes.</p>
                                            <a href="https://wa.me/message/ZGYH7OW6HZAEN1"><div className="bg-white rounded-xl py-[0.313rem] flex justify-center text-blue-1 text-ovo text-base">Reservar</div></a>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <section className=" mt-6 md:hidden">
                                <h1 className="font-outfit text-links font-medium">Descripción:</h1>
                                <p className="font-outfit text-base md:hidden">{cabinaEscogida?.descripcion}</p>

                                <div className="flex gap-x-[0.938rem] py-[0.813rem]">
                                    <h1 className="font-outfit text-links font-medium">Servicios:</h1>
                                    <img src={cabinaEscogida.servicio === 'Abanico' ? fanBlue : acBlue} alt="" />
                                    <img src={tvBlue} alt="" />
                                </div>
                            </section>

                            <div className="bg-blue-1 rounded-xl py-[0.626rem] flex justify-center mb-[1.625rem] lg:hidden">
                                <a className="text-white text-ovo text-base" href="https://wa.me/message/ZGYH7OW6HZAEN1">Reservar</a>
                            </div>
                            <p className="font-links text-gray-1 font-outfit text-center mt-[5vh] pb-14">Ser permite máximo una persona adicional en cada cabina (esto por motivos de seguridad), la cual debe cancelar un monto de ₡5.000 cada noche y debe traer su propio colchón.</p>
                        </div>

                    )}
                    <h1 className=" font-semibold text-[#162E52] text-center font-outfit text-[clamp(26px,_2.8vw,_3.438rem)] leading-none">Instituciones afiliadas y convenios comerciales</h1>

                    <div className="my-8">
                        <div
                            ref={carouselRef}
                            className="flex overflow-x-scroll whitespace-nowrap scrollbar-hide"
                        >
                            {images.map((image, index) => (
                                <div key={index} className="flex flex-col items-center m-2">
                                    <div className='w-32 h-32 object-contain'>
                                        <img
                                            src={image.src}
                                            alt={`carousel-${index}`}
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <p className="text-center mt-2">{image.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <Footer />
            </div >
        </div >
    );


}


