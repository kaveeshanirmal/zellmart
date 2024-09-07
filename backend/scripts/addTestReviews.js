const mongoose = require("mongoose"); // Add this line to import mongoose
const Phone = require("../models/phoneModels");
const Customer = require("../models/customerSchema");
const Review = require("../models/reviewSchema");
const mongoURI = "mongodb://localhost:27017/zellmart";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Fetch a Phone and Customer document to get their ObjectIds
    const phone = await Phone.findOne(); // Fetch the first phone document
    const customer = await Customer.findOne(); // Fetch the first customer document

    if (phone && customer) {
      const testReviews = [
        {
          customId: 1,
          phoneId: phone._id, // Use ObjectId from the fetched Phone document
          userId: customer._id, // Use ObjectId from the fetched Customer document
          comment: "The iPhone X is fantastic! Great design and performance. Worth the price.",
          rating:3,
          color: "black",
          helpfulVotes: 5,
        },
        {
          customId: 2,
          phoneId: phone._id, // Reuse the same phone for simplicity
          userId: customer._id, // Reuse the same customer for simplicity
          comment: "iPhone 11 is a solid phone with an amazing camera. Battery life could be better.",
          rating:4,
          color: "gold",
          helpfulVotes: 3,
        },
      ];

      await Review.insertMany(testReviews);
      console.log("Test reviews successfully inserted");
    } else {
      console.error("Could not find Phone or Customer documents.");
    }

    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
    mongoose.disconnect();
  });
