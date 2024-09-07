const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const Customer = require("../models/customerSchema");
const mongoURI = "mongodb://localhost:27017/zellmart"; // Replace with your MongoDB URI

// Sample test manager data with plain text password
const testManager = {
    firstName: "Admin",
    lastName: "User",
    email: "admin@example.com",
    password: "admin123", // Plain text password
    phone: "555-555-5555",
    isVerified: true,
    role: "manager" // Ensure the role is set to manager
};

// Function to hash password and insert the manager
async function hashPasswordAndInsertManager() {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        // Hash password for the manager
        const saltRounds = 10; // You can adjust the salt rounds, higher is more secure but slower
        testManager.password = await bcrypt.hash(testManager.password, saltRounds); // Hash the password

        // Insert the manager with hashed password
        await Customer.create(testManager);
        console.log("Test manager successfully inserted");

    } catch (err) {
        console.error("Error connecting to MongoDB or inserting data", err);
    } finally {
        // Disconnect from MongoDB
        mongoose.disconnect();
    }
}

// Call the function to hash password and insert manager
hashPasswordAndInsertManager();
