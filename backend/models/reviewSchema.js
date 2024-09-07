const mongoose = require("mongoose");
const { original } = require("parseurl");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    customId: { type: Number, required: true }, // Unique ID for the review
    phoneId: { type: mongoose.Schema.Types.ObjectId, ref: 'Phone', required: true }, //Reference to the reviewed phone
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true }, //Reference to the user who wrote the review
    comment: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }, // Rating given by the user, between 1 and 5
    color: { type: String }, // Review comment text
    createdAt: { type: Date, default: Date.now }, // Timestamp of when the review was created
    helpfulVotes: { type: Number, default: 0 }, // Number of helpful votes the review received
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
