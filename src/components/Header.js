import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // Importa el archivo CSS
import logoW from '../assets/images/logoW.png';

function Header() {
  return (
    <header className="header-container">

      <div className="logo-container">
        <img src={logoW} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/about" className="nav-link">About me</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Projects</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
