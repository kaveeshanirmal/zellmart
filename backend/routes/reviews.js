const express = require('express');
const router = express.Router();
const Review = require('../models/reviewSchema'); 
const Phone = require('../models/phoneModels'); 

// Get reviews by phone customId
router.get('/phone/:customId', async (req, res) => {
    try {
        // Find the phone with the given customId
        const phone = await Phone.findOne({ customId: req.params.customId });
        
        if (!phone) {
            return res.status(404).json({ message: "Phone not found" });
        }

        // Find reviews that match the phone's _id
        const reviews = await Review.find({ phoneId: phone._id });
        
        res.json(reviews);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
