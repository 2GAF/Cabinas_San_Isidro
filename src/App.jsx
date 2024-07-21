import './App.css'
import {Route, Routes } from 'react-router-dom';
import { Index } from './pages/Index';
import { Cabinas } from './pages/Cabinas';
import { Habitaciones } from './pages/Habitaciones';
import { Nosotros } from './pages/Nosotros';
import { TiempoCompartido } from './pages/TiempoCompartido';
import { Contacto } from './pages/Contacto';


function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cabinas" element={<Cabinas />} />
          <Route path="/habitaciones" element={<Habitaciones />} />
          <Route path="/sobre-nosotros" element={<Nosotros />} /> 
          <Route path="/tiempo-compartido" element={<TiempoCompartido />}/>
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
    </>
  )
}

export default App
