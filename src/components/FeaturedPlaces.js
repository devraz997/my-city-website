import React, { useEffect, useState } from 'react';
import './FeaturedPlaces.css';

// Dummy data for featured places
const places = [
    {
        id: 1,
        name: "City Park",
        description: "A beautiful park with lots of greenery.",
        image: "https://via.placeholder.com/800x500?text=City+Park"
    },
    {
        id: 2,
        name: "Historic Temple",
        description: "An ancient temple with rich history.",
        image: "https://via.placeholder.com/800x500?text=Historic+Temple"
    },
    {
        id: 3,
        name: "Modern Shopping Mall",
        description: "A shopping mall with various brands.",
        image: "https://via.placeholder.com/800x500?text=Shopping+Mall"
    },
    {
        id: 4,
        name: "Cultural Center",
        description: "A hub for cultural events and activities.",
        image: "https://via.placeholder.com/800x500?text=Cultural+Center"
    },
    {
        id: 5,
        name: "Local Market",
        description: "A vibrant market with local products.",
        image: "https://via.placeholder.com/800x500?text=Local+Market"
    }
];

const FeaturedPlaces = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % places.length);
        }, 2500); // Change slide every 2.5 seconds

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <section className="featured-places">
            <h2>Featured Places</h2>
            <div className="places-carousel">
                {places.map((place, index) => (
                    <div
                        key={place.id}
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={place.image} alt={place.name} className="carousel-item-image" />
                        <div className="carousel-item-info">
                            <h3>{place.name}</h3>
                            <p>{place.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="explore-more-btn">Explore More</button>
        </section>
    );
};

export default FeaturedPlaces;
