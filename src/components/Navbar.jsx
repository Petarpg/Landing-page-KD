import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import '../styles/Navbar.css';
import rvsLogo from '../assets/Images/RVS.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a 
        href="https://calendly.com/veselinovkrasen/30min" 
        className="nav-brand"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={rvsLogo} alt="RVS Logo" className="brand-logo" />
        <span>
          {isMobile ? t('bookCallMobile') || 'Book a Free Call with Krasen' : t('bookCall')}
        </span>
      </a>
      
      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('home')} className="nav-link">{t('home')}</button></li>
          <li><button onClick={() => scrollToSection('video')} className="nav-link">{t('community')}</button></li>
          <li><button onClick={() => scrollToSection('footer')} className="nav-link">{t('aboutUs')}</button></li>
          {currentUser && (
            <>
              <li className="user-email">{currentUser.email}</li>
              <li>
                <button onClick={handleLogout} className="logout-button">
                  {t('logout')}
                </button>
              </li>
            </>
          )}
        </ul>
      </div>

      <button 
        className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label={t('toggleMenu')}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="user-section">
        <LanguageToggle />
      </div>
    </nav>
  );
};

export default Navbar; 