// src/components/partials/TopBar.jsx
import { useState, useEffect } from 'react';
import '../../Css/TopBar.css';

function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scroll is more than 50px, add background
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Apply the 'scrolled' class conditionally
    <nav className={`top-bar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">Patrick</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>School Projects</li>
        <li>Work Experience</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default TopBar;