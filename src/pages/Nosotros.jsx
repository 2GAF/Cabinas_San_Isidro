import Mision from '../assets/Mision.svg';
import Vision from '../assets/Vision.svg';
import Valores from '../assets/Valores.svg';
import { Header } from "../common/Header"
import img from "../assets/2.jpg"
import { UsComponent } from "../components/UsComponent"
import Mapa from "../assets/Mapa.png"
import Email from "../assets/Email.png"
import Telefono from "../assets/Telefono.png"
import { Footer } from '../common/Footer';



export function Nosotros() {
    return (
        <div>
            <div className="font-ovo mx-4 mb-3vh ">
                <div className="my-[2.875rem] sm:mx-[3.75rem]">
                    <Header />
                </div>


                <div className="mx-4 sm:mx-[3.75rem]">

                    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-start gap-[25px]">
                        <div className="flex justify-center items-center relative w-full lg:h-auto">
                            <img src={img} alt="Cabinas San Isidro" className="h-[40vh] lg:h-[25vw] w-full object-cover rounded-[25px]" />
                            <div className="absolute inset-0 bg-black opacity-60 lg:hidden rounded-[25px] flex justify-center items-center"></div>
                            <h1 className="text-center text-white absolute top-[25%] left-0 right-0 mx-auto text-[clamp(6vh,_2.8vw,_3.438rem)] leading-none lg:hidden">Hotel & Cabinas <br /> San Isidro</h1>
                            <h2 className="text-white font-thin text-center absolute top-[70%] mb-[3vh] font-outfit text-[clamp(3.5vh,_1.8vw,_2.66rem)] leading-none lg:hidden">Sobre nosotros</h2>
                        </div>
                        <div className="flex justify-center items-center w-full my-auto">
                            <div className="p-0">
                                <h1 className="hidden lg:flex text-[clamp(26px,_2.8vw,_3.438rem)] leading-none">Cabinas san Isidro</h1>
                                <h2 className="hidden lg:flex lg:mb-[3vh] font-outfit font-light text-[clamp(12px,_1.8vw,_2.66rem)] leading-none">Sobre nosotros</h2>
                                <h3 className="lg:flex font-regular text-[2vh]  lg:text-[1.5vw] leading-tight">Lorem ipsum dolor sit amet. Ex voluptatem autem ut suscipit voluptas in omnis reprehenderit et quia aliquam. Quo dolores consectetur vel aspernatur temporibus ut obcaecati deserunt nam adipisci sunt. Hic reprehenderit eligendi</h3>
                            </div>
                        </div>
                    </div>


                    <div className="lg:border-4 border-[#2C5CA3] rounded-[60px] w-full min-w-screen mt-[3vh]">
                        <div className="flex flex-col lg:flex-row w-full gap-4">
                            <UsComponent
                                imageSrc={Mision}
                                imageAlt="Misión"
                                title="Misión"
                                description="Lorem ipsum dolor sit amet. Ex voluptatem autem ut suscipit voluptas in omnis reprehender.Lorem ipsum dolor sit amet."
                                hasBorder={true}
                            />
                            <UsComponent
                                imageSrc={Vision}
                                imageAlt="Visión"
                                title="Visión"
                                description="Lorem ipsum dolor sit amet. Ex voluptatem autem ut suscipit voluptas in omnis reprehender.Lorem ipsum dolor sit amet."
                                hasBorder={true}
                            />
                            <UsComponent
                                imageSrc={Valores}
                                imageAlt="Valores"
                                title="Valores"
                                description="Lorem ipsum dolor sit amet. Ex voluptatem autem ut suscipit voluptas in omnis reprehender.Lorem ipsum dolor sit amet."
                            />
                        </div>



                    </div>
                    <div className='flex margin-auto justify-center mt-10'>
                        <h2 className=" lg:flex text-[4.167vw] font-semibold mb-4">Ubíquenos:</h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center  rounded-lg mt-[4vw] mb-[2vh] lg:mb-[4vw] ">
                        {/* Map Image */}
                        <div className="w-full md:w-1/2 ">
                            <img src={Mapa} alt="Map" className="w-full  rounded-lg " />
                        </div>
                        {/* Contact Details */}
                        <div className="w-full md:w-1/2 md:pl-6 mb-[4vh]">

                            <div className=" hidden md:flex items-center mb-3">
                                <img src={Telefono} alt="Phone" className="w-[4vw] mr-3" />
                                <p className="text-[2.5vw]">+506 2663-0031</p>
                            </div>
                            <div className=" hidden md:flex  flex-1 items-end mb-6 ">
                                <img src={Email} alt="Email" className="w-[4vw] mr-3" />
                                <p className="text-[2.5vw]">csisidro@gmail.com</p>
                            </div>
                            <button className=" mt-[2vh] w-full lg:h-[4vw] h-[6vh] bg-[#2C5CA3] text-white py-2 px-4 rounded-lg">
                                ¿Cómo llegar?
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}