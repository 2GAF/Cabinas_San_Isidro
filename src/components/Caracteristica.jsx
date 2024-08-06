import PropTypes from 'prop-types';

export function Caracteristica({icon, texto}) {
    return (
        <div className="flex sm:flex-row flex-col text-center items-center sm:gap-6">
            <img className="h-[1.938rem]" src={icon} alt={texto} />
            <p className="font-outfit">{texto}</p>
        </div>
    )
}

Caracteristica.propTypes = {
    icon: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired
};