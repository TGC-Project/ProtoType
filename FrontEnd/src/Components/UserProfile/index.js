import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileImage from "../../Images/ProfileImage.jpg";
import './index.css';

const UserProfile = ({ onClose, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout(); // Call onLogout to handle logout logic
        navigate('/'); // Redirect to the home page
    };

    return (
        <div className="profile-container">
            <div className="profile-info">
                <img src={ProfileImage} alt="Profile" className="profile-image" />
                <div className="profile-details">
                    <h2 className="profile-name">Dhanshri Jadhav</h2>
                    <p className="profile-about">About you or a brief description.</p>
                </div>
            </div>
            <div className="settings">
                <ul>
                    <li><a href="/settings">Settings</a></li>
                    <li><a href="/jobs">Jobs</a>
                        <ul>
                            <li><a href="/applied-jobs">Applied Jobs</a></li>
                        </ul>
                    </li>
                    <li><a href="/products">Products</a>
                        <ul>
                            <li><a href="/my-products">My Products</a></li>
                        </ul>
                    </li>
                    <li><a href="/help">Help</a></li>
                    <li>
                       
                    </li>
                </ul>
            </div>
            <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
    );
};

export default UserProfile;
