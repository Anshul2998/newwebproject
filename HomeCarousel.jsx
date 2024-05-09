import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import heroCarousel1 from '../images/img/hero-carousel/hero-carousel-1.jpg';
import heroCarousel2 from '../images/img/hero-carousel/hero-carousel-2.jpg';
import heroCarousel3 from '../images/img/hero-carousel/hero-carousel-3.jpg';

const data = [
  {
   image: heroCarousel1,
   caption:"Caption",
   description:"Description Here"
  },
  {
    image: heroCarousel2,
    caption:"Caption",
    description:"Description Here"
   },
   {
    image: heroCarousel3,
    caption:"Caption",
    description:"Description Here"
   }
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000} pause={false}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item className="carousel-item" key={i}>
            <img
              className="d-block w-100 c-img img-fluid"
              src={slide.image}
              alt="slider image"
            />
            <Carousel.Caption className="d-flex justify-content-center align-items-center h-100">
              <h3>{slide.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}
export default HomeCarousel;
