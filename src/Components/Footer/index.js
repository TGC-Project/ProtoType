
import React from 'react';
import './index.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Prototype</h4>
                    <p>Call: 1234567</p>
                    <p>Baner, Pune</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Candidates</h4>
                    <ul>
                        <li>Browse Jobs</li>
                        <li>Browse Employers</li>
                        <li>Candidates Dashboard</li>
                        <li>Saved Jobs</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Employer</h4>
                    <ul>
                        <li>Post a Job</li>
                        <li>Browse Candidates</li>
                        <li>Employer Dashboard</li>
                        <li>Applications</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
