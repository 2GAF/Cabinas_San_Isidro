import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'


export function Carrusel() {

  const imgs = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
  ]

  return (

    <Carousel showThumbs={false} showArrows={true} autoPlay={true} interval={2000} infiniteLoop={true} stopOnHover={false}>
      {imgs.map(element => 
        (
          <div key={element.id} className='xl:h-[55rem] md:h-[30rem] sm:[20rem]'>
            <img className='xl:h-[55rem] md:h-[40rem] sm:[40rem] object-cover object-center' src={element.img} alt="Legend 1" />
          </div>
        )
      )}
    </Carousel>
  );
}
