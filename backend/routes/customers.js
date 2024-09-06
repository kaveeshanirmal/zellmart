const express = require('express');
const router = express.Router();
const Customer = require('../models/customerSchema'); // Adjust the path to your model

// Create a new customer
router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, address } = req.body;

        // Basic validation
        if (!firstName || !lastName || !email || !password || !address || !address.street || !address.city || !address.zipCode) {
            return res.status(400).json({ msg: 'Please provide all required fields' });
        }

        // Create a new customer
        const newCustomer = new Customer({
            firstName,
            lastName,
            email,
            password, // You should hash the password before saving it
            phone,
            address,
        });

        await newCustomer.save();
        res.status(201).json(newCustomer);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Get all customers
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Get a customer by ID
router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({ msg: 'Customer not found' });
        }
        res.json(customer);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Update a customer by ID
router.put('/:id', async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, address } = req.body;

        // Validate the input
        if (!firstName || !lastName || !email || !password || !address || !address.street || !address.city || !address.zipCode) {
            return res.status(400).json({ msg: 'Please provide all required fields' });
        }

        const customer = await Customer.findByIdAndUpdate(
            req.params.id,
            {
                firstName,
                lastName,
                email,
                password, // Make sure to hash the password before updating
                phone,
                address,
            },
            { new: true }
        );

        if (!customer) {
            return res.status(404).json({ msg: 'Customer not found' });
        }

        res.json(customer);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Delete a customer by ID
router.delete('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if (!customer) {
            return res.status(404).json({ msg: 'Customer not found' });
        }
        res.json({ msg: 'Customer deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
