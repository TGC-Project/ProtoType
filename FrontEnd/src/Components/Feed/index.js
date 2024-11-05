import React, { useState, useEffect } from 'react';
import LeftSideBar from '../LeftSideBar';
import ProfileImage from "../../Images/img.png";
import './index.css'; // Import your CSS for styling

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [commentVisible, setCommentVisible] = useState(null); // Manage which post's comment section is visible

    // Fetch posts from the backend API when the component mounts
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/posts');
                console.log("API Response Status:", response.status);

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
                }

                const data = await response.json();
                console.log('Fetched posts data:', data);
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    // Handle the like button click
    const handleLike = async (postId) => {
        try {
            const response = await fetch(`http://localhost:5001/api/posts/like/${postId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error liking post: ${errorText}`);
            }

            const updatedPost = await response.json();

            // Update the post's like count in the state
            setPosts(posts.map(post =>
                post._id === postId ? updatedPost : post
            ));
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };

    // Toggle the visibility of the comment input section
    const toggleCommentSection = (postId) => {
        setCommentVisible(postId === commentVisible ? null : postId); // Toggle visibility for the clicked post
    };

    return (
        <div className="feed-container">
            <LeftSideBar />
            <div className="feed-main-content">
                <div id="posts">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div className="post" key={post._id}>
                                <div className="header">
                                    <img alt="User Avatar" height="40" src={ProfileImage} width="40" />
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
                                    <button className="feed-button" onClick={() => handleLike(post._id)}>
                                        <i className="far fa-thumbs-up"></i> Like ({post.likes})
                                    </button>
                                    <button
                                        className="feed-button"
                                        onClick={() => toggleCommentSection(post._id)} // Toggle visibility
                                    >
                                        <i className="far fa-comment"></i> Comment
                                    </button>
                                    <button className='feed-button' onClick={() => alert('Sent!')}>
                                        <i className="far fa-paper-plane"></i> Send
                                    </button>
                                </div>

                                {/* Conditionally Render Comment Input Section */}
                                {commentVisible === post._id && (
                                    <div className="comment-wrapper"> {/* New div wrapper for comment section */}
                                        <div className="comment-section">
                                            <div className="comment-avatar">
                                                <img alt="User Avatar" src={ProfileImage} width="30" height="30" />
                                            </div>
                                            <textarea
                                                placeholder="Enter your comment..."
                                                rows="4"
                                            />
                                            <button>Post Comment</button>
                                        </div>
                                    </div>
                                )}
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
