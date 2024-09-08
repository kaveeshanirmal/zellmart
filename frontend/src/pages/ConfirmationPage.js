import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Import jwtDecode correctly
import "../components/CSS/ConfirmationPage.css";

function ConfirmationPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { phoneId } = useParams(); // Get phoneId from URL
    const { quantity = 0, total = 0, type = "" } = location.state || {};

    const [products, setProducts] = useState([]);
    const [customerName, setCustomerName] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [customerId, setCustomerId] = useState(null);

    // Fetch customerId from JWT token stored in localStorage
    useEffect(() => {
        const token = localStorage.getItem("token"); // Check if token exists
        if (token) {
            console.log("JWT Token:", token);
            try {
                const decodedToken = jwtDecode(token); // Decode the token
                console.log("Decoded Token:", decodedToken);

                const customerId = decodedToken.customer?.id;
                console.log("customerId:", customerId);

                // Check if the customerId exists in the token
                if (decodedToken && customerId) {
                    setCustomerId(customerId);
                } else {
                    console.error("customerId not found in the token.");
                }
            } catch (error) {
                console.error("Error decoding token:", error);
            }
        } else {
            console.error("No JWT token found in localStorage.");
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            let url;
            if (type === "phones") {
                url = `http://localhost:5000/api/phones/${phoneId}`;
            } else {
                url = `http://localhost:5000/api/accessories/${phoneId}`;
            }

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setProducts([
                    {
                        _id: data._id,
                        image: data.imgURL,
                        name: data.model,
                        price: data.price,
                        quantity: quantity,
                    },
                ]);
                console.log("Phone's objectId: :", data._id);
            } catch (error) {
                console.error(`Error fetching ${type} details:`, error);
            }
        };

        if (phoneId) {
            fetchData();
        }
    }, [phoneId, quantity, type]);

    const handleConfirm = () => {
        if (!customerId) {
            console.error("No customerId found. Cannot place order.");
            return;
        }

        const orderData = {
            phone: products[0]?._id || phoneId, // Phone's ObjectId
            customer: customerId, // Customer's ObjectId from the decoded token
            quantity, // Number of items ordered
            total, // Total price of the order
            status: "Pending", // Initial status of the order
        };

        axios
            .post("http://localhost:5000/api/orders", orderData)
            .then((response) => {
                console.log("Order confirmed:", response.data);
                navigate("/orderSuccess");
            })
            .catch((error) => {
                console.error("Error confirming order:", error);
                if (error.response) {
                    console.error("Server response:", error.response.data);
                } else if (error.request) {
                    console.error("No response received:", error.request);
                } else {
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
