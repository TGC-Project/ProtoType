import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBoxOpen, FaBriefcase, FaSignInAlt, FaUserPlus, FaSearch } from 'react-icons/fa';
import './index.css';
import logo from "../../Images/time_global_consultancy_logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <div className={`menu ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-item">
          <FaHome className="nav-icon" />
          <span>Home</span>
        </Link>
        <Link to="/products" className="nav-item">
          <FaBoxOpen className="nav-icon" />
          <span>Goods</span>
        </Link>
        <Link to="/job" className="nav-item">
          <FaBriefcase className="nav-icon" />
          <span>Explore Opportunity</span>
        </Link>
        <Link to="/signin" className="auth-button">
          <FaSignInAlt className="nav-icon" />
          <span>Sign In</span>
        </Link>
        <Link to="/signup" className="auth-button" id="signupbutton">
          <FaUserPlus className="nav-icon" />
          <span>Sign Up</span>
        </Link>
        <div className='vl'>
        <Link to="/companysignup" className="auth-button">
          <FaUserPlus className="nav-icon" />
          <span>Company</span>
        </Link>
        </div>
      </div>
    </nav>



</>
  );
};

export default Navbar;
