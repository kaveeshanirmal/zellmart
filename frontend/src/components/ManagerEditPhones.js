import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CSS/managerEditPhones.css";

const PhoneEditForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [phoneData, setPhoneData] = useState({
        quantity: 0,
        brand: "",
        model: "",
        price: 0,
        memory: { cardSlot: "", internal: "" },
        misc: { colors: "" },
    });

    useEffect(() => {
        const fetchPhone = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/api/phones/${id}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch phone data");
                }
                const data = await response.json();
                setPhoneData(data);
            } catch (error) {
                console.error("Error fetching phone data:", error);
            }
        };

        fetchPhone();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setPhoneData((prevData) => {
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
            console.log("Sending data:", JSON.stringify(phoneData, null, 2));

            const response = await fetch(
                `http://localhost:5000/api/phones/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(phoneData),
                }
            );

            const responseData = await response.json();
            console.log("Response:", responseData);

            if (!response.ok) {
                throw new Error(
                    `Failed to update phone data: ${
                        responseData.message || response.statusText
                    }`
                );
            }

            alert("Phone data updated successfully");
            navigate("/");
        } catch (error) {
            alert(`Failed to update phone data: ${error.message}`);
            console.error("Error updating phone data:", error);
        }
    };

    return (
        <div className="pef-container">
            <h2 className="pef-title">Edit Phone</h2>
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
                        value={phoneData.brand}
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
                        value={phoneData.model}
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
                        value={phoneData.price}
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
                        value={phoneData.quantity}
                        onChange={handleChange}
                        className="pef-input"
                    />
                </div>

                {/* Memory Fields */}
                <div className="pef-form-group">
                    <label htmlFor="memory.internal" className="pef-label">
                        Internal Memory
                    </label>
                    <input
                        type="text"
                        id="memory.internal"
                        name="memory.internal"
                        value={phoneData.memory.internal}
                        onChange={handleChange}
                        className="pef-input"
                    />
                </div>
                <div className="pef-form-group">
                    <label htmlFor="memory.cardSlot" className="pef-label">
                        Card Slot
                    </label>
                    <input
                        type="text"
                        id="memory.cardSlot"
                        name="memory.cardSlot"
                        value={phoneData.memory.cardSlot}
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
                        value={phoneData.misc.colors}
                        onChange={handleChange}
                        className="pef-input"
                    />
                </div>

                {/* Add more fields for other nested properties as needed */}

                <button type="submit" className="pef-submit-btn">
                    Update Phone
                </button>
            </form>
        </div>
    );
};

export default PhoneEditForm;
