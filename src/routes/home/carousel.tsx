import React, { useState, useEffect } from 'react';
import './carousel.css';
import { Link } from 'react-router-dom';

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
	<Link onClick={()=> localStorage.setItem('current_movie', JSON.stringify(slide))} to={`/watch/${slide.imdbId}`}>
          <img style={{height: '30vh'}}src={slide.imageUrl} alt={slide.title} />
          <div className="caption">{slide.title}</div>
	</Link>
        </div>
      ))}
    </div>
  );
};


export default Carousel;

