import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from "../Footer";
import HomeImage from "../../Images/home-network-main-circle-nobg (1).png"
import VerifiedImage from "../../Images/Verified Account.png"
import Sellers from "../../Images/HOME-PAGE-LOGO-Services.png";
import Process from "../../Images/HOME-PAGE-LOGO-Services-2.png"
import Confidence from "../../Images/HOME-PAGE-LOGO-Services-3.png"

import "./index.css";

function Home() {

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
        title: 'Sremlines Process',
        content: "Stramline hiring and parchasing with trusted option",
        image: Process // Replace with your actual image path
    },
    {
        title: 'Hire Wuth Confidence',
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
          "logo": "https://storage.googleapis.com/a1aa/image/ccA8Mr6DJH7pEtgRkuwiFrDkb6qkk6Zh5ShGHHo4vfj0ealTA.jpg"
        },
        "location": "Dhaka, Bangladesh"
      },
      {
        "title": "Senior UX Designer",
        "jobType": "HALF-TIME",
        "salary": "$20,000 - $25,000",
        "company": {
          "name": "Microsoft",
          "logo": "https://storage.googleapis.com/a1aa/image/uBuZbUGkGPbuARDZk1He4bSyxYroDchskfWH8fiyQwefsXrcC.jpg"
        },
        "location": "Dhaka, Bangladesh"
      },
      {
        "title": "Marketing Officer",
        "jobType": "PART-TIME",
        "salary": "$20,000 - $25,000",
        "company": {
          "name": "Google Inc.",
          "logo": "https://storage.googleapis.com/a1aa/image/ccA8Mr6DJH7pEtgRkuwiFrDkb6qkk6Zh5ShGHHo4vfj0ealTA.jpg"
        },
        "location": "Dhaka, Bangladesh"
      },
      {
        "title": "Junior Graphic Designer",
        "jobType": "INTERNSHIP",
        "salary": "$10,000 - $15,000",
        "company": {
          "name": "Google Inc.",
          "logo": "https://storage.googleapis.com/a1aa/image/ccA8Mr6DJH7pEtgRkuwiFrDkb6qkk6Zh5ShGHHo4vfj0ealTA.jpg"
        },
        "location": "Dhaka, Bangladesh"
      },
      {
        "title": "Interaction Designer",  
        "jobType": "FULL-TIME",
        "salary": "$20,000 - $25,000",
        "company": {
          "name": "Google Inc.",
          "logo": "https://storage.googleapis.com/a1aa/image/ccA8Mr6DJH7pEtgRkuwiFrDkb6qkk6Zh5ShGHHo4vfj0ealTA.jpg"
        },
        "location": "Dhaka, Bangladesh"
      },
      {
        "title": "Project Manager",
        "jobType": "FULL-TIME",
        "salary": "$20,000 - $25,000",
        "company": {
          "name": "Google Inc.",
          "logo": "https://storage.googleapis.com/a1aa/image/ccA8Mr6DJH7pEtgRkuwiFrDkb6qkk6Zh5ShGHHo4vfj0ealTA.jpg"
        },
        "location": "Dhaka, Bangladesh"
      },

    
  ]


  return (
    <>
      <div className="container">
      <div className="head">
    <div className="head-text">
        <h1>Navigate your Future: Where career and <span className="highlight-ME">Business</span> Goals Align</h1>
        <p>Unite your career aspirations and business goals. Connect with employers and discover tailored opportunities to navigate your future successfully!</p>
        <button>Join Now</button>
    </div>
</div>

<div className="stats">
  {statsData.map((stat, index) => (
    <div className="stat" key={index}>
      <i className={stat.icon}></i>
      <h3>{stat.value}</h3>
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
          <h1>Featured Job</h1>
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
          <button cla>Join Now</button>
          </div>
        </div>
      </div>

      <div className="container-TC">
        <h1>Top companies</h1>
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


      <div className="testimonial-section-Tt">
          <h2>Testimonials</h2>
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
