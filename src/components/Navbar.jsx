import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src="/src/assets/Images/RVS.png" alt="RVS Logo" className="brand-logo" />
      </div>

      <button 
        className={`burger-menu ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Начало</a></li>
          <li><a href="#video" onClick={() => setIsMenuOpen(false)}>Общество</a></li>
          <li><a href="#footer" onClick={() => setIsMenuOpen(false)}>За нас</a></li>
        </ul>
        <a 
          href="https://calendly.com/veselinovkrasen/30min" 
          className="nav-cta" 
          target="_blank"
          rel="noopener noreferrer"
        >
          ЗАПАЗИ СИ РАЗГОВОР
        </a>
      </div>
    </nav>
  );
};

export default Navbar; 