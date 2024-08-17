// scripts/addTestData.js
const mongoose = require("mongoose");
const Phone = require("../models/phoneModels");
const mongoURI = "mongodb://localhost:27017/zellmart";

const testPhones = [
    {
        customId: 1,
        imgURL: "https://example.com/iphone12.jpg",
        quantity: 50,
        available: "In-Stock",
        brand: "Apple",
        model: "iPhone 12",
        description:
            "The iPhone 12 features a new design with flat edges, 5G capability, and improved cameras.",
        price: 123000,
        body: {
            dimensions: "146.7 x 71.5 x 7.4 mm",
            weight: "164g",
            build: "Glass front, glass back, aluminum frame",
            sim: "Nano-SIM and eSIM",
        },

        display: {
            type: "Super Retina XDR OLED",
            size: "6.1 inches",
            resolution: "1170 x 2532 pixels",
            protection: "Ceramic Shield glass",
        },

        platform: {
            os: "iOS 14, upgradable to iOS 17",
            chipset: "Apple A14 Bionic",
            cpu: "Hexa-core",
            gpu: "Apple GPU (4-core graphics)",
        },

        memory: {
            cardSlot: "No",
            internal: "64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM",
        },

        mainCamera: {
            specs: "12 MP, f/1.6, 26mm (wide), 12 MP, f/2.4, 120˚ (ultrawide)",
            features: "Dual-LED dual-tone flash, HDR (photo/panorama)",
            video: "4K@24/30/60fps, 1080p@30/60/120/240fps",
        },

        selfieCamera: {
            specs: "12 MP, f/2.2, 23mm (wide)",
            features: "HDR",
            video: "4K@24/30/60fps, 1080p@30/60/120fps",
        },

        sound: {
            loudspeaker: "Yes, with stereo speakers",
            jack: "No",
        },

        comms: {
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
            bluetooth: "5.0, A2DP, LE",
            positioning: "GPS, GLONASS, GALILEO, QZSS",
            nfc: "Yes",
        },

        features: {
            sensors:
                "Face ID, accelerometer, gyro, proximity, compass, barometer",
        },

        battery: {
            type: "Li-Ion 2815 mAh, non-removable",
            charging: "Fast charging 20W, 50% in 30 min",
        },

        misc: {
            colors: "Black, White, Red, Green, Blue",
        },
    },
    {
        customId: 2,
        imgURL: "https://example.com/iphone13.jpg",
        quantity: 75,
        available: "In-Stock",
        brand: "Apple",
        model: "iPhone 13",
        description:
            "The iPhone 13 comes with improved battery life, a smaller notch, and new camera sensors.",
        price: 153000,
        body: {
            dimensions: "146.7 x 71.5 x 7.7 mm",
            weight: "174g",
            build: "Glass front, glass back, aluminum frame",
            sim: "Nano-SIM and eSIM",
        },

        display: {
            type: "Super Retina XDR OLED",
            size: "6.1 inches",
            resolution: "1170 x 2532 pixels",
            protection: "Ceramic Shield glass",
        },

        platform: {
            os: "iOS 15, upgradable to iOS 17",
            chipset: "Apple A15 Bionic",
            cpu: "Hexa-core",
            gpu: "Apple GPU (4-core graphics)",
        },

        memory: {
            cardSlot: "No",
            internal: "128GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM",
        },

        mainCamera: {
            specs: "12 MP, f/1.6, 26mm (wide), 12 MP, f/2.4, 120˚ (ultrawide)",
            features: "Dual-LED dual-tone flash, HDR (photo/panorama)",
            video: "4K@24/30/60fps, 1080p@30/60/120/240fps",
        },

        selfieCamera: {
            specs: "12 MP, f/2.2, 23mm (wide)",
            features: "HDR",
            video: "4K@24/30/60fps, 1080p@30/60/120fps",
        },

        sound: {
            loudspeaker: "Yes, with stereo speakers",
            jack: "No",
        },

        comms: {
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
            bluetooth: "5.0, A2DP, LE",
            positioning: "GPS, GLONASS, GALILEO, QZSS",
            nfc: "Yes",
        },

        features: {
            sensors:
                "Face ID, accelerometer, gyro, proximity, compass, barometer",
        },

        battery: {
            type: "Li-Ion 3240 mAh, non-removable",
            charging: "Fast charging 20W, 50% in 30 min",
        },

        misc: {
            colors: "Starlight, Midnight, Blue, Pink, Red",
        },
    },
    {
        customId: 3,
        imgURL: "https://example.com/iphone14.jpg",
        quantity: 100,
        available: "Out of Stock",
        brand: "Apple",
        model: "iPhone 14",
        description:
            "The iPhone 14 features an enhanced A16 Bionic chip, advanced camera system, and emergency SOS via satellite.",
        price: 250000,
        body: {
            dimensions: "146.7 x 71.5 x 7.8 mm",
            weight: "177g",
            build: "Glass front, glass back, aluminum frame",
            sim: "Nano-SIM and eSIM",
        },

        display: {
            type: "Super Retina XDR OLED",
            size: "6.1 inches",
            resolution: "1170 x 2532 pixels",
            protection: "Ceramic Shield glass",
        },

        platform: {
            os: "iOS 16, upgradable to iOS 17",
            chipset: "Apple A16 Bionic",
            cpu: "Hexa-core",
            gpu: "Apple GPU (5-core graphics)",
        },

        memory: {
            cardSlot: "No",
            internal: "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM",
        },

        mainCamera: {
            specs: "12 MP, f/1.5, 26mm (wide), 12 MP, f/2.4, 120˚ (ultrawide)",
            features: "Dual-LED dual-tone flash, HDR (photo/panorama)",
            video: "4K@24/30/60fps, 1080p@30/60/120/240fps",
        },

        selfieCamera: {
            specs: "12 MP, f/1.9, 23mm (wide)",
            features: "HDR",
            video: "4K@24/30/60fps, 1080p@30/60/120fps",
        },

        sound: {
            loudspeaker: "Yes, with stereo speakers",
            jack: "No",
        },

        comms: {
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
            bluetooth: "5.3, A2DP, LE",
            positioning: "GPS, GLONASS, GALILEO, QZSS",
            nfc: "Yes",
        },

        features: {
            sensors:
                "Face ID, accelerometer, gyro, proximity, compass, barometer",
        },

        battery: {
            type: "Li-Ion 3279 mAh, non-removable",
            charging: "Fast charging 20W, 50% in 30 min",
        },

        misc: {
            colors: "Midnight, Purple, Starlight, (Product) Red, Blue",
        },
    },
];

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        return Phone.insertMany(testPhones);
    })
    .then(() => {
        console.log("Data successfully inserted");
        mongoose.disconnect();
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });

Phone.insertMany(testPhones)
    .then(() => {
        console.log("Test data added successfully");
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error("Error adding test data:", err);
        mongoose.connection.close();
    });
