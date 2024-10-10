import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import "./index.css";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    setIsAuthenticated(true);
    navigate('/feed');
  };

  const handleSignUp = () => {
    setIsAuthenticated(true);
    navigate('/feed');
  };

  const handleEmployer = () => {
    navigate("/signup");
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/" className='active'>Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/job">Opportunities</Link></li>
        <li><Link to="#">Support</Link></li>
      </ul>
      <div className='MainNavbar'>
        <h1>ProtoType</h1>
        <div className="search-bar">
          <input type="text" placeholder="Jobs, Companies..." />
          <FaSearch className="search-icon" />
        </div>
        <div className='Buttons'>
          {!isAuthenticated ? (
            <>
              <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
              <button className="signIn-btn" onClick={handleSignIn}>Sign In</button>
              <button className="signup-btn" onClick={handleEmployer}>For Employer</button>
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
    </nav>
  );
};

export default Navbar;
