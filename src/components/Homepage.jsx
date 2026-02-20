// src/components/Homepage.jsx
import { Link } from 'react-router-dom';
import '../Css/Homepage.css';
import TopBar from './partials/TopBar';
import Footer from './partials/Footer';

// import images cos it dont work directly
import backendImg from '../img/backend.jpg';

function Homepage() {
  return (
    <div className="homepage-container">
      <TopBar />

      <main className="content">
        {/* Hero Section */}
        <section className="home" id="home">
          <div className="home-content">
            <span className="software-label">Web & Game Developer</span>
            <h1>Hello I'm <br /><span className="name-highlight">John Patrick Ignacio</span></h1>
            <p>
              I am knowledgeable at Game Development using Unreal engine Blueprints
            </p>

            <div className="cta-container">
              <a href="#" className="btn-outline">
                DOWNLOAD CV <i className='bx bx-download'></i>
              </a>
              <div className="social-media-minimal">
                <a href="https://github.com/crabbypatty21" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                <a href="https://www.linkedin.com/in/john-patrick-ignacio-4804802b5/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
                <a href="https://www.instagram.com/pat1221_/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
                <a href="https://www.facebook.com/Jhnpatrickignacio/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
              </div>
            </div>
          </div>

          <div className="home-img-container">
            <div className="img-border-wrapper">
              <svg className="rotating-svg" viewBox="0 0 506 506" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="253" cy="253" r="250" stroke="#2AAA8A" strokeWidth="4" strokeLinecap="round" strokeDasharray="50 40 10 40" className="rotating-circle" />
              </svg>
              <div className="inner-img">
                <img src={backendImg} alt="profile" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <div className="stats-container">
          <div className="stat-item"><h2>3</h2><p>Years of <br />experience</p></div>
          <div className="stat-item"><h2>21</h2><p>Projects <br />completed</p></div>
          <div className="stat-item"><h2>7</h2><p>Technologies <br />mastered</p></div>
          <div className="stat-item"><h2>408</h2><p>Code <br />commits</p></div>
        </div>

        {/* UPDATED About Section: Two-Column Layout with Image */}
        <section className="about" id="about">
          <div className="about-container">
            
            {/* Left Column: Text and Buttons */}
            <div className="about-content">
              <h2 className="heading">About <span>Me</span></h2>
              <h3>I'm a <span>4th Year BSIT College Student</span></h3>
              <p>
                I can work on both frontend and backend development, but I’ve had more exposure to backend development. While I’m still growing and refining my skills, most of my experience so far is on the backend side.
              </p>
              
              <div className="button-group" style={{ marginTop: '20px' }}>
                {/* Link to new page */}
                <Link to="/aboutme" className="btn-solid">
                  Read More
                </Link>
              </div>
            </div>

            {/* Right Column: Profile Image */}
            <div className="about-img">
              {/* Replace 'profile.jpg' with your actual image file path */}
              <img src={backendImg} alt="profile" />
            </div>

          </div>
        </section>

        {/* Favorites Section: Short Overview */}
        <section className="favorites" id="favorites" >
          <h2 className="heading"><span>Favorites</span> & Interests</h2>
          <div className="favorites-overview-container">
            
            {/* Card 1: Professional */}
            <div className="fav-category-card " >
              <Link to="/aboutme">
              <div className="card-header">
                <i className='bx bx-briefcase'></i>
                <h3>Professional</h3>
              </div>
              <ul className="fav-list">
                <li><strong>Tech Stack:</strong> Backend Development</li>
                <li><strong>Projects Built:</strong> Personal Portfolio</li>
                <li><strong>Role Focus:</strong> Backend Architecture</li>
              </ul>
              </Link>
            </div>

            {/* Card 2: Tech & Learning */}
            <div className="fav-category-card">
              <Link to="/aboutme">
              <div className="card-header">
                <i className='bx bx-code-alt'></i>
                <h3>Tech & Learning</h3>
              </div>
              <ul className="fav-list">
                <li><strong>Framework:</strong> Laravel</li>
                <li><strong>Development Tool:</strong> Git</li>
                <li><strong>Fav Language:</strong> JavaScript</li>
                <li><strong>Database:</strong> MySQL</li>
                <li><strong>IDE/Editor:</strong> VS Code</li>
                <li><strong>Learning Platform:</strong> YouTube</li>
                <li><strong>Want to Learn:</strong> React Native</li>
              </ul>
              </Link>
            </div>

            {/* Card 3: Personal Interest */}
            <div className="fav-category-card">
              <Link to="/aboutme">
              <div className="card-header">
                <i className='bx bx-heart'></i>
                <h3>Personal Interest</h3>
              </div>
              <ul className="fav-list">
                <li><strong>Music Genre:</strong> OPM</li>
                <li><strong>Game:</strong> League of Legends</li>
                <li><strong>Sports:</strong> Basketball</li>
                <li><strong>Food:</strong> Pizza</li>
                <li><strong>Hobby:</strong> Play Guitar</li>
              </ul>
              </Link>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section className="services" id="services">
          <h2 className="heading">My <span>Skills</span></h2>
          <div className="services-container">
            <div className="services-box"><i className="bx bx-code"></i><h3>Web Development</h3><p>I can create simple web projects for you</p><a href="#" className="btn">Read More</a></div>
            <div className="services-box"><i className="bx bx-palette"></i><h3>UI/UX DESIGN</h3><p>I can design User Interfaces and other Visuals</p><a href="#" className="btn">Read More</a></div>
            <div className="services-box"><i className="bx bxl-android"></i><h3>Game Development</h3><p>I can develop simple game base on the clients preferences</p><a href="#" className="btn">Read More</a></div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="Activities" id="Activities">
          <h2 className="heading">My <span>Activities</span></h2>
          <div className="Activities-container">
            {[2, 3, 4, 5].map((num) => (
              <div className="Activities-box" key={num}>
                <i className='bx bx-task'></i>
                <h3>Activity#{num}</h3>
                <a href={`https://ignacioact${num}.netlify.app`} target="_blank" rel="noopener noreferrer" className="btn">Go to Activity#{num}</a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
          <h2 className="heading">Contact <span>Me</span></h2>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <div className="input-box"><input type="text" placeholder="Full Name" /><input type="email" placeholder="Email Address" /></div>
            <div className="input-box"><input type="number" placeholder="Phone Number" /><input type="text" placeholder="Email Subject" /></div>
            <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
            <button type="submit" className="btn">Submit</button>
          </form>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default Homepage;