import React, { useState,useContext,useEffect } from 'react';
import { ThemeContext } from './ThemeContextProvider'; 
import './CSS/contactForm.css';

const ContactForm = () => {
  const { darkMode } = useContext(ThemeContext);
  
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(() => {
    const data = localStorage.getItem("formData");
    return data ? JSON.parse(data) : initialFormData;
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (obj) => {
    const { name, value } = obj.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (obj) => {
    obj.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      alert("Invalid Email Address");
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setFormData(initialFormData);
    console.log(localStorage.getItem("formData"));
    alert(
      "Hi " +
        JSON.parse(localStorage.getItem("formData")).name +
        ", Your Message Has Been Sent Successfully"
    );
  };


  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className='label'>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='NAME'
            value={formData.name}
            onChange={handleChange}
            className={`${darkMode ? 'dark' : ''}`}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className='label'>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='EMAIL'
            value={formData.email}
            onChange={handleChange}
            className={`${darkMode ? 'dark' : ''}`}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className='label'>Message</label>
          <textarea
            id="message"
            name="message"
            placeholder='YOUR MESSAGE'
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`${darkMode ? 'dark' : ''}`}
            required
          ></textarea>
        </div>
        <center>
        <br/>
        <button type="submit" className={`${darkMode ? 'dark' : ''}`}>Send</button>
        </center>
        </form>
    </div>
  );
};

export default ContactForm;