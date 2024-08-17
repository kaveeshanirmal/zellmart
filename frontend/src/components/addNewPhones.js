import React, { useState } from "react";
import axios from "axios";

const PhoneForm = () => {
    const [phoneData, setPhoneData] = useState({
        customId: "",
        imgURL: "",
        quantity: "",
        brand: "",
        model: "",
        description: "",
        body: {
            dimensions: "",
            weight: "",
            build: "",
            sim: "",
        },
        display: {
            type: "",
            size: "",
            resolution: "",
            protection: "",
        },
        platform: {
            os: "",
            chipset: "",
            cpu: "",
            gpu: "",
        },
        memory: {
            cardSlot: "",
            internal: "",
        },
        mainCamera: {
            specs: "",
            features: "",
            video: "",
        },
        selfieCamera: {
            specs: "",
            features: "",
            video: "",
        },
        sound: {
            loudspeaker: "",
            jack: "",
        },
        comms: {
            wlan: "",
            bluetooth: "",
            positioning: "",
            nfc: "",
        },
        features: {
            sensors: "",
        },
        battery: {
            type: "",
            charging: "",
        },
        misc: {
            colors: "",
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split(".");
        if (keys.length > 1) {
            setPhoneData((prevState) => ({
                ...prevState,
                [keys[0]]: {
                    ...prevState[keys[0]],
                    [keys[1]]: value,
                },
            }));
        } else {
            setPhoneData({ ...phoneData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/phones",
                phoneData
            );
            alert("Phone data saved successfully!");
        } catch (error) {
            alert("Error!");
            console.error("There was an error saving the phone data!", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create or Update Phone Model</h2>
            <div>
                <label>Custom ID:</label>
                <input
                    type="text"
                    name="customId"
                    value={phoneData.customId}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Image URL:</label>
                <input
                    type="text"
                    name="imgURL"
                    value={phoneData.imgURL}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Quantity:</label>
                <input
                    type="text"
                    name="quantity"
                    value={phoneData.quantity}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Availability:</label>
                <input
                    type="text"
                    name="available"
                    value={phoneData.available}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Brand:</label>
                <input
                    type="text"
                    name="brand"
                    value={phoneData.brand}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Model:</label>
                <input
                    type="text"
                    name="model"
                    value={phoneData.model}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={phoneData.description}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="text"
                    name="price"
                    value={phoneData.price}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Body Details */}
            <h3>Body</h3>
            <div>
                <label>Dimensions:</label>
                <input
                    type="text"
                    name="body.dimensions"
                    value={phoneData.body.dimensions}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Weight:</label>
                <input
                    type="text"
                    name="body.weight"
                    value={phoneData.body.weight}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Build:</label>
                <input
                    type="text"
                    name="body.build"
                    value={phoneData.body.build}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Sim:</label>
                <input
                    type="text"
                    name="body.sim"
                    value={phoneData.body.sim}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Display Details */}
            <h3>Display</h3>
            <div>
                <label>Type:</label>
                <input
                    type="text"
                    name="display.type"
                    value={phoneData.display.type}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Size:</label>
                <input
                    type="text"
                    name="display.size"
                    value={phoneData.display.size}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Resolution:</label>
                <input
                    type="text"
                    name="display.resolution"
                    value={phoneData.display.resolution}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Protection:</label>
                <input
                    type="text"
                    name="display.protection"
                    value={phoneData.display.protection}
                    onChange={handleChange}
                    required
                />
            </div>

            <h3>Platform</h3>
            <div>
                <label>OS:</label>
                <input
                    type="text"
                    name="platform.os"
                    value={phoneData.platform.os}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Chipset:</label>
                <input
                    type="text"
                    name="platform.chipset"
                    value={phoneData.platform.chipset}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>CPU:</label>
                <input
                    type="text"
                    name="platform.cpu"
                    value={phoneData.platform.cpu}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>GPU:</label>
                <input
                    type="text"
                    name="platform.gpu"
                    value={phoneData.platform.gpu}
                    onChange={handleChange}
                    required
                />
            </div>

            <h3>Memory</h3>
            <div>
                <label>Card Slot:</label>
                <input
                    type="text"
                    name="memory.cardSlot"
                    value={phoneData.memory.cardSlot}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Internal:</label>
                <input
                    type="text"
                    name="memory.internal"
                    value={phoneData.memory.internal}
                    onChange={handleChange}
                    required
                />
            </div>

            <h3>Main Camera</h3>
            <div>
                <label>Specs:</label>
                <input
                    type="text"
                    name="mainCamera.specs"
                    value={phoneData.mainCamera.specs}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Features:</label>
                <input
                    type="text"
                    name="mainCamera.features"
                    value={phoneData.mainCamera.features}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Video:</label>
                <input
                    type="text"
                    name="mainCamera.video"
                    value={phoneData.mainCamera.video}
                    onChange={handleChange}
                    required
                />
            </div>

            <h3>Selfie Camera</h3>
            <div>
                <label>Specs:</label>
                <input
                    type="text"
                    name="selfieCamera.specs"
                    value={phoneData.selfieCamera.specs}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Features:</label>
                <input
                    type="text"
                    name="selfieCamera.features"
                    value={phoneData.selfieCamera.features}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Video:</label>
                <input
                    type="text"
                    name="selfieCamera.video"
                    value={phoneData.selfieCamera.video}
                    onChange={handleChange}
                    required
                />
            </div>

            <h3>Sound</h3>
            <div>
                <label>Loudspeaker:</label>
                <input
                    type="text"
                    name="sound.loudspeaker"
                    value={phoneData.sound.loudspeaker}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Jack:</label>
                <input
                    type="text"
                    name="sound.jack"
                    value={phoneData.sound.jack}
                    onChange={handleChange}
                    required
                />
            </div>

            <h3>Comms</h3>
            <div>
                <label>WLAN:</label>
                <input
                    type="text"
                    name="comms.wlan"
                    value={phoneData.comms.wlan}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Bluetooth:</label>
                <input
                    type="text"
                    name="comms.bluetooth"
                    value={phoneData.comms.bluetooth}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Positioning:</label>
                <input
                    type="text"
                    name="comms.positioning"
                    value={phoneData.comms.positioning}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>NFC:</label>
                <input
                    type="text"
                    name="comms.nfc"
                    value={phoneData.comms.nfc}
                    onChange={handleChange}
                    required
                />
            </div>

            <h3>Features</h3>
            <div>
                <label>Sensors:</label>
                <input
                    type="text"
                    name="features.sensors"
                    value={phoneData.features.sensors}
                    onChange={handleChange}
                    required
                />
            </div>

            <h3>Battery</h3>
            <div>
                <label>Type:</label>
                <input
                    type="text"
                    name="battery.type"
                    value={phoneData.battery.type}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Charging:</label>
                <input
                    type="text"
                    name="battery.charging"
                    value={phoneData.battery.charging}
                    onChange={handleChange}
                    required
                />
            </div>

            <h3>Misc</h3>
            <div>
                <label>Colors:</label>
                <input
                    type="text"
                    name="misc.colors"
                    value={phoneData.misc.colors}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit">Save Phone</button>
        </form>
    );
};

export default PhoneForm;
