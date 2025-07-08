import './About.css';
import { FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaReact, FaDatabase, FaGitAlt, FaCloud, FaPython, FaCertificate, FaCode, FaGamepad, FaBloggerB, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <section className="intro-section fade-in">
          <div className="profile-header">
            <img 
              src="/jordan.png" 
              alt="Jordan Afrikaner" 
              className="profile-photo"
            />
            <div>
              <h1>About Me</h1>
              <p>Hello! I'm Jordan Afrikaner, a passionate Junior Web Developer with experience in building responsive web applications using modern technologies like React, .NET Core, and Azure.</p>
            </div>
          </div>
        </section>

        <section className="skills-certs-section fade-in">
          <div className="skills-section">
            <h2>My Technical Skills</h2>
            <p>I have a solid foundation in both front-end and back-end...</p>
            <ul className="skills-list">
              <li>
                <FaHtml5 /> 
                <div className="skill-item">
                  <strong>Front-End:</strong> HTML, CSS, Sass, Bootstrap, React.js
                  <div className="progress-bar">
                    <div className="progress" style={{width: '90%'}}></div>
                  </div>
                </div>
              </li>
              <li>
                <FaDatabase /> 
                <div className="skill-item">
                  <strong>Back-End:</strong> .NET Core, MVC, C#, SQL, Cloud Firestore
                  <div className="progress-bar">
                    <div className="progress" style={{width: '80%'}}></div>
                  </div>
                </div>
              </li>
              <li>
                <FaGitAlt /> 
                <div className="skill-item">
                  <strong>Version Control:</strong> Git
                  <div className="progress-bar">
                    <div className="progress" style={{width: '85%'}}></div>
                  </div>
                </div>
              </li>
              <li>
                <FaCloud /> 
                <div className="skill-item">
                  <strong>Cloud:</strong> Azure
                  <div className="progress-bar">
                    <div className="progress" style={{width: '75%'}}></div>
                  </div>
                </div>
              </li>
              <li>
                <FaPython /> 
                <div className="skill-item">
                  <strong>Python:</strong> Basic Understanding
                  <div className="progress-bar">
                    <div className="progress" style={{width: '60%'}}></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="certs-section">
            <h2>Certifications</h2>
            <p>I've earned several certifications...</p>
            <ul className="certs-list">
              <li>
                <FaCertificate /> 
                <div className="cert-item">
                  <span className="cert-name">Azure AI Fundamentals (AI-900)</span>
                  <span className="cert-date">2023</span>
                </div>
              </li>
              <li>
                <FaCertificate /> 
                <div className="cert-item">
                  <span className="cert-name">Microsoft Azure Fundamentals (AZ-900)</span>
                  <span className="cert-date">2023</span>
                </div>
              </li>
              <li>
                <FaCertificate /> 
                <div className="cert-item">
                  <span className="cert-name">Developing Solutions for Microsoft Azure (AZ-204)</span>
                  <span className="cert-date">2023</span>
                </div>
              </li>
              <li>
                <FaCertificate /> 
                <div className="cert-item">
                  <span className="cert-name">National Certificate IT (ITCA)</span>
                  <span className="cert-date">2022</span>
                </div>
              </li>
              <li>
                <FaCertificate /> 
                <div className="cert-item">
                  <span className="cert-name">HTML5 Application Development (Certiport)</span>
                  <span className="cert-date">2021</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="journey-interests-section fade-in">
          <h2>My Journey and Interests</h2>
          <p>My journey into web development began with a fascination for how websites work. I started by learning HTML and CSS through online courses, then progressed to JavaScript and React. My formal education in IT and Microsoft certifications helped me develop a strong foundation in both front-end and back-end technologies.</p>
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
            <p>I'm always open to connecting with fellow developers, mentors, and potential collaborators. Feel free to reach out through any of these channels:</p>
            <div className="social-links">
              <a href="https://github.com/Jordanafri/" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" /> GitHub
              </a>
              <a href="https://www.instagram.com/jordan_afri" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" /> Instagram
              </a>
              <a href="https://www.linkedin.com/in/jordan-afrikaner-5030832a5" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" /> LinkedIn
              </a>
              <a href="mailto:jordanafrikaner@outlook.com">
                <FaEnvelope className="social-icon" /> Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
