import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">mahabubnagarbolte</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/places">Places</Link>
        <Link to="/polls">Polls</Link>
        <Link to="/events">Events</Link>
        <Link to="/local-businesses">Local Businesses</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="social-media">
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">Reddit</a>
      </div>
      <p className="footer-copyright">© 2024 Mahabubnagarbolte. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
