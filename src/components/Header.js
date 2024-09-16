import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: '#f0f0f0', padding: '10px 20px' }}>
      <nav>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
