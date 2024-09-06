import React, { useState } from "react";
import axios from "axios";
import {
    Box,
    Button,
    FormControlLabel,
    FormLabel,
    Paper,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

const AccessoryForm = () => {
    const [numberError, setNumberError] = useState(false);
    const [accessoryData, setAccessoryData] = useState({
        customId: "",
        imgURL: "",
        quantity: "",
        brand: "",
        model: "",
        description: "",
        availability: "true",
        originalPrice: "",
        price: "",
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
        return match ? match[1] : url;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split(".");
        if (keys.length > 1) {
            setAccessoryData((prevState) => ({
                ...prevState,
                [keys[0]]: {
                    ...prevState[keys[0]],
                    [keys[1]]: value,
                },
            }));
        } else {
            setAccessoryData({ ...accessoryData, [name]: value });
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

    const handleAvailabilityChange = (e) => {
        setAccessoryData({ ...accessoryData, availability: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Extract Google Drive ID from image URL and update accessoryData
        const imgURL = extractGoogleDriveId(accessoryData.imgURL);
        const updatedAccessoryData = { ...accessoryData, imgURL };

        try {
            const response = await axios.post(
                "http://localhost:5000/api/accessorys",
                updatedAccessoryData
            );
            alert("Accessory data saved successfully!");
        } catch (error) {
            alert("Error!");
            console.error("There was an error saving the accessory data!", error);
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
                    Add New Accessory
                </Typography>

                <Stack spacing={3}>
                    <Typography variant="h6" align="left" gutterBottom>
                        General Information
                    </Typography>
                    <TextField
                        label="Custom ID"
                        name="customId"
                        type="number"
                        value={accessoryData.customId}
                        onChange={handleNumberInput}
                        multiline
                        required
                    />
                    <TextField
                        label="Image URL"
                        name="imgURL"
                        value={accessoryData.imgURL}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Quantity"
                        name="quantity"
                        value={accessoryData.quantity}
                        onChange={handleNumberInput}
                        multiline
                        required
                    />

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 3,
                        }}
                    >
                        <FormLabel style={{ marginRight: "30px" }}>
                            Availability
                        </FormLabel>

                        <RadioGroup
                            aria-labelledby="availability"
                            value={accessoryData.availability}
                            name="radio-buttons-group"
                            onChange={handleAvailabilityChange}
                            row
                        >
                            <FormControlLabel
                                value="true"
                                control={<Radio />}
                                label="In Stock"
                            />
                            <FormControlLabel
                                value="false"
                                control={<Radio />}
                                label="Sold Out"
                            />
                        </RadioGroup>
                    </Box>
                    <TextField
                        label="Brand"
                        name="brand"
                        value={accessoryData.brand}
                        onChange={handleChange}
                        multiline
                        fullWidth
                        required
                    />
                    <TextField
                        label="Model"
                        name="model"
                        value={accessoryData.model}
                        onChange={handleChange}
                        multiline
                        fullWidth
                        required
                    />
                    <TextField
                        label="Description"
                        name="description"
                        value={accessoryData.description}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        required
                    />
                    <TextField
                        label="Original Price"
                        name="originalPrice"
                        value={accessoryData.originalPrice}
                        onChange={handleNumberInput}
                        multiline
                        required
                    />
                    <TextField
                        label="Price"
                        name="price"
                        value={accessoryData.price}
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
                        value={accessoryData.body.dimensions}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Weight"
                        name="body.weight"
                        value={accessoryData.body.weight}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Build"
                        name="body.build"
                        value={accessoryData.body.build}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Sim"
                        name="body.sim"
                        value={accessoryData.body.sim}
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
                        value={accessoryData.display.type}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Size"
                        name="display.size"
                        value={accessoryData.display.size}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Resolution"
                        name="display.resolution"
                        value={accessoryData.display.resolution}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Protection"
                        name="display.protection"
                        value={accessoryData.display.protection}
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
                        value={accessoryData.platform.os}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Chipset"
                        name="platform.chipset"
                        value={accessoryData.platform.chipset}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="CPU"
                        name="platform.cpu"
                        value={accessoryData.platform.cpu}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="GPU"
                        name="platform.gpu"
                        value={accessoryData.platform.gpu}
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
                        value={accessoryData.memory.cardSlot}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Internal"
                        name="memory.internal"
                        value={accessoryData.memory.internal}
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
                        value={accessoryData.mainCamera.specs}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Features"
                        name="mainCamera.features"
                        value={accessoryData.mainCamera.features}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Video"
                        name="mainCamera.video"
                        value={accessoryData.mainCamera.video}
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
                        value={accessoryData.selfieCamera.specs}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Features"
                        name="selfieCamera.features"
                        value={accessoryData.selfieCamera.features}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Video"
                        name="selfieCamera.video"
                        value={accessoryData.selfieCamera.video}
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
                        value={accessoryData.sound.loudspeaker}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Jack"
                        name="sound.jack"
                        value={accessoryData.sound.jack}
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
                        value={accessoryData.comms.wlan}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Bluetooth"
                        name="comms.bluetooth"
                        value={accessoryData.comms.bluetooth}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Positioning"
                        name="comms.positioning"
                        value={accessoryData.comms.positioning}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="NFC"
                        name="comms.nfc"
                        value={accessoryData.comms.nfc}
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
                        value={accessoryData.features.sensors}
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
                        value={accessoryData.battery.type}
                        onChange={handleChange}
                        multiline
                        required
                    />
                    <TextField
                        label="Charging"
                        name="battery.charging"
                        value={accessoryData.battery.charging}
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
                        value={accessoryData.misc.colors}
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
                        Save Accessory
                    </Button>
                </Stack>
            </Paper>
        </Box>
    );
};
export default AccessoryForm;