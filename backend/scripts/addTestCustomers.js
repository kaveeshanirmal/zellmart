const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const Customer = require("../models/customerSchema");
const mongoURI = "mongodb://localhost:27017/zellmart"; // Replace with your MongoDB URI

// Sample test data with plain text passwords
const testCustomers = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "password123", // Plain text password
        phone: "123-456-7890",
        address: {
            street: "123 Main St",
            city: "New York",
            state: "NY",
            zipCode: "10001"
        },
        isVerified: true
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        password: "mysecretpassword", // Plain text password
        phone: "987-654-3210",
        address: {
            street: "456 Maple Ave",
            city: "Los Angeles",
            state: "CA",
            zipCode: "90001"
        },
        isVerified: false
    }
];

// Function to hash passwords and insert customers
async function hashPasswordsAndInsertCustomers() {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        // Hash passwords for each customer
        for (const customer of testCustomers) {
            const saltRounds = 10; // You can adjust the salt rounds, higher is more secure but slower
            customer.password = await bcrypt.hash(customer.password, saltRounds); // Hash the password
        }

        // Insert the customers with hashed passwords
        await Customer.insertMany(testCustomers);
        console.log("Test customers successfully inserted");

    } catch (err) {
        console.error("Error connecting to MongoDB or inserting data", err);
    } finally {
        // Disconnect from MongoDB
        mongoose.disconnect();
    }
}

// Call the function to hash passwords and insert customers
hashPasswordsAndInsertCustomers();
