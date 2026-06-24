import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="top-nav">
       <div className="logo">
  <img src={logo} alt=" Logo" />
</div>
        
        <nav className="nav-links">
          <a href="#" className="active">Home </a>
          <a href="#">About Us</a>
          <a href="#">Services </a>
          <a href="#">Projects</a>
          <a href="#">Contact Us</a>
        </nav>

        <div className="nav-actions">
          <span>🛒 <sup>2</sup></span>
          <span>🔍</span>
          <button className="cta-button">Contact Now</button>
        </div>
      </div>

      <div className="sub-nav">
        <div className="contact-info">
          <span>✉ builderexpert@gmail.com</span>
          <span>📞 (+099) 565 54515</span>
          <span>🕒 Sat - Sun 08.00 to 14.00</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;