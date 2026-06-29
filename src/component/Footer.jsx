import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGlobe, FaTwitter, FaFacebookF, FaPinterestP, FaGooglePlusG } from 'react-icons/fa';
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top Grid Section */}
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Get In Touch</h4>
          <p><FaMapMarkerAlt color="red"/> ThemeForest, Envanto HQ, 24 Fifth st., Los Angeles, USA</p>
          <p><FaEnvelope color="red"/> sahasrabuilderstvm@gmail.com </p>
          <p><FaPhoneAlt color="red"/> Phone : +145 (03) 456 0000</p>
        </div>
        
        <div className="footer-col">
          <h4>Our Services</h4>
          <p>» Chemical Engineering Projects</p>
          <p>» Mining Engineering Construction</p>
          <p>» Engineering Welding Engineering</p>
          <p>» Space Program XYZ</p>
        </div>

        <div className="footer-col">
          <h4>Latest News</h4>
          <div className="news-item">
            <img src="https://images.unsplash.com/photo-1595844730298-b960ff98fee0?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRlcnN8ZW58MHx8MHx8fDA%3D" alt="News" />
            <p>Improve Workflow Agile Construction</p>
          </div>
          <div className="news-item">
            <img src="https://plus.unsplash.com/premium_photo-1682724602925-f0264b85953f?&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRlcnN8ZW58MHx8MHx8fDA%3D" alt="News" />
            <p>Gide Remodeling Your Building. <br /> </p>
          </div>
        </div>

        <div className="footer-col">
          <h4>Get Free Estimate</h4>
          <h2 className="estimate-phone">123-456-78910</h2>
          <button className="request-btn">Request With Online Form</button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-area">
        <h3>✉️ Subscribe To Our Newsletter</h3>
        <div className="email-box">
          <input type="email" placeholder="Enter Your Email" />
          <button>SEND</button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright © 2026 . "GENOVA TECHNOLOGIES". All rights reserved.</p>
        <div className="social-icons">
          <FaGlobe /> <FaGooglePlusG /> <FaTwitter /> <FaFacebookF /> <FaPinterestP />
        </div>
      </div>
    </footer>
  );
};

export default Footer;