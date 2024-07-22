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

export function Cabinas() {

    const [activeTab, setActiveTab] = useState('Cabinas');
    const [activeCap, setCapacidad] = useState('3-4');
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
            <div className="mx-[0.938rem] my-[0.938rem] md:mx-[3.75rem] md:my-[2.875rem]">

                <div className="flex justify-center mt-4 sm:mt-8 lg:hidden py-[0.813rem]">
                    <Opcion setter={setActiveTab} text='Habitaciones' isActive={activeTab} />
                    <hr className="border-2 border-blue-1 h-auto rounded-3xl sm:mx-7 mx-5" />
                    <Opcion setter={setActiveTab} text='Cabinas' isActive={activeTab} />
                </div>
                {/* seccion de la tarejta e imagen de la cabina */}
                <h1 className="text-center font-outfit text-2xl font-medium py-[0.813rem] md:hidden">{cabinaEscogida.titulo}</h1>
                <div className="relative flex justify-start lg:justify-center" onClick={manejarClick}>
                    <img
                        className={`w-[70vw] md:w-[60vw] lg:w-[45vw] transition-transform duration-500 ease-in-out ${tarjetaAlFrente ? 'z-0' : 'z-10 transform  md:translate-x-24'}`}
                        src={imagenes[indiceActual]}
                        alt=""
                    />
                    <div
                        className={`absolute top-3 right-0 w-[11.25rem] h-[12.375rem] md:w-[22.375rem] md:h-[22.375rem] md:top-4 bg-blue-1 font-outfit text-white flex items-center justify-center shadow-black shadow-lg rounded-lg transition-transform duration-500 ease-in-out ${tarjetaAlFrente ? 'z-10 transform translate-x-0 ' : 'z-0 transform -translate-x-10'}`}
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

                {/* selector de la capacidad de la cabina */}
                <section className="flex justify-center items-center gap-x-[0.938rem] py-[1.625rem] lg:hidden">
                    <h1 className="font-outfit text-links font-medium">Personas:</h1>
                    <Cantidad setter={setCapacidad} text='3-4' isActive={activeCap} />
                    <Cantidad setter={setCapacidad} text='5-6' isActive={activeCap} />
                    <Cantidad setter={setCapacidad} text='5-6*' isActive={activeCap} />
                    <Cantidad setter={setCapacidad} text='8-9' isActive={activeCap} />
                </section>

                <section className="lg:hidden">
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

            </div>

            <Footer />
        </div>
    )
}