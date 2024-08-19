// scripts/addTestData.js
const mongoose = require("mongoose");
const Phone = require("../models/phoneModels");
const mongoURI = "mongodb://localhost:27017/zellmart";

const testPhones = [
    {
        customId: 1,
        imgURL: "1MbccVeg4WZefAK3U4lAzjKzbJi7QeiQZ",
        quantity: 10,
        availability: "In Stock",
        brand: "Apple",
        model: "iPhone X",
        description:
            "The iPhone X features a stunning OLED display, A11 Bionic chip, and Face ID.",
        originalPrice: 999,
        price: 799,
        body: {
            dimensions: "143.6 x 70.9 x 7.7 mm",
            weight: "174 g",
            build: "Glass front and back, stainless steel frame",
            sim: "Nano-SIM",
        },
        display: {
            type: "Super Retina OLED",
            size: "5.8 inches",
            resolution: "1125 x 2436 pixels",
            protection: "Scratch-resistant glass, oleophobic coating",
        },
        platform: {
            os: "iOS 11.1.1, upgradable to iOS 15",
            chipset: "Apple A11 Bionic",
            cpu: "Hexa-core",
            gpu: "Apple GPU (three-core graphics)",
        },
        memory: {
            cardSlot: "No",
            internal: "64GB 3GB RAM",
        },
        mainCamera: {
            specs: "Dual 12 MP, f/1.8, 28mm (wide), 12 MP, f/2.4, 52mm (telephoto)",
            features: "Quad-LED dual-tone flash, HDR",
            video: "4K@24/30/60fps",
        },
        selfieCamera: {
            specs: "7 MP, f/2.2, 32mm (standard)",
            features: "HDR",
            video: "1080p@30fps",
        },
        sound: {
            loudspeaker: "Yes, with stereo speakers",
            jack: "No",
        },
        comms: {
            wlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot",
            bluetooth: "5.0",
            positioning: "GPS, GLONASS, GALILEO, QZSS",
            nfc: "Yes",
        },
        features: {
            sensors:
                "Face ID, accelerometer, gyro, proximity, compass, barometer",
        },
        battery: {
            type: "Li-Ion 2716 mAh, non-removable",
            charging: "Fast charging 15W, 50% in 30 min",
        },
        misc: {
            colors: "Space Gray, Silver",
        },
    },
    {
        customId: 2,
        imgURL: "176u7p4VrXMDFo6br0BVKFks-5RI_0NSO",
        quantity: 15,
        availability: "In Stock",
        brand: "Apple",
        model: "iPhone 11",
        description:
            "The iPhone 11 features a dual-camera system, A13 Bionic chip, and all-day battery life.",
        originalPrice: 699,
        price: 599,
        body: {
            dimensions: "150.9 x 75.7 x 8.3 mm",
            weight: "194 g",
            build: "Glass front and back, aluminum frame",
            sim: "Nano-SIM and eSIM",
        },
        display: {
            type: "Liquid Retina IPS LCD",
            size: "6.1 inches",
            resolution: "828 x 1792 pixels",
            protection: "Scratch-resistant glass, oleophobic coating",
        },
        platform: {
            os: "iOS 13, upgradable to iOS 15",
            chipset: "Apple A13 Bionic",
            cpu: "Hexa-core",
            gpu: "Apple GPU (four-core graphics)",
        },
        memory: {
            cardSlot: "No",
            internal: "64GB 4GB RAM",
        },
        mainCamera: {
            specs: "Dual 12 MP, f/1.8, 26mm (wide), 12 MP, f/2.4, 120˚, 13mm (ultrawide)",
            features: "Quad-LED dual-tone flash, HDR (photo/panorama)",
            video: "4K@24/30/60fps",
        },
        selfieCamera: {
            specs: "12 MP, f/2.2, 23mm (wide)",
            features: "HDR",
            video: "4K@24/30/60fps",
        },
        sound: {
            loudspeaker: "Yes, with stereo speakers",
            jack: "No",
        },
        comms: {
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/ax, dual-band, hotspot",
            bluetooth: "5.0",
            positioning: "GPS, GLONASS, GALILEO, QZSS",
            nfc: "Yes",
        },
        features: {
            sensors:
                "Face ID, accelerometer, gyro, proximity, compass, barometer",
        },
        battery: {
            type: "Li-Ion 3110 mAh, non-removable",
            charging: "Fast charging 18W, 50% in 30 min",
        },
        misc: {
            colors: "Black, Green, Yellow, Purple, Red, White",
        },
    },
    {
        customId: 3,
        imgURL: "1nC1Ju2ZaAULd3yO5NZt5rftnRcb2TkE2",
        quantity: 20,
        availability: "In Stock",
        brand: "Apple",
        model: "iPhone 12",
        description:
            "The iPhone 12 features 5G connectivity, A14 Bionic chip, and a Super Retina XDR display.",
        originalPrice: 799,
        price: 699,
        body: {
            dimensions: "146.7 x 71.5 x 7.4 mm",
            weight: "164 g",
            build: "Glass front and back, aluminum frame",
            sim: "Nano-SIM and eSIM",
        },
        display: {
            type: "Super Retina XDR OLED",
            size: "6.1 inches",
            resolution: "1170 x 2532 pixels",
            protection: "Ceramic Shield glass",
        },
        platform: {
            os: "iOS 14.1, upgradable to iOS 15",
            chipset: "Apple A14 Bionic",
            cpu: "Hexa-core",
            gpu: "Apple GPU (four-core graphics)",
        },
        memory: {
            cardSlot: "No",
            internal: "64GB 4GB RAM",
        },
        mainCamera: {
            specs: "Dual 12 MP, f/1.6, 26mm (wide), 12 MP, f/2.4, 120˚, 13mm (ultrawide)",
            features: "Dual-LED dual-tone flash, HDR (photo/panorama)",
            video: "4K@24/30/60fps",
        },
        selfieCamera: {
            specs: "12 MP, f/2.2, 23mm (wide)",
            features: "HDR",
            video: "4K@24/30/60fps",
        },
        sound: {
            loudspeaker: "Yes, with stereo speakers",
            jack: "No",
        },
        comms: {
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
            bluetooth: "5.0",
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
            colors: "Black, White, Red, Green, Blue, Purple",
        },
    },
    {
        customId: 4,
        imgURL: "1p1BFN3IzdEqt5-uQgB2Cq0akYI---zJE",
        quantity: 25,
        availability: "In Stock",
        brand: "Apple",
        model: "iPhone 13",
        description:
            "The iPhone 13 offers improved battery life, A15 Bionic chip, and a cinematic mode for video.",
        originalPrice: 899,
        price: 799,
        body: {
            dimensions: "146.7 x 71.5 x 7.7 mm",
            weight: "174 g",
            build: "Glass front and back, aluminum frame",
            sim: "Nano-SIM and eSIM",
        },
        display: {
            type: "Super Retina XDR OLED",
            size: "6.1 inches",
            resolution: "1170 x 2532 pixels",
            protection: "Ceramic Shield glass",
        },
        platform: {
            os: "iOS 15, upgradable to iOS 15.1",
            chipset: "Apple A15 Bionic",
            cpu: "Hexa-core",
            gpu: "Apple GPU (four-core graphics)",
        },
        memory: {
            cardSlot: "No",
            internal: "128GB 4GB RAM",
        },
        mainCamera: {
            specs: "Dual 12 MP, f/1.6, 26mm (wide), 12 MP, f/2.4, 120˚, 13mm (ultrawide)",
            features: "Dual-LED dual-tone flash, HDR (photo/panorama)",
            video: "4K@24/30/60fps",
        },
        selfieCamera: {
            specs: "12 MP, f/2.2, 23mm (wide)",
            features: "HDR",
            video: "4K@24/30/60fps",
        },
        sound: {
            loudspeaker: "Yes, with stereo speakers",
            jack: "No",
        },
        comms: {
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
            bluetooth: "5.0",
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
            colors: "Starlight, Midnight, Blue, Pink, Red, Green",
        },
    },
    {
        customId: 5,
        imgURL: "1VwAwtcmClXRSoegDML7CW3iSIKRdaNUs",
        quantity: 30,
        availability: "In Stock",
        brand: "Apple",
        model: "iPhone 14",
        description:
            "The iPhone 14 introduces a new design, A16 Bionic chip, and an always-on display.",
        originalPrice: 999,
        price: 899,
        body: {
            dimensions: "146.7 x 71.5 x 7.8 mm",
            weight: "180 g",
            build: "Glass front and back, aluminum frame",
            sim: "Nano-SIM and eSIM",
        },
        display: {
            type: "Super Retina XDR OLED",
            size: "6.1 inches",
            resolution: "1170 x 2532 pixels",
            protection: "Ceramic Shield glass",
        },
        platform: {
            os: "iOS 16, upgradable to iOS 16.1",
            chipset: "Apple A16 Bionic",
            cpu: "Hexa-core",
            gpu: "Apple GPU (five-core graphics)",
        },
        memory: {
            cardSlot: "No",
            internal: "128GB 6GB RAM",
        },
        mainCamera: {
            specs: "Dual 12 MP, f/1.5, 26mm (wide), 12 MP, f/2.4, 120˚, 13mm (ultrawide)",
            features: "Dual-LED dual-tone flash, HDR (photo/panorama)",
            video: "4K@24/30/60fps",
        },
        selfieCamera: {
            specs: "12 MP, f/1.9, 23mm (wide)",
            features: "HDR",
            video: "4K@24/30/60fps",
        },
        sound: {
            loudspeaker: "Yes, with stereo speakers",
            jack: "No",
        },
        comms: {
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
            bluetooth: "5.3",
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
            colors: "Midnight, Purple, Starlight, Product Red, Blue",
        },
    },
    {
        customId: 6,
        imgURL: "1HJvTainiLpgEiixpjX1NVB3GNK2ebNqw",
        quantity: 35,
        availability: "In Stock",
        brand: "Apple",
        model: "iPhone 15",
        description:
            "The iPhone 15 offers groundbreaking features like the new Dynamic Island, A17 Pro chip, and a periscope camera.",
        originalPrice: 1099,
        price: 999,
        body: {
            dimensions: "146.7 x 71.5 x 7.8 mm",
            weight: "185 g",
            build: "Glass front and back, titanium frame",
            sim: "Nano-SIM and eSIM",
        },
        display: {
            type: "Super Retina XDR OLED",
            size: "6.1 inches",
            resolution: "1170 x 2532 pixels",
            protection: "Ceramic Shield glass",
        },
        platform: {
            os: "iOS 17, upgradable to iOS 17.1",
            chipset: "Apple A17 Pro",
            cpu: "Octa-core",
            gpu: "Apple GPU (six-core graphics)",
        },
        memory: {
            cardSlot: "No",
            internal: "256GB 8GB RAM",
        },
        mainCamera: {
            specs: "Triple 48 MP, f/1.8, 24mm (wide), 12 MP, f/2.8, 77mm (telephoto), 12 MP, f/2.2, 120˚, 13mm (ultrawide)",
            features: "Quad-LED dual-tone flash, HDR (photo/panorama)",
            video: "4K@24/30/60fps",
        },
        selfieCamera: {
            specs: "12 MP, f/1.9, 23mm (wide)",
            features: "HDR",
            video: "4K@24/30/60fps",
        },
        sound: {
            loudspeaker: "Yes, with stereo speakers",
            jack: "No",
        },
        comms: {
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6e, dual-band, hotspot",
            bluetooth: "5.3",
            positioning: "GPS, GLONASS, GALILEO, QZSS",
            nfc: "Yes",
        },
        features: {
            sensors:
                "Face ID, accelerometer, gyro, proximity, compass, barometer",
        },
        battery: {
            type: "Li-Ion 3300 mAh, non-removable",
            charging: "Fast charging 30W, 50% in 30 min",
        },
        misc: {
            colors: "Titanium, Black, Silver, Blue",
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
        mongoose.disconnect(); // Ensure disconnection on error
    });
