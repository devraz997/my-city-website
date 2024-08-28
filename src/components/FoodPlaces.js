import React, { useEffect, useState } from 'react';
import './FoodPlaces.css';

const FoodPlaces = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Dummy data for food places in Mahabubnagar
    const foodPlaces = [
        { name: 'Momo Hut', tagline: 'Popular for its delicious momos and snacks.', image: 'https://via.placeholder.com/300x200?text=Momo+Hut' },
        { name: 'Spice Junction', tagline: 'Known for its spicy Indian curries and traditional dishes.', image: 'https://via.placeholder.com/300x200?text=Spice+Junction' },
        { name: 'Sweet Tooth Cafe', tagline: 'Famous for its range of mouth-watering desserts.', image: 'https://via.placeholder.com/300x200?text=Sweet+Tooth+Cafe' },
        { name: 'Tandoori Treats', tagline: 'Offers a variety of tandoori and grilled dishes.', image: 'https://via.placeholder.com/300x200?text=Tandoori+Treats' },
        { name: 'The Royal Diner', tagline: 'Offers a fine dining experience with an extensive menu.', image: 'https://via.placeholder.com/300x200?text=The+Royal+Diner' }
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
