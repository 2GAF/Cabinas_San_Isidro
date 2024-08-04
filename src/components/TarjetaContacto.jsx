import React from 'react';
import whatsapp from "../assets/whatsapp_icono.svg";

const TarjetaContacto = ({ image, icon, title, email, phone, link }) => {
    return (
        <div className="bg-white rounded-[36px] shadow-lg overflow-hidden h-[590px] w-[394px] m-4">
            <img src={image} alt={title} className="h-[224px] w-[394px] object-cover" />
            <div className="pt-[60px] relative">
                <div className="flex justify-center mb-4 ">
                    <div className="absolute bottom-[17.80rem] bg-white shadow-lg p-5 rounded-full">
                        <img src={icon} alt="icon" className="size-[70px]"/>
                    </div>
                </div>
                <h2 className="text-center mb-4 font-outfit text-[clamp(26px,_2.8vw,_3.438rem)] font-medium">{title}</h2>
                <p className="text-center mt-2 mb-4 text-[clamp(16px,_1.7vw,_26px)] font-outfit font-light">Correo: <a href={`mailto:${email}`} className="text-blue-500">{email}</a></p>
                <p className="text-center mt-2 mb-4 text-[clamp(16px,_1.7vw,_26px)] font-outfit font-light">Teléfono: <a href={`tel:${phone}`} className="text-blue-500">{phone}</a></p>
                <div className="flex justify-center mt-10">
                    <a href={link} className="justify-between">
                    <button className="bg-blue-1 flex text-white py-2 px-[71px] rounded-full items-center">
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
