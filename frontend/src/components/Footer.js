import React, { useContext} from 'react';
import CurrentTime from './CurrentTime';
import './CSS/footer.css'
import { ThemeContext } from './ThemeContextProvider'; 

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <footer className={`footer ${darkMode ? 'dark' : ''}`}>
      <hr/>
      <br/>
      <br/>
      <div className="footerContainer">
        <div className="row">
          <div className="col-md-6">
            <p><strong>Address:</strong> Reid Avenue, Colombo 07,Sri Lanka</p> <br/>
            <p><strong>Contact Information:</strong> <br/>
            Phone : 0755555555555<br/>
            Email : dsjnsjdk@.com
            </p><br/>
            <p>&copy; 2024 ZellMart. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-right">
            <p>Designed by RAD OG picco</p>
            <CurrentTime/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;