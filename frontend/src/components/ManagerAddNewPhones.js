import React, { useState } from "react";
import axios from "axios";
import {
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

const PhoneForm = () => {
    const [numberError, setNumberError] = useState(false);
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

    const extractGoogleDriveId = (url) => {
        const regex = /https:\/\/drive\.google\.com\/file\/d\/([^\/?]+)/;
        const match = url.match(regex);
        return match ? match[1] : "";
    };

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

    const handleNumberInput = (e) => {
        const value = e.target.value;
        if (isNaN(value)) {
            setNumberError(true);
        } else {
            setNumberError(false);
            handleChange(e);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Extract Google Drive ID from image URL and update phoneData
        const imgURL = extractGoogleDriveId(phoneData.imgURL);
        const updatedPhoneData = { ...phoneData, imgURL };

        try {
            const response = await axios.post(
                "http://localhost:5000/api/phones",
                updatedPhoneData
            );
            alert("Phone data saved successfully!");
        } catch (error) {
            alert("Error!");
            console.error("There was an error saving the phone data!", error);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f5f5f5",
                padding: 2,
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    maxWidth: 600,
                    width: "100%",
                    padding: 4,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h4" align="center" gutterBottom>
                    Add New Phone
                </Typography>

                <Stack spacing={3}>
                    <Typography variant="h6" align="left" gutterBottom>
                        General Information
                    </Typography>
                    <TextField
                        label="Custom ID"
                        name="customId"
                        type="number"
                        value={phoneData.customId}
                        onChange={handleNumberInput}
                        multiline
                        required
                    />
                    <TextField
                        label="Image URL"
                        name="imgURL"
                        value={phoneData.imgURL}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Quantity"
                        name="quantity"
                        value={phoneData.quantity}
                        onChange={handleNumberInput}
                        multiline
                        required
                    />
                    <TextField
                        label="Availability"
                        name="available"
                        value={phoneData.availability}
                        multiline
                        onChange={handleChange}
                    />
                    <TextField
                        label="Brand"
                        name="brand"
                        value={phoneData.brand}
                        onChange={handleChange}
                        multiline
                        fullWidth
                        required
                    />
                    <TextField
                        label="Model"
                        name="model"
                        value={phoneData.model}
                        onChange={handleChange}
                        multiline
                        fullWidth
                        required
                    />
                    <TextField
                        label="Description"
                        name="description"
                        value={phoneData.description}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        required
                    />
                    <TextField
                        label="Original Price"
                        name="originalPrice"
                        value={phoneData.originalPrice}
                        onChange={handleNumberInput}
                        multiline
                        required
                    />
                    <TextField
                        label="Price"
                        name="price"
                        value={phoneData.price}
                        onChange={handleNumberInput}
                        multiline
                        required
                    />

                    <Typography variant="h6" align="left" gutterBottom>
                        Body
                    </Typography>
                    <TextField
                        label="Dimensions"
                        name="body.dimensions"
                        value={phoneData.body.dimensions}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Weight"
                        name="body.weight"
                        value={phoneData.body.weight}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Build"
                        name="body.build"
                        value={phoneData.body.build}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Sim"
                        name="body.sim"
                        value={phoneData.body.sim}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <Typography variant="h6" align="left" gutterBottom>
                        Display
                    </Typography>
                    <TextField
                        label="Type"
                        name="display.type"
                        value={phoneData.display.type}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Size"
                        name="display.size"
                        value={phoneData.display.size}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Resolution"
                        name="display.resolution"
                        value={phoneData.display.resolution}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Protection"
                        name="display.protection"
                        value={phoneData.display.protection}
                        onChange={handleChange}
                        multiline
                        required
                    />

                    <Typography variant="h6" align="left" gutterBottom>
                        Platform
                    </Typography>
                    <TextField
                        label="OS"
                        name="platform.os"
                        value={phoneData.platform.os}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Chipset"
                        name="platform.chipset"
                        value={phoneData.platform.chipset}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="CPU"
                        name="platform.cpu"
                        value={phoneData.platform.cpu}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="GPU"
                        name="platform.gpu"
                        value={phoneData.platform.gpu}
                        onChange={handleChange}
                        multiline
                        required
                    />

                    <Typography variant="h6" align="left" gutterBottom>
                        Memory
                    </Typography>
                    <TextField
                        label="Card Slot"
                        name="memory.cardSlot"
                        value={phoneData.memory.cardSlot}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Internal"
                        name="memory.internal"
                        value={phoneData.memory.internal}
                        onChange={handleChange}
                        multiline
                        required
                    />

                    <Typography variant="h6" align="left" gutterBottom>
                        Main Camera
                    </Typography>
                    <TextField
                        label="Specs"
                        name="mainCamera.specs"
                        value={phoneData.mainCamera.specs}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Features"
                        name="mainCamera.features"
                        value={phoneData.mainCamera.features}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Video"
                        name="mainCamera.video"
                        value={phoneData.mainCamera.video}
                        onChange={handleChange}
                        multiline
                        required
                    />

                    <Typography variant="h6" align="left" gutterBottom>
                        Selfie Camera
                    </Typography>
                    <TextField
                        label="Specs"
                        name="selfieCamera.specs"
                        value={phoneData.selfieCamera.specs}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Features"
                        name="selfieCamera.features"
                        value={phoneData.selfieCamera.features}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Video"
                        name="selfieCamera.video"
                        value={phoneData.selfieCamera.video}
                        onChange={handleChange}
                        multiline
                        required
                    />

                    <Typography variant="h6" align="left" gutterBottom>
                        Sound
                    </Typography>
                    <TextField
                        label="Loudspeaker"
                        name="sound.loudspeaker"
                        value={phoneData.sound.loudspeaker}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Jack"
                        name="sound.jack"
                        value={phoneData.sound.jack}
                        onChange={handleChange}
                        multiline
                        required
                    />

                    <Typography variant="h6" align="left" gutterBottom>
                        Comms
                    </Typography>
                    <TextField
                        label="WLAN"
                        name="comms.wlan"
                        value={phoneData.comms.wlan}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Bluetooth"
                        name="comms.bluetooth"
                        value={phoneData.comms.bluetooth}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Positioning"
                        name="comms.positioning"
                        value={phoneData.comms.positioning}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="NFC"
                        name="comms.nfc"
                        value={phoneData.comms.nfc}
                        onChange={handleChange}
                        multiline
                        required
                    />

                    <Typography variant="h6" align="left" gutterBottom>
                        Features
                    </Typography>
                    <TextField
                        label="Sensors"
                        name="features.sensors"
                        value={phoneData.features.sensors}
                        onChange={handleChange}
                        multiline
                        required
                    />

                    <Typography variant="h6" align="left" gutterBottom>
                        Battery
                    </Typography>
                    <TextField
                        label="Type"
                        name="battery.type"
                        value={phoneData.battery.type}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Charging"
                        name="battery.charging"
                        value={phoneData.battery.charging}
                        onChange={handleChange}
                        multiline
                        required
                    />

                    <Typography variant="h6" align="left" gutterBottom>
                        Misc
                    </Typography>
                    <TextField
                        label="Colors"
                        name="misc.colors"
                        value={phoneData.misc.colors}
                        onChange={handleChange}
                        multiline
                        required
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Save Phone
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
};
export default PhoneForm;
