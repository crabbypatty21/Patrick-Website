// src/components/SkillDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SKILLS_DATA } from './partials/skillsdata';
import TopBar from './partials/TopBar';
import Footer from './partials/Footer';

function SkillDetail() {
  const { skillId } = useParams();
  const skill = SKILLS_DATA[skillId];

  // If the skill doesn't exist, show an error
  if (!skill) {
    return (
      <div style={{ color: 'white', padding: '100px', textAlign: 'center' }}>
        <h1>Skill not found!</h1>
        <Link to="/" className="btn-solid">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="skill-detail-page" style={{ backgroundColor: '#131B21', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      
      {/* Reduced top padding from 150px to 100px to push content closer to the top */}
      <main className="content" style={{ padding: '100px 20px 60px', color: 'white', flex: 1 }}>
        {/* Reduced maxWidth from 1200px to 1000px to fix the "too wide" issue */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
{/* HEADER SECTION (Icon on the left, Text on the right) */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',      /* Aligns icon and text vertically */
            justifyContent: 'center',  /* Keeps the whole group centered */
            gap: '20px',               /* Space between the icon and the text */
            marginBottom: '20px',      /* Adjust this to increase/decrease space below the header */
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            paddingBottom: '25px'
          }}>
            {/* Reduced Icon Size and Padding */}
            <i className={`bx ${skill.icon}`} style={{ 
              fontSize: '2.8rem',      /* Reduced from 4.5rem */
              color: '#2AAA8A', 
              background: 'rgba(42, 170, 138, 0.1)', 
              padding: '14px',         /* Reduced padding */
              borderRadius: '12px'     /* Slightly smaller rounded corners */
            }}></i>
            
            {/* Text Group */}
            <div style={{ textAlign: 'left' }}>
              <h1 style={{ fontSize: '3rem', margin: '0 0 5px 0' }}>{skill.title}</h1>
              <p style={{ fontSize: '1.1rem', color: '#2AAA8A', margin: 0 }}>{skill.shortDesc}</p>
            </div>
          </div>

          {/* OVERVIEW SECTION (Tighter Margins) */}
          <section style={{ 
            textAlign: 'center', 
            maxWidth: '850px', 
            margin: '-180px auto -350px auto' 
          }}>
            <h3 style={{ color: '#2AAA8A', marginBottom: '15px', fontSize: '1.6rem' }}>Overview</h3>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#cbd5e1', margin: 0 }}>
              {skill.fullDesc}
            </p>
          </section>

          {/* MAIN GRID: Tighter Gap (30px instead of 40px) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>
            
            {/* LEFT COLUMN: Key Projects */}
            <div className="tech-category" style={{ 
              background: 'rgba(255,255,255,0.03)', 
              padding: '25px', 
              borderRadius: '16px', 
              border: '1px solid rgba(255,255,255,0.05)',
              height: 'fit-content'
            }}>
              <h3 style={{ color: '#2AAA8A', marginBottom: '20px', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className='bx bx-folder-open'></i> Key Projects
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {skill?.projects?.map((project, index) => (
                  <li key={index} style={{ 
                    color: '#cbd5e1', 
                    fontSize: '1.05rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px',
                    background: 'rgba(0,0,0,0.2)',
                    padding: '14px 18px',
                    borderRadius: '8px'
                  }}>
                    <i className='bx bx-check-circle' style={{ color: '#2AAA8A', fontSize: '1.3rem' }}></i> 
                    {project}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT COLUMN: Technologies & Tools */}
            <div className="tech-category" style={{ 
              background: 'rgba(255,255,255,0.03)', 
              padding: '25px', 
              borderRadius: '16px', 
              border: '1px solid rgba(255,255,255,0.05)',
              height: 'fit-content'
            }}>
              <h3 style={{ color: '#2AAA8A', marginBottom: '20px', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className='bx bx-wrench'></i> Technologies & Tools
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {skill?.tools?.map((tool, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    background: 'rgba(42, 170, 138, 0.1)',
                    border: '1px solid rgba(42, 170, 138, 0.3)',
                    padding: '10px 16px', 
                    borderRadius: '30px',
                    color: 'white',
                    fontSize: '1rem'
                  }}>
                    <img 
                      src={tool.icon} 
                      alt={tool.name} 
                      style={{ width: '20px', height: '20px', objectFit: 'contain' }} 
                    />
                    {tool.name}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* BACK BUTTON (Tighter Margin) */}
          <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
            <Link to="/" className="btn-outline" style={{ textDecoration: 'none', padding: '12px 30px', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className='bx bx-arrow-back'></i> Back to Portfolio
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default SkillDetail;