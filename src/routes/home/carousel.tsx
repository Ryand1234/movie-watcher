import React, { useState, useEffect } from 'react';
import './carousel.css';

interface MovieInterface {
	title: string;
	description: string;
	imageUrl: string;
	imdbId: string;
}

interface CarouselProps {
  slides: MovieInterface[];
}



const Carousel = ({ slides }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
          <img style={{height: '30vh'}}src={slide.imageUrl} alt={slide.title} />
          <div className="caption">{slide.title}</div>
        </div>
      ))}
    </div>
  );
};


export default Carousel;

