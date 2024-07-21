export function Opcion({setter, text, isActive}){

    const clasesBase = "text-[clamp(18px,_1.5vw,_1.875rem)] border-[3.5px] py-3 w-36 sm:w-48 rounded-2xl border-blue-1"

    const clasesActivo = "text-white bg-blue-1"
    const clasesInactivo = "text-blue-1 bg-white"
    console.log(isActive);

    const btnClases = `${clasesBase} ${isActive == text ? clasesActivo : clasesInactivo}`
    return(
        <button onClick={()=>setter(text)} className={btnClases}>{text}</button>
    )
}