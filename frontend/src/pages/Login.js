import React, { useState } from "react";
import { jwtDecode } from 'jwt-decode';
import { FaUser, FaLock } from "react-icons/fa";
import "../components/CSS/login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const [errors, setErrors] = useState({});
    const { email, password } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const validateForm = () => {
      let formErrors = {};
      if (!email) formErrors.email = "Email is required";
      if (!password) formErrors.password = "Password is required";

      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form before sending data
        if (!validateForm()) return;

        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            const { token } = res.data;

            // Save token to local storage
            localStorage.setItem('token', token);

            // Decode token to get user role
            const decoded = jwtDecode(token);
            const userRole = decoded.customer.role;

            // Redirect based on role
            if (userRole === 'manager') {
                window.location.href = '/ManagerPage';
            } else {
                window.location.href = '/home';
            }
        } catch (error) {
            console.error("Error response:", error.response);
            alert("Error logging in: " + (error.response?.data?.msg || error.message || "Unknown error"));
        }
    };

    return (
        <div className="background">
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
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
                        {errors.email && <p>{errors.email}</p>}
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
                        {errors.password && <p>{errors.password}</p>}
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
