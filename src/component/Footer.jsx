import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-main">
      {/* Main Footer Grid */}
      <div className="footer-container">
        <div className="footer-col">
          <h3>Get In Touch</h3>
          <p>ThemeForest, Envanto HQ<br/>24 Fifth st., Los Angeles, USA</p>
          <p>Email: name@yourmail.com</p>
          <p>Phone: +145 (03) 456 0000</p>
        </div>
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>» Chemical Engineering Projects</li>
            <li>» Mining Engineering Construction</li>
            <li>» Engineering Welding Engineering</li>
            <li>» Welding Engineering</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Latest News</h3>
          <p>Improve Workflow Agile Construction!<br/>12 Dec 2023</p>
          <p>Gide Remodeling Your Building.<br/>12 Dec 2023</p>
        </div>
        <div className="footer-col">
          <h3>Get Free Estimate</h3>
          <h2 className="phone-number">123-456-78910</h2>
          <p>Our online scheduling and payment system is safe.</p>
          <button className="btn-estimate">Request With Online Form</button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h3>Subscribe To Our Newsletter</h3>
          <p>Stay in touch with us to get latest news and discount coupons</p>
        </div>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter Your Email" />
          <button>✉</button>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>Copyright ©GENOVA TECHNOLOGIES 2026 . All rights reserved.</p>
        <div className="social-icons"></div>
      </div>
    </footer>
  );
};
export default Footer;