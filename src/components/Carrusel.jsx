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

  return (
    
    <Carousel showThumbs={false} showArrows={true} autoPlay={true} interval={1000} infiniteLoop={true} stopOnHover={false}>
      <div className='h-full'>
        <img className='h-full object-cover object-center' src={img1} alt="Legend 1" />
      </div>
      <div className='h-full'>
        <img className='h-full object-cover object-center' src={img2} alt="Legend 2" />
      </div>
      <div className='h-full'>
        <img className='h-full object-cover object-center' src={img3} alt="Legend 3" />
      </div>
      <div className='h-full'>
        <img className='h-full object-cover object-center' src={img4} alt="Legend 4" />
      </div>
      <div className='h-full'>
        <img className='h-full object-cover object-center' src={img5} alt="Legend 5" />
      </div>
      <div className='h-full'>
        <img className='h-full object-cover object-center' src={img6} alt="Legend 6" />
      </div>
    </Carousel>
  );
}
