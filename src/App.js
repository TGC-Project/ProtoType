import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Job from "./Components/Job";
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Feed from "./Components/Feed";
import Product from './Components/Product';
import MoreJobs from './Components/MoreJobs';
import Navbar from './Components/Navbar';
import ProfileNavbar from './Components/ProfileNavbar';
import './App.css';
import UserProfile from './Components/UserProfile';

const App = () => {
    return (
        <Router>
            <Main />
        </Router>
    );
};

const Main = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isUserProfileVisible, setUserProfileVisible] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
        setUserProfileVisible(false); // Ensure it starts hidden after login
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUserProfileVisible(false); // Hide the UserProfile after logging out
    };

    const toggleProfile = () => {
        if (isLoggedIn) {
            setUserProfileVisible(prev => !prev); // Toggle visibility
        }
    };

    return (
        <div className="Main">
            {isHomePage || isAuthPage ? <Navbar /> : <ProfileNavbar toggleProfile={toggleProfile} />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn onLogin={handleLogin} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/job" element={<Job />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/products" element={<Product />} />
                <Route path="/morejobs" element={<MoreJobs />} />
            </Routes>
            {/* Show UserProfile if logged in and not on auth pages */}
            {isLoggedIn && isUserProfileVisible && (
                <UserProfile onClose={() => setUserProfileVisible(false)} onLogout={handleLogout} />
            )}
        </div>
    );
};

export default App;
