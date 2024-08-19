import React from 'react';
import './CSS/brands.css';

const BrandCard = ({ logo, altText }) => (
  <div className="brand-card">
    <img src={logo} alt={altText} className="brand-logo" />
  </div>
);

export default BrandCard;