const router = require("express").Router();
let Order = require("../models/orderSchema");

// GET all orders
router.route("/").get((req, res) => {
    Order.find()
        .then((orders) => res.json(orders))
        .catch((err) => res.status(400).json("Error: " + err));
});

// GET order by orderId
router.route("/:id").get((req, res) => {
    const { id } = req.params;

    // Find order by orderId field
    Order.findOne({ orderId: id })
        .then((order) => {
            if (!order) {
                return res.status(404).json("Order not found");
            }
            res.json(order);
        })
        .catch((err) => res.status(500).json("Error: " + err));
});

// POST new order
router.post("/", async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).send({ message: "Order added successfully" });
    } catch (error) {
        res.status(500).send({ message: "Error saving order data", error });
    }
});

module.exports = router;
