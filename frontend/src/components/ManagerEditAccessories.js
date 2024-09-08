import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CSS/managerEditPhones.css";

const AccessoryEditForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [accessoryData, setAccessoryData] = useState({
        quantity: 0,
        brand: "",
        model: "",
        price: 0,
        misc: { colors: "" },
    });

    useEffect(() => {
        const fetchAccessory = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/api/accessories/${id}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch accessory data");
                }
                const data = await response.json();
                setAccessoryData(data);
            } catch (error) {
                console.error("Error fetching accessory data:", error);
            }
        };

        fetchAccessory();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setAccessoryData((prevData) => {
            const keys = name.split(".");
            if (keys.length === 1) {
                return {
                    ...prevData,
                    [name]: type === "checkbox" ? checked : value,
                };
            } else {
                const [parentKey, childKey] = keys;
                return {
                    ...prevData,
                    [parentKey]: {
                        ...prevData[parentKey],
                        [childKey]: value,
                    },
                };
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(
                "Sending data:",
                JSON.stringify(accessoryData, null, 2)
            );

            const response = await fetch(
                `http://localhost:5000/api/accessories/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(accessoryData),
                }
            );

            const responseData = await response.json();
            console.log("Response:", responseData);

            if (!response.ok) {
                throw new Error(
                    `Failed to update accessory data: ${
                        responseData.message || response.statusText
                    }`
                );
            }

            alert("Accessory data updated successfully");
            navigate("/");
        } catch (error) {
            alert(`Failed to update accessory data: ${error.message}`);
            console.error("Error updating accessory data:", error);
        }
    };

    return (
        <div className="pef-container">
            <h2 className="pef-title">Edit Accessory</h2>
            <form onSubmit={handleSubmit} className="pef-form">
                {/* Basic Fields */}
                <div className="pef-form-group">
                    <label htmlFor="brand" className="pef-label">
                        Brand
                    </label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={accessoryData.brand}
                        onChange={handleChange}
                        className="pef-input"
                    />
                </div>
                <div className="pef-form-group">
                    <label htmlFor="model" className="pef-label">
                        Model
                    </label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        value={accessoryData.model}
                        onChange={handleChange}
                        className="pef-input"
                    />
                </div>
                <div className="pef-form-group">
                    <label htmlFor="price" className="pef-label">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={accessoryData.price}
                        onChange={handleChange}
                        className="pef-input"
                    />
                </div>
                <div className="pef-form-group">
                    <label htmlFor="quantity" className="pef-label">
                        Quantity
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={accessoryData.quantity}
                        onChange={handleChange}
                        className="pef-input"
                    />
                </div>

                {/* Misc Fields */}
                <div className="pef-form-group">
                    <label htmlFor="misc.colors" className="pef-label">
                        Colors
                    </label>
                    <input
                        type="text"
                        id="misc.colors"
                        name="misc.colors"
                        value={accessoryData.misc.colors}
                        onChange={handleChange}
                        className="pef-input"
                    />
                </div>
                <button type="submit" className="pef-submit-btn">
                    Update Accessory
                </button>
            </form>
        </div>
    );
};

export default AccessoryEditForm;
