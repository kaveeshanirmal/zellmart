const mongoose = require("mongoose");
const { original } = require("parseurl");

const Schema = mongoose.Schema;

const managerSchema = new Schema({
    role: { type: String, enum: ['customer', 'manager'], default: 'manager' },
    firstName: { type: String, required: true }, 
    lastName: { type: String, required: true }, 
    email: { type: String, required: true, unique: true }, // Manager's email (must be unique)
    password: { type: String, required: true }, // Hashed password for account security
    phone: { type: String }, // Manager's phone number
    isVerified: { type: Boolean, default: false }, // Indicates whether the manager has verified their email or account
});

const Manager = mongoose.model("Manager", managerSchema);

module.exports = Manager;
