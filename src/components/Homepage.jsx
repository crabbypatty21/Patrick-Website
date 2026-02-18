// Homepage.jsx
import '../Css/Homepage.css';
import TopBar from '../components/TopBar'; // Adjust the path if TopBar is in a different folder

function Homepage() {
  return (
    <div className="homepage-container">
      <TopBar />
      
      <main className="content">
        <h1>Welcome to the Homepage</h1>
        {/* Your other content goes here */}
      </main>
    </div>
  );
}

export default Homepage;