const mongoose = require("mongoose");
const { original } = require("parseurl");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    role: { type: String, enum: ['customer', 'manager'], default: 'customer' },
    firstName: { type: String, required: true }, 
    lastName: { type: String, required: true }, 
    email: { type: String, required: true, unique: true }, // Customer's email (must be unique)
    password: { type: String, required: true }, // Hashed password for account security
    phone: { type: String }, // Customer's phone number
    address: {
        street: { type: String  }, // Street address
        city: { type: String }, // City
        state: { type: String }, // State/Province (optional)
        zipCode: { type: String }, // Zip or postal code
    },
    isVerified: { type: Boolean, default: false }, // Indicates whether the customer has verified their email or account
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
