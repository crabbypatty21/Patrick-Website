// src/components/partials/TopBar.jsx
import { useState, useEffect } from 'react';
import '../../Css/TopBar.css';

function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background change for TopBar
      setScrolled(window.scrollY > 50);
      // Show Back to Top button after scrolling 400px
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`top-bar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo" onClick={scrollToTop} style={{cursor: 'pointer'}}>Patrick</div>
        
        <ul className="nav-links">
          <li className="dropdown">
            <div className="dropdown-trigger">
              Home <span className="arrow-down"></span>
            </div>
            <ul className="dropdown-menu">
              <li onClick={() => scrollToSection('hero')}>Hero Section</li>
              <li onClick={() => scrollToSection('about')}>About Me</li>
              <li onClick={() => scrollToSection('skills')}>Skills</li>
            </ul>
          </li>
          <li>School Projects</li>
          <li>Work Experience</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Back to Top"
      >
        ↑
      </button>
    </>
  );
}

export default TopBar;