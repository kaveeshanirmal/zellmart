import React from "react";
import "../components/CSS/orderSucess.css";

const OrderSuccess = () => {
    return (
        <div className="order-success-container">
            <div className="order-success-card">
                <h1 className="order-success-title">Order Confirmed!</h1>
                <p className="order-success-message">
                    Thank you for your purchase. Your order has been
                    successfully placed.
                </p>
                <p className="order-success-message">
                    You will receive an email confirmation shortly.
                </p>
                <button
                    className="order-success-button"
                    onClick={() => (window.location.href = "/")}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default OrderSuccess;
