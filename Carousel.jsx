import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Import your Mini CSS styles for the carousel

const Carousel = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slide data, each containing an image URL, title, and description
  const slides = [
    {
      imageUrl: 'https://id.jbl.com/on/demandware.static/-/Sites-JB-APAC-NCOM-Library/default/dw5df242d7/home-hero-carousel/2023/Authentics-500-Web-Banner-2800x970px.jpg',
      title: 'Welcome To This Website',
      description: "Look at The List Of JBL"
    },
    {
      imageUrl: 'https://id.jbl.com/on/demandware.static/-/Sites-JB-APAC-NCOM-Library/default/dw7c561c13/home-hero-carousel/2023/Authentics_2800x970.jpg',
      title: 'TERBARU',
      description: "Look at The List Of JBL"
    },
    {
      imageUrl: 'https://id.jbl.com/on/demandware.static/-/Sites-JB-APAC-NCOM-Library/default/dwb56576fc/home-hero-carousel/2023/Tour-One-M2_2800%20x970_Rev2.jpg',
      title: 'MASA KINI',
      description: 'Look at The List Of JBL'
    },
    {
      imageUrl: 'https://id.jbl.com/on/demandware.static/-/Sites-JB-APAC-NCOM-Library/default/dw2767ade9/PB1000.jpg',
      title: 'JBL MASA KINI',
      description: "Look at The List Of JBL"
    }
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  // Automatically move to the next slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" className="content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
      <div className="controls">
        <button onClick={prevSlide}>&#10094;</button>
        <button onClick={nextSlide}>&#10095;</button>
      </div>
      <div className="indicators">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
