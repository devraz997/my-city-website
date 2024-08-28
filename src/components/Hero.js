import React, { useState } from 'react';
import './Hero.css'; 
import { FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop>
        <source src="clocktowervid2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>మహబూబ్ నగర్</h1>
        <p>Mana City, Mana Kahani</p>
        <div className="map-icon" onClick={toggleMap}>
          <FaMapMarkerAlt size={40} />
          <p>View Map</p>
        </div>
        {showMap && (
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.0382658697065!2d78.50436401525283!3d16.74353158848159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccdff4178d6599%3A0x5d5d2f5cb5c3c5a6!2sMahabubnagar%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1649534851765!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Mahabubnagar Map"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;