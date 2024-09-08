import React, { useEffect, useState } from "react";
import ProductDetails from "../components/accessoryDetails";
import "../components/CSS/productPage.css";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const ProductPage = () => {
    const { id } = useParams();
    const [accessoryDetails, setAccessoryDetails] = useState(null);
    const [orderQuantity, setOrderQuantity] = useState(1);
    const type = "accessories";

    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost:5000/api/accessories/${id}`)
                .then((response) => {
                    setAccessoryDetails(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching accessory details:", error);
                });
        }
    }, [id]);

    if (!accessoryDetails) {
        return <div>Loading...</div>;
    }

    const product = {
        image: accessoryDetails.imgURL,
        title: accessoryDetails.model,
        price: accessoryDetails.price,
        originalPrice: accessoryDetails.originalPrice,
        availability: accessoryDetails.availability,
        brand: accessoryDetails.brand,
        quantity: accessoryDetails.quantity,
        description: accessoryDetails.description,
        Connectivity: accessoryDetails.features.Connectivity,

        batteryType: accessoryDetails.battery.type,
        batteryCharging: accessoryDetails.battery.charging,
        colors: accessoryDetails.misc.colors,
    };

    const handleOrderNowClick = () => {
        // Calculate total based on price and orderQuantity
        const total = accessoryDetails.price * orderQuantity;

        // Redirect to ConfirmationPage with phoneId, quantity, and total
        navigate(`/confirmation/accessories/${id}`, {
            state: { quantity: orderQuantity, total, type },
        });
    };

    return (
        <div>
            <div className="product-page">
                <div className="image-gallery">
                    <div className="main-image">
                        <img
                            src={`https://drive.google.com/thumbnail?id=${product.image}&sz=w1000`}
                            alt="Product"
                        />
                    </div>
                </div>

                <ProductDetails
                    title={product.title}
                    price={product.price}
                    availability={product.availability}
                    brand={product.brand}
                    platform={product.platform}
                    battery={product.batteryType}
                    batteryCharging={product.batteryCharging}
                    colors={product.colors}
                    onOrderNow={handleOrderNowClick}
                    phoneIdphoneId={id}
                    orderQuantity={orderQuantity}
                    setOrderQuantity={setOrderQuantity}
                    type={type}
                />
            </div>
            <div className="product-details-container">
                <h1>Product details</h1>
                <br />
                <p>{product.description}</p>
                <br />
                <br />
                <table className="accessory-details">
                    <tbody>
                        <tr>
                            <td>Model:</td>
                            <td>{product.title}</td>
                        </tr>

                        <tr>
                            <td>Battery type:</td>
                            <td>{product.batteryType}</td>
                        </tr>
                        <tr>
                            <td>Charging:</td>
                            <td>{product.batteryCharging}</td>
                        </tr>

                        <tr>
                            <td>Connectivity:</td>
                            <td>{product.Connectivity}</td>
                        </tr>

                        <tr>
                            <td>Price:</td>
                            <td>{product.price}</td>
                        </tr>
                        <tr>
                            <td>Colors:</td>
                            <td>{product.colors}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductPage;
