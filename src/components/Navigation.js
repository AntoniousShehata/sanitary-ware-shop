import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Ensure this file is correctly referenced

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <h1>Abosefen and Tamave Irini</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <img src="/path/to/hamburger-icon.png" alt="Menu" /> {/* Replace with your icon path */}
      </button>
      <nav className={`nav-links ${isOpen ? 'visible' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/product" onClick={closeMenu}>Product</Link>
        <Link to="/about" onClick={closeMenu}>About Us</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </nav>
    </header>
  );
};

export default Navigation;
