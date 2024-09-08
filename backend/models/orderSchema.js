const mongoose = require("mongoose");

const schema = mongoose.Schema;

const orderSchema = new schema({
    orderId: { type: Number, required: true, unique: true }, // Unique string ID for each order
    phoneId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Phone",
        required: true,
    }, // Refers to a phone document in the Phone collection
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    }, // Refers to a customer document in the Customer collection
    orderDate: { type: Date, default: Date.now }, // Changed to Date type for better date management
    phoneModel: { type: String, required: true },
    total: { type: Number, required: true },
    quantity: { type: Number, required: true },
    customerName: { type: String, required: true },
    customerNumber: { type: String, required: true }, // Changed to string to support different phone number formats
    customerAddress: { type: String, required: true },
    status: {
        type: String,
        enum: ["Pending", "Accepted", "Delivered", "Reviewed"],
        default: "Pending",
        required: true,
    }, // Enum for status values
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
