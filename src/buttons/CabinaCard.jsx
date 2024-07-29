import fanBlue from "../assets/fanBlack.svg";
import tvBlue from "../assets/tvBlack.svg";

export function CabinaCard({setter, text, isActive}){

    const clasesBase = "rounded-full bg-blue-1 size-14 flex items-center justify-center text-gray-1 font-outfit text-links hover:bg-blue-1 hover:bg-blue-1 hover:text-white"
    const clasesActivo = "text-white bg-blue-1"
    const clasesInactivo = "text-gray-1 bg-gray-2"
    console.log(isActive);

    const btnClases = `${clasesBase} ${isActive == text ? clasesActivo : clasesInactivo}`
    return(
        // <button  className={btnClases}></button>

        <div  className="ring-2 ring-blue-1 rounded-xl font-outfit text-[2.119rem] p-[1.313rem] py-[1.313rem] flex flex-col gap-y-[0.656rem]">
                        <h1>{text}</h1>
                        <div className="flex gap-x-[1.875rem] w-full justify-center ">
                            <img src={fanBlue} alt="" />
                            <img src={tvBlue} alt="" />
                        </div>
                        <button onClick={()=>setter(text)} className="bg-blue-1 rounded-xl py-[0.626rem] hidden justify-center text-white text-ovo text-base lg:flex">
                           Explorar
                        </button>
                    </div>
    )
}