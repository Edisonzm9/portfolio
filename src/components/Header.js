import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Importa el archivo CSS
import logoW from '../assets/images/logoW.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logoW} alt="Logo" className="logo" />
      </div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/about" className="nav-link">About me</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Projects</Link>
          </li>
        </ul>
      </nav>
      <div className="social-icons-container">
        <a href="https://wa.me/593987396716" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/edison-zamora-b6732b239/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
      </div>
    </header>
  );
}

export default Header;
