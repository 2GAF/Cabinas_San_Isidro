import './App.css'
import {Route, Routes } from 'react-router-dom';
import { Index } from './pages/Index';

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contac-us" element={<ContacUs />} /> */}
        </Routes>
    </>
  )
}

export default App
