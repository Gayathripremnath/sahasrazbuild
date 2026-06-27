import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-container">
      <div className="top-nav">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        {/* Nav Links with dynamic class */}
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#" className="active">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Contact Us</a>
        </nav>

        <div className="nav-actions">
          <button className="cta-button">Contact Now</button>
        </div>
      </div>

      <div className="sub-nav">
        <div className="contact-info">
          <span>✉ sahasra@gmail.com</span>
          <span>📞 (+099) 565 54515</span>
          <span>🕒 Sat - Sun 08.00 to 14.00</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;