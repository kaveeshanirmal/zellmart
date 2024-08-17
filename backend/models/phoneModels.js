const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const phoneSchema = new Schema({
    customId: { type: Number, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    displaySize: { type: Number, required: true },
    storage: { type: Number, required: true },
    ram: { type: Number, required: true },
    batteryCapacity: { type: Number, required: true },
    camera: { type: String, required: true },
    price: { type: String, required: true },
    imageblack: { type: String, required: true },
    imageblue: { type: String, required: true },
    imagered: { type: String, required: true },
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
});

const Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;
