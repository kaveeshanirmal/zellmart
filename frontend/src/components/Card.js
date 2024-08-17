import React from "react";
import "./CSS/card.css";
//import StarRateIcon from "@mui/icons-material/StarRate";

const Card = ({ image, title, price, originalPrice, availability, rating }) => {
    return (
        <div className="card">
            <div className="card-header">
                {availability === "sold out" && (
                    <span className="sold-out">Sold out</span>
                )}
            </div>
            <div className="card-image-container">
                <img src={image} alt={title} className="card-image" />
                <div className="quick-view">Quick view</div>
            </div>
            <div className="card-content">
                <h5>{title}</h5>
                <br />
                <p className="price">
                    price : {price}{" "}
                    {originalPrice && (
                        <span className="original-price">{originalPrice}</span>
                    )}
                </p>
                {/* <StarRateIcon style={{ fontSize: '18px', color: '#FFD700' }}/> */}
                <span className="rating-icons">
                    <span className="rating">Ratings : {rating}</span>
                </span>
            </div>
        </div>
    );
};

export default Card;
