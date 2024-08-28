import React, { useEffect, useState } from 'react';
import './FoodPlaces.css';

const FoodPlaces = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Dummy data for food places in Mahabubnagar
    const foodPlaces = [
        { name: 'UB Food Court', tagline: 'Popular go to spot for food, chai, chill.', image: 'ubfoodcourt.png' },
        { name: 'zeeshan Restaurant', tagline: 'Known for authentic Hyderabadi cuisine', image: 'Zeeshan.png' },
        { name: 'Hotel Nayab', tagline: 'Indian dishes with a focus on North Indian and Mughlai cuisine', image: 'https://via.placeholder.com/300x200?text=Hotel+Nayab' },
        { name: 'Shilpi Hotel', tagline: 'Offers a multi-cuisine offerings, providing a mix of traditional and contemporary dishes.', image: 'https://via.placeholder.com/300x200?text=Shilpi+Hotel' },
        { name: 'Himalaya Restaurant', tagline: 'One of very first favourite for Biryani and North Indian dishes', image: 'Himalaya.png' }
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % foodPlaces.length);
        }, 2500); // Change slide every 2.5 seconds

        return () => clearInterval(slideInterval);
    }, [foodPlaces.length]);

    return (
        <section className="food-places">
            <h2>Featured Food Places</h2>
            <div className="places-carousel">
                {foodPlaces.map((place, index) => (
                    <div
                        key={index}
                        className={`place-card ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={place.image} alt={place.name} className="place-card-image" />
                        <div className="place-card-content">
                            <h3>{place.name}</h3>
                            <p>{place.tagline}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="explore-more-btn">Explore More</button>
        </section>
    );
};

export default FoodPlaces;
