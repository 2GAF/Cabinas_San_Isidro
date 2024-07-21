import { Header } from "../common/Header.jsx"
import reservacion from "../assets/reservacion_icono.svg"
import tiempo_compartido from "../assets/tiempo_compartido_icono.svg"
import eventos from "../assets/eventos_icono.svg"
import whatsapp from "../assets/whatsapp_icono.svg"

export function Contacto() {

    return (
        <>
            <div className="mx-[3.75rem] mt-[2.875rem]">
                <Header />

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
                            <img className="absolute right-[25px] bottom-[18px] size-20" src={whatsapp} alt="Whatsapp Icon " />
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
                            <img className="absolute right-[25px] bottom-[18px] size-20" src={whatsapp} alt="Whatsapp Icon " />
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
                            <img className="absolute right-[25px] bottom-[18px] size-20" src={whatsapp} alt="Whatsapp Icon " />
                        </button>
                    </div>


                    {/* <div className="flex justify-center items-center border-[6px] border-blue-1 rounded-[79px] w-[1306px] h-[338px] my-6">
                    <img className="" src={tiempo_compartido} alt="Icono_reservacion" />
                    <hr className="border-4 border-blue-1 h-[232px] rounded-3xl mx-10" />
                    <div>
                    <h1 className="mb-4 font-outfit text-titulo font-medium">Tiempo compartido y socios</h1>
                    <ul className="">
                    <li className="mb-4 text-subtitulo-btn font-outfit font-light">Correo: socioscsi@gmail.com</li>
                    <li className="mb-4 text-subtitulo-btn font-outfit font-light">Whatsapp: +506 8390 4884</li>
                    </ul>
                    </div>
                    </div>
                    
                    <div className="flex justify-center items-center border-[6px] border-blue-1 rounded-[79px] w-[1306px] h-[338px] my-6">
                    <img className="" src={eventos} alt="Icono_reservacion" />
                    <hr className="border-4 border-blue-1 h-[232px] rounded-3xl mx-10" />
                    <div>
                    <h1 className="mb-4 font-outfit text-titulo font-medium">Contrataciones para eventos</h1>
                    <ul className="">
                    <li className="mb-4 text-subtitulo-btn font-outfit font-light">Correo: csisidro@gmail.com</li>
                    <li className="mb-4 text-subtitulo-btn font-outfit font-light">Telefono: +506 2663 2170</li>
                    <li className="mb-4 text-subtitulo-btn font-outfit font-light">Whatsapp: +506 8777 7774</li>
                    </ul>
                    </div>
                    </div> */}

                </section>
            </div>

        </>

    )


}
