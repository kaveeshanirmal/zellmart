const mongoose = require("mongoose");
const Order = require("../models/orderSchema");
const mongoURI = "mongodb://localhost:27017/zellmart";

const testOrders = [
    {
        orderId: 1001,
        phoneId: new mongoose.Types.ObjectId(),
        customerId: new mongoose.Types.ObjectId(),
        orderDate: new Date("2024-09-01T10:30:00Z"),
        phoneModel: "iPhone 15 Pro",
        total: 1299.99,
        quantity: 1,
        customerName: "John Doe",
        customerNumber: "+1-555-123-4567",
        customerAddress: "123 Main St, Anytown, USA 12345",
        status: "Pending",
    },
    {
        orderId: 1002,
        phoneId: new mongoose.Types.ObjectId(),
        customerId: new mongoose.Types.ObjectId(),
        orderDate: new Date("2024-09-02T14:15:00Z"),
        phoneModel: "Samsung Galaxy S24",
        total: 1999.98,
        quantity: 2,
        customerName: "Jane Smith",
        customerNumber: "+1-555-987-6543",
        customerAddress: "456 Oak Ave, Somewhere, USA 67890",
        status: "Accepted",
    },
    {
        orderId: 1003,
        phoneId: new mongoose.Types.ObjectId(),
        customerId: new mongoose.Types.ObjectId(),
        orderDate: new Date("2024-09-03T09:45:00Z"),
        phoneModel: "Google Pixel 8",
        total: 899.99,
        quantity: 1,
        customerName: "Bob Johnson",
        customerNumber: "+1-555-246-8135",
        customerAddress: "789 Pine Rd, Elsewhere, USA 13579",
        status: "Delivered",
    },
    {
        orderId: 1004,
        phoneId: new mongoose.Types.ObjectId(),
        customerId: new mongoose.Types.ObjectId(),
        orderDate: new Date("2024-09-04T16:20:00Z"),
        phoneModel: "OnePlus 12",
        total: 1599.97,
        quantity: 3,
        customerName: "Alice Brown",
        customerNumber: "+1-555-369-2580",
        customerAddress: "321 Elm St, Nowhere, USA 97531",
        status: "Reviewed",
    },
    {
        orderId: 1005,
        phoneId: new mongoose.Types.ObjectId(),
        customerId: new mongoose.Types.ObjectId(),
        orderDate: new Date("2024-09-05T11:00:00Z"),
        phoneModel: "Xiaomi 14 Pro",
        total: 1099.99,
        quantity: 1,
        customerName: "Charlie Davis",
        customerNumber: "+1-555-159-7532",
        customerAddress: "654 Birch Ln, Someplace, USA 75319",
        status: "Pending",
    },
    {
        orderId: 1006,
        phoneId: new mongoose.Types.ObjectId(),
        customerId: new mongoose.Types.ObjectId(),
        orderDate: new Date("2024-09-06T13:30:00Z"),
        phoneModel: "Sony Xperia 1 V",
        total: 2599.98,
        quantity: 2,
        customerName: "Eva Wilson",
        customerNumber: "+1-555-852-9630",
        customerAddress: "987 Cedar Dr, Anyville, USA 85297",
        status: "Accepted",
    },
    {
        orderId: 1007,
        phoneId: new mongoose.Types.ObjectId(),
        customerId: new mongoose.Types.ObjectId(),
        orderDate: new Date("2024-09-07T10:10:00Z"),
        phoneModel: "Asus ROG Phone 8",
        total: 1399.99,
        quantity: 1,
        customerName: "Frank Miller",
        customerNumber: "+1-555-741-9630",
        customerAddress: "147 Maple Ave, Somewhere Else, USA 36925",
        status: "Delivered",
    },
    {
        orderId: 1008,
        phoneId: new mongoose.Types.ObjectId(),
        customerId: new mongoose.Types.ObjectId(),
        orderDate: new Date("2024-09-08T15:45:00Z"),
        phoneModel: "Motorola Edge 50 Ultra",
        total: 1799.97,
        quantity: 3,
        customerName: "Grace Taylor",
        customerNumber: "+1-555-963-8520",
        customerAddress: "258 Walnut St, Another Town, USA 14785",
        status: "Pending",
    },
    {
        orderId: 1009,
        phoneId: new mongoose.Types.ObjectId(),
        customerId: new mongoose.Types.ObjectId(),
        orderDate: new Date("2024-09-09T12:00:00Z"),
        phoneModel: "Nothing Phone (3)",
        total: 949.99,
        quantity: 1,
        customerName: "Henry Clark",
        customerNumber: "+1-555-357-1590",
        customerAddress: "369 Spruce Rd, Yet Another Place, USA 95135",
        status: "Accepted",
    },
    {
        orderId: 1010,
        phoneId: new mongoose.Types.ObjectId(),
        customerId: new mongoose.Types.ObjectId(),
        orderDate: new Date("2024-09-10T17:30:00Z"),
        phoneModel: "Huawei P60 Pro",
        total: 2199.98,
        quantity: 2,
        customerName: "Isabel Lee",
        customerNumber: "+1-555-159-3570",
        customerAddress: "753 Oak St, Last Town, USA 75395",
        status: "Reviewed",
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
