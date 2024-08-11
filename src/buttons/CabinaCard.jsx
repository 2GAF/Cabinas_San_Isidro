import fanBlue from "../assets/fanBlack.svg";
import tvBlue from "../assets/tvBlack.svg";
import fanWhite from "../assets/fanWhite.svg";
import tvWhite from "../assets/tvWhite.svg";
import acWhite from "../assets/acWhite.svg";
import acBlue from "../assets/acBlack.svg";
import PropTypes from 'prop-types';

export function CabinaCard({ setter, text, isActive, servicio }) {
    const isActiveCard = text.startsWith(isActive);
    const cardStyle = isActiveCard ? 'bg-blue-1 text-white' : '';
    const btnStyle = isActiveCard ? 'bg-white text-blue-1' : 'text-white';

    return (
        <div className={`ring-2 ring-blue-1 rounded-xl font-outfit text-[2.119rem] p-[1.313rem] py-[1.313rem] flex flex-col gap-y-[0.656rem] ${cardStyle}`}>
            <h1>{text}</h1>
            <div className="flex gap-x-[1.875rem] w-full justify-center">
                {servicio === 'Abanico' && (
                    <img src={isActiveCard ? fanWhite : fanBlue} alt="Abanico" />
                )}
                {servicio === 'A/C' && (
                    <img src={isActiveCard ? acWhite : acBlue} alt="Aire acondicionado" />
                )}
                <img src={isActiveCard ? tvWhite : tvBlue} alt="Televisión" />
            </div>
            <button onClick={() => setter(text)} className={`bg-blue-1 rounded-xl py-[0.626rem] hidden justify-center text-ovo text-base lg:flex ${btnStyle}`}>
                Explorar
            </button>
        </div>
    );
}

//Definir PropTypes
CabinaCard.propTypes = {
    setter: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    servicio: PropTypes.string.isRequired
};

