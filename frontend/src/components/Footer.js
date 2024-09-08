import React, { useContext } from 'react';
import CurrentTime from './CurrentTime';
import './CSS/footer.css'
import { ThemeContext } from './ThemeContextProvider';
import { Link } from 'react-router-dom';
import image from './CSS/Images/zellimage.jpg';


const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={`footer ${darkMode ? 'dark' : ''}`}>
      <div className="footerContainer">
        <div className="footer-top">
          <h2>Want to contact us?</h2>
          <p>feel free to get in touch.</p>
          <Link to="/ContactUs" className="cta-button">Contact Us</Link>
        </div>
        <div className="footer-content">
          <div className="footer-section">
            <h3>ZellMart</h3>
            <div className='imagee'>
            <img src={image} alt="logo"/></div>
          </div>
          
            
          
          <div className="footer-section">
            <h3>Contact Information</h3>
            <p><strong>Address:</strong> Reid Avenue, Colombo 07, Sri Lanka</p>
            <p><strong>Phone:</strong> 0755555555555</p>
            <p><strong>Email:</strong> Radpicco@gmail.com</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/AboutUs">About Us</Link></li>
              <li><Link to="/ContactUs">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Time</h3>
            <CurrentTime />
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ZellMart. All rights reserved. | Designed by RAD OG picco</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;