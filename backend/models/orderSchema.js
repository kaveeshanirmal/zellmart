const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderId: { type: Number, required: true, unique: true },
    phone: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Phone",
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    },
    orderDate: { type: Date, default: Date.now },
    quantity: { type: Number, required: true },
    total: { type: Number, required: true },
    status: {
        type: String,
        enum: ["Pending", "Accepted", "Delivered", "Reviewed"],
        default: "Pending",
        required: true,
    },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
