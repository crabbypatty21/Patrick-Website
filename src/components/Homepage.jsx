// src/components/Homepage.jsx
import { Link } from 'react-router-dom';
import '../Css/Homepage.css';
import TopBar from './partials/TopBar';
import Footer from './partials/Footer';

// import images cos it dont work directly
import backendImg from '../img/backend.jpg';
import Conlogo from '../img/8con_Academy_Logo.png';
import PCCIlogo from '../img/PCCI_Logo.png';
import Littlelionlogo from '../img/Little_lions_logo.png';
import triquestlogo from '../img/TriQuest_logo.png';
import SantiagoAmanciologo from '../img/santiago_amancio_logo.png';

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

        {/* Skills Section */}
        <section className="skills-section" id="skills">
          <h2 className="skills-title">My <span>Skills</span></h2>
          
          <div className="skills-grid">
            {/* Web Development */}
            <div className="skill-card">
              <div className="icon-wrapper">
                <i className="bx bx-code"></i>
              </div>
              <div className="card-content">
                <h3>Web Development</h3>
                <p>I can create simple web projects for you.</p>
              </div>
              <a href="#" className="skill-link">
                Read More <span className="arrow">↗</span>
              </a>
            </div>

            {/* UI/UX Design */}
            <div className="skill-card">
              <div className="icon-wrapper">
                <i className="bx bx-palette"></i>
              </div>
              <div className="card-content">
                <h3>UI/UX Design</h3>
                <p>I can design User Interfaces and other Visuals.</p>
              </div>
              <a href="#" className="skill-link">
                Read More <span className="arrow">↗</span>
              </a>
            </div>

            {/* Game Development */}
            <div className="skill-card">
              <div className="icon-wrapper">
                <i className="bx bxl-android"></i>
              </div>
              <div className="card-content">
                <h3>Game Development</h3>
                <p>I can develop simple games based on the client's preferences.</p>
              </div>
              <a href="#" className="skill-link">
                Read More <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </section>


{/* Activities Section */}
        <section className="activities-section" id="Activities">
          <h2 className="activities-title">My <span>Projects</span></h2>
          
          <div className="activities-grid">
            {/* PCCI Valenzuela */}
            <div className="activity-card">
              <div className="card-top">
                <img src={PCCIlogo} alt="PCCI Valenzuela" className="card-image" />
                <div className="card-overlay">
                  <h3>PCCI Valenzuela official website</h3>
                  <p>A Web-Based System with Admin Panel</p>
                </div>
              </div>
              <div className="card-bottom">
                <div className="tech-stack">
                  <span className="tech-tag">Laravel</span>
                  <span className="tech-tag">PHP</span>
                  <span className="tech-tag">Bootstrap</span>
                </div>
                <a href="https://pcci-valenzuela.onrender.com/" target="_blank" rel="noopener noreferrer" className="activity-link">
                  View Live Site <span className="arrow">↗</span>
                </a>
              </div>
            </div>

            {/* Little Lions Academy */}
            <div className="activity-card">
              <div className="card-top">
                {/* Added 'remove-bg' class here */}
                <img src={Littlelionlogo} alt="Little Lions Academy" className="card-image remove-bg" />
                <div className="card-overlay">
                  <h3>Little Lions SPED School Monitoring System</h3>
                  <p>Database Monitoring and Tracking System featuring multi-role access and secure confidentiality workflows.</p>
                </div>
              </div>
              <div className="card-bottom">
                <div className="tech-stack">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Firebase</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">PWA</span>
                </div>
                <a href="https://little-lion.pages.dev/" target="_blank" rel="noopener noreferrer" className="activity-link">
                  View Live Site <span className="arrow">↗</span>
                </a>
              </div>
            </div>

            {/* 8con Academy */}
            <div className="activity-card">
              <div className="card-top">
                <img src={Conlogo} alt="8con Academy" className="card-image" />
                <div className="card-overlay">
                  <h3>8con Academy official website</h3>
                  <p>A web-based system that serves as the Official website of 8con Academy</p>
                </div>
              </div>
              <div className="card-bottom">
                <div className="tech-stack">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">HTML/CSS</span>
                </div>
                <a href="https://8con-academy-website-batch6.vercel.app/" target="_blank" rel="noopener noreferrer" className="activity-link">
                  View Live Site <span className="arrow">↗</span>
                </a>
              </div>
            </div>

            {/* Capstone Project */}
            <div className="activity-card">
              <div className="card-top">
                {/* Added 'cover-img' class here */}
                <img src={triquestlogo} alt="TriQuest Capstone" className="card-image cover-img" />
                <div className="card-overlay">
                  <h3>TriQuest</h3>
                  <p>A gamified 3D role-playing e-learning capstone project.</p>
                </div>
              </div>
              <div className="card-bottom">
                <div className="tech-stack">
                  <span className="tech-tag">Unreal Engine</span>
                  <span className="tech-tag">Blueprint</span>
                </div>
                <a href="https://drive.google.com/drive/folders/1mi14FDOuTr5vLwlufAweyOLVGVzFtYve" target="_blank" rel="noopener noreferrer" className="activity-link drive-link">
                  View Google Drive <span className="arrow">↗</span>
                </a>
              </div>
            </div>

            {/* Santiago-Amancio Dental Clinic */}
            <div className="activity-card">
              <div className="card-top">
                <img src={SantiagoAmanciologo} alt="Santiago-Amancio Dental" className="card-image" />
                <div className="card-overlay">
                  <h3>Santiago Amancio Dental Clinic</h3>
                  <p>An Appointment and Billing system for Santiago-Amanco Dental Clinic</p>
                </div>
              </div>
              <div className="card-bottom">
                <div className="tech-stack">
                  <span className="tech-tag">PHP</span>
                  <span className="tech-tag">HTML/CSS</span>
                </div>
                <a href="https://santiago-amancio-appointment-and-billing.onrender.com" target="_blank" rel="noopener noreferrer" className="activity-link">
                  View Live Site <span className="arrow">↗</span>
                </a>
              </div>
            </div>



          </div>
        </section>

      {/* Technologies Used Section */}
      <section className="technologies-section">
        <h2 className="tech-title">Technologies Used</h2>
        
        <div className="tech-grid">
          {/* Frameworks */}
          <div className="tech-category">
            <h3>Framework</h3>
            <ul>
              <li>React</li>
              <li>Laravel</li>
              <li>Flutter</li>
              <li>Bootstrap</li>
              <li>TailwindCSS</li>
              <li>React Native</li>
            </ul>
          </div>

          {/* Coding Languages */}
          <div className="tech-category">
            <h3>Coding Language</h3>
            <ul>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Dart</li>
              <li>HTML/CSS</li>
              <li>TypeScript</li>
              <li>C</li>
              <li>C#</li>
              <li>Assembly Language</li>
              <li>Python</li>
            </ul>
          </div>

          {/* Databases */}
          <div className="tech-category">
            <h3>Database</h3>
            <ul>
              <li>MySQL</li>
              <li>Firebase</li>
              <li>Supabase</li>
              <li>TiDB Cloud</li>
            </ul>
          </div>

          {/* Software & Applications */}
          <div className="tech-category">
            <h3>Software/Application</h3>
            <ul>
              <li>VS Code</li>
              <li>DOSBox</li>
              <li>Oracle (Virtual Box)</li>
              <li>Visual Basic</li>
              <li>Blender</li>
              <li>Unity</li>
              <li>Unreal Engine</li>
              <li>Cisco Packet Tracer</li>
              <li>PyCharm</li>
              <li>GitHub</li>
              <li>Android Studio</li>
              <li>Expo Go</li>
            </ul>
          </div>

          {/* Deployment */}
          <div className="tech-category">
            <h3>Deployment</h3>
            <ul>
              <li>Netlify</li>
              <li>Render</li>
              <li>Vercel</li>
            </ul>
          </div>

          {/* AI Tools */}
          <div className="tech-category">
            <h3>AI Tools</h3>
            <ul>
              <li>ChatGPT</li>
              <li>Gemini</li>
              <li>Claude</li>
              <li>Grok</li>
              <li>CoPilot</li>
            </ul>
          </div>
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