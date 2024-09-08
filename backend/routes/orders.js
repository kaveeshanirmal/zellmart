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
//put
router.post("/", async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save(); // Save the order to the database
        res.status(201).send(newOrder);
    } catch (error) {
        console.error("Error saving order:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

//PUT
router.put("/phones/:id", async (req, res) => {
    const { id } = req.params; // The ID from the URL parameter
    const { isBestSeller, isNewArrived } = req.body; // The fields from the request body

    try {
        // Find the phone by its phoneId and update it
        const updatedPhone = await Phone.findOneAndUpdate(
            { phoneId: id }, // Use phoneId for matching
            { isBestSeller, isNewArrived }, // Update fields
            { new: true } // Return the updated document
        );

        // If the phone was not found, return a 404 response
        if (!updatedPhone) {
            return res.status(404).json({ message: "Phone not found" });
        }

        // Respond with the updated phone data
        res.json(updatedPhone);
    } catch (error) {
        // Handle any errors that occur during the update
        console.error("Error updating phone:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
});

//Delete
router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Order.deleteOne({ orderId: id });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting order", error });
    }
});

module.exports = router;
