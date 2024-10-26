
import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-column">
        <h6>Prototype1</h6>
        <p style={{ fontSize: '12px' }}>
          Call now: <span className="highlight">1234 56789</span>
        </p>
        <p>Base: Baner</p>
      </div>
      <div className="footer-column">
        <h6>Quick Link</h6>
        <a href="#">About</a>
        <a href="#" className="highlight">Contact</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
      </div>
      <div className="footer-column">
        <h6>Candidates</h6>
        <a href="#">Browse Jobs</a>
        <a href="#">Browse Employers</a>
        <a href="#">Candidate Dashboard</a>
        <a href="#">Saved Jobs</a>
      </div>
      <div className="footer-column">
        <h6>Employers</h6>
        <a href="#">Post a Job</a>
        <a href="#">Browse Candidates</a>
        <a href="#">Employer Dashboard</a>
        <a href="#">Applications</a>
      </div>
      <div className="footer-column">
        <h6>Support</h6>
        <a href="#">FAQs</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
    </div>
  );
};

export default Footer;
