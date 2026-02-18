// src/components/Homepage.jsx
import '../Css/Homepage.css';
import TopBar from './partials/TopBar';
import Footer from './partials/Footer';
import backendImg from '../img/backend.jpg';

function Homepage() {
  return (
    <div className="homepage-container">
      <TopBar />

      <main className="content">
        {/* Home Section Re-styled to match reference */}
        <section className="home" id="home">
          <div className="home-content">
            <span className="software-label">Software Developer</span>
            <h1>Hello I'm <br /><span className="name-highlight">John Patrick Ignacio</span></h1>
            <p>
              I excel at crafting elegant digital experiences and I am proficient in various 
              programming languages and technologies.
            </p>

            <div className="cta-container">
              <a href="#" className="btn-outline">
                DOWNLOAD CV <i className='bx bx-download'></i>
              </a>
              <div className="social-media-minimal">
                <a href="#"><i className='bx bxl-github'></i></a>
                <a href="#"><i className='bx bxl-linkedin'></i></a>
                <a href="#"><i className='bx bxl-youtube'></i></a>
                <a href="#"><i className='bx bxl-twitter'></i></a>
              </div>
            </div>
          </div>

          <div className="home-img-container">
            <div className="img-border-wrapper">
              {/* SVG for the rotating dashed circle */}
              <svg className="rotating-svg" viewBox="0 0 506 506" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle 
                  cx="253" 
                  cy="253" 
                  r="250" 
                  stroke="#00ff99" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  /* Pattern: Long Dash (40), Gap (12), Short Dash (10), Gap (12) */
                  strokeDasharray="50 40 10 40" 
                  className="rotating-circle"
                />
              </svg>
              
              {/* The Profile Image */}
              <div className="inner-img">
                <img src={backendImg} alt="profile" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section inspired by reference image */}
        <div className="stats-container">
          <div className="stat-item">
            <h2>3</h2>
            <p>Years of <br />experience</p>
          </div>
          <div className="stat-item">
            <h2>21</h2>
            <p>Projects <br />completed</p>
          </div>
          <div className="stat-item">
            <h2>7</h2>
            <p>Technologies <br />mastered</p>
          </div>
          <div className="stat-item">
            <h2>408</h2>
            <p>Code <br />commits</p>
          </div>
        </div>

        {/* Keep existing About, Favorites, Skills, etc. below */}
        <section className="about" id="about">
          <div className="about-content">
            <h2 className="heading">About <span>Me</span></h2>
            <h3>I'm a <span>Backend Developer</span></h3>
            <p>I'm Currently in 3rd year of Bachelor of Science in Information Technology</p>
            <a href="/aboutme" className="btn-outline">Read More</a>
          </div>
          <div className="about-img">
            <img src="/img/backend.jpg" alt="about Image" />
          </div>
        </section>
                {/* About Section */}
        <section className="about" id="about">
          <div className="about-content">
            <h2 className="heading">About <span>Me</span></h2>
            <h3>I'm a <span>Backend Developer</span></h3>
            <p>I'm Currently in 3rd year of Bachelor of Science in Information Technology</p>
            <a href="/aboutme" className="btn">Read More</a>
          </div>
          <div className="about-img">
            <img src="/img/backend.jpg" alt="about Image" />
          </div>

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

        {/* Favorites Section */}
        <section className="favorites" id="favorites">
          <h2 className="heading">Favorites: Singer & Song</h2>
          <div className="wrapper">
            {[
              { name: "Taylor Swift", song: "Back To December", img: "/img/taylor.jpg" },
              { name: "Olivia Rodrigo", song: "All i want", img: "/img/olivia.jpg" },
              { name: "Over October", song: "Sandali Lang", img: "/img/overoctober.jpg" },
              { name: "The Ridleys", song: "Milkyway", img: "/img/ridleys.jpg" },
              { name: "Kenaniah", song: "Study First", img: "/img/ken.jpg" }
            ].map((fav, index) => (
              <div className="favorites-item" key={index}>
                <img src={fav.img} alt={fav.name} />
                <h2>{fav.name}</h2>
                <div className="rating">
                  {[...Array(5)].map((_, i) => <i key={i} className="bx bxs-star"></i>)}
                </div>
                <p>{fav.song}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills/Services Section */}
        <section className="services" id="services">
          <h2 className="heading">My <span>Skills</span></h2>
          <div className="services-container">
            <div className="services-box">
              <i className="bx bx-code"></i>
              <h3>Web Development</h3>
              <p>I can create simple web projects for you</p>
              <a href="/webdevelopment" className="btn">Read More</a>
            </div>
            <div className="services-box">
              <i className="bx bx-palette"></i>
              <h3>UI/UX DESIGN</h3>
              <p>I can design User Interfaces and other Visuals</p>
              <a href="/uiuxdesign" className="btn">Read More</a>
            </div>
            <div className="services-box">
              <i className="bx bxl-android"></i>
              <h3>Game Development</h3>
              <p>I can develop simple game base on the clients preferences</p>
              <a href="/gamedevelopment" className="btn">Read More</a>
            </div>
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
                <a href={`https://ignacioact${num}.netlify.app`} target="_blank" rel="noopener noreferrer" className="btn">
                  Go to Activity#{num}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
          <h2 className="heading">Contact <span>Me</span></h2>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <div className="input-box">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="input-box">
              <input type="number" placeholder="Phone Number" />
              <input type="text" placeholder="Email Subject" />
            </div>
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