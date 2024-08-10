import React from 'react';
import whatsapp from "../assets/whatsapp_icono.svg";
import PropTypes from 'prop-types';

const TarjetaContacto = ({ image, icon, title, email, phone, link }) => {
    return (
        <div className="relative bg-white rounded-[36px] shadow-lg overflow-hidden w-[320px] sm:w-[500px] m-4">
            <img src={image} alt={title} className=" h-[195px] sm:h-[224px] w-[320px] sm:w-[500px] object-cover object-bottom" />
            <div className="pt-[60px] ">
                    <div className="absolute right-[6.5rem] sm:right-[12.5rem] top-[8.5rem] sm:top-[10.5rem] bg-white shadow-lg p-5 rounded-full">
                        <img src={icon} alt="icon" className="size-[70px]"/>
                    </div>
                <h2 className="text-center mb-4 font-outfit text-[clamp(26px,_2.8vw,_3.438rem)] font-medium">{title}</h2>
                <p className="text-center  text-[clamp(16px,_1.7vw,_26px)] font-outfit font-light">Correo: {email}</p>
                <p className="text-center  text-[clamp(16px,_1.7vw,_26px)] font-outfit font-light">Teléfono:{phone}</p>
                <div className="flex justify-center mt-10">
                    <a href={link} className="justify-between">
                    <button className="bg-blue-1 flex text-white py-2 mb-10 px-[71px] rounded-full items-center">
                        <img src={whatsapp} alt="WhatsApp" className="size-8 mr-4" />
                        <span className="grid text-center text-[clamp(16px,_1.7vw,_34px)] font-outfit font-semibold">Contáctenos</span>
                    </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

TarjetaContacto.propTypes = {
    image: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default TarjetaContacto;