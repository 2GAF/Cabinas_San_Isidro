import { useState, useEffect } from 'react';

// Custom hook to handle adding new events
export const useCabInfo = (activeCap) => {

  // almacenar el estado inicial de la cabina escogida que sera la de 4 personas
  const [cabinaEscogida, setCabina] = useState([
  ]);

  useEffect(() => {
    seleccion(activeCap);
  }, [activeCap]);

  // Funcion para seleccionar la cabina segun la cantidad de personas
  function seleccion(activeCap) {

    if (activeCap == '3-4') {
      setCabina({
        titulo: "Cabina para 4 personas",
      precio: "₡60.000 IVA.i",
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad repudiandae dolores excepturi perspiciatis blanditiis rem consequatur eveniet alias, cum sit voluptate accusamus optio hic dicta id tenetur? Perferendis, molestiae!",
        servicios: "TV, Abanico",
        image: "foto"
      });
    }else if (activeCap == '5-6') {
      setCabina({
        titulo: "Cabina para 6 personas",
        precio: "₡73.000 IVA.i",
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad repudiandae dolores excepturi perspiciatis blanditiis rem consequatur eveniet alias, cum sit voluptate accusamus optio hic dicta id tenetur? Perferendis, molestiae!",
        servicios: "TV, Abanico",
        image: "foto"
      });
    }else if (activeCap == '5-6*') {
      setCabina({
        titulo: "Cabina para 6 personas",
        precio: "₡83.000 IVA.i",
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad repudiandae dolores excepturi perspiciatis blanditiis rem consequatur eveniet alias, cum sit voluptate accusamus optio hic dicta id tenetur? Perferendis, molestiae!",
        servicios: "TV, A/C",
        image: "foto"
      });
    }else if (activeCap == '8-9') {
      setCabina({
        titulo: "Cabina para 9 personas",
        precio: "₡110.000 IVA.i",
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad repudiandae dolores excepturi perspiciatis blanditiis rem consequatur eveniet alias, cum sit voluptate accusamus optio hic dicta id tenetur? Perferendis, molestiae!",
        servicios: "TV, Abanico",
        image: "foto"
      });
    }else if (activeCap == '1') {
      setCabina({
        titulo: "Habitacion para 1 persona",
        precio: "₡25.000 IVA.i",
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad repudiandae dolores excepturi perspiciatis blanditiis rem consequatur eveniet alias, cum sit voluptate accusamus optio hic dicta id tenetur? Perferendis, molestiae!",
        servicios: "A/C, TV",
        image: "foto"
      });
    }else if (activeCap == '2') {
      setCabina({
        titulo: "Habitacion para 2 persona",
        precio: "₡36.000 IVA.i",
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad repudiandae dolores excepturi perspiciatis blanditiis rem consequatur eveniet alias, cum sit voluptate accusamus optio hic dicta id tenetur? Perferendis, molestiae!",
        servicios: "A/C, TV",
        image: "foto"
      });
    }else if (activeCap == '3') {
      setCabina({
        titulo: "Habitacion para 3 persona",
        precio: "₡42.000 IVA.i",
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad repudiandae dolores excepturi perspiciatis blanditiis rem consequatur eveniet alias, cum sit voluptate accusamus optio hic dicta id tenetur? Perferendis, molestiae!",
        servicios: "A/C, TV",
        image: "foto"
      });
    }else {
      setCabina({
        titulo: "Habitacion para 4 persona",
        precio: "₡47.000 IVA.i",
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ad repudiandae dolores excepturi perspiciatis blanditiis rem consequatur eveniet alias, cum sit voluptate accusamus optio hic dicta id tenetur? Perferendis, molestiae!",
        servicios: "A/C, TV",
        image: "foto"
      });
    }
  }
// retorno de la informacion de la cabina escogida
  return {cabinaEscogida};
}