// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initial state as false

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">mahabubnagarbolte</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}> {/* Updated */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/places">Places</Link>
        <Link to="/polls">Polls</Link>
        <Link to="/events">Events</Link>
        <Link to="/local-businesses">Local Businesses</Link>
        <Link to="/contact">Contact</Link>
        <div className="auth-buttons">
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Register</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
