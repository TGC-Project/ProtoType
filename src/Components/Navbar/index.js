import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import "./index.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/" className='active'>Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/feed">Feed</Link></li>
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
        <button className="signup-btn" onClick={() => navigate('/signup')}>Sign Up</button>
        <button className="signIn-btn" onClick={() => navigate('/signin')}>Sign In</button>
      </div>
      </div>

    </nav>
  );
};

export default Navbar;
