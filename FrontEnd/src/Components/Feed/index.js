import React, { useState, useEffect } from 'react';
import Article from "../../Images/write article.png";
import Product from "../../Images/Products impression.png";
import Jobs from "../../Images/jobs.png";
import Media from "../../Images/media.png";
import LeftSideBar from '../LeftSideBar';
import './index.css'; // CSS file for styling

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [postContent, setPostContent] = useState('');
    const [mediaFile, setMediaFile] = useState(null);
    const [commentContent, setCommentContent] = useState({});

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/posts');
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);
    
    const createPost = async () => {
        if (postContent.trim() === '') {
            alert('Please enter some content to post.');
            return;
        }
    
        const newPost = {
            content: postContent,
            author: 'Sadashiv Tape',
            time: new Date().toLocaleString(),
            image: mediaFile ? URL.createObjectURL(mediaFile) : null,
            comments: [],
            showComments: false,
        };
    
        try {
            const response = await fetch('http://localhost:5001/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost),
            });
    
            if (response.ok) {
                const savedPost = await response.json();
                setPosts([savedPost, ...posts]);
            } else {
                alert('Error saving post');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error saving post');
        }
    
        setPostContent('');
        setMediaFile(null);
    };
    
    const handleCommentChange = (postId, value) => {
        setCommentContent({ ...commentContent, [postId]: value });
    };
    
    const handleMediaUpload = (event) => {
        setMediaFile(event.target.files[0]);
    };
    
    const addComment = (postId) => {
        const content = commentContent[postId] || '';
        if (content.trim() === '') {
            alert('Please enter a comment.');
            return;
        }
    
        setPosts(posts.map(post =>
            post._id === postId ? { ...post, comments: [...post.comments, content] } : post
        ));
    
        setCommentContent({ ...commentContent, [postId]: '' });
    };
    
    return (
        <div className="feed-container">
            <LeftSideBar />
            <div className="feed-main-content">
                <div className="search">
                    <div className="post-box">
                        <input
                            id="post-input"
                            placeholder="Media | Write Article | Job | Products"
                            type="text"
                            value={postContent}
                            onChange={(e) => setPostContent(e.target.value)}
                        />
                        <button className="post-creation" onClick={createPost}>Post</button>
                    </div>
                    <div className="icons-container">
                        <div id="mediaIcon" onClick={() => document.getElementById('fileInput').click()}>
                            <img src={Media} style={{ marginRight: "10px" }} alt="Media Icon" />Media
                        </div>
                        <div><img src={Article} style={{ marginRight: "10px" }} alt="Article Icon" />Write Article</div>
                        <div><img src={Jobs} style={{ marginRight: "10px" }} alt="Jobs Icon" />Job</div>
                        <div><img src={Product} style={{ marginRight: "10px" }} alt="Product Icon" />Products</div>
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
                    <select className='feed-select'>
                        <option>Most Recent</option>
                        <option>Most Popular</option>
                    </select>
                </div>
                <div id="posts">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div className="post" key={post._id}>
                                <div className="header">
                                    <img alt="User Avatar" height="40" src="https://storage.googleapis.com/a1aa/image/VMOfjEvP5QUTMa8udc00R6a150itxFmNmiwVzAOKn6z6DzzJA.jpg" width="40" />
                                    <div className="info">
                                        <h2 className='post-author'>{post.author}</h2>
                                        <p>{post.time}</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <p>{post.content}</p>
                                    {post.image && <img alt="Post image" height="200" src={post.image} width="700" />}
                                    <a href="#">See translation</a>
                                </div>
                                <div className="post-actions">
                                    <button className="feed-button" onClick={() => alert('Liked!')}>
                                        <i className="far fa-thumbs-up"></i>
                                        Like
                                    </button>
                                    <button className='feed-button' onClick={() => alert('Comment')}>
                                        <i className="far fa-comment"></i>
                                        Comment
                                    </button>
                                    <button className='feed-button' onClick={() => alert('Sent!')}>
                                        <i className="far fa-paper-plane"></i>
                                        Send
                                    </button>
                                </div>
                                <div className="comment-section">
                                    <textarea
                                        placeholder="Add a comment..."
                                        rows="4"
                                        value={commentContent[post._id] || ''}
                                        onChange={(e) => handleCommentChange(post._id, e.target.value)}
                                    />
                                    <button onClick={() => addComment(post._id)}>Post</button>
                                    {post.comments.map((comment, index) => (
                                        <p key={index}>{comment}</p>
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No posts available.</p>
                    )}
                </div>
            </div>
    
            <div className="feed-right-sidebar">
                <div className="sideproduct">
                    <h2>Top Selling Product</h2>
                    <hr />
                    <div className="product-item-1">
                        <a href="#">Brick Making Machines</a>
                        <div className="count">900 products</div>
                    </div>
                    <div className="product-item-1">
                        <a href="#">Passenger Lifts</a>
                        <div className="count">1200 products</div>
                    </div>
                    <div className="product-item-1">
                        <a href="#">Batteries</a>
                        <div className="count">1700 products</div>
                    </div>
                    <div className="product-item-1">
                        <a href="#">Solar Panels</a>
                        <div className="count">2000 products</div>
                    </div>
                </div>
            </div>
        </div>
    );   
};

export default Feed;
