const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const counterSchema = new Schema({
    _id: String, // The name of the counter ("orderId")
    sequence_value: Number, // The current value of the counter
});

const Counter = mongoose.model("Counter", counterSchema);

module.exports = Counter;
