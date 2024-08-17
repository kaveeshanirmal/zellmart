// scripts/addTestData.js
const mongoose = require("mongoose");
const Phone = require("../models/phoneModels");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const testPhones = [
    {
        customId: 1,
        brand: "TestBrand",
        model: "TestModel",
        displaySize: 6.5,
        storage: 128,
        ram: 8,
        batteryCapacity: 4000,
        camera: "48MP + 12MP + 8MP",
        price: "999.99",
        imageblack: "https://example.com/black.jpg",
        imageblue: "https://example.com/blue.jpg",
        imagered: "https://example.com/red.jpg",
        image1: "https://example.com/image1.jpg",
        image2: "https://example.com/image2.jpg",
        image3: "https://example.com/image3.jpg",
    },
    // Add more test phones as needed
];

Phone.insertMany(testPhones)
    .then(() => {
        console.log("Test data added successfully");
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error("Error adding test data:", err);
        mongoose.connection.close();
    });
