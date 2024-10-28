import React from 'react'
import { useNavigate } from 'react-router-dom';
import Impression from "../../Images/Profile impression.png"
import Product from "../../Images/Products impression.png";

function LeftSideBar() {

    const navigate = useNavigate();

  return (
    <div className="sidebar">
    <div className="profile">
    <img 
            alt="Profile" 
            src="https://storage.googleapis.com/a1aa/image/fBSgqgbP36SYM6uTnNdqKoBvMTClOXJyeIu5dNVI5C0ePMPnA.jpg" 
            onClick={() => navigate('/companyprofile')} // Navigate on click
            style={{ cursor: 'pointer' }} // Add pointer cursor
        />   <h2>Sadashiv Tape</h2>
        <label>I'm committed to growth and innovation.</label>
        <label>Pune, Maharastra</label>
        <label>Prototype 1</label>
    </div>
    <div class="card">
        <div class="item">
            <div className='componyprofile-impression'>
                <img src={Impression}style={{marginRight:"10px"}}/>
                <span>Profile impression</span>
            </div>
            <div class="value">3k</div>
        </div>
        <div class="item">
            <div className='componyprofile-impression'>
                <img src={Product} style={{marginRight:"5px"}}/>
                <span>Products Impression</span>
            </div>
            <div class="value">34k</div>
        </div>
    </div>
    <div className="links">
        <h2>Employer</h2>
        <hr/>
        <a href="#">Post a Job</a>
        <a href="#">Browse Candidate</a>
        <a href="#">Employer Dashboard</a>
        <a href="#">Applications</a>
    </div>
    <div className="links">
        <h2>Candidate</h2>
        <hr/>
        <a href="#">Browse Jobs</a>
        <a href="#">Browse Employer</a>
        <a href="#">Candidate Dashboard</a>
        <a href="#">Saved Jobs</a>
    </div>
    <div className="links">
        <h2>Quick Links</h2>
        <hr/>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Products</a>
        <a href="#">Blogs</a>
    </div>
    <div className="links">
        <h2>Support</h2>
        <hr/>
        <a href="#">FAQ</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Condition</a>
    </div>
</div>
  )
}

export default LeftSideBar