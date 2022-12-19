import React, {useState}  from'react';
import { SliderData } from './SliderData';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';




const Slide = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length;
  

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1);
  };




if (!Array.isArray(slides) || slides.length <= 0) {
  return null;
}




  return (

    <section className='slider'>
    <FaChevronLeft className='left-arrow'  onClick={prevSlide} />
    <FaChevronRight className='right-arrow'  onClick={nextSlide} />
    {SliderData.map((slide, index) => {

      return (
        <div 
        className={index === current ? 'slide active' : 'slide' } 
        key={index}
        >
        {index === current && ( 
          <div className="slider" id="foto">
        <img src={slide.image} alt='' id="capa" height="100%" width="100%" /></div>
        )}
        </div>
      )  
      
    })}
       
    
    </section>
  );
};

export default Slide;