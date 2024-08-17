import React, { useContext} from 'react';
import { ThemeContext } from '../components/ThemeContextProvider'; 
import '../components/CSS/contactUs.css'
import ContactForm from '../components/ContactForm'

export default function ContactUs() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`contactUs ${darkMode ? 'dark' : ''}`}>
    <div className={`wrapper-main ${darkMode ? 'dark' : ''}`}>
      <center>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>CONTACT US</h1>
        <br/>
        <p className='wrapper-content'>Send us a message and we’ll get back to you as soon as possible.
           Looking forward to hearing from you.</p>
        <br/>
        <ContactForm/>        
        
      </center>
    </div>
    </div>
  )
}
