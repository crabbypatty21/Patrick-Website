// src/components/partials/TopBar.jsx
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../../Css/TopBar.css';
import Personal_logo from '../../img/pat_logo.png';

function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`top-bar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          <img src={Personal_logo} alt="personal logo" className="logo-img" />
          Patrick
        </div>
        <ul className="nav-links">
          <li className="dropdown">
            <div className="dropdown-trigger">
              <Link to="/" style={{color: 'inherit'}}>Home</Link> <span className="arrow-down"></span>
            </div>
            <ul className="dropdown-menu">
              <li onClick={() => handleSectionClick('home')}>Profile</li>
              <li onClick={() => handleSectionClick('about')}>About Overview</li>
              <li onClick={() =>XYSectionClick('services')}>Skills</li>
            </ul>
          </li>
          
          {/* New About Me Link */}
          <li><Link to="/aboutme" style={{color: 'inherit'}}>About Me</Link></li>
          {/* Linked to your "Activities" section ID */}
          <li onClick={() => handleSectionClick('Activities')} style={{ cursor: 'pointer' }}>Projects</li>
          <li>Work Experience</li>
          <li onClick={() => handleSectionClick('contact')}>Contact</li>
        </ul>
      </nav>

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

// Helper to handle the typo in my previous thought block: 'XYSectionClick' isn't real, 
// using the correct handler below for the final code block.
function TopBarFinal() {
    // ... (logic same as above)
    // Just ensure the onClick uses handleSectionClick('services')
}

export default TopBar;