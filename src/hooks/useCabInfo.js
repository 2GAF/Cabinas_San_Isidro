import { useState, useEffect } from 'react';

// Información de las cabinas
const cabinasInfo = {
  '3-4': {
    titulo: "Cabina para 4 personas",
    precio: "₡60.000 IVA.i",
    descripcion: "Cabina equipada con utensilios básicos de cocina (platos, vasos, cubiertos, ollas, sarten, refrigeradora), cuenta con un aposento cocina-dormitorio con 1 cama matrimonial y 1 cama nido.",
    servicios: "TV, Abanico",
    image: "foto"
  },
  '5-6': {
    titulo: "Cabina para 6 personas",
    precio: "₡73.000 IVA.i",
    descripcion: "Cabina equipada con utensilios básicos de cocina (platos, vasos, cubiertos, ollas, sarten, refrigeradora), cuenta con dos aposentos cocina y dormitorio con 1 cama matrimonial y 2 camas nido.",
    servicios: "TV, Abanico",
    image: "foto"
  },
  '5-6*': {
    titulo: "Cabina para 6 personas",
    precio: "₡83.000 IVA.i",
    descripcion: "Cabina equipada con utensilios básicos de cocina (platos, vasos, cubiertos, ollas, sarten, refrigeradora), cuenta con dos aposentos cocina y dormitorio con 1 cama matrimonial y 2 camas nido.",
    servicios: "TV, A/C",
    image: "foto"
  },
  '8-9': {
    titulo: "Cabina para 9 personas",
    precio: "₡110.000 IVA.i",
    descripcion: "Cabina equipada con utensilios básicos de cocina (platos, vasos, cubiertos, ollas, sarten, refrigeradora), cuenta con tres aposentos cocina y dos dormitorio cada uno con 1 cama matrimonial y 1 camas nido.",
    servicios: "TV, Abanico",
    image: "foto"
  },
  '1': {
    titulo: "Habitación para 1 persona",
    precio: "₡25.000 IVA.i",
    descripcion: "Habitación sencilla con aire acondicionado y televisión, cuenta con una cama matrimonial y paños",
    servicios: "A/C, TV",
    image: "foto"
  },
  '2': {
    titulo: "Habitación para 2 personas",
    precio: "₡36.000 IVA.i",
    descripcion: "Habitación sencilla con aire acondicionado y televisión, cuenta con una cama matrimonial y paños",
    servicios: "A/C, TV",
    image: "foto"
  },
  '3': {
    titulo: "Habitación para 3 personas",
    precio: "₡42.000 IVA.i",
    descripcion: "Habitación sencilla con aire acondicionado y televisión, cuenta con una cama matrimonial, una cama individual y paños",
    servicios: "A/C, TV",
    image: "foto"
  },
  'default': {
    titulo: "Habitación para 4 personas",
    precio: "₡47.000 IVA.i",
    descripcion: "Habitación sencilla con aire acondicionado y televisión, cuenta con dos camas matrimoniales y paños",
    servicios: "A/C, TV",
    image: "foto"
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
