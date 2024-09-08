const router = require("express").Router();
let Accessory = require("../models/accessoriesModels");

// GET all accessories
router.route("/").get((req, res) => {
    Accessory.find()
        .then((accessories) => res.json(accessories))
        .catch((err) => res.status(400).json("Error: " + err));
});

// GET accessory by customId
router.route("/:id").get((req, res) => {
    const { id } = req.params;

    // Find accessory by customId field
    Accessory.findOne({ customId: id })
        .then((accessory) => {
            if (!accessory) {
                return res.status(404).json("Accessory not found");
            }
            res.json(accessory);
        })
        .catch((err) => res.status(500).json("Error: " + err));
});

// POST new accessory
router.post("/", async (req, res) => {
    try {
        const newAccessory = new Accessory(req.body);
        await newAccessory.save();
        res.status(201).send({ message: "Accessory added successfully" });
    } catch (error) {
        res.status(500).send({ message: "Error saving accessory data", error });
    }
});

// PUT (update) accessory
// localhost:5000/api/phones/:id
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const updatedAccessory = await Accessory.findOneAndUpdate(
            { customId: id }, // Query by customId
            req.body,
            { new: true }
        );

        if (!updatedAccessory) {
            return res.status(404).json({ message: "Accessory not found" });
        }

        res.json(updatedAccessory);
    } catch (error) {
        res.status(500).json({
            message: "Error updating accessory data",
            error: error.message,
        });
    }
});

// DELETE accessory
// localhost:5000/api/phones/:id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Received Delete Request");

        // delete the document by customId
        const deletedAccessory = await Accessory.findOneAndDelete({
            customId: id,
        });

        if (!deletedAccessory) {
            return res.status(404).json({ message: "Accessory not found" });
        }

        res.json({
            message: "Accessory successfully deleted",
            phone: deletedAccessory,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting accessory data",
            error: error.message,
        });
    }
});

module.exports = router;
