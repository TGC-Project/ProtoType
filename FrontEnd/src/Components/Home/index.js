import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from "../Footer";
import HomeImage from "../../Images/home-network-main-circle-nobg (1).png"
import VerifiedImage from "../../Images/Verified Account.png"
import Sellers from "../../Images/HOME-PAGE-LOGO-Services-removebg-preview.png";
import Process from "../../Images/HOME-PAGE-LOGO-Services-2-removebg-preview.png"
import Confidence from "../../Images/HOME-PAGE-LOGO-Services-3-removebg-preview.png"

import "./index.css";
import { useNavigate } from 'react-router-dom';

function Home() {

const navigate=useNavigate();
  const handlejoin=()=>{
    navigate("/signup")
  }

  const statsData = [
    { value: "1,75,324", label: "Products", icon: "fas fa-briefcase" },
    { value: "97,354", label: "Companies", icon: "fas fa-building"  },
    { value: "38,47,154", label: "Verified Users", icon: "fas fa-user-friends"},
    { value: "7,532", label: "New Jobs", icon: "fas fa-laptop-code" },
  ];
  

  const cards = [
    {
        title: 'Trusted Sellers',
        content: "Trustworthy Partnerships for secure transaction",
        image: Sellers
    },
    {
        title: 'Stramlines Process',
        content: "Stramline hiring and parchasing with trusted option",
        image: Process // Replace with your actual image path
    },
    {
        title: 'Hire With Confidence',
        content: "Discover candidates who meet your needs.",
        image: Confidence // Replace with your actual image path
    }
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const testimonials = [
    {
      name: "Robert Fox",
      role: "UI/UX Designer",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis optio iusto quisquam veniam numquam quae, nulla consectetur fuga aliquam assumenda expedita magni, facilis nihil illum enim vel deserunt reiciendis molestias?",
      image: "https://storage.googleapis.com/a1aa/image/iUsexGXCipTQVaoGlj7M2XgBM3voIn1429Krjo3QnyGmjtyJA.jpg",
    },
    {
      name: "Bessie Cooper",
      role: "Director XYZ",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, laudantium mollitia. Iure harum sapiente fuga vel sint. Eos labore, corporis voluptatum veniam dolorum ipsum sapiente soluta alias maiores. Culpa, sapiente.",
      image: "https://storage.googleapis.com/a1aa/image/pAZHF1qJphJvCNm02uqEvmdE7hoWvVR4RDdNqCRuWVnzxW5E.jpg",
    },
    {
      name: "Jane Cooper",
      role: "Photographer",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quaerat quibusdam hic neque pariatur vitae quia, omnis ipsam aliquam repellat totam id explicabo esse voluptatibus. Quidem dolor veniam eum qui?",
      image: "https://storage.googleapis.com/a1aa/image/4GeeGF1ykfEDUIOStG1NKP6ebPcU4CwELVd6WA1j6ADe5YrcC.jpg",
    },
    {
      name: "John Doe",
      role: "Software Engineer",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Alice Smith",
      role: "Project Manager",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      image: "https://via.placeholder.com/40",
    },
    {
      name: "Emma Johnson",
      role: "Data Analyst",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
      image: "https://via.placeholder.com/40",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? Math.max(0, testimonials.length - itemsPerPage) : prevIndex - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - itemsPerPage ? 0 : prevIndex + itemsPerPage
    );
  };

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);


  const jobs = [

      {
        "title": "Technical Support Specialist",
        "jobType": "FULL-TIME",
        "salary": "$20,000 - $25,000",
        "company": {
          "name": "Google Inc.",
          "logo": "data:image/png;base64,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"
        },
        "location": "Dhaka, Bangladesh"
      },
      {
        "title": "Senior UX Designer",
        "jobType": "HALF-TIME",
        "salary": "$20,000 - $25,000",
        "company": {
          "name": "L & T",
          "logo": "data:image/png;base64,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"
          },
        "location": "Dhaka, Bangladesh"
      },
      {
        "title": "Marketing Officer",
        "jobType": "PART-TIME",
        "salary": "$20,000 - $25,000",
        "company": {
          "name": "Deloitte ",
          "logo": "data:image/png;base64,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"
        },
        "location": "Dhaka, Bangladesh"
      },
      {
        "title": "Junior Graphic Designer",
        "jobType": "INTERNSHIP",
        "salary": "$10,000 - $15,000",
        "company": {
          "name": "Amdocs.",
          "logo": "data:image/jpeg;base64,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"
        },
        "location": "Dhaka, Bangladesh"
      },
      {
        "title": "Interaction Designer",  
        "jobType": "FULL-TIME",
        "salary": "$20,000 - $25,000",
        "company": {
          "name": "Airtel.",
          "logo":"data:image/png;base64,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"
        },
        "location": "Dhaka, Bangladesh"
      },
      {
        "title": "Project Manager",
        "jobType": "FULL-TIME",
        "salary": "$20,000 - $25,000",
        "company": {
          "name": "Bosch.",
          "logo": "data:image/png;base64,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"
        },
        "location": "Dhaka, Bangladesh"
      },

    
  ]


  return (
    <>
      <div className="container3">
      <div className="head">
    <div className="head-text">
        <h1>Navigate your Future: Where career and <span className="highlight-ME">Business</span> Goals Align</h1>
        <p>Unite your career aspirations and business goals. Connect with employers and discover tailored opportunities to navigate your future successfully!</p>
        <button id='join' onClick={handlejoin}>Join Now</button>
    </div>
</div>

<div className="stats">
  {statsData.map((stat, index) => (
    <div className="stat" key={index}>
      <i className={stat.icon}></i>
      <h4>{stat.value}</h4>
      <p>{stat.label}</p>
    </div>
  ))}
</div>

      </div>

      <div className="container-MOST-P">
        <h1>Most Popular Product Categories</h1>
        <div className="categories-MOST-P">
          {["Building Construction Material & Equipment", "Electronics & Electrical Goods & Supplies", "Pharmaceutical Drug,& Consultation", "Hospital and Medical Equipment", "Industrial Plants, Machinery & Equipment", "Industrial & Engineering Products and Supplies", "Food, Agriculture & Farming", "Apparel, Clothing & Garments", "Packaging Material, Supplies & Machines", "Chemicals, Solvents & Allied Products"].map((category, index) => (
            <div className="category-MOST-P" key={index}>
              <h2>{category}</h2>
              <p>45,904 products</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container-VC">
        <h1>Hire <span className="highlight-VC">Verified Candidates</span> Aligned with Your Business</h1>
      </div>

      <div className="container-JD">
        <div className="header-JD">
          <h3>Featured Job</h3>
          <a href="#">View All</a>
        </div>
        <div className="job-list-JD">
          {jobs.map((job, index) => (
            <div className="job-card-JD" key={index}>
              <h2>{job.title}</h2>
              <div className="job-type-JD">{job.jobType}</div>
              <div className="salary-JD">Salary: {job.salary}</div>
              <div className="company-JD">
                <img
                  alt={`${job.company.name} logo`}
                  height="20"
                  src={job.company.logo}
                  width="20"
                />
                {job.company.name}
              </div>
              <div className="location-JD">{job.location}</div>
            </div>
          ))}
        </div>
      </div>


      <div className="container1">
        <div className="header">
        <div className="illustration">
      <motion.img
        alt="Illustration of a person working on a laptop with various icons around them"
        height="300"
        src={HomeImage}
        width="500"
      />
    </div>
          <div className="header-text">
            <h1>We Have <sapn className="highlight-VC">Verified Professional</sapn> network in the world</h1>
            <p>Join the largest veriffied professional globaly.connecting professionals across industries ,Our platform foster collaction,,networking and growth,empowring you to reach your carrer golas.Discover oppourtunities,share insights,and build meaningful relationship today!</p>
            <div className="paragraph-container">
        <div className="paragraph">
          <img src={VerifiedImage} alt="Check icon" className="check-icon" />
          <p>Join the largest verified professional globally, connecting professionals across industries.</p>
        </div>
        <div className="paragraph">
          <img src={VerifiedImage} alt="Check icon" className="check-icon" />
          <p>Our platform fosters collaboration, networking, and growth, empowering you to reach your career goals.</p>
        </div>
      </div>
          <button id='join' onClick={handlejoin}>Join Now</button>
          </div>
        </div>
      </div>


    
      <h3 className='testimonial-section-head'>Top Companies</h3>
      <div className="container-TC">
        <div className="company-list-TC">
          {[
            {
              name: 'Google',
              location: 'Pune, India',
              logo: 'https://storage.googleapis.com/a1aa/image/vVUrq1ddJGrSGlnofjWohaocMcv8BTon7UOn1DwatYBkOtyJA.jpg',
            },
            {
              name: 'Amazon',
              location: 'Dhaka, Bangladesh',
              logo: 'https://storage.googleapis.com/a1aa/image/khFTsgf174ygF6faNhYleVFNDpYQgNcjnJqz77N2imxc60KnA.jpg',
            },
            {
              name: 'Flipkart',
              location: 'Dhaka, Bangladesh',
              logo: 'https://storage.googleapis.com/a1aa/image/0zULJIWI2wYzCNGyvxP1hrTnxVjht5jFqeglGzGo7foMdalTA.jpg',
            },
            {
              name: 'wework',
              location: 'Pune, Maharashtra',
              logo: 'https://storage.googleapis.com/a1aa/image/i2AV6GErYZoJAh1TtkvHyMedxgdaSElMoqoRC3GKolfKdalTA.jpg',
            },
            {
              name: 'Malpari',
              location: 'Dhaka, Bangladesh',
              logo: 'https://storage.googleapis.com/a1aa/image/oeXXoL4yYRR4JqNUazoPfkJiHDUMsl0d6C01uJ7cl8OLdalTA.jpg',
            },
            {
              name: 'Poonawalla',
              location: 'Dhaka, Bangladesh',
              logo: 'https://storage.googleapis.com/a1aa/image/NVYrgMqHmmorD5zIP3XUWyRxGB58EDt01tpPlH6Y9w4TnW5E.jpg',
            },
          ].map((company, index) => (
            <div className="company-card-TC" key={index}>
              <img alt={`${company.name} logo`} height="40" src={company.logo} width="40" />
              <div className="company-info-TC">
                <div className="company-name-TC">
                  {company.name}
                  <span className="featured-TC"> Featured </span>
                </div>
                <div className="location-TC">
                  <i className="fas fa-map-marker-alt-TC"></i>
                  {company.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      

      <div className="container2">
    {cards.map((card, index) => (
        <div className="card" key={index}>
            <img className="AboutPolicy" src={card.image} alt={`Image ${index + 1}`} />
            <h1>{card.title}</h1>
            <p>{card.content}</p>
        </div>
    ))}
</div>

<h3 className='testimonial-section-head'>Testimonials</h3>
      <div className="testimonial-section-Tt">
          <div className="testimonial-container-Tt">
            <i className="fas fa-chevron-left arrow-Tt" onClick={handlePrev}></i>
            <div className="testimonial-cards">
              {currentTestimonials.map((testimonial, index) => (
                <div className="testimonial-card-Tt" key={index}>
                  <div className="stars-Tt">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p>{testimonial.text}</p>
                  <div className="author-Tt">
                    <img
                      alt={`Portrait of ${testimonial.name}`}
                      height="40"
                      src={testimonial.image}
                      width="40"
                    />
                    <div>
                      <div className="name-Tt">{testimonial.name}</div>
                      <div className="role-Tt">{testimonial.role}</div>
                    </div>
                  </div>
                  <i className="fas fa-quote-right quote-icon"></i>
                </div>
              ))}
            </div>
            <i className="fas fa-chevron-right arrow-Tt" onClick={handleNext}></i>
          </div>
        </div>


      <Footer />
    </>
  );
}

export default Home;
