
export function CantidadCompartido({ setter, text, isActive }) {
    const clasesBase = "rounded-full bg-blue-1 size-14 w-full flex items-center justify-center text-gray-1 font-outfit text-links hover:bg-blue-1 hover:bg-blue-1 hover:text-white";
    const clasesActivo = "text-white bg-blue-1";
    const clasesInactivo = "text-gray-1 bg-gray-2";

    const btnClases = `${clasesBase} ${isActive == text ? clasesActivo : clasesInactivo}`;

    const visibleText = text.slice(0, 3);
    const hiddenText = text.slice(3);

    return (
        <button onClick={() => setter(text)} className={btnClases}>
            {visibleText}
            <span className="hidden sm:inline">{hiddenText}</span>
        </button>
    );
}