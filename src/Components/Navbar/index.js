import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import "./index.css";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    setIsAuthenticated(true);
    navigate('/signin');
  };

  const handleSignUp = () => {
    setIsAuthenticated(true);
    navigate('/signup');
  };

  const handleEmployer = () => {
    navigate("/signup");
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/" className='active'>Home</Link>
        <Link to="/products">Explore products</Link>
        <Link to="/job">Opportunities</Link>
        <Link to="/profileuser">Customer Supports</Link>
      </div>
      <div className="navbarData">
        <h1>Prototype</h1>
        <div className="search-bar">
  <input type="text" placeholder="Products, Jobs, companies." />
  <FaSearch className="search-icon" />
</div>

        <div className='buttons'>
          {!isAuthenticated ? (
            <>
              <button className="signIn-btn" onClick={handleSignIn}>Sign In</button>
              <button className="signup" onClick={handleSignUp}>Sign Up</button>
              <button className="employer" onClick={handleEmployer}>
                For Employer <i className="fas fa-caret-down"></i>
              </button>
            </>
          ) : (
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQDD1fySkdlj4-bVbYXhKfLuFa1Ulo713TA&s" // Replace with your image path
              alt="Profile"
              className="profile-image"
            />
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
