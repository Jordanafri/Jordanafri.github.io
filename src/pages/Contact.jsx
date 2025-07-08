import React, { useEffect } from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    const user = 'jordanafrikaner';
    const domain = 'outlook.com'; 
    const emailLink = document.getElementById('emailContact');
    if (emailLink) {
      emailLink.innerHTML = `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
    }
  }, []);

  return (
    <div className="contact-page-container">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p>Email me at: <span id="emailContact"></span></p>
        <div className="social-links">
          <a 
            href="https://linkedin.com/in/jordan-afrikaner-5030832a5" 
            target="_blank" 
            rel="noreferrer"
            className="social-link"
          >
            <FaLinkedin className="social-icon" /> LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/jordan_afri/" 
            target="_blank" 
            rel="noreferrer"
            className="social-link"
          >
            <FaInstagram className="social-icon" /> Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
