import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Add this line
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'; 
import Footer from "../Footer";
import './index.css'; // Ensure this CSS file exists

// Import company logos
import JobImage from "../../Images/img.png"
import Genpact from "../../Images/genpact.png";
import Amazon from "../../Images/amazon.png";
import TATA from "../../Images/tata.png";
import Apple from "../../Images/apple.png";
import IBM from "../../Images/ibm.png";
import Airtel from "../../Images/airtel.png"

const Job = () => {
  const navigate = useNavigate();

  const handleJobs = () => {
    navigate("/morejobs");
  };

  const styles = {
    container: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    input: {
      padding: "10px",
      paddingLeft: "40px", // Add padding-left to make space for the icon
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      width: "100%",
      outline: "none",
    },
    icon: {
      position: "absolute",
      left: "15px",
      color: "#aaa",
    }
}

  const companies = [
    {
      name: "Genpact",
      logo: Genpact,
      rating: "3.9",
      reviews: "28.2K+",
    },
    {
      name: "Amazon",
      logo: Amazon,
      rating: "3.9",
      reviews: "28.2K+",
    },
    {
      name: "Apple",
      logo: Apple,
      rating: "3.9",
      reviews: "28.2K+",
    },
    {
      name: "TATA",
      logo: TATA,
      rating: "3.9",
      reviews: "28.2K+",
    },
    {
      name: "airtel",
      logo: Airtel,
      rating: "3.9",
      reviews: "28.2K+",
    },
    {
      name: "TATA",
      logo: TATA,
      rating: "3.9",
      reviews: "28.2K+",
    },
  ];
  const categories = [
    {
      title: "Technology",
      image: "https://storage.googleapis.com/a1aa/image/3asPURQAHM4qNNQzd48NsBpEPh8nh0NpbT0VXTGYUqeDM8zJA.jpg",
    },
    {
        title: "Technology",
        image: "https://storage.googleapis.com/a1aa/image/3asPURQAHM4qNNQzd48NsBpEPh8nh0NpbT0VXTGYUqeDM8zJA.jpg",
    },
    {
        title: "Technology",
        image: "https://storage.googleapis.com/a1aa/image/3asPURQAHM4qNNQzd48NsBpEPh8nh0NpbT0VXTGYUqeDM8zJA.jpg",
    },
    {
        title: "Technology",
        image: "https://storage.googleapis.com/a1aa/image/3asPURQAHM4qNNQzd48NsBpEPh8nh0NpbT0VXTGYUqeDM8zJA.jpg",
    },


    {
        title: "Technology",
        image: "https://storage.googleapis.com/a1aa/image/3asPURQAHM4qNNQzd48NsBpEPh8nh0NpbT0VXTGYUqeDM8zJA.jpg",
      },
      {
          title: "Technology",
          image: "https://storage.googleapis.com/a1aa/image/3asPURQAHM4qNNQzd48NsBpEPh8nh0NpbT0VXTGYUqeDM8zJA.jpg",
      },
      {
          title: "Technology",
          image: "https://storage.googleapis.com/a1aa/image/3asPURQAHM4qNNQzd48NsBpEPh8nh0NpbT0VXTGYUqeDM8zJA.jpg",
      },
      {
          title: "Technology",
          image: "https://storage.googleapis.com/a1aa/image/3asPURQAHM4qNNQzd48NsBpEPh8nh0NpbT0VXTGYUqeDM8zJA.jpg",
      },
      
    // Add more categories as needed
  ];

  const jobs = [
    {
      title: "Fresher UI/UX Designer (3 Year Exp.)",
      location: "Nairobi, Kenya",
      type: "Full Time",
      salary: "12000-13000",
      image: "https://storage.googleapis.com/a1aa/image/IZ79jn1YmoYCEdNT6vFDVj2JhoLVLyY2Ui2xPnN9VHjBGezJA.jpg",
    },
    {
        title: "Fresher UI/UX Designer (3 Year Exp.)",
        location: "Nairobi, Kenya",
        type: "Full Time",
        salary: "12000-13000",
        image: "https://storage.googleapis.com/a1aa/image/IZ79jn1YmoYCEdNT6vFDVj2JhoLVLyY2Ui2xPnN9VHjBGezJA.jpg",
      },
      {
        title: "Fresher UI/UX Designer (3 Year Exp.)",
        location: "Nairobi, Kenya",
        type: "Full Time",
        salary: "12000-13000",
        image: "https://storage.googleapis.com/a1aa/image/IZ79jn1YmoYCEdNT6vFDVj2JhoLVLyY2Ui2xPnN9VHjBGezJA.jpg",
      },
      {
        title: "Fresher UI/UX Designer (3 Year Exp.)",
        location: "Nairobi, Kenya",
        type: "Full Time",
        salary: "12000-13000",
        image: "https://storage.googleapis.com/a1aa/image/IZ79jn1YmoYCEdNT6vFDVj2JhoLVLyY2Ui2xPnN9VHjBGezJA.jpg",
      },
      {
        title: "Fresher UI/UX Designer (3 Year Exp.)",
        location: "Nairobi, Kenya",
        type: "Full Time",
        salary: "12000-13000",
        image: "https://storage.googleapis.com/a1aa/image/IZ79jn1YmoYCEdNT6vFDVj2JhoLVLyY2Ui2xPnN9VHjBGezJA.jpg",
      },
      {
        title: "Fresher UI/UX Designer (3 Year Exp.)",
        location: "Nairobi, Kenya",
        type: "Full Time",
        salary: "12000-13000",
        image: "https://storage.googleapis.com/a1aa/image/IZ79jn1YmoYCEdNT6vFDVj2JhoLVLyY2Ui2xPnN9VHjBGezJA.jpg",
      },
    // Add more jobs as needed
  ];

  return (
 
      <div className="job-container">
  {/* This is Image Code Start*/}
        <div className="companies-container"> 
          <div className="jobcontainer">
            <div className="box1">
              <div className="job-header">
                Find a job that aligns with <br></br> your interests and skills
              </div>
              <div className="subheader">
                Thousands of jobs in all the leading sectors are waiting for you.
              </div>
  
              <div className="search-box">
                <div className="input-container">
                  <div style={styles.container}>
                    <FontAwesomeIcon icon={faSearch} style={styles.icon} />
                    <input type="text" placeholder="Job title, Keyword..." />
                  </div>
                </div>
  
                <div className="input-container">
                  <div style={styles.container}>
                    <FontAwesomeIcon icon={faLocationDot} style={styles.icon} />
                    <div className="icon">
                      <input type="text" placeholder="Location" />
                    </div>
                  </div>
                </div>
                <button>Find Job</button>
              </div>
  
              <div className="suggestions">
                Suggestion:
                <a href="#">UI/UX Designer</a>,
                <span>
                  {" "}
                  <a href="#">Programming</a>,{" "}
                </span>
                <a href="#">Digital Marketing</a>,<a href="#">Video</a>,
                <a href="#">Animation</a>
              </div>
            </div>
            <div className="job-illustration">
              <img
                src={JobImage}
                alt="Illustration of a person looking at job listings"
              />
            </div>
          </div>
        </div>
  {/* This is Image code End  */}
  
        <div className="job-offers">
          <h1>Newest Job Offers</h1>
          <button className="view-more-btn">View all job offers</button>
        </div>
  
        <div className="jobcradcontainer">
          {[
            {
              Time: "Full Time",
              Location: "Pune, CA",
              Logo: Amazon,
              Title: "Project Manager",
              Details: "Marketing",
              Salary: "10-12lac / Exp 2-5",
            },
            {
              Time: "Full Time",
              Location: "NAshik, CA ",
              Logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
              Title: "Sales Manager",
              Details: "Marketing",
              Salary: "10-12lac / Exp 2-5",
            },
  
            {
              Time: "Full Time",
              Location: "Pune, CA",
              Logo: TATA,
              Title: "Project Manager",
              Details: "Marketing",
              Salary: "10-12lac / Exp 2-5",
            },
  
            {
              Time: "Full Time",
              Location: "Pune, CA",
              Logo: Genpact,
              Title: "Project Manager",
              Details: "Marketing",
              Salary: "10-12lac / Exp 2-5",
            },
            {
              Time: "Full Time",
              Location: "Pune, CA",
              Logo: "https://storage.googleapis.com/a1aa/image/D2Mgfb67zQURBaq52ZTL59wCvIwCRRqLrFD3wVY5qQDvKLzJA.jpg",
              Title: "Project Manager",
              Details: "Marketing",
              Salary: "10-12lac / Exp 2-5",
            },
            {
              Time: "Full Time",
              Location: "Pune, CA",
              Logo:Genpact,
              Title: "Project Manager",
              Details: "Marketing",
              Salary: "10-12lac / Exp 2-5",
            },
          ].map((job, index) => (
  
  // This Is Company Opening section Start
            <div key={index} className="job-card">
              <div className="JobDetailsdata">
                <div className="badge">{job.Time}</div>
                <div className="location">{job.Location}</div>
              </div>
              <img
                alt="Company logo"
                className="logo"
                height="50"
                src={job.Logo}
                width="50"
              />
              <div className="title">{job.Title}</div>
  
              <div className="details">{job.Details}</div>
              <div className="salary">{job.Salary}</div>
              <a className="apply-btn" href="#">
                Apply Now
              </a>
            </div>
          ))}
        </div>
  {/* This is Opening Section Ends */}
  
  {/* This is Comapany Section Start */}
  
        <section className="feature-companies">
          <div className="campany_view">
            <h1>Featured Companies</h1>
            <button className="view-more-btn">View All Campany</button>
          </div>
          <div className="companies-container">
            {companies.map((company, index) => (
              <div className="company-list" key={index}>
                <div className="company">
                  <img src={company.logo} alt={`${company.name} Logo`} />
                  <div className="rating">
                    <h3>{company.name}</h3>
                    <span className="star">★{company.rating}|{company.reviews}</span>
                    <button>View jobs</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
  {/* This is Comapany Section Ends */}
  
  {/* This is code of Flow Lobo Start */}
  <div class="logo-container">
            <div class="logo-track">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6NYcvSNhdlFo0D3owLNveyb4TCGf92g_KGwb9cPKbe9771328cHYcJY&s"
                alt="Amezone"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVX65s6JZp04vpGh8ggrpCMb5RVzM2fsS7Q&s"
                alt="Ford"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTJ9VoR-HljRsaJwAdT-RepdLspmrrSRmjQ&s"
                alt="Apple"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrnQW5P__5ziDVwT8YEE9XLWR5qCmNKM-r9g&s"
                alt="Himalaya"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRao_XzoMqeztUCNZn3RcS0jZzoXkmDk27VaA&s"
                alt="Reliance Digital"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzu9XoqapolBl9WzFySpp8DMlQnUpqdn-dA&s"
                alt="Zomato"
              />
  
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTB6TUormAk8oJ_zogwZxvcy3SN-VRfsxCA&s"
                alt="Instagram"
              />
              <img
                src="data:image/png;base64,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"
                alt="Microsoft"
              />
              <img
                src="data:image/png;base64,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"
                alt="Wipro"
              />
              <img
                src="data:image/png;base64,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"
                alt="Capgemini"
              />
              <img
                src="data:image/png;base64,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"
                alt="EY"
              />
              <img
                src="data:image/png;base64,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"
                alt="TCS"
              />
            </div>
          </div>
  {/* This is code of Flow Lobo Ends */}
  <div className="Popularcontainer">
        <div className="section-title">Popular Categories</div>
        <div className="categories">
          {categories.map((category, index) => (
            <div key={index} className="category">
              <img src={category.image} alt={`${category.title} Icon`} width="100" height="100" />
              <div className="category-title">{category.title}</div>
            </div>
          ))}
        </div>
  
        <div className="section-title">All Popular Listed Jobs</div>
        <div className="job-listings">
  {jobs.map((job, index) => (
    <div key={index} className="job-item">
      <img src={job.image} alt="Company Logo" width="50" height="50" />
      <div className="job-info">
        <div className="job-title">{job.title}</div>
        <div className="job-details">
          <div className="detail-item">
            <i className="fas fa-map-marker-alt"></i> {job.location}
          </div>
          <div className="detail-item">
            <i className="fas fa-clock"></i> {job.type}
          </div>
          <div className="detail-item">
            <i className="fas fa-dollar-sign"></i> {job.salary}
          </div>
        </div>
      </div>
      <button className="view-details">View Details</button>
    </div>
  ))}
</div>

  
        <button className="view-more">View More</button>
      </div>
  
  
  
  {/* This Is Subscribe  Code Start */}
        <section className="clt-section">
          <div className="clt-text-section">
            <h1>Receive New Job Offers</h1>
            <p>
              Want to know about new postings early? Subscribe to our job offer
              digest.
            </p>
            <div className="email-container">
              <input type="email" placeholder="Enter your email address" />
              <button className='subscribe-button'>Subscribe</button>
            </div>
          </div>
        </section>
  {/* This Is Subscribe Code Ends Start */}
  {/* This Footer code Start */}
 <Footer/>
  {/* This Footer code Ends */}
  
      </div>
  );
};
export default Job;
