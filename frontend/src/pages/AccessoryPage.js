import React, { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import "../components/CSS/productPage.css";
import { useParams } from "react-router";
import axios from "axios";

const ProductPage = () => {
    const { id } = useParams();
    const [accessoryDetails, setAccessoryDetails] = useState(null);

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
                    nfc={product.nfc}
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
                            <td>Model</td>
                            <td>{product.title}</td>
                        </tr>
                        <tr>
                            <td>Display</td>
                            <td>{product.display}</td>
                        </tr>
                        <tr>
                            <td>Resolution</td>
                            <td>{product.resolution}</td>
                        </tr>
                        <tr>
                            <td>Operating System</td>
                            <td>{product.platform}</td>
                        </tr>
                        <tr>
                            <td>Memory</td>
                            <td>{product.memory}</td>
                        </tr>
                        <tr>
                            <td>Memory card slot</td>
                            <td>{product.cardslot}</td>
                        </tr>
                        <tr>
                            <td>Main Camera Specs</td>
                            <td>{product.mainCameraSpecs}</td>
                        </tr>
                        <tr>
                            <td>Main Camera Features</td>
                            <td>{product.mainCameraFeatures}</td>
                        </tr>
                        <tr>
                            <td>Selfie Camera Specs</td>
                            <td>{product.secSpecs}</td>
                        </tr>
                        <tr>
                            <td>Selfie Camera Features</td>
                            <td>{product.secFeatures}</td>
                        </tr>
                        <tr>
                            <td>CPU</td>
                            <td>{product.cpu}</td>
                        </tr>
                        <tr>
                            <td>GPU</td>
                            <td>{product.gpu}</td>
                        </tr>
                        <tr>
                            <td>Chipset</td>
                            <td>{product.chipset}</td>
                        </tr>
                        <tr>
                            <td>Battery type</td>
                            <td>{product.batteryType}</td>
                        </tr>
                        <tr>
                            <td>Charging</td>
                            <td>{product.batteryCharging}</td>
                        </tr>
                        <tr>
                            <td>Dimensions</td>
                            <td>{product.dimensions}</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>{product.weight}</td>
                        </tr>
                        <tr>
                            <td>Build</td>
                            <td>{product.build}</td>
                        </tr>
                        <tr>
                            <td>Sim</td>
                            <td>{product.sim}</td>
                        </tr>
                        <tr>
                            <td>Wlan</td>
                            <td>{product.wlan}</td>
                        </tr>
                        <tr>
                            <td>Bluetooth</td>
                            <td>{product.bluetooth}</td>
                        </tr>
                        <tr>
                            <td>Positioning</td>
                            <td>{product.positioning}</td>
                        </tr>
                        <tr>
                            <td>NFC</td>
                            <td>{product.nfc}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{product.price}</td>
                        </tr>
                        <tr>
                            <td>Misc</td>
                            <td>{product.colors}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductPage;
