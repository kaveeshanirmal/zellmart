import React from 'react';
import "./CSS/orderCard.css";
import { Link } from 'react-router-dom';

const OrderCard = ({ order }) => {
    return (
        <div className="order-card">
        <div className="order-card-header">
            <h3>{order.productName}</h3>
            <Link to={'/ReviewForm'}><span className="review-bttn">Review</span> </Link>
        </div>
        <div className="order-card-body">
            <img src={order.image} alt={order.productName} className="product-image" />
            <div className="order-details">
            <p className="product-name">{order.productInfo}</p>
            <p className="product-info">Ordered date  :{order.orderedDate}</p>
            <p className="product-info">Accepted date :{order.acceptedDate}</p>
            <p className="product-info">Delivered date:{order.deliveredDate}</p>
            <div className="order-footer">
                <div className="ordercard-price">Rs. {order.price}</div>
                <div className="ordercard-quantity">Qty: {order.quantity}</div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default OrderCard;


