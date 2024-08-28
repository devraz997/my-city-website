import React, { useEffect, useState } from 'react';
import './FeaturedPlaces.css';

// Dummy data for featured places
const places = [
    {
        id: 1,
        name: "Mayuri Park",
        description: "A beautiful park with lots of greenery.",
        //image: "https://via.placeholder.com/800x500?text=City+Park"
        image: "Mayuripark.png"
    },
    {
        id: 2,
        name: "Pillalamarri",
        description: "700 years old Pillalamarri great Banyan Tree.",
        image: "pillamarriai.jpg"
    },
    {
        id: 3,
        name: "Koil Sagar",
        description: "An irrigation project.",
        image: "Koilsagar.png"
    },
    {
        id: 4,
        name: "Koilkonda Fort",
        description: "The erstwhile outpost of the Qutab Shahi dynasty, perched on a hilltop.",
        image: "koilkondafort.png"
    },
    {
        id: 5,
        name: "Mini Tankbund (Talab katta)",
        description: "A beautiful lake with suspension bridge located in heart of Mahabubnagar.",
        image: "minitankbund.png"
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
