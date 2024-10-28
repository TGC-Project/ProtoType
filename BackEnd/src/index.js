const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios'); // Import Axios

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const dbURI = 'mongodb+srv://projectswebtgc:projectswebtgc@cluster0.bpjyx.mongodb.net/TGC'; // Replace with your MongoDB connection string
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Post schema
const postSchema = new mongoose.Schema({
    author: String,
    time: String,
    content: String,
    image: String,
    comments: Array,
    showComments: Boolean,
});

const Post = mongoose.model('Post', postSchema);

// Seed the database with initial posts if empty
const seedInitialPosts = async () => {
    const count = await Post.countDocuments();
    if (count === 0) {
        const initialPosts = [
            {
                author: "FedEx",
                time: "1276 Products • 20 h",
                content: "We're thrilled to highlight [Employee Name], who has been an incredible asset to our team!",
                image: null,
                comments: [],
                showComments: false,
            },
            {
                author: "Summer Sale",
                time: "1276 Products • 20 h",
                content: "We're thrilled to highlight [Employee Name], who has been an incredible asset to our team!",
                image: "https://storage.googleapis.com/a1aa/image/f0sekIhKtfWpqJAtiOZDNlHfhwGw36K2agapOrwuO6Tffh55E.jpg",
                comments: [],
                showComments: false,
            },
            {
                author: "Time Global Consultancy",
                time: "1276 Products • 20 h",
                content: "We are thrilled to announce the launch of our latest product, [Product Name]!",
                image: "https://storage.googleapis.com/a1aa/image/PPlCrnQBia6DBhgdUsXkvOFUZSVrMwvhXQBqWfKdYx57DzzJA.jpg",
                comments: [],
                showComments: false,
            },
            {
                author: "Panda Media",
                time: "1276 Products • 20 h",
                content: "[Fun facts] Did you know that red pandas were given the name 'panda' first?",
                image: "https://storage.googleapis.com/a1aa/image/fEC7cslesBsCSkLvmwrAVRTqsjXdI6HeQtqp2fFJIFZgfw8cC.jpg",
                comments: [],
                showComments: false,
            }
        ];
        await Post.insertMany(initialPosts);
        console.log('Initial posts added');
    } else {
        console.log('Initial posts already exist');
    }
};

seedInitialPosts();

// Endpoint to create a new post
app.post('/api/posts', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        console.error('Error saving post:', error);
        res.status(500).send('Error saving post');
    }
});

// Endpoint to get all posts
app.get('/api/posts', async (req, res) => {
    console.log('Received request for posts');
    try {
        const posts = await Post.find();
        console.log('Posts fetched:', posts);
        res.json(posts);
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).send('Server error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
