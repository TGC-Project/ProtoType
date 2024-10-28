import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FaHome, FaBoxOpen, FaBriefcase, FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Import additional icons

import Logo from "../../Images/time_global_consultancy_logo.jpg";
import ProfileImage from "../../Images/ProfileImage.jpg"; // Adjust the path
import "./index.css"

const ProfileNavbar = ({ toggleProfile }) => {
    return (
        <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </div>
        <div className="nav-links">
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
        </div>
        <img
src={ProfileImage}
alt="Profile"
style={{ height: '30px', width: '30px', borderRadius: '50%', cursor: 'pointer' }}
onClick={toggleProfile} // Toggle UserProfile on click
/>
      </nav>
    );
};

export default ProfileNavbar;


