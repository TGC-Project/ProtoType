// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: null, // Use null if no image is provided
    },
    comments: { type: [String], default: [] }  ,
    showComments: {
        type: Boolean,
        default: false, // Whether to show comments or not
    },
    likes: { type: Number, default: 0 },
}, { timestamps: true }); // This adds createdAt and updatedAt fields automatically

const Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;
