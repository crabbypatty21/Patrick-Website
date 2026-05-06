// src/components/AboutMe.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Homepage.css'; // Imports the dark background settings
import TopBar from './partials/TopBar';
import Footer from './partials/Footer';

// import images cos it dont work directly
import backendImg from '../img/backend.jpg';
import kenImg from '../img/ken.jpg';
import oliviaImg from '../img/olivia.jpg';
import overoctoberImg from '../img/overoctober.jpg';
import ridleysImg from '../img/ridleys.jpg';
import taylorImg from '../img/taylor.jpg';

function AboutMe() {
  return (
    <div className="aboutme-page">
      <TopBar />
      
      {/* Using 'about' class inherits the standard section padding (10rem top).
        This allows the TopBar to overlay the background seamlessly.
      */}
      <section className="about">
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>I'm a <span>Full Stack Developer</span></h3>
          <p>
             I am a passionate web and game developer based in the Philippines, 
             holding a Bachelor of Science in Information Technology. I thrive on bringing ideas to life,
             driven by a deep interest in web development and 
             solving complex problems through code.
          </p>
          <p style={{ marginTop: '1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.8)' }}>
            Beyond just coding, I believe in continuous learning and adapting to new technologies.
            I have worked on various projects ranging from game development to web applications, 
            always striving to deliver high-quality software solutions.
          </p>
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
                <li><strong>Tech Stack:</strong> Full Stack</li>
                <li><strong>Projects Built:</strong> Little Lions SPED School Monitoring System</li>
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
                <li><strong>Framework:</strong> React</li>
                <li><strong>Development Tool:</strong> Git</li>
                <li><strong>Most used Language:</strong> JavaScript</li>
                <li><strong>Database:</strong> MySQL</li>
                <li><strong>IDE/Editor:</strong> VS Code</li>
                <li><strong>Learning Platform:</strong> YouTube</li>
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

      <Footer />
    </div>
  );
}

export default AboutMe;