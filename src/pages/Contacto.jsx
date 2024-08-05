import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Header } from "../common/Header.jsx";
import { Footer } from "../common/Footer.jsx";
import reservacion from "../assets/reservacion_icono.svg";
import tiempo_compartido from "../assets/tiempo_compartido_icono.svg";
import eventos from "../assets/eventos_icono.svg";
import reservacionimg from "../assets/imgs/reservacionesimg.png";
import tiempo_compartidoimg from "../assets/imgs/tiempoimg.png";
import eventosimg from "../assets/imgs/eventosimg.png";
import whatsapp from "../assets/whatsapp_icono.svg";
import tortuga from "../assets/tortuga_lentes.svg";
import Tarjeta from '../components/TarjetaContacto';


export function Contacto() {

    const tarjetas = [
        {
            image: reservacionimg,
            icon: reservacion,
            title: 'Reservaciones',
            email: 'csisidro@gmail.com',
            phone: '+506 2663 0031',
            link: 'https://wa.me/message/ZGYH7OW6HZAEN1'
        },

        {
            image: tiempo_compartidoimg,
            icon: tiempo_compartido,
            title: 'Tiempo compartido',
            email: 'socioscsi@gmail.com',
            phone: '+506 8390 4884',
            link: 'https://wa.me/+50683904884/'
        },
        {
            image: eventosimg,
            icon: eventos,
            title: 'Eventos especiales',
            email: 'csisidro@gmail.com',
            phone: '+506 2663-2170',
            link: 'https://wa.me/+50687777774/'
        },
    ];

    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        correo: '',
        mensaje: '',
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

        const multipleRecipients = 'csisidro@gmail.com, mariechengg@gmail.com';

        const templateParams = {
            ...formData,
            to_email: multipleRecipients,
        };

        emailjs.send('service_20ezo0y', 'template_5km2alr', templateParams, '299rHDs9I9PHYD-tx')
            .then((result) => {
                alert('Mensaje enviado correctamente');
            }, (error) => {
                alert('Error al enviar el mensaje');
                console.error('Error:', error);
            });
    };

    return (
        <>
            <div className=" mx-4 my-[2.875rem] sm:mx-[3.75rem]">
                <Header />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="mb-6 font-ovo font-medium text-[clamp(36px,_3.9vw,_76px)] items-center">Contáctenos</h1>
            </div>
            <section className="flex flex-col justify-center items-center gap-[1.3rem] sm:gap-[3.125rem]">
                <div className="flex flex-wrap justify-center p-4 ">
                    {tarjetas.map((tarjeta, index) => (
                        <Tarjeta key={index} {...tarjeta} />
                    ))}
                </div>
            </section>
            <section className="mt-10 mb-8 mx-[3.75rem] sm:mx-[10%]">
                <div className="flex flex-col justify-center text-center items-center">
                    <h1 className="font-ovo text-[clamp(36px,_3.9vw,_76px)] font-regular">Danos tu opinión</h1>
                    <h2 className="font-ovo text-[clamp(26px,_2.8vw,_55px)] font-medium">¡Conocer tu opinión es de suma importancia para nosotros!</h2>
                </div>
                <div className="flex w-full">
                    <form className="mt-6 w-full" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-4 justify-between">
                            <div className="grid order-2 sm:order-1 sm:col-start-1 sm:col-end-4">
                                <div className="mb-4 sm:mb-0">
                                    <input className="w-full pl-4 py-4 sm:py-8 border-2 border-blue-1  rounded-[10px] sm:rounded-[33px] focus:outline-none focus:shadow-outline font-outfit text-[clamp(16px,_1.7vw,_22.66px)] text-gray-1" id="nombre" type="text" placeholder="Nombre Completo" onChange={handleChange} />
                                </div>
                                <div className="mb-4 sm:mb-0">
                                    <input className="w-full pl-4 py-4 sm:py-8 border-2 border-blue-1 rounded-[10px] sm:rounded-[33px] focus:outline-none focus:shadow-outline font-outfit text-[clamp(16px,_1.7vw,_22.66px)] text-gray-1" id="telefono" type="tel" placeholder="Número de teléfono" onChange={handleChange} />
                                </div>
                                <div className="">
                                    <input className="w-full pl-4 py-4 sm:py-8 border-2 border-blue-1  rounded-[10px] sm:rounded-[33px] focus:outline-none focus:shadow-outline font-outfit text-[clamp(16px,_1.7vw,_22.66px)] text-gray-1" id="correo" type="email" placeholder="Correo Electrónico" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="grid items-center sm:order-2 order-1 mb-6 sm:mb-0 sm:col-start-4 ml-6 justify-center">
                                <img className='size-64 sm:size-[26.8rem]' src={tortuga} alt="Tortuga_svg" />
                            </div>
                        </div>
                        <div className="mb-6 mt-4">
                            <textarea className="w-full pl-4 py-4 border-2 border-blue-1 rounded-[10px] sm:rounded-[33px] focus:outline-none focus:shadow-outline font-outfit text-[clamp(16px,_1.7vw,_22.66px)] text-gray-1 text-start" id="mensaje" placeholder="Mensaje...." rows="4" onChange={handleChange}></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="w-full text-[clamp(16px,_1.7vw,_34px)] bg-blue-1 hover:bg-blue-900 text-white font-bold font-outfit  py-4 sm:py-6 px-4 rounded-full focus:outline-none focus:shadow-outline" type="submit">
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
