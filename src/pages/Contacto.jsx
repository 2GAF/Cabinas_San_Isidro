import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Header } from "../common/Header.jsx";
import { Footer } from "../common/Footer.jsx";
import reservacion from "../assets/reservacion_icono.svg";
import tiempo_compartido from "../assets/tiempo_compartido_icono.svg";
import eventos from "../assets/eventos_icono.svg";
import whatsapp from "../assets/whatsapp_icono.svg";
import tortuga from "../assets/tortuga_lentes.svg";

export function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_tqw81wm', 'template_tc5raz9', formData, 'qbwsoSj4CHvF34mxW')
            .then((result) => {
                alert('Mensaje enviado correctamente');
            }, (error) => {
                console.error('Error al enviar el mensaje', error);
                alert('Error al enviar el mensaje');
            });
    };

    return (
        <>
            <div className="mx-[3.75rem] mt-[2.875rem]">
                <Header />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="mb-6 font-ovo font-medium text-titulo items-center">Contáctenos</h1>
            </div>
            <section className="flex flex-col justify-center items-center gap-[3.125rem]">
                <div className="flex relative gap-x-[94px] pl-[107px] pr-[183px] py-10 items-center border-[8px] border-blue-1 rounded-[79px] w-full max-w-[1319px]">
                    <img className="" src={reservacion} alt="Icono_reservacion" />
                    <hr className="border-4 border-blue-1 h-[232px] rounded-3xl mx-10" />
                    <div>
                        <h1 className="mb-4 font-outfit text-subtitulo-btn font-medium">Reservaciones y hospedaje</h1>
                        <ul className="flex flex-col justify-start">
                            <li className="mb-4 text-texto font-outfit font-light">Correo: csisidro@gmail.com</li>
                            <li className="mb-4 text-texto font-outfit font-light">Telefono: +506 2663 0031</li>
                            <li className="mb-4 text-texto font-outfit font-light">Whatsapp: +506 8813 6933</li>
                        </ul>
                    </div>
                    <button>
                        <img className="absolute right-[25px] bottom-[18px] size-20" src={whatsapp} alt="Whatsapp Icon" />
                    </button>
                </div>
                <div className="flex relative gap-x-[94px] pl-[107px] pr-[183px] py-10 items-center border-[8px] border-blue-1 rounded-[79px] w-full max-w-[1319px]">
                    <img className="" src={tiempo_compartido} alt="tiempo_compartido_icono" />
                    <hr className="border-4 border-blue-1 h-[232px] rounded-3xl mx-10" />
                    <div>
                        <h1 className="mb-4 font-outfit text-subtitulo-btn font-medium">Tiempo compartido y socios</h1>
                        <ul className="flex flex-col justify-start">
                            <li className="mb-4 text-texto font-outfit font-light">Correo: csisidro@gmail.com</li>
                            <li className="mb-4 text-texto font-outfit font-light">Telefono: +506 2663 0031</li>
                            <li className="mb-4 text-texto font-outfit font-light">Whatsapp: +506 8813 6933</li>
                        </ul>
                    </div>
                    <button>
                        <img className="absolute right-[25px] bottom-[18px] size-20" src={whatsapp} alt="Whatsapp Icon" />
                    </button>
                </div>

                <div className="flex relative gap-x-[94px] pl-[107px] pr-[183px] py-10 items-center border-[8px] border-blue-1 rounded-[79px] w-full max-w-[1319px]">
                    <img className="" src={eventos} alt="eventos_icono" />
                    <hr className="border-4 border-blue-1 h-[232px] rounded-3xl mx-10" />
                    <div>
                        <h1 className="mb-4 font-outfit text-subtitulo-btn font-medium">Contrataciones para eventos</h1>
                        <ul className="flex flex-col justify-start">
                            <li className="mb-4 text-texto font-outfit font-light">Correo: csisidro@gmail.com</li>
                            <li className="mb-4 text-texto font-outfit font-light">Telefono: +506 2663 2170</li>
                            <li className="mb-4 text-texto font-outfit font-light">Whatsapp: +506 8777 7774</li>
                        </ul>
                    </div>
                    <button>
                        <img className="absolute right-[25px] bottom-[18px] size-20" src={whatsapp} alt="Whatsapp Icon" />
                    </button>
                </div>
            </section>
            <section className="mt-10 mb-8 mx-[3.75rem] ">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-ovo text-titulo font-medium">Danos tu opinión</h1>
                    <h2 className="font-ovo text-subtitulo-btn font-medium">¡Conocer tu opinión es de suma importancia para nosotros!</h2>
                </div>
                <div className="flex w-full">
                    <form className="mt-6 w-full" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-4 justify-between">
                            <div className="grid col-start-1 col-end-4">
                                <div className="">
                                    <input className="w-full pl-4 py-4 border-4 border-blue-1 rounded-[33px] focus:outline-none focus:shadow-outline font-outfit text-subtitulo-btn text-gray-1" id="nombre" type="text" placeholder="Nombre Completo" onChange={handleChange} />
                                </div>
                                <div className="">
                                    <input className="w-full pl-4 py-4 border-4 border-blue-1 rounded-[33px] focus:outline-none focus:shadow-outline font-outfit text-subtitulo-btn text-gray-1" id="telefono" type="tel" placeholder="Número de teléfono" onChange={handleChange} />
                                </div>
                                <div className="">
                                    <input className="w-full pl-4 py-4 border-4 border-blue-1 rounded-[33px] focus:outline-none focus:shadow-outline font-outfit text-subtitulo-btn text-gray-1" id="correo" type="email" placeholder="Correo Electrónico" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="grid col-start-4 ml-6">
                                <img src={tortuga} alt="" />
                            </div>
                        </div>
                        <div className="mb-6 mt-4">
                            <textarea className="w-full pl-4 py-4 border-4 border-blue-1 rounded-[33px] focus:outline-none focus:shadow-outline font-outfit text-subtitulo-btn text-gray-1 text-start" id="mensaje" placeholder="Mensaje...." rows="4" onChange={handleChange}></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="w-full bg-blue-1 hover:bg-blue-900 text-white font-bold font-outfit py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="submit">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}
