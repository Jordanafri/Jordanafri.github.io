import './About.css';
import { FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaReact, FaDatabase, FaGitAlt, FaCloud, FaPython, FaCertificate, FaCode, FaGamepad, FaBloggerB } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <section className="intro-section fade-in">
          <h1>About Me</h1>
          <p>Hello! I'm Jordan Afrikaner, a passionate Junior Web Developer...</p>
        </section>

        <section className="skills-certs-section fade-in">
          <div className="skills-section">
            <h2>My Technical Skills</h2>
            <p>I have a solid foundation in both front-end and back-end...</p>
            <ul className="skills-list">
              <li><FaHtml5 /> <strong>Front-End:</strong> HTML, CSS, Sass, Bootstrap, React.js</li>
              <li><FaDatabase /> <strong>Back-End:</strong> .NET Core, MVC, C#, SQL, Cloud Firestore</li>
              <li><FaGitAlt /> <strong>Version Control:</strong> Git</li>
              <li><FaCloud /> <strong>Cloud:</strong> Basic Azure knowledge...</li>
              <li><FaPython /> <strong>Python:</strong> Basic Understanding</li>
            </ul>
          </div>

          <div className="certs-section">
            <h2>Certifications</h2>
            <p>I've earned several certifications...</p>
            <ul className="certs-list">
              <li><FaCertificate /> Azure AI Fundamentals (AI-900)</li>
              <li><FaCertificate /> Microsoft Azure Fundamentals (AZ-900)</li>
              <li><FaCertificate /> Developing Solutions for Microsoft Azure (AZ-204)</li>
              <li><FaCertificate /> National Certificate IT (ITCA)</li>
              <li><FaCertificate /> HTML5 Application Development (Certiport)</li>
            </ul>
          </div>
        </section>

        <section className="journey-interests-section fade-in">
          <h2>My Journey and Interests</h2>
          <p>My journey into web development began with [How you started]...</p>
          <div className="interests-list">
            <p><FaCode /> Web Development: Expanding React.js skills...</p>
            <p><FaGamepad /> Game Development: Learning GDScript...</p>
            <p><FaBloggerB /> Blogging: Sharing knowledge...</p>
          </div>
        </section>

        <section className="looking-connect-section fade-in">
          <div className="looking-section">
            <h2>What I'm Looking For</h2>
            <p>I'm seeking opportunities to work on collaborative projects...</p>
          </div>
          <div className="connect-section">
            <h2>Let's Connect</h2>
            <p>I'm always open to connecting with fellow developers...</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;