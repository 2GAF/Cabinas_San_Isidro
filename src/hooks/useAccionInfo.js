import { useState, useEffect } from 'react';

// Información de las cabinas
const accionesinfo = {
  'A': {
    temporada: "Temporada A",
    mantenimiento: "₡200 mil",
    descripcion: "Cabina equipada con utensilios básicos de cocina (platos, vasos, cubiertos, ollas, sarten, refrigeradora), cuenta con un aposento cocina-dormitorio con 1 cama matrimonial y 1 cama nido.",
  },
  'B': {
    temporada: "Temporada B",
    mantenimiento: "₡183 mil",
    descripcion: "Cabina equipada con utensilios básicos de cocina (platos, vasos, cubiertos, ollas, sarten, refrigeradora), cuenta con un aposento cocina-dormitorio con 1 cama matrimonial y 1 cama nido.",
  },
  'CD': {
    temporada: "Temporada CD",
    mantenimiento: "₡163 mil",
    descripcion: "Cabina equipada con utensilios básicos de cocina (platos, vasos, cubiertos, ollas, sarten, refrigeradora), cuenta con un aposento cocina-dormitorio con 1 cama matrimonial y 1 cama nido.",
  },
};

// Custom hook para manejar la información de las cabinas
export const useAccionInfo = (activeCap) => {
  const [accionEscogida, setaccionEscogida] = useState({});

  useEffect(() => {
    seleccion(activeCap);
  }, [activeCap]);

  // Función para seleccionar la cabina según la cantidad de personas
  const seleccion = (activeCap) => {
    const cabinaKey = Object.keys(accionesinfo).find(key => key === activeCap);
    setaccionEscogida(accionesinfo[cabinaKey]);
  };

  return { accionEscogida };
};
