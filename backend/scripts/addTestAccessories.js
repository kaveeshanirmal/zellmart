const mongoose = require("mongoose");
const Accesory = require("../models/accessoriesModels");
const mongoURI = "mongodb://localhost:27017/zellmart";

const testAccessory = [
    {
        customId: 1,
        imgURL: "1QYrwVrYQRxvmeeZPgbCBzSfojxrjLIVk",
        quantity: 50,
        availability: true,
        brand: "Sony",
        model: "WH-1000XM4",
        description:
            "Sony's industry-leading noise-canceling over-ear headphones with premium sound quality.",
        originalPrice: 349,
        price: 299,
        features: {
            sensors: "Touch sensor controls, Voice assistant integration",
            Connectivity: "Bluetooth 5.0, 3.5mm jack, USB-C",
        },
        battery: {
            type: "Li-Ion 30 hours playtime",
            charging: "USB-C, Fast charging",
        },
        misc: {
            colors: "Black, Silver",
        },
        isBestSeller: true,
        isNewArrived: false,
    },
    {
        customId: 2,
        imgURL: "14Z3jb_cMS_WOLpaClJGRUH_s8D7_6O_-",
        quantity: 40,
        availability: true,
        brand: "Bose",
        model: "QuietComfort 35 II",
        description:
            "Bose's top noise-canceling headphones with superior comfort and sound quality.",
        originalPrice: 299,
        price: 249,

        features: {
            sensors: "Active noise cancellation, Voice assistant integration",
            Connectivity: "Bluetooth 4.1, 3.5mm jack, NFC",
        },
        battery: {
            type: "Li-Ion 20 hours playtime",
            charging: "Micro-USB",
        },
        misc: {
            colors: "Black, Silver",
        },
        isBestSeller: false,
        isNewArrived: true,
    },
    {
        customId: 3,
        imgURL: "16fvB6yHzNmU5MiPQoafoF_GTVUx6tA6S",
        quantity: 30,
        availability: true,
        brand: "Apple",
        model: "AirPods Max",
        description:
            "Apple's high-fidelity over-ear headphones with dynamic driver and active noise cancellation.",
        originalPrice: 549,
        price: 499,

        features: {
            sensors: "Optical sensors, Position sensors, Case-detection",
            Connectivity: "Bluetooth 5.0, Lightning",
        },
        battery: {
            type: "Li-Ion 20 hours playtime",
            charging: "Lightning, Fast charging",
        },
        misc: {
            colors: "Space Gray, Silver, Green, Sky Blue, Pink",
        },
        isBestSeller: true,
        isNewArrived: true,
    },

    {
        customId: 4,
        imgURL: "1eB0Wb_FhZF2UIkAY3Guo2zU2DHRlYxQ4",
        quantity: 25,
        availability: true,
        brand: "JBL",
        model: "Live 650BTNC",
        description:
            "JBL wireless over-ear headphones with noise cancellation and deep bass.",
        originalPrice: 199,
        price: 149,

        features: {
            sensors: "Ambient Aware, TalkThru",
            Connectivity: "Bluetooth 4.2, 3.5mm jack",
        },
        battery: {
            type: "Li-Ion 30 hours playtime",
            charging: "Micro-USB, Fast charging",
        },
        misc: {
            colors: "Black, Blue",
        },
        isBestSeller: false,
        isNewArrived: false,
    },
    {
        customId: 5,
        imgURL: "1NBqDw6aO4-TYkTW3zEPG4TuWhw-WVmNX",
        quantity: 60,
        availability: true,
        brand: "Sennheiser",
        model: "HD 450BT",
        description:
            "Sennheiser wireless headphones with active noise cancellation and high-quality sound.",
        originalPrice: 179,
        price: 129,
        features: {
            sensors: "Voice assistant support",
            Connectivity: "Bluetooth 5.0, 3.5mm jack, USB-C",
        },
        battery: {
            type: "Li-Ion 30 hours playtime",
            charging: "USB-C",
        },
        misc: {
            colors: "Black, White",
        },
        isBestSeller: true,
        isNewArrived: true,
    },
    {
        customId: 6,
        imgURL: "1zrqrEMrtjMynFYzz98y7jevDzWFkTpIu",
        quantity: 45,
        availability: true,
        brand: "Beats",
        model: "Solo Pro",
        description:
            "Beats noise-canceling on-ear headphones with powerful sound and long battery life.",
        originalPrice: 299,
        price: 249,
        features: {
            sensors: "Transparency mode, Active Noise Cancelling",
            Connectivity: "Bluetooth 5.0, Lightning",
        },
        battery: {
            type: "Li-Ion 22 hours playtime",
            charging: "Lightning, Fast charging",
        },
        misc: {
            colors: "Black, Ivory, Red, Dark Blue",
        },
        isBestSeller: false,
        isNewArrived: false,
    },
    {
        customId: 7,
        imgURL: "13rtETlJycvbVHtSF02goHN9mgXY3dsN3",
        quantity: 20,
        availability: true,
        brand: "Anker",
        model: "Soundcore Life Q20",
        description:
            "Anker over-ear headphones with hybrid active noise cancellation and high-res audio.",
        originalPrice: 79,
        price: 59,
        features: {
            sensors: "Hybrid Active Noise Cancellation",
            Connectivity: "Bluetooth 5.0, 3.5mm jack",
        },
        battery: {
            type: "Li-Ion 40 hours playtime",
            charging: "Micro-USB",
        },
        misc: {
            colors: "Black",
        },
        isBestSeller: false,
        isNewArrived: true,
    },
    {
        customId: 8,
        imgURL: "1nDM2wklsRx7FXuCHU0SOrVr5b8Gnmx3U",
        quantity: 35,
        availability: true,
        brand: "Bowers & Wilkins",
        model: "PX7",
        description:
            "Bowers & Wilkins wireless over-ear headphones with adaptive noise canceling.",
        originalPrice: 399,
        price: 349,
        features: {
            sensors: "Wear detection sensor, Noise cancellation",
            Connectivity: "Bluetooth 5.0, 3.5mm jack, USB-C",
        },
        battery: {
            type: "Li-Ion 30 hours playtime",
            charging: "USB-C, Fast charging",
        },
        misc: {
            colors: "Space Gray, Silver",
        },
        isBestSeller: false,
        isNewArrived: false,
    },
    {
        customId: 9,
        imgURL: "1lZxILonkMeQL62zU-L-K1xJNJ3_992RQ",
        quantity: 15,
        availability: true,
        brand: "Skullcandy",
        model: "Crusher Evo",
        description:
            "Skullcandy wireless over-ear headphones with adjustable sensory bass.",
        originalPrice: 199,
        price: 169,
        features: {
            sensors: "Adjustable Sensory Bass",
            Connectivity: "Bluetooth 5.0, 3.5mm jack",
        },
        battery: {
            type: "Li-Ion 40 hours playtime",
            charging: "USB-C, Fast charging",
        },
        misc: {
            colors: "Black, Red",
        },
        isBestSeller: true,
        isNewArrived: false,
    },
    {
        customId: 10,
        imgURL: "1WYD5CweRponqDsvkcFnHTyBm_luwwbr2",
        quantity: 55,
        availability: true,
        brand: "AKG",
        model: "N700NC M2",
        description:
            "AKG's wireless headphones with adaptive noise canceling and studio-quality sound.",
        originalPrice: 299,
        price: 249,
        features: {
            sensors: "Ambient Aware, TalkThru",
            Connectivity: "Bluetooth 4.2, 3.5mm jack, USB-C",
        },
        battery: {
            type: "Li-Ion 23 hours playtime",
            charging: "USB-C, Fast charging",
        },
        misc: {
            colors: "Black, Silver",
        },
        isBestSeller: false,
        isNewArrived: true,
    },
];

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        return Accesory.insertMany(testAccessory);
    })
    .then(() => {
        console.log("Data successfully inserted");
        mongoose.disconnect();
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
        mongoose.disconnect();
    });
