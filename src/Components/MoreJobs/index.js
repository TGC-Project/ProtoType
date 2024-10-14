import React from 'react';
import "./index.css"
const MoreJobs = () => {
  const jobs = [
    {
      title: "Junior Java Developer",
      timePosted: "2 hours ago",
      company: "Infosys",
      location: "Chennai, India",
      description: "I am looking for a Java developer. Project for public sector location. Chennai (during the pandemic remote work)",
      link: "https://www.infosys.com/careers.html"
    },
    {
      title: "Project Manager",
      timePosted: "3 hours ago",
      company: "TCS",
      location: "Mumbai, India",
      description: "I am looking for a project Manager who can manage any type of project and complete the work on time",
      link: "https://ibegin.tcs.com/iBegin/jobs/search"
    },
    {
      title: "Python Developer",
      timePosted: "1 hour ago",
      company: "Yoptima",
      location: "Bangalore, India",
      description: "I am looking for a Python developer. Project for online education. An app should be designed using Python.",
      link: "https://yoptima.com/careers/#"
    },
    {
      title: "Application Developer",
      timePosted: "2 hours ago",
      company: "Accenture",
      location: "Pune, India",
      description: "Design, build and configure applications to meet business process and application requirements. MuleSoft Anypoint Platform.",
      link: "https://www.infosys.com/careers.html"
    },
    {
      title: "Full Stack Engineer",
      timePosted: "3 hours ago",
      company: "Wipro",
      location: "Bhubaneswar, Pune, Chennai",
      description: "I am looking for a Full Stack Engineer who can handle any type of project and complete the work on time.",
      link: "https://ibegin.tcs.com/iBegin/jobs/search"
    },
  ];

  return (
    <div className="job-offers">
      <h1>Newest Job Offers</h1>
      {jobs.map((job, index) => (
        <section className="job-section" key={index}>
          <div className="job">
            <div className="job-title">
              <h2>{job.title}</h2>
              <p>{job.timePosted}</p>
            </div>
            <div className="job-location">
              <h4>{job.company}</h4>
              <p>{job.location}</p>
            </div>
            <div className="job-description">
              <p>{job.description}</p>
            </div>
            <a href={job.link}>
              <button className="view-more-btn" onClick={() => console.log(`Viewing more about ${job.title}`)}>View More</button>
              <button className="view-more-btn">Apply</button>
            </a>
          </div>
        </section>
      ))}
    </div>
  );
};

export default MoreJobs;
