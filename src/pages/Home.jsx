import './Home.css';
import { FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import videoBg from './tech.mp4'; // Import your video

const Home = () => {
  return (
    <div className="home-container">
      <video className="video-background" autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="home-content">
        <h1>Jordan Afrikaner</h1>
        <p className="subtitle">Junior Web Developer</p>
        <p className="intro">
          Welcome to my portfolio! I'm passionate about building clean, efficient, and user-friendly web applications.
          I'm eager to learn and contribute to exciting web development projects.
        </p>
        <div className="cta-buttons">
          <a href="#/projects" className="project-button">
            <FaProjectDiagram /> View My Web Projects
          </a>
          <a href="/contact" className="contact-button">
            <FaEnvelope /> Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
