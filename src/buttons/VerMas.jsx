import { Link } from 'react-router-dom';

export function VerMas({enlace, text}){
    return(
        <Link to={enlace} className="block text-center text-[clamp(16px,_1.7vw,_34px)] bg-blue-1 py-4 text-white w-full rounded-2xl mt-4">{text}</Link>
    )
}