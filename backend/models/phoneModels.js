const mongoose = require("mongoose");
const { original } = require("parseurl");

const Schema = mongoose.Schema;

const phoneSchema = new Schema({
    customId: { type: Number, required: true }, // Unique ID for the phone
    imgURL: { type: String, required: true }, // URL to the main image of the phone
    quantity: { type: Number, required: true }, // Quantity available
    availability: { type: Boolean, required: true }, // Availability status
    brand: { type: String, required: true }, // Phone brand (e.g., Apple, Samsung)
    model: { type: String, required: true }, // Phone model (e.g., iPhone 12)
    description: { type: String, required: true }, // Description of the phone
    originalPrice: { type: Number, required: true }, // Original price of the phone, before any discounts
    price: { type: Number, required: true }, // Price of the phone
    body: {
        dimensions: { type: String, required: true }, // Dimensions of the phone
        weight: { type: String, required: true }, // Weight of the phone
        build: { type: String, required: true }, // Build material (e.g., Glass front, plastic back)
        sim: { type: String, required: true }, // SIM information (e.g., Dual SIM)
    },

    display: {
        type: { type: String, required: true }, // Display type (e.g., AMOLED)
        size: { type: String, required: true }, // Display size (e.g., 6.5 inches)
        resolution: { type: String, required: true }, // Display resolution (e.g., 1080 x 2400 pixels)
        protection: { type: String, required: true }, // Display protection (e.g., Corning Gorilla Glass)
    },

    platform: {
        os: { type: String, required: true }, // Operating System (e.g., Android 11)
        chipset: { type: String, required: true }, // Chipset (e.g., Qualcomm Snapdragon 888)
        cpu: { type: String, required: true }, // CPU (e.g., Octa-core)
        gpu: { type: String, required: true }, // GPU (e.g., Adreno 660)
    },

    memory: {
        cardSlot: { type: String, required: true }, // Card slot information (e.g., microSDXC)
        internal: { type: String, required: true }, // Internal memory (e.g., 128GB 8GB RAM)
    },

    mainCamera: {
        specs: { type: String, required: true }, // Main camera specs (e.g., 64 MP)
        features: { type: String, required: true }, // Main camera features (e.g., LED flash, HDR)
        video: { type: String, required: true }, // Main camera video capabilities (e.g., 4K@30fps)
    },

    selfieCamera: {
        specs: { type: String, required: true }, // Selfie camera specs (e.g., 20 MP)
        features: { type: String, required: true }, // Selfie camera features (e.g., HDR)
        video: { type: String, required: true }, // Selfie camera video capabilities (e.g., 1080p@30fps)
    },

    sound: {
        loudspeaker: { type: String, required: true }, // Loudspeaker information (e.g., Stereo speakers)
        jack: { type: String, required: true }, // 3.5mm jack presence (e.g., Yes)
    },

    comms: {
        wlan: { type: String, required: true }, // WLAN (e.g., Wi-Fi 802.11 a/b/g/n/ac/6)
        bluetooth: { type: String, required: true }, // Bluetooth (e.g., 5.2)
        positioning: { type: String, required: true }, // Positioning (e.g., GPS, GLONASS, NFC)
        nfc: { type: String, required: true }, // NFC (e.g., Yes)
    },

    features: {
        sensors: { type: String, required: true }, // Sensors available (e.g., Fingerprint (side-mounted), accelerometer)
    },

    battery: {
        type: { type: String, required: true }, // Battery type (e.g., Li-Po 5000 mAh)
        charging: { type: String, required: true }, // Charging details (e.g., Fast charging 33W)
    },

    misc: {
        colors: { type: String, required: true }, // Available colors (e.g., Black, Blue, Red)
    },
});

const Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;
