import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/imgs/Inst1.jpg'
import img2 from '../assets/imgs/Inst4.jpg'
import img3 from '../assets/imgs/Inst5.jpg'
import img4 from '../assets/imgs/Inst6.jpg'
import img5 from '../assets/imgs/Inst7.jpg'
import img6 from '../assets/imgs/Inst9.jpg'
import img7 from '../assets/imgs/Inst11.jpg'
import img8 from '../assets/imgs/Inst13.jpg'
import img9 from '../assets/imgs/Inst16.jpg'
import img10 from '../assets/imgs/Inst24.jpg'
import img11 from '../assets/imgs/Inst28.jpg'


export function Carrusel() {

  const imgs = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 },
    { id: 9, img: img9 },
    { id: 10, img: img10 },
    { id: 11, img: img11 },
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
