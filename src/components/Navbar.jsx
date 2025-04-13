import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <nav className="navbar">
      <a 
        href="https://calendly.com/veselinovkrasen/30min" 
        className="nav-brand"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/src/assets/Images/RVS.png" alt="RVS Logo" className="brand-logo" />
        <span>ЗАПАЗИ СИ РАЗГОВОР</span>
      </a>
      
      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Начало</a></li>
          <li><a href="#video" onClick={() => setIsMenuOpen(false)}>Общество</a></li>
          <li><a href="#footer" onClick={() => setIsMenuOpen(false)}>За нас</a></li>
          {currentUser ? (
            <>
              <li className="user-email">{currentUser.email}</li>
              <li>
                <button onClick={handleLogout} className="logout-button">
                  Излез
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="login-button">ВЛЕЗ</Link>
              </li>
              <li>
                <Link to="/signup" className="nav-cta">РЕГИСТРИРАЙ СЕ</Link>
              </li>
            </>
          )}
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