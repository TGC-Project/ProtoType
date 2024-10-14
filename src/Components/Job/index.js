import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../Footer";
import './index.css'; // Ensure this CSS file exists

// Import company logos
import Genpact from "../../Images/genpact.png";
import Amazon from "../../Images/amazon.png";
import TATA from "../../Images/tata.png";
import Apple from "../../Images/apple.png";
import IBM from "../../Images/ibm.png";

const Job = () => {
  const navigate = useNavigate();

  const handleJobs = () => {
    navigate("/morejobs");
  };

  return (
    <div className="job-container">
      <header className="hero-section">
        <div className="hero-text-section">
          <h1>Juniors Make IT Work</h1>
          <p>Hire and invest in highly skilled employees now!</p>
          <button>Learn More</button>
        </div>
      </header>

      <div className="job-offers">
        <h1>Newest Job Offers</h1>
          <button className="view-more-btn" onClick={handleJobs}>View all job offers</button>
      </div>

      <section className="job-section">
        {jobListings.map((job, index) => (
          <div className="job" key={index}>
            <div className="job-title">
              <h2>{job.title}</h2>
              <p>{job.timeAgo}</p>
            </div>
            <div className="job-location">
              <h4>{job.company}</h4>
              <p>{job.location}</p>
            </div>
            <div className="job-description">
              <p>{job.description}</p>
            </div>
            <div className="job-actions">
              <button className="view-more-btn">View More</button>
              <a href={job.link}>
                <button className="view-more-btn">Apply</button>
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="feature-companies">
        <h1>Featured Companies</h1>
        <div className="companies-container">
          {companies.map((company, index) => (
            <div className="company-list" key={index}>
              <div className="company">
                <img src={company.logo} alt={`${company.name} Logo`} />
                <div className="rating">
                  <h3>{company.name}</h3>
                  <span className="star">★</span>{company.rating}|{company.reviews}+
                  <p>{company.description}</p>
                  <button>View jobs</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="clt-section">
        <div className="clt-text-section">
          <h1>Receive New Job Offers</h1>
          <p>Want to know about new postings early? Subscribe to our job offer digest.</p>
          <div className="email-container">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Job listings array
const jobListings = [
  {
    title: "Junior Java Developer",
    timeAgo: "2 hours ago",
    company: "Infosys",
    location: "Chennai, India",
    description: "I am looking for a Java developer. Project for public sector location. Chennai (during the pandemic remote work)",
    link: "https://www.infosys.com/careers.html"
  },
  {
    title: "Project Manager",
    timeAgo: "3 hours ago",
    company: "TCS",
    location: "Mumbai, India",
    description: "I am looking for a Project Manager who can handle any type of project and complete the work on time.",
    link: "https://ibegin.tcs.com/iBegin/jobs/search"
  },
  {
    title: "Python Developer",
    timeAgo: "1 hour ago",
    company: "Yoptima",
    location: "Bangalore, India",
    description: "I am looking for a Python developer. Project for online education. An app should be designed using Python.",
    link: "https://yoptima.com/careers/#"
  }
];

// Companies array
const companies = [
  {
    name: "Genpact",
    logo: Genpact,
    rating: "3.9",
    reviews: "28.2K+",
    description: "Global professional services firm."
  },
  {
    name: "Amazon",
    logo: Amazon,
    rating: "3.9",
    reviews: "28.2K+",
    description: "Global professional services firm."
  },
  {
    name: "Apple",
    logo: Apple,
    rating: "3.9",
    reviews: "28.2K+",
    description: "Global professional services firm."
  },
  {
    name: "TATA",
    logo: TATA,
    rating: "3.9",
    reviews: "28.2K+",
    description: "Global professional services firm."
  },
  {
    name: "IBM",
    logo: IBM,
    rating: "3.9",
    reviews: "28.2K+",
    description: "Global professional services firm."
  }
];

export default Job;
