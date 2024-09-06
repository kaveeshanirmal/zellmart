const mongoose = require("mongoose");
const { original } = require("parseurl");

const Schema = mongoose.Schema;

const accessorySchema = new Schema({
    customId: { type: Number, required: true }, // Unique ID for the phone
    imgURL: { type: String, required: true }, // URL to the main image of the phone
    quantity: { type: Number, required: true }, // Quantity available
    availability: { type: Boolean, required: true }, // Availability status
    brand: { type: String, required: true }, // Phone brand (e.g., Apple, Samsung)
    model: { type: String, required: true }, // Phone model (e.g., iPhone 12)
    description: { type: String, required: true }, // Description of the phone
    originalPrice: { type: Number, required: true }, // Original price of the phone, before any discounts
    price: { type: Number, required: true }, // Price of the phone



    features: {
        Connectivity: {type: String, required: true},//Type of connection (e.g., Bluetooth, USB-C, 3.5mm jack)
    },

    battery: {
        type: { type: String, required: true }, // Battery type (e.g., Li-Po 5000 mAh)
        charging: { type: String, required: true }, // Charging details (e.g., Fast charging 33W)
    },

    misc: {
        colors: { type: String, required: true }, // Available colors (e.g., Black, Blue, Red)
    },

    isBestSeller: { type: Boolean, required: true, default: false }, // Best seller status
    isNewArrived: { type: Boolean, required: true, default: false }, // Newly arrived status
});

const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = Accessory;
