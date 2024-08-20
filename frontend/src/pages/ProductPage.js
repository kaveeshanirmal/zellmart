import React, { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import "../components/CSS/productPage.css";
import { useParams } from "react-router";
import axios from "axios";

const ProductPage = () => {
    const { id } = useParams();
    const [phoneDetails, setPhoneDetails] = useState(null);

    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost:5000/api/phones/${id}`)
                .then((response) => {
                    setPhoneDetails(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching phone details:", error);
                });
        }
    }, [id]);

    if (!phoneDetails) {
        return <div>Loading...</div>;
    }

    const product = {
        image: phoneDetails.imgURL,
        title: phoneDetails.model,
        price: phoneDetails.price,
        originalPrice: phoneDetails.originalPrice,
        availability: phoneDetails.availability,
        brand: phoneDetails.brand,
        quantity: phoneDetails.quantity,
        description: phoneDetails.description,
        dimensions: phoneDetails.body.dimensions,
        weight: phoneDetails.body.weight,
        build: phoneDetails.body.build,
        sim: phoneDetails.body.sim,
        display: phoneDetails.display.type,
        resolution: phoneDetails.display.resolution,
        protection: phoneDetails.display.protection,
        platform: phoneDetails.platform.os,
        chipset: phoneDetails.platform.chipset,
        cpu: phoneDetails.platform.cpu,
        gpu: phoneDetails.platform.gpu,
        cardslot: phoneDetails.memory.cardSlot,
        memory: phoneDetails.memory.internal,
        mainCameraSpecs: phoneDetails.mainCamera.specs,
        mainCameraFeatures: phoneDetails.mainCamera.features,
        secSpecs: phoneDetails.selfieCamera.specs,
        secFeatures: phoneDetails.selfieCamera.features,
        wlan: phoneDetails.comms.wlan,
        bluetooth: phoneDetails.comms.bluetooth,
        positioning: phoneDetails.comms.positioning,
        nfc: phoneDetails.comms.nfc,
        sensors: phoneDetails.features.sensors,
        batteryType: phoneDetails.battery.type,
        batteryCharging: phoneDetails.battery.charging,
        colors: phoneDetails.misc.colors,
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
                <table className="phone-details">
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
