import logo from '../assets/CSIlogo.svg';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className="flex relative items-center justify-center">
        <img className='absolute left-0 top-auto w-[100px] h-auto' src={logo} alt="" />
        <nav className='mb-[5rem] mt-[2.875rem]'>
            <ul className='flex gap-x-[3.125rem] font-outfit text-links'>
            <Link to="/cabinas" className='hover:underline underline-offset-4'>Cabinas</Link>
            <Link to="/habitaciones" className='hover:underline underline-offset-4'>Habitaciones</Link>
            <Link to="/sobre-nosotros" className='hover:underline underline-offset-4'>sobre nosotros</Link>
            <Link to="/tiempo-compartido" className='hover:underline underline-offset-4'>Tiempo Compartido</Link>
            <Link to="/contacto" className='hover:underline underline-offset-4'>Contactenos</Link>
            </ul>
        </nav>
    </div>
  )
}