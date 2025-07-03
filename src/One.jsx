import React, { useState } from 'react';
import './One.css';
import { images } from './assets/asset';
import { Link } from 'react-router-dom';

const One = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="main">
      <div className="container-fluid d-flex justify-content-between align-items-center px-4 py-2">
        <div className="logo d-flex align-items-center">
          <img src={images.nav} height={50} alt="logo" className="me-2" />
          <h3 className="m-0">INDIAN FOODS</h3>
        </div>

        {/* Hamburger Button for Small Screens */}
        <div className="d-lg-none">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul className="list-inline m-0">
            <li className="list-inline-item">
              <Link to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/recipe" onClick={handleLinkClick}>Recipe</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/about" onClick={handleLinkClick}>About</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/form" onClick={handleLinkClick}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default One;
