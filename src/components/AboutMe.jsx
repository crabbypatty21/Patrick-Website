// src/components/AboutMe.jsx
import React from 'react';
import '../Css/Homepage.css'; // Imports the dark background settings
import TopBar from './partials/TopBar';
import Footer from './partials/Footer';
import backendImg from '../img/backend.jpg';

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

        <div className="about-img">
          <img src={backendImg} alt="Patrick" />
        </div>

        {/* The Accordion moved here from Homepage */}
        <div className="accordion">
          <div className="accordion-item">
            <button className="accordion-button">Hobbies</button>
            <div className="content">
              <p>● Basketball<br />● Gaming<br />● Watching Movies<br />● Playing Guitar<br />● Listening to Music</p>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-button">Personal Info</button>
            <div className="content">
              <p>● Name: Patrick<br />● Age: 20<br />● Location: Philippines</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutMe;