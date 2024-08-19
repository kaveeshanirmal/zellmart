import React, { useState } from 'react';
import ProductDetails from '../components/ProductDetails';
import img1 from '../components/CSS/Images/iphone-11-pro-gold.jpg';
import '../components/CSS/productPage.css'

const ProductPage = () => {

    const product = [
    {    
      image: img1,
      title: 'iPhone 11 pro-gold',
      price: 'Rs 75,000.00',
      originalPrice: 'Rs 75,000.00',
      availability: 'in stock',
      brand:'apple',
      quantity:50,
      description:'iPhone 12 features a new design with flat edges, 5G capability, and improved cameras',
      dimensions: '146.7 x 71.5 x 7.4 mm',
      weight : '164g',
      build :'Glass front, glass back, aluminium frame',
      sim: 'Nano-Sim and eSIM',
      display: 'Super Retina XDR OLED 6.1 inches',
      resoultion: '1170 x 2532 pixels',
      protection: 'Ceramic Shield glass',
      platform:'IOS 14, upgradable to IOS 17',
      chipset: 'Apple A14 Bionic',
      cpu: 'Hexa-core',
      gpu:'Apple GPU(4-core graphics)',
      cardslot:'NO',
      memory:'64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM',
      mainCameraSpecs:'12 MP, f/1.6, 26mm (wide), 12 MP, f/2.4, 120˚ (ultrawide)',
      mainCamerafeatures: 'Dual-LED dual-tone flash, HDR (photo/panorama) 4K@24/30/60fps, 1080p@30/60/120/240fps',
      secSpecs: "12 MP, f/2.2, 23mm (wide)",
      secFeatures: "HDR 4K@24/30/60fps, 1080p@30/60/120fps",
      wlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      bluetooth: "5.0, A2DP, LE",
      positioning: "GPS, GLONASS, GALILEO, QZSS",
      nfc: "yes",
      sensors: "Face ID, accelerometer, gyro, proximity, compass, barometer",
      batteryType: "Li-Ion 2815 mAh, non-removable",
      batteryCharging: "Fast charging 20W, 50% in 30 min",
      colors: "Black, White, Red, Green, Blue",

    },
    ]

    return (
        <div>
        <div className="product-page">
            <div className="image-gallery">
            <div className="main-image">
                <img src={img1} alt="Product"/>
            </div>
        </div>

            <ProductDetails  //title,price,availability,brand,platform,battery,batteryCharging,colors,nfc
                title={product[0].title}
                price={product[0].price}
                availability={product[0].availability}
                brand={product[0].brand}
                platform={product[0].platform}
                battery={product[0].batteryType}
                batteryCharging={product[0].batteryCharging}
                colors={product[0].colors}
                nfc={product[0].nfc}
            />
        </div>
        <div className='product-details-container'>
            <h1>Product details</h1>
            <br/>
            
            <p>{product[0].description}</p>
            <br/>
            <br/>
            <table class="phone-details">
                <tr>
                    <td>Model</td>
                    <td>{product[0].title}</td>
                </tr>
                <tr>
                    <td>Display</td>
                    <td>{product[0].display}</td>
                </tr>
                <tr>
                    <td>Resoultion</td>
                    <td>{product[0].resoultion}</td>
                </tr>
                <tr>
                    <td>Operating System</td>
                    <td>{product[0].platform}</td>
                </tr>
                <tr>
                    <td>Memory</td>
                    <td>{product[0].memory}</td>
                </tr>
                <tr>
                    <td>Memory card slot</td>
                    <td>{product[0].cardslot}</td>
                </tr>
                <tr>
                    <td>Main Camera Specs</td>
                    <td>{product[0].mainCameraSpecs}</td>
                </tr>
                <tr>
                    <td>Main Camera Features</td>
                    <td>{product[0].mainCamerafeatures}</td>
                </tr>
                <tr>
                    <td>Selfie Camera Specs</td>
                    <td>{product[0].secSpecs}</td>
                </tr>
                <tr>
                    <td>Selfie Camera Features</td>
                    <td>{product[0].secFeatures}</td>
                </tr>
                <tr>
                    <td>CPU</td>
                    <td>{product[0].cpu}</td>
                </tr>
                <tr>
                    <td>GPU</td>
                    <td>{product[0].gpu}</td>
                </tr>
                <tr>
                    <td>Chipset</td>
                    <td>{product[0].chipset}</td>
                </tr>
                <tr>
                    <td>Battery type</td>
                    <td>{product[0].batteryType}</td>
                </tr>
                <tr>
                    <td>Charging</td>
                    <td>{product[0].batteryCharging}</td>
                </tr>
                <tr>
                    <td>Dimensions</td>
                    <td>{product[0].dimensions}</td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td>{product[0].weight}</td>
                </tr>
                <tr>
                    <td>Build</td>
                    <td>{product[0].build}</td>
                </tr>
                <tr>
                    <td>Sim</td>
                    <td>{product[0].sim}</td>
                </tr>
                <tr>
                    <td>Wlan</td>
                    <td>{product[0].wlan}</td>
                </tr>
                <tr>
                    <td>Bluetooth</td>
                    <td>{product[0].bluetooth}</td>
                </tr>
                <tr>
                    <td>Positioning</td>
                    <td>{product[0].positioning}</td>
                </tr>
                <tr>
                    <td>NFC</td>
                    <td>{product[0].nfc}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>{product[0].price}</td>
                </tr>
                <tr>
                    <td>Misc</td>
                    <td>{product[0].colors}</td>
                </tr>
            </table>

        </div>    
    
        </div>

    );
};

export default ProductPage;
