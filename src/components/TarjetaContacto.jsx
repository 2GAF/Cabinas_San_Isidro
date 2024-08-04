import React from 'react';
import whatsapp from "../assets/whatsapp_icono.svg";

const TarjetaContacto = ({ image, icon, title, email, phone, link }) => {
    return (
        <div className="relative bg-white rounded-[36px] shadow-lg overflow-hidden w-[320px] sm:w-[500px] m-4">
            <img src={image} alt={title} className=" h-[195px] sm:h-[224px] w-[320px] sm:w-[500px] object-cover" />
            <div className="pt-[60px] ">
                    <div className="absolute right-[6.5rem] sm:right-[12.5rem] top-[8.5rem] sm:top-[10.5rem] bg-white shadow-lg p-5 rounded-full">
                        <img src={icon} alt="icon" className="size-[70px]"/>
                    </div>
                <h2 className="text-center mb-4 font-outfit text-[clamp(26px,_2.8vw,_3.438rem)] font-medium">{title}</h2>
                <p className="text-center  text-[clamp(16px,_1.7vw,_26px)] font-outfit font-light">Correo: <a href={`mail:${email}`} className="text-blue-500">{email}</a></p>
                <p className="text-center  text-[clamp(16px,_1.7vw,_26px)] font-outfit font-light">Teléfono: <a href={`teléfono:${phone}`} className="text-blue-500">{phone}</a></p>
                <div className="flex justify-center mt-10">
                    <a href={link} className="justify-between">
                    <button className="bg-blue-1 flex text-white py-2 mb-10 px-[71px] rounded-full items-center">
                        <img src={whatsapp} alt="WhatsApp" className="size-8 mr-4" />
                        <span className="grid text-center text-[clamp(16px,_1.7vw,_34px)] font-outfit font-semibold">Contáctanos</span>
                    </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TarjetaContacto;