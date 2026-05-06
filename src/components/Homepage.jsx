// src/components/Homepage.jsx
import { Link } from 'react-router-dom';
import '../Css/Homepage.css';
import TopBar from './partials/TopBar';
import Footer from './partials/Footer';
import { SKILLS_DATA } from './partials/skillsData';

// import images cos it dont work directly
import backendImg from '../img/backend.jpg';
import Conlogo from '../img/8con_Academy_Logo.png';
import PCCIlogo from '../img/PCCI_Logo.png';
import Littlelionlogo from '../img/Little_lions_logo.png';
import triquestlogo from '../img/TriQuest_logo.png';
import SantiagoAmanciologo from '../img/santiago_amancio_logo.png';
import myCV from '../img/pat_resume.pdf';

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
              I am knowledgeable at using Unreal engine Blueprints, Also at React and Laravel 
            </p>

            <div className="cta-container">
              <a href={myCV} download="John_Patrick_Ignacio_CV.pdf" className="btn-outline">DOWNLOAD CV <i className='bx bx-download'></i></a>
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
          <div className="stat-item"><h2>3</h2><p>Months of <br />experience</p></div>
          <div className="stat-item"><h2>4</h2><p>Projects <br />completed</p></div>
          <div className="stat-item"><h2>2</h2><p>Core <br />Frameworks</p></div>
          <div className="stat-item"><h2>50</h2><p>Cups of <br />Coffee</p></div>
        </div>

        {/* UPDATED About Section: Two-Column Layout with Image */}
        <section className="about" id="about">
          <div className="about-container">
            
            {/* Left Column: Text and Buttons */}
            <div className="about-content">
              <h2 className="heading">About <span>Me</span></h2>
              <h3>I'm a <span>Bachelor of Science in Information Technology Graduate</span></h3>
              <p>
                I have practical experience in both frontend and backend development. 
                My foundation in backend architecture was built through extensive case studies and a large-scale capstone project.
                Recently, I expanded my frontend skill set during my OJT, allowing me to bridge the gap between server-side logic and responsive user interfaces.
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

{/* Updated Skills Section with Mapping */}
        <section className="skills-section" id="skills">
          <h2 className="skills-title">My <span>Skills</span></h2>
          <div className="skills-grid">
            {Object.entries(SKILLS_DATA).map(([id, skill]) => (
              <div className="skill-card" key={id}>
                <div className="icon-wrapper">
                  <i className={`bx ${skill.icon}`}></i>
                </div>
                <div className="card-content">
                  <h3>{skill.title}</h3>
                  <p>{skill.shortDesc}</p>
                </div>
                <Link to={`/skills/${id}`} className="skill-link">
                  Read More <span className="arrow">↗</span>
                </Link>
              </div>
            ))}
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
          {/* Frontend Development */}
          <div className="tech-category">
            <h3>Frontend</h3>
            <ul className="tech-list">
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="tech-logo" /> React & React Native</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="tech-logo" /> JavaScript</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="tech-logo" /> TypeScript</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML/CSS" className="tech-logo" /> HTML / CSS</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="TailwindCSS" className="tech-logo" /> TailwindCSS</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="tech-logo" /> Bootstrap</li>
            </ul>
          </div>

          {/* Backend & Databases */}
          <div className="tech-category">
            <h3>Backend & Database</h3>
            <ul className="tech-list">
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel" className="tech-logo" /> Laravel</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" className="tech-logo" /> PHP</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="tech-logo" /> Python</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="tech-logo" /> MySQL</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="Firebase" className="tech-logo" /> Firebase</li>
              <li><img src="https://cdn.simpleicons.org/supabase/3ECF8E" alt="Supabase" className="tech-logo" /> Supabase</li>
              <li><img src="https://cdn.simpleicons.org/pingcap/ffffff" alt="TiDB Cloud" className="tech-logo" /> TiDB Cloud</li>
            </ul>
          </div>

          {/* Mobile & Game Development */}
          <div className="tech-category">
            <h3>Mobile & Game Dev</h3>
            <ul className="tech-list">
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt="Flutter" className="tech-logo" /> Flutter</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" alt="Dart" className="tech-logo" /> Dart</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" alt="Unity" className="tech-logo" /> Unity</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg" alt="Unreal Engine" className="tech-logo" /> Unreal Engine</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" className="tech-logo" /> C#</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" className="tech-logo" /> C / Assembly</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" alt="Blender" className="tech-logo" /> Blender</li>
            </ul>
          </div>

          {/* Environments & Software */}
          <div className="tech-category">
            <h3>Environments</h3>
            <ul className="tech-list">
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" className="tech-logo" /> VS Code</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg" alt="PyCharm" className="tech-logo" /> PyCharm</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" alt="Android Studio" className="tech-logo" /> Android Studio</li>
              <li><img src="https://cdn.simpleicons.org/expo/ffffff" alt="Expo Go" className="tech-logo" /> Expo Go</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg" alt="Visual Basic" className="tech-logo" /> Visual Basic</li>
              <li><img src="https://cdn.simpleicons.org/virtualbox/ffffff" alt="VirtualBox" className="tech-logo" /> Oracle (VirtualBox)</li>
              <li><img src="https://cdn.simpleicons.org/dosbox/ffffff" alt="DOSBox" className="tech-logo" /> DOSBox</li>
              <li><img src="https://cdn.simpleicons.org/cisco/ffffff" alt="Cisco Packet Tracer" className="tech-logo" /> Cisco Packet Tracer</li>
            </ul>
          </div>

          {/* Tools, Deployment & AI */}
          <div className="tech-category">
            <h3>Deployment & AI Tools</h3>
            <ul className="tech-list">
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="tech-logo" /> GitHub</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" alt="Vercel" className="tech-logo" /> Vercel</li>
              <li><img src="https://cdn.simpleicons.org/render/ffffff" alt="Render" className="tech-logo" /> Render</li>
              <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" alt="Netlify" className="tech-logo" /> Netlify</li>
              <li><img src="https://cdn.simpleicons.org/openai/ffffff" alt="ChatGPT" className="tech-logo" /> ChatGPT</li>
              <li><img src="https://cdn.simpleicons.org/googlegemini/8E75B2" alt="Gemini" className="tech-logo" /> Gemini</li>
              <li><img src="https://cdn.simpleicons.org/anthropic/ffffff" alt="Claude" className="tech-logo" /> Claude</li>
              <li><img src="https://cdn.simpleicons.org/githubcopilot/ffffff" alt="CoPilot" className="tech-logo" /> CoPilot</li>
              <li><i className="bx bx-bot" style={{ fontSize: '22px', marginRight: '12px' }}></i> Grok</li>
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