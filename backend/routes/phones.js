const router = require("express").Router();
let Phone = require("../models/phoneModels");

// GET all phones
// localhost:5000/api/phones/
router.route("/").get((req, res) => {
    Phone.find()
        .then((phones) => res.json(phones))
        .catch((err) => res.status(400).json("Error: " + err));
});

// GET phone by id
// localhost:5000/api/phones/:id
router.route("/:id").get((req, res) => {
    const { id } = req.params;

    // Find phone by id field
    Phone.findOne({ customId: id })
        .then((phone) => {
            if (!phone) {
                return res.status(404).json("Phone not found");
            }
            res.json(phone);
        })
        .catch((err) => res.status(500).json("Error: " + err));
});

// POST new phone
// localhost:5000/api/phones/
router.post("/", async (req, res) => {
    try {
        const newPhone = new Phone(req.body);
        await newPhone.save();
        res.status(201).json(newPhone);
    } catch (error) {
        res.status(500).json({
            message: "Error saving phone data",
            error: error.message,
        });
    }
});

// PUT (update) phone
// localhost:5000/api/phones/:id
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const updatedPhone = await Phone.findOneAndUpdate(
            { customId: id }, // Query by customId
            req.body,
            { new: true }
        );

        if (!updatedPhone) {
            return res.status(404).json({ message: "Phone not found" });
        }

        res.json(updatedPhone);
    } catch (error) {
        res.status(500).json({
            message: "Error updating phone data",
            error: error.message,
        });
    }
});

// DELETE phone
// localhost:5000/api/phones/:id
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log("Received Delete Request");

        // delete the document by customId
        const deletedPhone = await Phone.findOneAndDelete({ customId: id });

        if (!deletedPhone) {
            return res.status(404).json({ message: "Phone not found" });
        }

        res.json({
            message: "Phone successfully deleted",
            phone: deletedPhone,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting phone data",
            error: error.message,
        });
    }
});

module.exports = router;
