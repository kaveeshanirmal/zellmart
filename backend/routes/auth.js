// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const Customer = require('../models/customerSchema');
require('dotenv').config(); // Make sure this is here if you're using dotenv in this file

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new customer
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password, street, city, state, zipCode } = req.body;

  try {
    let customer = await Customer.findOne({ email });
    if (customer) {
      return res.status(400).json({ msg: 'Customer already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    customer = new Customer({
      role: 'customer',
      firstName,
      lastName,
      email,
      password: hashedPassword,
      address: {
        street,
        city,
        state,
        zipCode,
      },
    });

    await customer.save();

    const payload = {
      customer: {
        id: customer.id,
        role: customer.role, // Include role in payload
      },
    };
    
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN }, (err, token) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Token generation error' });
      }
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


router.post(
  '/login',
  async (req, res) => {
    const { email, password } = req.body;
    console.log('Request login Body:', req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await Customer.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      // Create payload
      const payload = {
        customer: {
          id: user.id,
          role: user.role // Include role in payload
        },
      };

      // Generate token
      jwt.sign(
        payload,
        process.env.JWT_SECRET, // Use environment variable for secret
        { expiresIn: process.env.JWT_EXPIRES_IN }, // Use environment variable for expiration
        (err, token) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ msg: 'Token generation error' });
          }
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;