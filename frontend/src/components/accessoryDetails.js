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
}) => {
    const [orderQuantity, setQuanitity] = useState(1);

    const incrementQuanitity = () => {
        if (availability === false) {
            setQuanitity(0);
        } else {
            setQuanitity(orderQuantity + 1);
        }
    };
    const decrementQuanitity = () => {
        if (availability === false) {
            setQuanitity(0);
        } else if (orderQuantity <= 1) {
            setQuanitity(1);
        } else {
            setQuanitity(orderQuantity - 1);
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
                <button className="order-button">Order now</button>
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