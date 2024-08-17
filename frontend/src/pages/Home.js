import React, { useEffect,useRef,useState,useContext } from 'react'
import HeroSection from '../components/HeroSection'
import Card from '../components/Card'
import img1 from '../components/CSS/Images/iphone-11-pro-gold.jpg';
import img2 from '../components/CSS/Images/galaxy-s23-ultra-compare-green-s.avif';
import img3 from '../components/CSS/Images/Xiaomi-Redmi-12.jpeg';
import img4 from '../components/CSS/Images/Xiaomi-Redmi-12.jpeg';
import '../components/CSS/home.css'
import { ThemeContext } from '../components/ThemeContextProvider'; 

export default function Home() {
  const [name,setName] = useState("");
  const { darkMode } = useContext(ThemeContext);
  const alertShown = useRef(false);

  // useEffect(() => {
  //   if(!alertShown.current){
  //     const userName = prompt("Welcome to our website! Please enter your name:");
  //     if(userName) {
  //       setName(userName);
  //     }else {
  //       setName("");
  //     }
  //     alertShown.current =true;
  //   }
  //   }, []);

  const products = [
    {
      image: img1,
      title: 'iPhone 11 pro-gold',
      price: 'Rs 75,000.00',
      availability: '',
      rating: 4.5
    },
    {
      image: img2,
      title: 'Samsung Galaxy s23 utra',
      price: 'Rs 444,499.00',
      originalPrice: 'Rs 666,999.00',
      availability: '',
      rating: 4.5
    },
    {
      image: img3,
      title: 'Xiaomi-Redmi-12',
      price: 'Rs 84,999.00',
      availability: 'sold out',
      rating: 4.5
    },
    {
      image: img4,
      title: 'Xiaomi-Redmi-12',
      price: 'Rs 84,999.00',
      availability: 'sold out',
      rating: 4.5
    }
    // Add more products as needed
  ];
  

  return (
    <div className={`home ${darkMode ? 'dark' : ''}`}>
      <HeroSection name={name}/>
      <br/>
      <center>
      <div className='home-container'>
      <br/>
      <b><h2>Best Sellers</h2></b> <br/>
      <p className='bestSeller-subheading'>We've restocked the shelves with our hottest sellers! Get your hands on the most wanted items in town.
      </p>
      <br/>
      <div className="card-container">
      {products.map((product, index) => (
        <Card
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
          originalPrice={product.originalPrice}
          availability={product.availability}
          rating={product.rating}
        />
      ))}
    </div>
      </div>
      </center>
      <br/>
      <br/>
    </div>
  )
}
