import React from "react";
import "./CSS/card.css";
import { Link } from "react-router-dom";
// import StarRateIcon from '@mui/icons-material/StarRate';

const Card = ({ image, title, price, originalPrice, availability }) => {
    return (
        <div className="card">
            <div className="card-header">
                {availability === "sold out" && (
                    <span className="sold-out">Sold out</span>
                )}
            </div>
            <div className="card-image-container">
                <img src={image} alt={title} className="card-image" />
                <Link to="/productpage">
                    <div className="quick-view">View more</div>{" "}
                </Link>
            </div>
            <div className="card-content">
                <h5>{title}</h5>
                <br />
                <p className="card-price">
                    price : {price}{" "}
                    {originalPrice != price && (
                        <span className="original-price">{originalPrice}</span>
                    )}
                </p>
                {/* <StarRateIcon style={{ fontSize: '18px', color: '#FFD700' }}/> */}
            </div>
        </div>
    );
};

export default Card;
