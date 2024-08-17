import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/phoneDetails.css";

const PhoneDetails = () => {
    const { id } = useParams();
    const [selectedColor, setSelectedColor] = useState("imageblack");
    const [selectedView, setSelectedView] = useState("imageblack");
    const [phoneDetails, setPhoneDetails] = useState(null);

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setSelectedView(`image${color}`);
    };

    const handleViewChange = (view) => {
        setSelectedView(view);
    };

    const handleMouseOut = () => {
        setSelectedView("imageblack");
    };

    const handleBuyClick = () => {
        const colorPrefix = selectedColor.startsWith("image") ? "" : "image";
    };

    useEffect(() => {
        if (id) {
            // Fetch phone details based on phoneId from your API
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

    useEffect(() => {
        setPhoneDetails(phoneDetails);
    }, [phoneDetails]);

    return (
        <div>
            <h1>Phone Details of ID {id}</h1>
            <div className="phone-details-container">
                {phoneDetails && (
                    <div className="phone-details">
                        <div className="color-choices">
                            <button
                                key="imageblack"
                                onClick={() => handleColorChange("black")}
                                className={`color-button ${
                                    selectedColor === "black" ? "active" : ""
                                }`}
                                style={{
                                    backgroundColor: "black",
                                    height: "35px",
                                }}
                            ></button>
                            <button
                                key="imageblue"
                                onClick={() => handleColorChange("blue")}
                                className={`color-button ${
                                    selectedColor === "blue" ? "active" : ""
                                }`}
                                style={{
                                    backgroundColor: "blue",
                                    height: "35px",
                                }}
                            ></button>
                            <button
                                key="imagered"
                                onClick={() => handleColorChange("red")}
                                className={`color-button ${
                                    selectedColor === "red" ? "active" : ""
                                }`}
                                style={{
                                    backgroundColor: "red",
                                    height: "35px",
                                }}
                            ></button>
                        </div>

                        <div className="phone-display">
                            <div className="phone-image-box">
                                {phoneDetails && (
                                    <img
                                        src={phoneDetails[selectedView]}
                                        alt="Phone"
                                    />
                                )}
                            </div>

                            <div
                                className="view-choices"
                                onMouseOut={handleMouseOut}
                            >
                                <div
                                    key="image1"
                                    onMouseEnter={() =>
                                        handleViewChange("image1")
                                    }
                                    className={`view-box ${
                                        selectedView === "image1"
                                            ? "active"
                                            : ""
                                    }`}
                                    style={{
                                        backgroundImage: `url(${phoneDetails.image1})`,
                                    }}
                                ></div>
                                <div
                                    key="image2"
                                    onMouseEnter={() =>
                                        handleViewChange("image2")
                                    }
                                    className={`view-box ${
                                        selectedView === "image2"
                                            ? "active"
                                            : ""
                                    }`}
                                    style={{
                                        backgroundImage: `url(${phoneDetails.image2})`,
                                    }}
                                ></div>
                                <div
                                    key="image3"
                                    onMouseEnter={() =>
                                        handleViewChange("image3")
                                    }
                                    className={`view-box ${
                                        selectedView === "image3"
                                            ? "active"
                                            : ""
                                    }`}
                                    style={{
                                        backgroundImage: `url(${phoneDetails.image3})`,
                                    }}
                                ></div>
                            </div>
                        </div>

                        <div className="phone-details-info">
                            <div>
                                <table className="product-info">
                                    <thead>
                                        <tr>
                                            <th>Feature</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Brand</td>
                                            <td>{phoneDetails.brand}</td>
                                        </tr>
                                        <tr>
                                            <td>Model</td>
                                            <td>{phoneDetails.model}</td>
                                        </tr>
                                        <tr>
                                            <td>Screen Size</td>
                                            <td>
                                                {phoneDetails.displaySize}{" "}
                                                inches
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Storage</td>
                                            <td>{phoneDetails.storage} GB</td>
                                        </tr>
                                        <tr>
                                            <td>RAM</td>
                                            <td>{phoneDetails.ram} GB</td>
                                        </tr>
                                        <tr>
                                            <td>Battery</td>
                                            <td>
                                                {phoneDetails.batteryCapacity}{" "}
                                                mAh
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Camera</td>
                                            <td>{phoneDetails.camera} MP</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="buy-section">
                                <h4>
                                    {phoneDetails.brand} {phoneDetails.model}
                                </h4>
                                <h4>Price: Rs. {phoneDetails.price}</h4>
                                <button
                                    onClick={handleBuyClick}
                                    style={{ marginBottom: "40px" }}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PhoneDetails;
