// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import AboutMe from './components/AboutMe.jsx';
import ScrollToTop from './components/partials/ScrollToTop.jsx'; // 1. Import it here
import './App.css';
import SkillDetail from './components/Skilldetail';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 2. Add it here, inside Router but above Routes */}
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/skills/:skillId" element={<SkillDetail />} />
      </Routes>
    </Router>
  )
}

export default App;