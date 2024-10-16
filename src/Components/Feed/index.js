import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Post = ({ author, content, imageUrl, likes, comments }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="post-post">
      <div className="header-post">
        <img alt={`Profile picture of ${author.name}`} height="50" src={author.image} width="50" />
        <div>
          <div className="name-post">{author.name}</div>
          <div className="role-post">{author.role}</div>
        </div>
      </div>
      <div className="content-post">
        {content}
        {imageUrl && (
          <img
            alt="Post content"
            height="400"
            src={imageUrl}
            style={{ width: '100%', marginTop: '10px' }}
            width="600"
          />
        )}
      </div>
      <div className="footer-post">
        <div className="actions-post">
          <span onClick={handleLike} style={{ cursor: 'pointer' }}>
            <i className="fas fa-thumbs-up" style={{ color: isLiked ? 'blue' : 'black', fontSize: '24px' }} />
            {likes}
          </span>
          <span>
            <i className="fas fa-comment" /> {comments}
          </span>
        </div>
        <div className="share-post">
          <i className="fas fa-share" /> SHARE
        </div>
      </div>
    </div>
  );
};

const Feed = () => {
  const posts = [
    {
      author: {
        name: 'Theresa Steward',
        role: 'CEO at XYZ',
        image: 'https://storage.googleapis.com/a1aa/image/TETI2jBfWXzWLCosyP8EeLQAamNmwOzem75dbNQjRuneOwVOB.jpg'
      },
      content: `What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer?`,
      likes: 42,
      comments: 9,
      imageUrl: null,
    },
    {
      author: {
        name: 'John Doe',
        role: 'Web Developer',
        image: 'https://storage.googleapis.com/a1aa/image/bdfvm7pqmS1KUSal2XXOaJ6WUNOOafzEgMDNQfyGVl2YL4KnA.jpg'
      },
      content: `Just finished a new project! Check out my latest website design.`,
      likes: 30,
      comments: 5,
      imageUrl: 'https://storage.googleapis.com/a1aa/image/HEkdeX1SfzthA0QAM8eUkWMJPlf1tuYXEI84yTm7ULMesgrcC.jpg',
    },
    {
      author: {
        name: 'Jane Smith',
        role: 'Graphic Designer',
        image: 'https://storage.googleapis.com/a1aa/image/GqPcyvg0nsZ5B10QUtIj0y1Goyd6kN4lroZr4ReTXfhoFclTA.jpg'
      },
      content: `Loving the new design trends this year! What do you all think about minimalism?`,
      likes: 50,
      comments: 12,
      imageUrl: null,
    },
    {
      author: {
        name: 'Alice Johnson',
        role: 'Content Writer',
        image: 'https://storage.googleapis.com/a1aa/image/1yU9f1V9KLTtekYR6mC24fLlcZfZ6YxpW7CJraQUe7fUZBX5E.jpg'
      },
      content: `Just published a new blog post! Check it out on my website.`,
      likes: 20,
      comments: 3,
      imageUrl: null,
    },
    {
      author: {
        name: 'Michael Brown',
        role: 'Director at ABC',
        image: 'https://storage.googleapis.com/a1aa/image/U86ZenNwgR2jCCLUOlefkGVyVIfeYDLJf1Tl8QSAzwvoaBX5E.jpg'
      },
      content: `Excited to start a new project with my team! Let's do this!`,
      likes: 15,
      comments: 2,
      imageUrl: null,
    },
    // Add more posts here as needed
  ];

  return (
    <div className="body-all">
      <div className="container-hero">
        <div className="carousel-hero">
          {/* Carousel content goes here */}
        </div>
        <div className="profile-hero">
          <img
            alt="Profile picture of Prototype Patil"
            height="60"
            src="https://storage.googleapis.com/a1aa/image/CdGcHe2TpD3lTqsbXXbicHFyNsxGg7HYruLPf8cW0zck6blTA.jpg"
            width="60"
          />
          <div className="profile-text-hero">
            <div className="name-hero">Prototype Patil</div>
            <div className="description-hero">
              Hi, I'm [Your Name], a recent graduate with a Master's in Computer Applications (MCA). I have a strong passion for technology.
            </div>
          </div>
        </div>
      </div>

      <div className="container-post">
        <div className="main-content-post">
          <div className="new-post-post">
            <input placeholder="What's on your mind?" type="text" />
            <div className="actions-post">
              <div>
                <i className="fas fa-image" />
                <i className="fas fa-video" />
                <i className="fas fa-calendar-alt" />
              </div>
              <button>
                <i className="fas fa-paper-plane" />
              </button>
            </div>
          </div>
          <div className="sort-by-post">
            <span>SORT BY: TRENDING</span>
            <select>
              <option value="trending">Trending</option>
              <option value="latest">Latest</option>
            </select>
          </div>
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
          {/* Sidebar and other sections can go here */}
        </div>
      </div>
    </div>
  );
};

export default Feed;
