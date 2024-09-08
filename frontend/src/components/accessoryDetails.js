import React, { useState } from "react";
import "./CSS/productPage.css";

const ProductDetails = ({
    title,
    price,
    availability,
    brand,
    battery,
    batteryCharging,
    colors,
    onOrderNow,
    phoneId,
    orderQuantity,
    setOrderQuantity,
    type,
}) => {
    console.log("type: ", type);
    const incrementQuanitity = () => {
        if (availability === false) {
            setOrderQuantity(0);
        } else {
            setOrderQuantity(orderQuantity + 1);
        }
    };
    const decrementQuanitity = () => {
        if (availability === false) {
            setOrderQuantity(0);
        } else if (orderQuantity <= 1) {
            setOrderQuantity(1);
        } else {
            setOrderQuantity(orderQuantity - 1);
        }
    };

    const handleOrderNowClick = () => {
        if (onOrderNow) {
            onOrderNow(phoneId);
        }
    };

    return (
        <div className="product-details">
            <br /> <br />
            <h2>{title}</h2>
            {availability === false ? (
                <p className="price">
                    Rs. {price} <span className="sold-out">Sold out</span>
                </p>
            ) : (
                <p className="price">
                    Rs. {price} <span className="in-stock">In Stock</span>
                </p>
            )}
            <p className="short-description">
                Brand: {brand} <br />
                {battery} Battery <br />
                {batteryCharging} <br />
                {colors} <br />
            </p>
            <h4>Quanitity: </h4>
            <br />
            <div class="quantity">
                <button class="quantity-btn minus" onClick={decrementQuanitity}>
                    -
                </button>
                <div className="quanitity-input">{orderQuantity}</div>
                <button class="quantity-btn plus" onClick={incrementQuanitity}>
                    +
                </button>
            </div>
            <br />
            <br />
            {availability === false && (
                <button className="sold-out-button">Sold out</button>
            )}
            {availability === true && (
                <button className="order-button" onClick={handleOrderNowClick}>
                    Order now
                </button>
            )}
            <div className="badges">
                <b>
                    <span>100% Authentic</span>
                </b>
                <b>
                    <span>Island wide Delivery</span>
                </b>
            </div>
        </div>
    );
};

export default ProductDetails;
