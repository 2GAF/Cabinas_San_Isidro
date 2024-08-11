import PropTypes from 'prop-types';

export function CantidadCompartido({ setter, text, isActive, type }) {
    const clasesBase = "rounded-full bg-blue-1 size-14 w-full flex items-center justify-center text-gray-1 font-outfit text-links hover:bg-blue-1 hover:bg-blue-1 hover:text-white";
    const clasesActivo = "text-white bg-blue-1";
    const clasesInactivo = "text-gray-1 bg-gray-2";

    const btnClases = `${clasesBase} ${isActive == text ? clasesActivo : clasesInactivo}`;
    
    return (
        <button onClick={() => setter(text)} className={btnClases}>
            <span className=" sm:inline font-outfit">{type}</span>
        </button>
    );
}

CantidadCompartido.propTypes = {
    setter: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    isActive: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};