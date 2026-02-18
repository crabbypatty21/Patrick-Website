import '../../Css/TopBar.css';

function TopBar() {
  return (
    <nav className="top-bar">
      <div className="logo">Portfolio</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>School Projects</li>
        <li>Work Experience</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default TopBar;