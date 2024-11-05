const express = require('express');
const bcrypt = require('bcrypt'); // Make sure to require bcrypt
const Users = require('../Model/Users');
const nodemailer = require('nodemailer');
require('dotenv').config();
const twilio = require('twilio');

const router = express.Router();




router.post('/signin', async (req, res) => {
    const { email, password } = req.body; 
    console.log("Sign in request:", req.body);

    try {
        const user = await Users.findOne({ email: new RegExp(`^${email}$`, 'i') }); // Case-insensitive email search
        console.log("Searching for user with email:", email);
        console.log("User  found:", user); 

        if (!user) {
            console.log("No user found with that email.");
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log("User  password (hashed):", user.password);
        console.log("Password provided:", password);
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match:", isMatch);

        if (!isMatch) {
            console.log("Password did not match.");
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status( 200).json({ message: 'Login successful',
            fname: user.fname,
            lname: user.lname, 
         });
    } catch (error) {
        console.error('Error during authentication:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Signup Route

router.post('/signup', async (req, res) => {
    const {
        fname,
        lname,
        email,
        password,
        phone,
        address1,
        address2,
        city,
        zip,
        aadharNumber
    } = req.body;

    try {
        // Check if required fields are present
        const requiredFields = [
            'fname', 'lname', 'email', 'password', 'phone', 'address1', 'city', 'zip', 'aadharNumber'
        ];

        for (let field of requiredFields) {
            if (!req.body[field]) {
                return res.status(400).json({ message: `${field} is required.` });
            }
        }

        // Validate email format
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format.' });
        }

        // Validate Aadhar number format (if provided)
        const aadharRegex = /^\d{12}$/;
        if (aadharNumber && !aadharRegex.test(aadharNumber)) {
            return res.status(400).json({ message: 'Invalid Aadhar number format.' });
        }

        // Check if the email already exists
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Prepare user data (common fields only)
        const newUserData = {
            fname,
            lname,
            email,
            password: hashedPassword,
            phone,
            address1,
            address2,
            city,
            zip,
            aadharNumber
        };

        // Create the user object and save to database
        const newUser = new Users(newUserData);
        await newUser.save();

        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Server error during signup', error: error.message });
    }
});


module.exports = router;

