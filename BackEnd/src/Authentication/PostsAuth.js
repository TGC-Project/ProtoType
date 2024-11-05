const express = require('express');
const bcrypt = require('bcrypt'); // Make sure to require bcrypt
const Posts = require('../Model/Posts');
const router = express.Router();
router.get('/posts', async (req, res) => {
    try {
        const posts = await Posts.find();
        res.json(posts);  // Return posts as JSON
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});


// POST /like/:postId
router.post('/posts/like/:postId', async (req, res) => {
    const { postId } = req.params;

    console.log('Received postId:', postId);  // Add a log to check the received postId

    try {
        const post = await Posts.findById(postId);
        if (!post) {
            console.log('Post not found');  // Add a log here
            return res.status(404).json({ message: 'Post not found' });
        }

        // Increment the like count
        post.likes += 1;
        await post.save();

        res.status(200).json(post); // Return the updated post
    } catch (err) {
        console.error('Error updating like count:', err);  // Add a log here
        res.status(500).json({ message: 'Server error' });
    }
});

// Post a comment to a specific post
router.post('/posts/comment/:postId', async (req, res) => {
    const { postId } = req.params;
    const { comment } = req.body;

    try {
        // Find the post by ID
        const post = await Posts.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Add the comment to the post's comments array
        post.comments.push(comment);
        await post.save();

        // Return the updated post with the new comment
        res.status(200).json(post);
    } catch (err) {
        console.error('Error adding comment:', err);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;