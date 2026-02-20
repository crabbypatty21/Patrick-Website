// src/components/AboutMe.jsx
import React from 'react';
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
          <h3>I'm a <span>Backend Developer</span></h3>
          <p>
            I am a dedicated 3rd-year Bachelor of Science in Information Technology student 
            based in the Philippines. My journey in tech is driven by a passion for creating 
            efficient backend systems and solving complex problems through code.
          </p>
          <p style={{ marginTop: '1rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.8)' }}>
            Beyond just coding, I believe in continuous learning and adapting to new technologies.
            I have worked on various projects ranging from game development to web applications, 
            always striving to deliver high-quality software solutions.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutMe;