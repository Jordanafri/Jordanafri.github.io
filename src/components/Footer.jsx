import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 MyApp. All Rights Reserved.</p>
      <ul className="footer-links">
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
