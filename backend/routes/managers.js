const express = require('express');
const router = express.Router();
const Manager = require('../models/managerSchema'); // Adjust the path to your model

// Create a new manager
router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, isVerified } = req.body;

        // Basic validation
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ msg: 'Please provide all required fields' });
        }

        // Create a new manager
        const newManager = new Manager({
            firstName,
            lastName,
            email,
            password, // You should hash the password before saving it
            phone,
            isVerified,
        });

        await newManager.save();
        res.status(201).json(newManager);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Get all managers
router.get('/', async (req, res) => {
    try {
        const managers = await Manager.find();
        res.json(managers);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Get a manager by ID
router.get('/:id', async (req, res) => {
    try {
        const manager = await Manager.findById(req.params.id);
        if (!manager) {
            return res.status(404).json({ msg: 'Manager not found' });
        }
        res.json(manager);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Update a manager by ID
router.put('/:id', async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, isVerified } = req.body;

        // Validate the input
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ msg: 'Please provide all required fields' });
        }

        const manager = await Manager.findByIdAndUpdate(
            req.params.id,
            {
                firstName,
                lastName,
                email,
                password, // Make sure to hash the password before updating
                phone,
                isVerified,
            },
            { new: true }
        );

        if (!manager) {
            return res.status(404).json({ msg: 'Manager not found' });
        }

        res.json(manager);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Delete a manager by ID
router.delete('/:id', async (req, res) => {
    try {
        const manager = await Manager.findByIdAndDelete(req.params.id);
        if (!manager) {
            return res.status(404).json({ msg: 'Manager not found' });
        }
        res.json({ msg: 'Manager deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
