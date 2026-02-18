// Homepage.jsx
import '../Css/Homepage.css';
import TopBar from './partials/TopBar';
import Footer from './partials/Footer';

function Homepage() {
  return (
    <div className="homepage-container">
      {/* TopBar replaces the original <header> and <nav> logic */}
      <TopBar />

      <main className="content">
        
        {/* Home Section */}
        <section className="home" id="home">
          <div className="home-img">
            <img src="/img/backend.jpg" alt="profile image" />
          </div>

          <div className="home-content">
            <h3>Hello guys</h3>
            <h3>I'm John Patrick Ignacio</h3>
            <h3>I'm an <span className="multiple-text">IT Student</span></h3>
            <p>
              An active and responsible college undergraduate seeking an opportunity where I could develop and
              challenge my abilities to become a professional. Reliable and flexible worker with pleasing personality,
              who can work independently and along with teams.
            </p>

            <div className="social-media">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin-square'></i></a>
              <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
              <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i></a>
            </div>
            <a href="#" className="btn">Download CV</a>
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
    </div>
  );
}

export default Homepage;