import React, { useEffect } from 'react';
import Mision from "../assets/Mision.svg";
import Vision from "../assets/Vision.svg";
import Valores from "../assets/Valores.svg";
import { Header } from "../common/Header";
import img from "../assets/2.jpg";
import { UsComponent } from "../components/UsComponent";
import Email from "../assets/Email.png";
import Telefono from "../assets/Telefono.png";
import { Footer } from "../common/Footer";

export function Nosotros() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="font-ovo mb-3vh ">
                <div className=" mx-4 my-[2.875rem] sm:mx-[3.75rem]">
                    <Header />
                </div>
                <div className="mx-4 sm:mx-[10rem]">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-start gap-[25px]">
                        <div className="flex sm:order-1 order-2 justify-center items-center w-full ">
                            <div className="p-0 items-">
                                <h1 className="hidden lg:flex text-[clamp(26px,_2.8vw,_3.438rem)] leading-none">
                                    Cabinas san Isidro
                                </h1>
                                <h2 className="hidden lg:flex lg:mb-[3vh] font-outfit font-light text-[clamp(12px,_1.8vw,_2.66rem)] leading-none">
                                    Sobre nosotros
                                </h2>
                                <h3 className="lg:flex font-regular text-[2vh]  lg:text-[1.5vw] leading-tight">
                                    Hoy y siempre, HOTEL & CABINAS SAN ISIDRO ha sido uno de los más prestigiosos complejos de cabinas en el turismo nacional. Ubicado en la hermosa Puntarenas, Costa Rica, nuestro 
                                    establecimiento combina la calidez de un servicio familiar con la profesionalidad de un equipo dedicado a la excelencia, ofreciendo una 
                                    amplia variedad de cabinas y habitaciones con todas las comodidades necesarias para parejas, trabajadores y familias grandes.
                                </h3>
                            </div>
                        </div>
                        <div className="flex justify-center items-center relative w-full lg:h-auto order-1 sm:order-2">
                            <div className="absolute inset-0 bg-black opacity-60 lg:hidden rounded-[25px] flex justify-center items-center"></div>
                            <h1 className="text-center text-white absolute top-[25%] left-0 right-0 mx-auto text-[clamp(6vh,_2.8vw,_3.438rem)] leading-none lg:hidden">
                                Hotel & Cabinas <br /> San Isidro
                            </h1>
                            <h2 className="text-white font-thin text-center absolute top-[70%] mb-[3vh] font-outfit text-[clamp(3.5vh,_1.8vw,_2.66rem)] leading-none lg:hidden">
                                Sobre nosotros
                            </h2>
                            <img
                                src={img}
                                alt="Cabinas San Isidro"
                                className="h-[40vh] lg:h-[25vw] w-full object-cover rounded-[25px]"
                            />
                        </div>
                    </div>

                    <div className="lg:border-4 border-[#2C5CA3] rounded-[60px] w-full min-w-screen mt-[3vh]">
                        <div className="flex flex-col lg:flex-row w-full gap-4">
                            <UsComponent
                                imageSrc={Mision}
                                imageAlt="Misión"
                                title="Misión"
                                description="Proporcionar un servicio de hospedaje de alta calidad con atención personalizada y hospitalidad, asegurando la satisfacción de nuestros huéspedes. Buscamos crear una experiencia memorable y única en Puntarenas, Costa Rica."
                                hasBorder={true}
                            />
                            <UsComponent
                                imageSrc={Vision}
                                imageAlt="Visión"
                                title="Visión"
                                description="Ser el complejo de cabinas más reconocido en Puntarenas y Costa Rica, destacándonos por la excelencia en el servicio al cliente y nuestras instalaciones de calidad. "
                                hasBorder={true}
                            />
                            <UsComponent
                                imageSrc={Valores}
                                imageAlt="Valores"
                                title="Valores"
                                description="Valoramos la hospitalidad, ofreciendo un trato amable y personalizado. Nos comprometemos a mantener altos estándares de calidad y actuar con honestidad y transparencia."
                            />
                        </div>
                    </div>
                    <div className="flex margin-auto justify-center mt-10">
                        <h2 className=" lg:flex text-[clamp(36px,_3.9vw,_76px)] font-semibold mb-4">
                            Ubíquenos:
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center  rounded-lg mt-[4vw] mb-[2vh] lg:mb-[4vw] ">
                        {/* Map Image */}
                        <div className="w-full md:w-1/2 flex">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.7468813698372!2d-84.75954332166081!3d9.976009719614972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa031c10571ce39%3A0xb5e2acd58bbe21b2!2sCabinas%20San%20Isidro!5e0!3m2!1ses-419!2scr!4v1722641061111!5m2!1ses-419!2scr"
                                className="rounded-[30px] w-full h-[300px] md:h-[500px]"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        {/* Contact Details */}
                        <div className="w-full md:w-1/2 md:pl-6 mb-[4vh]">
                            <div className="hidden md:flex items-center mb-8">
                                <img src={Telefono} alt="Phone" className="w-[4vw] mr-3" />
                                <p className="text-[clamp(26px,_2.8vw,_55px)]">
                                    +506 2663-0031
                                </p>
                            </div>
                            <div className="hidden md:flex  flex-1 items-end mb-6 ">
                                <img src={Email} alt="Email" className="w-[4vw] mr-3" />
                                <p className="text-[clamp(26px,_2.8vw,_55px)]">
                                    csisidro@gmail.com
                                </p>
                            </div>
                            <button className=" mt-[2vh] w-full lg:h-[4vw] h-[6vh] bg-[#2C5CA3] text-[clamp(16px,_1.7vw,_34px)] font-outfit text-white py-2 px-4 rounded-2xl">
                                <a href="https://maps.app.goo.gl/1K1rD7LfnasMzchg8">
                                    ¿Cómo llegar?
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
