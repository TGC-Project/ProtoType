import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import './index.css'; // Ensure you have the CSS file
import Logo from "../../Images/Logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><img src={Logo} style={{height:"30px",width:"30px"}}></img></div>
      <div className="search-container">
        <input type="text" placeholder="I'm looking for ..." />
        <FaSearch className="search-icon" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Goods</Link>
        <Link to="/job">Explore Opportunity</Link>
        <Link to="/signin" className="auth-button">Sign In</Link>
        <Link to="/signup" className="auth-button">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
