import React, { useState } from 'react';
import Article from "../../Images/write article.png";
import Product from "../../Images/Products impression.png";
import Jobs from "../../Images/jobs.png"
import Impression from "../../Images/Profile impression.png"
import Media from "../../Images/media.png"

import './index.css'; // CSS file for styling

const initialPosts = [
    {
        id: 1,
        author: "FedEx",
        time: "1276 Products • 20 h",
        content: "We're thrilled to highlight [Employee Name], who has been an incredible asset to our team! With their dedication, creativity, and exceptional skills, they have gone above and beyond to drive our projects forward. Thank you, [Employee Name], for your hard work and passion. We're proud to have you on our team!",
        image: null,
        comments: [],
        showComments: false,
    },
    {
        id: 2,
        author: "Summer Sale",
        time: "1276 Products • 20 h",
        content: "We're thrilled to highlight [Employee Name], who has been an incredible asset to our team! With their dedication, creativity, and exceptional skills, they have gone above and beyond to drive our projects forward. Thank you, [Employee Name], for your hard work and passion. We're proud to have you on our team!",
        image: "https://storage.googleapis.com/a1aa/image/f0sekIhKtfWpqJAtiOZDNlHfhwGw36K2agapOrwuO6Tffh55E.jpg",
        comments: [],
        showComments: false,
    },
    {
        id: 3,
        author: "Time Global Consultancy",
        time: "1276 Products • 20 h",
        content: "We are thrilled to announce the launch of our latest product, [Product Name]! Designed with innovation and customer feedback in mind, [Product Name] aims to [briefly describe the purpose or benefit of the product]. #newproduct #fascinating #dedication",
        image: "https://storage.googleapis.com/a1aa/image/PPlCrnQBia6DBhgdUsXkvOFUZSVrMwvhXQBqWfKdYx57DzzJA.jpg",
        comments: [],
        showComments: false,
    },
    {
        id: 4,
        author: "Panda Media",
        time: "1276 Products • 20 h",
        content: "[Fun facts] Did you know that red pandas were given the name 'panda' first, roughly fifty years before the black and white variety. #panda #funfact #redpanda",
        image: "https://storage.googleapis.com/a1aa/image/fEC7cslesBsCSkLvmwrAVRTqsjXdI6HeQtqp2fFJIFZgfw8cC.jpg",
        comments: [],
        showComments: false,
    }
];

const Feed = () => {
    const [posts, setPosts] = useState(initialPosts);
    const [postContent, setPostContent] = useState('');
    const [mediaFile, setMediaFile] = useState(null);
    const [commentContent, setCommentContent] = useState({}); // Store comments per post

    const createPost = () => {
        if (postContent.trim() === '') {
            alert('Please enter some content to post.');
            return;
        }

        const newPost = {
            id: Date.now(),
            content: postContent,
            author: 'Sadashiv Tape',
            time: 'Just now',
            image: mediaFile ? URL.createObjectURL(mediaFile) : null,
            comments: [],
            showComments: false,
        };

        setPosts([newPost, ...posts]);
        setPostContent('');
        setMediaFile(null);
    };


    const addComment = (postId) => {
        const content = commentContent[postId] || '';
        if (content.trim() === '') {
            alert('Please enter a comment.');
            return;
        }

        setPosts(posts.map(post => 
            post.id === postId ? { ...post, comments: [...post.comments, content] } : post
        ));
        
        setCommentContent({ ...commentContent, [postId]: '' }); // Clear comment input for the specific post
    };

    const handleCommentChange = (postId, value) => {
        setCommentContent({ ...commentContent, [postId]: value });
    };

    const handleMediaUpload = (event) => {
        setMediaFile(event.target.files[0]);
    };

    return (
        <div className="feed-container">
            <div className="sidebar">
                <div className="profile">
                    <img alt="Profile" src="https://storage.googleapis.com/a1aa/image/fBSgqgbP36SYM6uTnNdqKoBvMTClOXJyeIu5dNVI5C0ePMPnA.jpg" />
                    <h3>Sadashiv Tape</h3>
                    <label>I'm committed to growth and innovation.</label>
                    <label>Pune, Maharastra</label>
                    <label>Prototype 1</label>
                </div>
                <div class="card">
                    <div class="item">
                        <div>
                            <img src={Impression}style={{marginRight:"10px"}}/>
                            <span>Profile impression</span>
                        </div>
                        <div class="value">3k</div>
                    </div>
                    <div class="item">
                        <div>
                            <img src={Product} style={{marginRight:"8px"}}/>
                            <span>Products Impression</span>
                        </div>
                        <div class="value">34k</div>
                    </div>
                </div>
                <div className="links">
                    <h3>Employer</h3>
                    <hr/>
                    <a href="#">Post a Job</a>
                    <a href="#">Browse Candidate</a>
                    <a href="#">Employer Dashboard</a>
                    <a href="#">Applications</a>
                </div>
                <div className="links">
                    <h3>Candidate</h3>
                    <hr/>
                    <a href="#">Browse Jobs</a>
                    <a href="#">Browse Employer</a>
                    <a href="#">Candidate Dashboard</a>
                    <a href="#">Saved Jobs</a>
                </div>
                <div className="links">
                    <h3>Quick Links</h3>
                    <hr/>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Products</a>
                    <a href="#">Blogs</a>
                </div>
                <div className="links">
                    <h3>Support</h3>
                    <hr/>
                    <a href="#">FAQ</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Condition</a>
                </div>
            </div>

            <div className="main-content">
                <div className="search">
                    <div className="post-box">
                        <input
                            id="post-input"
                            placeholder="Media | Write Article | Job | Products"
                            type="text"
                            value={postContent}
                            onChange={(e) => setPostContent(e.target.value)}
                        />
                        <button onClick={createPost}>Post</button>
                    </div>
                    <div className="icons-container">
                        <div id="mediaIcon" onClick={() => document.getElementById('fileInput').click()}>
                           <img src={Media} style={{marginRight:"10px"}}/>Media
                        </div>
                        <div><img src={Article} style={{marginRight:"10px"}}/>Write Article</div>
                        <div><img src={Jobs} style={{marginRight:"10px"}}/>Job</div>
                        <div><img src={Product} style={{marginRight:"10px"}}/>Products</div>
                    </div>
                    <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleMediaUpload}
                    />
                </div>
                <div className="sort-by">
    <span>Sort by: </span>
    <select>
        <option>Most Recent</option>
        <option>Most Popular</option>
    </select>
</div>

                <div id="posts">
                    {posts.map((post) => (
                        <div className="post" key={post.id}>
                            <div className="header">
                                <img alt="Logo" height="40" src="https://storage.googleapis.com/a1aa/image/VMOfjEvP5QUTMa8udc00R6a150itxFmNmiwVzAOKn6z6DzzJA.jpg" width="40" />
                                <div className="info">
                                    <h3>{post.author}</h3>
                                    <p>{post.time}</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>{post.content}</p>
                                {post.image && <img alt="Post image" height="200" src={post.image} width="700" />}
                                <a href="#">See translation</a>
                            </div>
                           
                            <div className="post-actions1">
                                <button onClick={() => alert('Liked!')}>
                                    <i className="far fa-thumbs-up"></i>
                                    Like
                                </button>
                                <button onClick={createPost}>
                                    <i className="far fa-comment"></i>
                                    Comment
                                </button>
                                <button onClick={() => alert('Sent!')}>
                                    <i className="far fa-paper-plane"></i>
                                    Send
                                </button>
                            </div>
                          {post.showComments && (
    <div className="comment-section">
        <textarea
            placeholder="Add a comment..."
            rows="4"
            value={commentContent[post.id] || ''}
            onChange={(e) => handleCommentChange(post.id, e.target.value)} // Corrected line
        />
        <button onClick={() => addComment(post.id)}>Post</button>
        {post.comments.map((comment, index) => (
            <p key={index}>{comment}</p>
        ))}
    </div>
)}
                        </div>
                    ))}
                </div>
                <div className="recently-viewed">
                    <img alt="Product 1" height="150" src="https://storage.googleapis.com/a1aa/image/hpG3ezbHIgXjN6nf6LhGZiERWbzZTr3wtTWPJjNfQGGkPMPnA.jpg" width="150" />
                    <img alt="Product 2" height="150" src="https://storage.googleapis.com/a1aa/image/imWeZBNHfcnEFkOXakWYXxs0Lh5rpzPnOxQj3XW4KZ95HmnTA.jpg" width="150" />
                    <img alt="Product 3" height="150" src="https://storage.googleapis.com/a1aa/image/AykQ46qPgOoNLh2MZ1bqIUfeyXLuY8hacnBfxrxzjSfEfw8cC.jpg" width="150" />
                    <img alt="Product 4" height="150" src="https://storage.googleapis.com/a1aa/image/dpYMCKeiWRwYda1vBNiZpTXBejaWwHaezuDqeKSvl3ebfh55E.jpg" width="150" />
                </div>
            </div>



            <div className="right-sidebar">
            <div  class="sideproduct">
                <h2>Top Selling Product</h2>
                <hr/>
                <div className="product-item">
                    <a href="#">Brick Making Machines</a>
                    <div className="count">900 products</div>
                </div>
               
                <div className="product-item">
                    <a href="#">Passenger Lifts</a>
                    <div className="count">1200 products</div>
                </div>
                <div className="product-item">
                    <a href="#">Batteries</a>
                    <div className="count">1700 products</div>
                </div>
                <div className="product-item">
                    <a href="#">Solar Panels</a>
                    <div className="count">2000 products</div>
                </div>
                <div className="product-item">
                    <a href="#">Brick Making Machines</a>
                    <div className="count">900 products</div>
                </div>
                <div className="product-item">
                    <a href="#">Passenger Lifts</a>
                    <div className="count">1200 products</div>
                </div>
                <div className="product-item">
                    <a href="#">Batteries</a>
                    <div className="count">1700 products</div>
                </div>
                <div className="product-item">
                    <a href="#">Solar Panels</a>
                    <div className="count">2000 products</div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Feed;