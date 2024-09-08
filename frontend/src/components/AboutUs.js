import React from 'react';
import '../components/CSS/AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="background-blur"></div> {/* Div for background image with blur effect */}
      <div className="about-us-overlay"> {/* Overlay for content */}
        <div className="about-us-header">
          <h1>About ZellMart</h1>
          <p>Your One-Stop Mobile Shop</p>
        </div>

        <div className="about-us-content">
          <section>
            <h2>Who We Are</h2>
            <p>
              Welcome to ZellMart, your trusted mobile phone shop. We are committed to providing the latest
              mobile phones, accessories, and exceptional customer service. Our mission is to help you stay
              connected with the world by offering a wide range of smartphones and mobile accessories.
            </p>
          </section>

          <section>
            <h2>Our Vision</h2>
            <p>
              At ZellMart, we believe in making technology accessible to everyone. Our vision is to be the most
              reliable and customer-centric mobile store, ensuring that our customers have access to the latest
              devices and the best support available.
            </p>
          </section>

          <section>
            <h2>Why Choose ZellMart?</h2>
            <ul>
              <li>Wide variety of the latest mobile phones and accessories</li>
              <li>Competitive prices and exclusive deals</li>
              <li>Expert advice from our knowledgeable staff</li>
              <li>Seamless online and in-store shopping experience</li>
              <li>Customer satisfaction is our top priority</li>
            </ul>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              Have any questions or need help? Reach out to our friendly team via phone or email, and we'll be
              happy to assist you!
            </p>
            <p>
              <strong>Phone:</strong> +123 456 7890<br />
              <strong>Email:</strong> support@zellmart.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;


