import '../../Css/Footer.css'; 

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer-container">
        
        {/* Column 1: Brand & Description */}
        <div className="footer-col brand-col">
          <div className="brand-header">
            <div className="brand-title">
              <h2>John Patrick Ignacio</h2>
              <span>Front-End Web Developer</span>
            </div>
          </div>
          <p className="brand-desc">
            Passionate about crafting intuitive user interfaces and building robust web applications. Always eager to learn, build, and improve.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className='bx bxl-linkedin-square'></i>
            </a>
            <a href="https://github.com/crabbypatty21" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className='bx bxl-github'></i>
            </a>
            <a href="https://www.facebook.com/Jhnpatrickignacio" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className='bx bxl-facebook'></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className='bx bxl-instagram'></i>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col links-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div className="footer-col contact-col">
          <h3>Contact Information</h3>
          <ul>
            <li>
              <i className='bx bx-map'></i>
              <span>Santa Maria, Central Luzon, Philippines</span>
            </li>
            <li>
              <i className='bx bx-envelope'></i>
              <a href="mailto:your.email@example.com" className="email-link">your.email@example.com</a>
            </li>
            <li>
              <i className='bx bx-phone'></i>
              <span>+63 900 000 0000</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Section */}
      <div className="portfolio-footer-bottom">
        <hr />
        <p>&copy; {currentYear} John Patrick Ignacio. All rights reserved.</p>
        <p>Designed and built for my personal portfolio.</p>
      </div>
    </footer>
  );
}

export default Footer;