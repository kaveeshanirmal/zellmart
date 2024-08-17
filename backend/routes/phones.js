const router = require("express").Router();
let Phone = require("../models/phoneModels");

router.route("/").get((req, res) => {
    Phone.find()
        .then((phones) => res.json(phones))
        .catch((err) => res.status(400).json("Error: " + err));
});

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

router.route("/add").post((req, res) => {
    const newPhone = new Phone(req.body);

    newPhone
        .save()
        .then(() => res.json("Phone added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
