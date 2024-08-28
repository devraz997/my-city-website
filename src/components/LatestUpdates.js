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
    image: 'https://via.placeholder.com/1200x600?text=Update+1', // Placeholder image
    text: 'Exciting developments are happening in Mahabubnagar with new infrastructure projects underway!',
  },
  {
    image: 'https://via.placeholder.com/1200x600?text=Update+2',
    text: 'Mahabubnagar’s local businesses are thriving with new opportunities and innovations.',
  },
  {
    image: 'https://via.placeholder.com/1200x600?text=Update+3',
    text: 'Recent cultural events in Mahabubnagar have brought the community closer together.',
  },
  {
    image: 'https://via.placeholder.com/1200x600?text=Update+4',
    text: 'Mahabubnagar’s educational sector sees significant growth with new schools and colleges.',
  },
];

const LatestUpdates = () => {
  return (
    <section className="latest-updates">
      <div className="latest-updates-title">Latest Updates</div>
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
