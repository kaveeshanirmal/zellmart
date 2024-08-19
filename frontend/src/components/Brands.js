import React from 'react';
import BrandCard from './BrandCard';
import './CSS/brands.css';

// Sample brand logos (Replace these with your actual image paths)
import appleLogo from './CSS/Images/apple-logo-og.jpg';
import jblLogo from './CSS/Images/images.png';
// import tronsmartLogo from './CSS/Images/tronsmart.png';
// import xiaomiLogo from './CSS/Images/Xiaomi.png';
// import marshallLogo from './CSS/Images/marshall.png';
import sonyLogo from './CSS/Images/305_sony.jpg';
import samsungLogo from './CSS/Images/samsung.avif';
// import fitbitLogo from './CSS/Images/fitbit.png';
// import ankerLogo from './CSS/Images/anker.png';
// import boseLogo from './CSS/Images/bose.png';
import googleLogo from './CSS/Images/google-logo-colorful.png';
// import haylouLogo from './CSS/Images/haylou.png';

const Brands = () => (
  <div className="brands-container">
    <h2>Our Brands</h2>
    <br/>
    <p className='brand-subheading'>Discover the latest products from a wide range of electronic brands</p>
    <br/>
    <div className="brands-grid">
      <BrandCard logo={appleLogo} altText="Apple" />
      <BrandCard logo={jblLogo} altText="JBL" />
      {/* <BrandCard logo={tronsmartLogo} altText="Tronsmart" /> */}
      {/* <BrandCard logo={xiaomiLogo} altText="Xiaomi" /> */}
      {/* <BrandCard logo={marshallLogo} altText="Marshall" /> */}
      <BrandCard logo={sonyLogo} altText="Sony" />
      <BrandCard logo={samsungLogo} altText="Samsung" />
      {/* <BrandCard logo={fitbitLogo} altText="Fitbit" />
      <BrandCard logo={ankerLogo} altText="Anker" /> */}
      {/* <BrandCard logo={boseLogo} altText="Bose" /> */}
      <BrandCard logo={googleLogo} altText="Google" />
      <BrandCard logo={appleLogo} altText="Apple" />
      {/* <BrandCard logo={haylouLogo} altText="Haylou" /> */}
    </div>
  </div>
);

export default Brands;