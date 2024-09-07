const mongoose = require("mongoose");
const Order = require("../models/orderSchema");
const mongoURI = "mongodb://localhost:27017/zellmart";

const testOrders = [
    {
        orderId: 1,
        phoneId: 1,
        phoneModel: "iPhone X",
        customerId: 101,
        customerName: "John Doe",
        customerNumber: 5551234,
        customerAddress: "123 Elm Street, Springfield",
        date: "2024-08-15",
        total: 799,
        quantity: 1,
        status: "Processing",
    },
    {
        orderId: 2,
        phoneId: 2,
        phoneModel: "iPhone 11",
        customerId: 102,
        customerName: "Jane Smith",
        customerNumber: 5555678,
        customerAddress: "456 Maple Avenue, Shelbyville",
        date: "2024-08-16",
        total: 999,
        quantity: 2,
        status: "Shipped",
    },
    {
        orderId: 3,
        phoneId: 3,
        phoneModel: "iPhone 12",
        customerId: 103,
        customerName: "Alice Johnson",
        customerNumber: 5559876,
        customerAddress: "789 Oak Street, Capital City",
        date: "2024-08-17",
        total: 849,
        quantity: 1,
        status: "Delivered",
    },
    {
        orderId: 4,
        phoneId: 4,
        phoneModel: "iPhone 13",
        customerId: 104,
        customerName: "Bob Brown",
        customerNumber: 5554321,
        customerAddress: "321 Pine Road, Ogdenville",
        date: "2024-08-18",
        total: 649,
        quantity: 1,
        status: "Cancelled",
    },
    {
        orderId: 5,
        phoneId: 5,
        phoneModel: "iPhone 14",
        customerId: 105,
        customerName: "Charlie Davis",
        customerNumber: 5558765,
        customerAddress: "654 Cedar Lane, North Haverbrook",
        date: "2024-08-19",
        total: 999,
        quantity: 1,
        status: "Processing",
    },
    {
        orderId: 6,
        phoneId: 1,
        phoneModel: "iPhone X",
        customerId: 106,
        customerName: "Emily White",
        customerNumber: 5551234,
        customerAddress: "987 Birch Boulevard, Brockway",
        date: "2024-08-20",
        total: 1598,
        quantity: 2,
        status: "Shipped",
    },
    {
        orderId: 7,
        phoneId: 2,
        phoneModel: "iPhone 11",
        customerId: 107,
        customerName: "David Miller",
        customerNumber: 5555678,
        customerAddress: "123 Willow Way, Ogdenville",
        date: "2024-08-21",
        total: 999,
        quantity: 1,
        status: "Delivered",
    },
    {
        orderId: 8,
        phoneId: 3,
        phoneModel: "iPhone 12",
        customerId: 108,
        customerName: "Sophia Wilson",
        customerNumber: 5559876,
        customerAddress: "456 Redwood Road, North Haverbrook",
        date: "2024-08-22",
        total: 849,
        quantity: 1,
        status: "Processing",
    },
    {
        orderId: 9,
        phoneId: 4,
        phoneModel: "iPhone 13",
        customerId: 109,
        customerName: "Oliver King",
        customerNumber: 5554321,
        customerAddress: "789 Palm Street, Brockway",
        date: "2024-08-23",
        total: 649,
        quantity: 1,
        status: "Shipped",
    },
    {
        orderId: 10,
        phoneId: 5,
        phoneModel: "iPhone 14",
        customerId: 110,
        customerName: "Amelia Moore",
        customerNumber: 5558765,
        customerAddress: "123 Spruce Street, Shelbyville",
        date: "2024-08-24",
        total: 999,
        quantity: 1,
        status: "Delivered",
    },
];

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        return Order.insertMany(testOrders);
    })
    .then(() => {
        console.log("Data successfully inserted");
        mongoose.disconnect();
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
        mongoose.disconnect();
    });
