import logo from '../assets/CSIlogo.svg';
import MenuEmergente from '../assets/menuHam.svg';
import inicio from '../assets/home.svg';
import cabinas from '../assets/cab.svg';
import socios from '../assets/socios.svg';
import nosotros from '../assets/nosotros.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mx-[0.938rem] my-[0.938rem] md:mx-[3.75rem] md:my-[2.875rem]">
      <Link className='' to="/" ><img className='w-[80px] h-auto md:w-[100px]' src={logo} alt="Logo" /></Link>
      <nav className={`fixed z-20 top-0 left-0 h-full text-center pt-[1.625rem] transition-transform transform ${menuOpen ? 'translate-x-0 text-white bg-black' : '-translate-x-full'} lg:static lg:transform-none lg:flex lg:justify-center lg:w-full`}>
      <img className='w-[65px] h-auto md:w-[100px] lg:hidden mx-auto' src={logo} alt="Logo" />
      <h1 className='lg:hidden mb-[3.438rem] font-ovo text-subtitulo-btn'>Bienvenido</h1>
        <ul className='flex flex-col lg:flex-row gap-x-[3.125rem] gap-y-[2.875rem] font-outfit text-links text-left px-[1.5rem]'>
          <li className='flex gap-5'><img src={inicio} alt="" /><Link to="/" className='hover:underline underline-offset-4'>Inicio</Link></li>
          <li className='flex gap-5'><img src={cabinas} alt="" /><Link to="/hospedaje" className='hover:underline underline-offset-4'>Hospedaje</Link></li>
          <li className='flex gap-5'><img src={nosotros} alt="" /><Link to="/sobre-nosotros" className='hover:underline underline-offset-4'>Sobre nosotros</Link></li>
          <li className='flex gap-5'><img src={socios} alt="" /><Link to="/tiempo-compartido" className='hover:underline underline-offset-4'>Tiempo Compartido</Link></li>
          <li className='flex gap-5'><img src={nosotros} alt="" /><Link to="/contacto" className='hover:underline underline-offset-4'>Contáctenos</Link></li>
        </ul>
      </nav>
      
      {/* Boton que verifica el estado del check para abrir y cerrar el menu emergente */}
      <div className='relative lg:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <img className='w-8 h-8' src={MenuEmergente} alt="Menu" />
        </button>
      </div>
    </div>
  )
}