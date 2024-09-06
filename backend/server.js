const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

// Routes
const phoneRouter = require("./routes/phones");
app.use("/api/phones", phoneRouter);

const orderRouter = require("./routes/orders");
app.use("/api/orders", orderRouter);

const reviewRoutes = require("./routes/reviews");
app.use('/api/reviews', reviewRoutes);

const accessoryRouter = require("./routes/accessories");
app.use("/api/accessories", accessoryRouter);

const customerRoutes = require("./routes/customers");
app.use('/api/customers', customerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
