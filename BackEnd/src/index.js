const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const UserAuth = require("./Authentication/UserAuth");
const PostsAuth = require("./Authentication/PostsAuth")
const Posts = require('./Model/Posts');
const Users = require("./Model/Users");
const twilio = require('twilio');
require('dotenv').config(); // Load environment variables from .env file

const PORT = process.env.PORT || 5008;
const app = express();

// CORS setup
app.use(cors());  // Enable CORS to allow requests from different origins
app.use(express.json());  // Middleware for parsing JSON bodies

// Connect to MongoDB using the URL from .env
mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,  // Increase timeout to 30 seconds
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Initial posts data
const initialPosts = [
    {
        author: "FedEx",
        time: "1276 Products • 20 h",
        content: "We're thrilled to highlight [Employee Name], who has been an incredible asset to our team! With their dedication, creativity, and exceptional skills, they have gone above and beyond to drive our projects forward. Thank you, [Employee Name], for your hard work and passion. We're proud to have you on our team!",
        image: null,
        comments: [],
        showComments: false,
    },
    {
        author: "Summer Sale",
        time: "1276 Products • 20 h",
        content: "We're thrilled to highlight [Employee Name], who has been an incredible asset to our team! With their dedication, creativity, and exceptional skills, they have gone above and beyond to drive our projects forward. Thank you, [Employee Name], for your hard work and passion. We're proud to have you on our team!",
        image: "https://storage.googleapis.com/a1aa/image/f0sekIhKtfWpqJAtiOZDNlHfhwGw36K2agapOrwuO6Tffh55E.jpg",
        comments: [],
        showComments: false,
    },
    {
        author: "Time Global Consultancy",
        time: "1276 Products • 20 h",
        content: "We are thrilled to announce the launch of our latest product, [Product Name]! Designed with innovation and customer feedback in mind, [Product Name] aims to [briefly describe the purpose or benefit of the product]. #newproduct #fascinating #dedication",
        image: "https://storage.googleapis.com/a1aa/image/PPlCrnQBia6DBhgdUsXkvOFUZSVrMwvhXQBqWfKdYx57DzzJA.jpg",
        comments: [],
        showComments: false,
    },
    {
        author: "Panda Media",
        time: "1276 Products • 20 h",
        content: "[Fun facts] Did you know that red pandas were given the name 'panda' first, roughly fifty years before the black and white variety. #panda #funfact #redpanda",
        image: "https://storage.googleapis.com/a1aa/image/fEC7cslesBsCSkLvmwrAVRTqsjXdI6HeQtqp2fFJIFZgfw8cC.jpg",
        comments: [],
        showComments: false,
    }
];

// Seed initial posts if the collection is empty
const seedInitialPosts = async () => {
    try {
        const count = await Posts.countDocuments();
        if (count === 0) {
            await Posts.insertMany(initialPosts);
            console.log('Initial posts added');
        } else {
            console.log('Posts already exist, skipping seed');
        }
    } catch (err) {
        console.error('Error seeding posts:', err);
    }
};

seedInitialPosts();


// Store OTP temporarily (In-memory, or you can use a database like Redis)
let otpStorage = {};

// Function to generate a 6-digit random OTP
const generateOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);  // Generate 6-digit OTP
    return otp.toString();
};

// Endpoint to generate OTP and send it to the user's phone (for simplicity, we'll just log it)
app.post('/api/send-otp', (req, res) => {
    const { phone } = req.body;  // Assuming the phone number is sent in the request

    if (!phone) {
        return res.status(400).json({ message: "Phone number is required." });
    }

    // Generate OTP and store it temporarily (in-memory)
    const otp = generateOtp();
    otpStorage[phone] = otp;

    // For simplicity, log the OTP (In real-world, send it via SMS, email, etc.)
    console.log(`Generated OTP for ${phone}: ${otp}`);

    // Simulate OTP being sent (In a real application, you'd send it via SMS or email)
    res.status(200).json({ message: 'OTP sent successfully!' });
});

// Endpoint to validate OTP
app.post('/api/validate-otp', (req, res) => {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
        return res.status(400).json({ message: "Phone number and OTP are required." });
    }

    // Check if the OTP matches the one stored
    if (otpStorage[phone] === otp) {
        delete otpStorage[phone];  // OTP is valid, delete it
        res.status(200).json({ message: 'OTP validated successfully!' });
    } else {
        res.status(400).json({ message: 'Invalid OTP!' });
    }
});


// Authentication routes
app.use("/api", UserAuth); // Authentication routes
app.use("/api", PostsAuth);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
