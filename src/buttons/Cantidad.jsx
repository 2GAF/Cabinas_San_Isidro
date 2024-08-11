import PropTypes from 'prop-types';


export function Cantidad({setter, text, isActive}){

    const clasesBase = "rounded-full bg-blue-1 size-14 flex items-center justify-center text-gray-1 font-outfit text-links hover:bg-blue-1 hover:bg-blue-1 hover:text-white"
    const clasesActivo = "text-white bg-blue-1"
    const clasesInactivo = "text-gray-1 bg-gray-2"

    const btnClases = `${clasesBase} ${isActive == text ? clasesActivo : clasesInactivo}`
    return(
        <button onClick={()=>setter(text)} className={btnClases}>{text}</button>
    )
}

Cantidad.propTypes = {
    setter: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    isActive: PropTypes.string.isRequired
};