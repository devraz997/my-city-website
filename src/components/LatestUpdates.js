import React from 'react';
import Slider from 'react-slick';
import './LatestUpdates.css'; // Ensure this file exists for styling

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000, // Slide transition speed
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,         // Enables automatic sliding
  autoplaySpeed: 700,     // Duration for each slide in milliseconds
  pauseOnHover: true,     // Pause the slide when hovered
  pauseOnFocus: true,     // Pause the slide when focused
  pauseOnDotsHover: true, // Pause the slide when dots are hovered
};

const slides = [
  {
    //image: 'https://via.placeholder.com/1200x600?text=Update+1', // Placeholder image
    image: 'MbnrarealpicAI.png',
    text: 'Mahabubnagar is the largest district in Telangana by area, covering 5,285.1 sq. km!',
  },
  {
    image: 'mirmahabubali.png',
    text: 'The district headquarters was named after Mir Mahabub Ali Khan, the Nizam of Hyderabad',
  },
  {
    image: 'oldmbnr.png',
    text: 'Mahabubnagar was formerly known as "Rukmammapeta" and "Palamooru.',
  },
  {
    image: 'mbnrcuisine.png',
    text: "Mahabubnagar's cuisine is a blend of traditional Telugu flavors with Persian, Mughal, and local Deccan influences.",
  },
];

const LatestUpdates = () => {
  return (
    <section className="latest-updates">
      <div className="latest-updates-title">Popular Facts</div>
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index} className="slider-item">
            <div
              className="slider-image"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <p className="slider-text">{slide.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default LatestUpdates;
