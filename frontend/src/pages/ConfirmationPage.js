import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../components/CSS/ConfirmationPage.css";

function ConfirmationPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { phoneId } = useParams(); // Get phoneId from URL
    console.log("PhoneId:", phoneId);
    // Assuming state is passed with total
    const { quantity = 0, total = 0, type = "" } = location.state || {};
    const [products, setProducts] = useState([]);
    const [customerName, setCustomerName] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");

    useEffect(() => {
        console.log("useEffect triggered. Type:", type, "PhoneId:", phoneId);

        const fetchData = async () => {
            let url;
            if (type === "phones") {
                url = `http://localhost:5000/api/phones/${phoneId}`;
            } else {
                url = `http://localhost:5000/api/accessories/${phoneId}`;
            }

            console.log("Fetching from URL:", url);

            try {
                const response = await fetch(url);
                console.log("Response status:", response.status);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log("Received data:", data);

                setProducts([
                    {
                        image: data.imgURL,
                        name: data.model,
                        price: data.price,
                        quantity: quantity,
                    },
                ]);
            } catch (error) {
                console.error(`Error fetching ${type} details:`, error);
                // You might want to set an error state here to display to the user
            }
        };

        if (phoneId) {
            fetchData();
        }
    }, [phoneId, quantity, type]);

    const handleConfirm = () => {
        const orderData = {
            phoneId,
            customerId: customerPhone,
            customerName,
            customerAddress,
            customerPhone,
            orderDate: new Date(),
            quantity,
            total,
            status: "Pending",
        };

        axios
            .post("http://localhost:5000/api/orders", orderData)
            .then((response) => {
                console.log("Order confirmed:", response.data);
                navigate("/order-success");
            })
            .catch((error) => {
                console.error("Error confirming order:", error);
                if (error.response) {
                    // Server responded with a status other than 2xx
                    console.error("Server response:", error.response.data);
                } else if (error.request) {
                    // No response was received from the server
                    console.error("No response received:", error.request);
                } else {
                    // Something else happened while setting up the request
                    console.error("Error setting up request:", error.message);
                }
            });
    };

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className="confirmation-container">
            <button className="back-button" onClick={handleBack}>
                Back
            </button>

            <div className="main-content">
                <div className="order-details">
                    <h2>Order Details</h2>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Model</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td>
                                        <img
                                            src={`https://drive.google.com/thumbnail?id=${product.image}&sz=w1000`}
                                            alt={product.name}
                                            className="product-image"
                                        />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>${product.price * product.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="order-summary">
                    <div className="subtotal">
                        <h2>Sub Total: Rs.{total}</h2>
                    </div>

                    <div className="customer-info">
                        <h2>Customer Information</h2>
                        <form>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    value={customerName}
                                    onChange={(e) =>
                                        setCustomerName(e.target.value)
                                    }
                                />
                            </label>
                            <label>
                                Address:
                                <input
                                    type="text"
                                    value={customerAddress}
                                    onChange={(e) =>
                                        setCustomerAddress(e.target.value)
                                    }
                                />
                            </label>
                            <label>
                                Phone Number:
                                <input
                                    type="text"
                                    value={customerPhone}
                                    onChange={(e) =>
                                        setCustomerPhone(e.target.value)
                                    }
                                />
                            </label>
                        </form>
                        <button
                            className="confirm-button"
                            onClick={handleConfirm}
                        >
                            Confirm Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationPage;
