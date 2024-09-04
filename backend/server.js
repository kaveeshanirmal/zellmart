const router = require("express").Router();
let Phone = require("../models/phoneModels");

// GET all phones
//localhost300/api/phones/
router.route("/").get((req, res) => {
    Phone.find()
        .then((phones) => res.json(phones))
        .catch((err) => res.status(400).json("Error: " + err));
});

// GET phone by customId
//localhost3000/api/phones/10
router.route("/:id").get((req, res) => {
    const { id } = req.params;

    // Find phone by customId field
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
//localhost3000/api/phones/
router.post("/", async (req, res) => {
    try {
        const newPhone = new Phone(req.body);
        await newPhone.save();
        res.status(201).send({ message: "Phone added successfully" });
    } catch (error) {
        res.status(500).send({ message: "Error saving phone data", error });
    }
});

module.exports = router;