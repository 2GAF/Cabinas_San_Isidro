import { useState, useEffect } from 'react';
import c41 from "../assets/imgs/C4.1.jpg";
import c42 from "../assets/imgs/C4.2.jpg";
import c43 from "../assets/imgs/C4.3.jpg";
import c61 from "../assets/imgs/C6.1.jpg";
import c62 from "../assets/imgs/C6.2.jpg";
import c63 from "../assets/imgs/C6.3.jpg";
import c64 from "../assets/imgs/C6.4.jpg";
import c65 from "../assets/imgs/C6.5.jpg";
import c91 from "../assets/imgs/C9.1.jpg";
import c92 from "../assets/imgs/C9.2.jpg";
import c93 from "../assets/imgs/C9.3.jpg";
import c94 from "../assets/imgs/C9.4.jpg";
import c95 from "../assets/imgs/C9.5.jpg";
import c96 from "../assets/imgs/C9.6.jpg";
import c97 from "../assets/imgs/C9.7.jpg";
import h1 from "../assets/imgs/H1.jpg";
import h2 from "../assets/imgs/H2.jpg";
import h3 from "../assets/imgs/H3.jpg";
import h4 from "../assets/imgs/H4.jpg";

// Información de las cabinas
const cabinasInfo = {
  '3-4': {
    titulo: "Cabina para 4 personas",
    precio: "₡60.000 IVA.i",
    descripcion: "Cabina equipada con utensilios básicos de cocina (platos, vasos, cubiertos, ollas, sarten, refrigeradora), cuenta con un aposento cocina-dormitorio con 1 cama matrimonial y 1 cama nido.",
    image: [c41, c42, c43],
  },
  '5-6': {
    titulo: "Cabina para 6 personas",
    precio: "₡73.000 IVA.i",
    descripcion: "Cabina equipada con utensilios básicos de cocina (platos, vasos, cubiertos, ollas, sarten, refrigeradora), cuenta con dos aposentos cocina y dormitorio con 1 cama matrimonial y 2 camas nido.",
    image: [c61, c62, c63, c64, c65],
  },
  '5-6*': {
    titulo: "Cabina para 6 personas",
    precio: "₡83.000 IVA.i",
    descripcion: "Cabina equipada con utensilios básicos de cocina (platos, vasos, cubiertos, ollas, sarten, refrigeradora), cuenta con dos aposentos cocina y dormitorio con 1 cama matrimonial y 2 camas nido.",
    image: [c61, c62, c63, c64, c65],
  },
  '8-9': {
    titulo: "Cabina para 9 personas",
    precio: "₡110.000 IVA.i",
    descripcion: "Cabina equipada con utensilios básicos de cocina (platos, vasos, cubiertos, ollas, sarten, refrigeradora), cuenta con tres aposentos cocina y dos dormitorio cada uno con 1 cama matrimonial y 1 camas nido.",
    image: [c91, c92, c93, c94, c95, c96, c97],
  },
  '1': {
    titulo: "Habitación para 1 persona",
    precio: "₡25.000 IVA.i",
    descripcion: "Habitación sencilla con aire acondicionado y televisión, cuenta con una cama matrimonial y paños",
    image: [h1, h2, h3, h4],
  },
  '2': {
    titulo: "Habitación para 2 personas",
    precio: "₡36.000 IVA.i",
    descripcion: "Habitación sencilla con aire acondicionado y televisión, cuenta con una cama matrimonial y paños",
    image: [h1, h2, h3, h4],
  },
  '3': {
    titulo: "Habitación para 3 personas",
    precio: "₡42.000 IVA.i",
    descripcion: "Habitación sencilla con aire acondicionado y televisión, cuenta con una cama matrimonial, una cama individual y paños",
    image: [h1, h2, h3, h4],
  },
  'default': {
    titulo: "Habitación para 4 personas",
    precio: "₡47.000 IVA.i",
    descripcion: "Habitación sencilla con aire acondicionado y televisión, cuenta con dos camas matrimoniales y paños",
    image: [h1, h2, h3, h4],
  }
};

// Custom hook para manejar la información de las cabinas
export const useCabInfo = (activeCap) => {
  const [cabinaEscogida, setCabina] = useState({});

  useEffect(() => {
    seleccion(activeCap);
  }, [activeCap]);

  // Función para seleccionar la cabina según la cantidad de personas
  const seleccion = (activeCap) => {
    const cabinaKey = Object.keys(cabinasInfo).find(key => key === activeCap || key + ' Personas' === activeCap) || 'default';
    setCabina(cabinasInfo[cabinaKey]);
  };

  return { cabinaEscogida };
};
