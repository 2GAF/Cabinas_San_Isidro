import logo from '../assets/CSIlogo.svg';
import whatsfoot from '../assets/whatsappFoot.svg';
import facefoot from '../assets/facebookFoot.svg';
import instafoot from '../assets/instagramFoot.svg';
import tiktokfoot from '../assets/tiktokfoot.svg';
import { Link } from 'react-router-dom';
import { Terminos } from '../pages/Terminos';
import React, { useState } from 'react';

export function Footer() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='bg-blue-1 flex flex-col lg:grid lg:grid-cols-3 pt-[2.688rem] lg:px-32 md:px-10 px-5 gap-x-[6.625rem]' >
            {/* primera columna con el identificador gráfico */}
            <Link className='hidden lg:block' to="/" ><img src={logo} alt="" /></Link>

            {/* segunda columna con redes sociales*/}
            <section className='flex flex-col'>

                {/* boton de escribenos */}
                <Link className='bg-blue-2 rounded-xl text-center font-outfit font-bold text-white text-subtitulo-btn tracking-wider px-[1.594rem] py-[0.625rem] mb-[3.063rem]' to="/contacto" >Contáctenos</Link>

                <h3 className='font-outfit hidden lg:block text-white text-texto mb-4 font-bold tracking-wider'>Busquenos en:</h3>
                <div className='flex gap-x-6 justify-center mb-[1.625rem] lg:mb-0'>
                    {/* enlaces a las redes sociales */}
                    <a href="https://www.facebook.com/cabinassanisidro"><img src={facefoot} alt="" /></a>
                    <a href="https://wa.me/message/ZGYH7OW6HZAEN1"><img src={whatsfoot} alt="" /></a>
                    <a href="https://www.instagram.com/cabinas_san_isidro?igsh=cXRxY2xoMGZ4bXZr"><img src={instafoot} alt="" /></a>
                    <a href="https://www.tiktok.com/@cabinas_san_isidro?is_from_webapp=1&sender_device=pc"><img src={tiktokfoot} alt="" /></a>
                </div>
            </section>

            {/* Tercera columna con navegacion */}
            <nav className='flex flex-col items-center'>
                <h3 className='hidden lg:block font-outfit text-white text-texto mb-4 font-bold tracking-wider'>Conozcanos:</h3>

                {/* lista de enlaces */}
                <ul className='ml-5 lg:list-disc grid grid-cols-2 md:flex gap-x-5 lg:block font-outfit text-white lg:text-base leading-loose'>
                     <li className='hover:underline underline-offset-4'><button onClick={openModal}>Políticas de uso</button></li>
                    <li className='hover:underline hover underline-offset-4'><a href="https://maps.app.goo.gl/1K1rD7LfnasMzchg8" >Dirección</a></li>
                    <li className='hover:underline hover underline-offset-4'><Link to="/sobre-nosotros">Quiénes somos</Link></li>
                    <li className='hover:underline hover underline-offset-4'><a href="https://wa.me/+50687777774/">Eventos y excursiones</a></li>
                </ul>
            </nav>
            {/* Derechos reservados y desarrollo */}
            <div className='text-center col-span-2 lg:col-span-3'>
                <p className='font-outfit font-light text-white mt-[3.75rem]'>© Todos los derechos reservados. 2024</p>
                <a className='font-outfit font-light text-white' href="https://www.facebook.com/profile.php?id=61564052853445">Desarrollado por 2GAF Devs</a>
            </div>
            <Terminos isOpen={isModalOpen} onClose={closeModal}></Terminos>
        </div>
    )
}