// TopBar.jsx
import '../Css/TopBar.css'; // Optional: if you want specific styles for the bar

function TopBar() {
  return (
    <nav className="top-bar">
      <div className="logo">Patrick</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default TopBar;