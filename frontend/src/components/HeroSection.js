import "./CSS/heroSection.css";
import React, { useState, useEffect } from "react";
import img1 from "./CSS/Images/bg1.jpeg";
import img2 from "./CSS/Images/bg2.jpg";
import img3 from "./CSS/Images/bg3.jpg";
import { Link } from "react-router-dom";
import WelcomeMessage from "./WelcomeMessage";

const images = [img1, img2, img3];

export default function HeroSection(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
                setOpacity(1);
            }, 800);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setOpacity(0);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            setOpacity(1);
        }, 1000);
    };

    const prevSlide = () => {
        setOpacity(0);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
            setOpacity(1);
        }, 1000);
    };

    return (
        <div className="hero-section">
            <div className="hero-overlay"></div>
            <img
                src={images[currentImageIndex]}
                alt="Hero"
                className="hero-image"
                style={{ opacity: opacity }}
            />
            <div className="hero-content">
                <WelcomeMessage />
                <p>
                    <i>"We are always here to serve you."</i>
                </p>
                <Link
                    to="/products"
                    smooth={true}
                    duration={500}
                    className="hero-button"
                >
                    Shop Now
                </Link>
            </div>
            <button className="prev" onClick={prevSlide}>
                ❮
            </button>
            <button className="next" onClick={nextSlide}>
                ❯
            </button>
        </div>
    );
}
