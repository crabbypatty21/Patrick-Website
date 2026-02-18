// Footer.jsx
import '../../Css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-linkedin-square'></i>
        </a>
        <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-github'></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-instagram'></i>
        </a>
        <a href="https://www.facebook.com/Jhnpatrickignacio" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-facebook'></i>
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-twitter'></i>
        </a>
      </div>
      <p className="copyright">&copy; John Patrick Ignacio - All Rights Reserved</p>
    </footer>
  );
}

export default Footer;