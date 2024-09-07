import React, { useState } from "react";
import "../components/CSS/login.css";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState({}); // To store validation errors
  const { firstName, lastName, email, password, confirmPassword, street, city, state, zipCode } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    let formErrors = {};
    if (!firstName) formErrors.firstName = "First Name is required";
    if (!lastName) formErrors.lastName = "Last Name is required";
    if (!email) formErrors.email = "Email is required";
    if (!password || password.length < 6) formErrors.password = "Password must be at least 6 characters";
    if (password !== confirmPassword) formErrors.confirmPassword = "Passwords do not match";
    if (!street) formErrors.street = "Street is required";
    if (!city) formErrors.city = "City is required";
    if (!zipCode) formErrors.zipCode = "Zip Code is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form before sending data
    if (!validateForm()) return;
  
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      street,
      city,
      state,
      zipCode,
    };
    console.log(newUser)
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", newUser);
      alert("Registration successful");
      window.location.href = '/home';
    } catch (error) {
      // Log the error for debugging
      console.error("Error response:", error.response);
      
      // Display the error message
      const errorMessage = error.response?.data?.msg || error.message || "Unknown error";
      alert("Error registering the user: " + errorMessage);
    }
  };
  

  return (
    <div className="background">
      <div className="wrapper">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={onChange}
              required
            />
            <FaUser className="icon" />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="input-box">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={onChange}
              required
            />
            <FaUser className="icon" />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={onChange}
              required
            />
            <FaUser className="icon" />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="input-box">
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={street}
              onChange={onChange}
              required
            />
            <FaMapMarkerAlt className="icon" />
            {errors.street && <p className="error">{errors.street}</p>}
          </div>
          <div className="input-box">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={city}
              onChange={onChange}
              required
            />
            <FaMapMarkerAlt className="icon" />
            {errors.city && <p className="error">{errors.city}</p>}
          </div>
          <div className="input-box">
            <input
              type="text"
              name="state"
              placeholder="State"
              value={state}
              onChange={onChange}
            />
            <FaMapMarkerAlt className="icon" />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={zipCode}
              onChange={onChange}
              required
            />
            <FaMapMarkerAlt className="icon" />
            {errors.zipCode && <p className="error">{errors.zipCode}</p>}
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
              required
            />
            <FaLock className="icon" />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="input-box">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={onChange}
              required
            />
            <FaLock className="icon" />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>
          <div className="description">
            <p>
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
            </p>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
