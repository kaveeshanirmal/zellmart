const mongoose = require("mongoose");
const Phone = require("../models/phoneModels");
const mongoURI = "mongodb://localhost:27017/zellmart";

const testPhones = [
    {
        customId: 1,
        imgURL: "1MbccVeg4WZefAK3U4lAzjKzbJi7QeiQZ",
        quantity: 10,
        availability: true,
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
        availability: true,
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
        availability: true,
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
        availability: true,
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
        availability: true,
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
        availability: true,
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

    {
        customId: 7,
        imgURL: "1RCIWWsu_SjX9nul0UuDHEpMeTKb5xfUe",
        quantity: 10,
        availability: true,
        brand: "Apple",
        model: "iPhone 11 Pro Gold",
        description:
            "The iPhone 11 Pro Gold features a luxurious design with a triple-camera system and powerful performance.",
        originalPrice: 75000,
        price: 75000,
        body: {
            dimensions: "144 x 71.4 x 8.1 mm",
            weight: "188 g",
            build: "Glass front and back, stainless steel frame",
            sim: "Nano-SIM and eSIM",
        },
        display: {
            type: "Super Retina XDR OLED",
            size: "5.8 inches",
            resolution: "1125 x 2436 pixels",
            protection: "Scratch-resistant ceramic glass, oleophobic coating",
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
            specs: "Triple 12 MP, f/1.8, 26mm (wide), 12 MP, f/2.0, 65mm (telephoto), 12 MP, f/2.4, 13mm (ultrawide)",
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
            type: "Li-Ion 3046 mAh, non-removable",
            charging: "Fast charging 18W, 50% in 30 min",
        },
        misc: {
            colors: "Gold",
        },
    },
    {
        customId: 8,
        imgURL: "1G6BufJFthne3gtILppDGDhUZPH3_b_wD",
        quantity: 15,
        availability: true,
        brand: "Samsung",
        model: "Galaxy S23 Ultra",
        description:
            "The Samsung Galaxy S23 Ultra offers top-notch performance with a high-resolution display and versatile camera system.",
        originalPrice: 666999,
        price: 444499,
        body: {
            dimensions: "163.4 x 78.1 x 8.9 mm",
            weight: "228 g",
            build: "Glass front and back, aluminum frame",
            sim: "Nano-SIM and eSIM",
        },
        display: {
            type: "Dynamic AMOLED 2X",
            size: "6.8 inches",
            resolution: "1440 x 3088 pixels",
            protection: "Corning Gorilla Glass Victus+",
        },
        platform: {
            os: "Android 13, upgradable",
            chipset: "Exynos 2200 / Qualcomm SM8550 Snapdragon 8 Gen 2",
            cpu: "Octa-core",
            gpu: "Mali-G78 MP14 / Adreno 730",
        },
        memory: {
            cardSlot: "No",
            internal: "256GB 12GB RAM",
        },
        mainCamera: {
            specs: "Quad 200 MP, f/1.7, 23mm (wide), 12 MP, f/2.2, 70mm (periscope telephoto), 10 MP, f/2.4, 10mm (ultrawide), 10 MP, f/2.2, 120mm (periscope telephoto)",
            features: "LED flash, auto-HDR, panorama",
            video: "8K@24fps, 4K@30/60fps",
        },
        selfieCamera: {
            specs: "40 MP, f/2.2, 26mm (wide)",
            features: "Auto-HDR",
            video: "4K@30/60fps",
        },
        sound: {
            loudspeaker: "Yes, with stereo speakers",
            jack: "No",
        },
        comms: {
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
            bluetooth: "5.2",
            positioning: "GPS, GLONASS, GALILEO, NFC",
            nfc: "Yes",
        },
        features: {
            sensors:
                "Fingerprint (under display, ultrasonic), accelerometer, gyro, proximity, compass, barometer",
        },
        battery: {
            type: "Li-Ion 5000 mAh, non-removable",
            charging: "Fast charging 45W, 50% in 20 min",
        },
        misc: {
            colors: "Phantom Black, Green, Cream, Lavender",
        },
    },
    {
        customId: 9,
        imgURL: "1p7ADKFjpmM5Zr-IFPApy5aUoCM75y1xe",
        quantity: 0,
        availability: false,
        brand: "Xiaomi",
        model: "Redmi 12",
        description:
            "The Xiaomi Redmi 12 is a budget-friendly phone with solid performance and a good camera for its price.",
        originalPrice: 84999,
        price: 84999,
        body: {
            dimensions: "165.1 x 76.2 x 8.1 mm",
            weight: "192 g",
            build: "Glass front, plastic back, plastic frame",
            sim: "Nano-SIM",
        },
        display: {
            type: "IPS LCD",
            size: "6.5 inches",
            resolution: "1080 x 2400 pixels",
            protection: "Corning Gorilla Glass 3",
        },
        platform: {
            os: "Android 11, MIUI 12",
            chipset: "MediaTek MT6833 Dimensity 700",
            cpu: "Octa-core",
            gpu: "Mali-G57 MC2",
        },
        memory: {
            cardSlot: "No",
            internal: "128GB 4GB RAM",
        },
        mainCamera: {
            specs: "Triple 50 MP, f/1.8, 26mm (wide), 8 MP, f/2.2, 120˚, 13mm (ultrawide), 2 MP, f/2.4 (macro)",
            features: "LED flash, HDR, panorama",
            video: "4K@30fps",
        },
        selfieCamera: {
            specs: "8 MP, f/2.0",
            features: "HDR",
            video: "1080p@30fps",
        },
        sound: {
            loudspeaker: "Yes, with stereo speakers",
            jack: "Yes",
        },
        comms: {
            wlan: "Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot",
            bluetooth: "5.1",
            positioning: "GPS, GLONASS, GALILEO",
            nfc: "Yes",
        },
        features: {
            sensors:
                "Fingerprint (side-mounted), accelerometer, proximity, compass",
        },
        battery: {
            type: "Li-Po 5000 mAh, non-removable",
            charging: "Fast charging 18W",
        },
        misc: {
            colors: "Sky Blue, Midnight Black, Moonlight White",
        },
    },
    {
        customId: 10,
        imgURL: "1ZH_MK8bKXtIEBVRUszYCWrn4u7l4FrAc",
        quantity: 30,
        availability: true,
        brand: "Sony",
        model: "Xperia 1 IV",
        description:
            "The Sony Xperia 1 IV combines advanced features with a sleek design for high-performance users.",
        originalPrice: 119999,
        price: 99999,
        body: {
            dimensions: "165 x 71 x 8.2 mm",
            weight: "185 g",
            build: "Glass front and back, aluminum frame",
            sim: "Nano-SIM",
        },
        display: {
            type: "OLED",
            size: "6.5 inches",
            resolution: "1644 x 3840 pixels",
            protection: "Corning Gorilla Glass Victus",
        },
        platform: {
            os: "Android 12",
            chipset: "Qualcomm Snapdragon 8 Gen 1",
            cpu: "Octa-core",
            gpu: "Adreno 730",
        },
        memory: {
            cardSlot: "No",
            internal: "256GB 12GB RAM",
        },
        mainCamera: {
            specs: "Triple 12 MP, f/1.7, 24mm (wide), 12 MP, f/2.3, 70mm (telephoto), 12 MP, f/2.2, 16mm (ultrawide)",
            features: "LED flash, auto-HDR, panorama",
            video: "4K@24/30/60fps",
        },
        selfieCamera: {
            specs: "12 MP, f/2.0",
            features: "HDR",
            video: "4K@30fps",
        },
        sound: {
            loudspeaker: "Yes, with stereo speakers",
            jack: "Yes",
        },
        comms: {
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
            bluetooth: "5.2",
            positioning: "GPS, GLONASS, GALILEO, NFC",
            nfc: "Yes",
        },
        features: {
            sensors:
                "Fingerprint (side-mounted), accelerometer, gyro, proximity, compass",
        },
        battery: {
            type: "Li-Po 5000 mAh, non-removable",
            charging: "Fast charging 30W",
        },
        misc: {
            colors: "Black, White, Purple",
        },
    },
    {
        customId: 11,
        imgURL: "1kb2jPCOXn_UU3z-mYQtm2R2cW-7hWPLx",
        quantity: 25,
        availability: true,
        brand: "OnePlus",
        model: "OnePlus 11",
        description:
            "The OnePlus 11 offers a premium experience with its high-performance specs and sleek design.",
        originalPrice: 69999,
        price: 64999,
        body: {
            dimensions: "163.1 x 73.9 x 8.7 mm",
            weight: "205 g",
            build: "Glass front and back, aluminum frame",
            sim: "Nano-SIM",
        },
        display: {
            type: "Fluid AMOLED",
            size: "6.7 inches",
            resolution: "1440 x 3216 pixels",
            protection: "Corning Gorilla Glass Victus",
        },
        platform: {
            os: "Android 13, OxygenOS",
            chipset: "Qualcomm Snapdragon 8 Gen 2",
            cpu: "Octa-core",
            gpu: "Adreno 740",
        },
        memory: {
            cardSlot: "No",
            internal: "256GB 16GB RAM",
        },
        mainCamera: {
            specs: "Triple 50 MP, f/1.8, 23mm (wide), 48 MP, f/2.2, 14mm (ultrawide), 32 MP, f/2.0 (telephoto)",
            features: "Dual-LED flash, auto-HDR, panorama",
            video: "8K@24fps, 4K@30/60fps",
        },
        selfieCamera: {
            specs: "16 MP, f/2.5",
            features: "HDR",
            video: "1080p@30fps",
        },
        sound: {
            loudspeaker: "Yes, with stereo speakers",
            jack: "No",
        },
        comms: {
            wlan: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
            bluetooth: "5.3",
            positioning: "GPS, GLONASS, GALILEO, NFC",
            nfc: "Yes",
        },
        features: {
            sensors:
                "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, barometer",
        },
        battery: {
            type: "Li-Po 5000 mAh, non-removable",
            charging: "Fast charging 100W, 100% in 25 min",
        },
        misc: {
            colors: "Eternal Green, Titan Black",
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
        mongoose.disconnect();
    });
