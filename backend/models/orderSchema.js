const mongoose = require("mongoose");
const { original } = require("parseurl");

const schema = mongoose.Schema;
const orderSchema = new schema({
    orderId: { type: Number, required: true },
    phoneId: { type: Number, required: true },
    phoneModel: { type: String, required: true },
    customerId: { type: Number, required: true },
    customerName: { type: String, required: true },
    customerNumber: { type: Number, required: true },
    customerAddress: { type: String, required: true },
    date: { type: String, required: true },
    total: { type: Number, required: true },
    quantity: { type: Number, required: true },
    status: { type: String, required: true },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
