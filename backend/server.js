const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require('jsonwebtoken');
require("dotenv").config();

const authMiddleware = (roles = []) => {
    if (typeof roles === 'string') {
      roles = [roles];
    }
  
    return [
      (req, res, next) => {
        const token = req.header('x-auth-token');
        if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
  
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          req.user = decoded.customer;
          if (roles.length && !roles.includes(req.user.role)) {
            return res.status(403).json({ msg: 'Access denied' });
          }
          next();
        } catch (err) {
          res.status(401).json({ msg: 'Token is not valid' });
        }
      }
    ];
};

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

const accessoryRouter = require("./routes/accessories");
app.use("/api/accessories", accessoryRouter);

const orderRouter = require("./routes/orders");
app.use("/api/orders", orderRouter);

const reviewRoutes = require("./routes/reviews");
app.use('/api/reviews', reviewRoutes);

const customerRoutes = require("./routes/customers");
app.use('/api/customers', authMiddleware('customer'), customerRoutes);

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
