import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import Logo from "../../Images/Logo.png";
import ProfileImage from "../../Images/ProfileImage.jpg"; // Adjust the path

const ProfileNavbar = ({ toggleProfile }) => {
    return (
        <nav className="navbar" style={{ width: "100%" }}>
            <div className="logo"><img src={Logo} style={{ height: "30px", width: "30px" }} alt="Logo" /></div>
            <div className="search-container">
                <input type="text" placeholder="I'm looking for ..." />
                <FaSearch className="search-icon" />
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Goods</Link>
                <Link to="/job">Explore Opportunity</Link>
                <img
                    src={ProfileImage}
                    alt="Profile"
                    style={{ height: '30px', width: '30px', borderRadius: '50%', cursor: 'pointer' }}
                    onClick={toggleProfile} // Toggle UserProfile on click
                />
            </div>
        </nav>
    );
};

export default ProfileNavbar;
