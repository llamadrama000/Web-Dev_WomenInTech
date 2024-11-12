import { Link } from 'react-router-dom';
import './Footer.css';
import discordIcon from '../../assets/discord-icon.svg';
import instagramIcon from '../../assets/instagram-icon.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://discord.com/your-discord-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={discordIcon} alt="Discord" className="social-icon" />
          </a>
          <a
            href="https://instagram.com/your-instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
        </div>
        <div className="footer-nav">
          <Link to="/about" className="footer-link">About</Link>
          <Link to="/events" className="footer-link">Events</Link>
          <Link to="/join-us" className="footer-link">Join Us</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;