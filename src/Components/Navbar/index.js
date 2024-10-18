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
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/">
          <div className="nav-item">
            <FaHome className="nav-icon" />
            <span>Home</span>
          </div>
        </Link>
        <Link to="/products">
          <div className="nav-item">
            <FaBoxOpen className="nav-icon" />
            <span>Goods</span>
          </div>
        </Link>
        <Link to="/job">
          <div className="nav-item">
            <FaBriefcase className="nav-icon" />
            <span>Explore Opportunity</span>
          </div>
        </Link>
        <Link to="/signin" className="auth-button">
          <div className="nav-item-buttons">
            <FaSignInAlt className="nav-icon" />
            <span>Sign In</span>
          </div>
        </Link>
        <Link to="/signup" className="auth-button">
          <div className="nav-item-buttons">
            <FaUserPlus className="nav-icon" />
            <span>Sign Up</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
