import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function VerMas({enlace, text, option}){
    return(
        <Link state={option} to={enlace} className="block text-center text-[clamp(16px,_1.7vw,_34px)] bg-blue-1 py-4 text-white w-full rounded-2xl mt-4">{text}</Link>
    )
}

VerMas.propTypes = {
    enlace: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    option: PropTypes.string.isRequired
};