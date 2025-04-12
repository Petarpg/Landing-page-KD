import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src="/src/assets/Images/RVS.png" alt="RVS Logo" className="brand-logo" />
        <span>Viral Video Academy</span>
      </div>
      
      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#course">Course</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li>
            <Link to="/login" className="login-button">Sign In</Link>
          </li>
          <li>
            <Link to="/signup" className="nav-cta">Sign Up</Link>
          </li>
        </ul>
      </div>

      <button 
        className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar; 