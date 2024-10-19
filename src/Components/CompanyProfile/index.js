import { useState } from "react";
import "./index.css"; // Ensure this contains your CSS

const CompanyProfile = () => {
    const [activeSection, setActiveSection] = useState('ProductCatalogue');
    const [isFollowed, setIsFollowed] = useState(false);

    const jobDetails = [
        {
            title: "Fresher Backend Developer",
            location: "Pune, Maharashtra",
            type: "Full Time",
            salary: "12000-13000",
            exp: "0-1 years",
            description: "As a Fresher Backend Developer, you will play a key role in developing and maintaining server-side logic.",
            requirements: [
                "Proficiency in backend programming languages (e.g., Java, Python, Node.js).",
                "Understanding of RESTful API design.",
                // More requirements...
            ],
            responsibilities: [
                "Develop and maintain server-side logic.",
                "Collaborate with front-end developers.",
                // More responsibilities...
            ],
        },
        // Other job details...
    ];

    const postDetails = [
        {
            title: "New Product Launch: SD Ultima Royal Luxury Termite Terminator Paint",
            date: "October 10, 2023",
            excerpt: "Discover our latest product that provides superior protection against termites."
        },
        // Other posts...
    ];

    const ProductCatalogue = () => (
        <div className="product-catalogue">
            {Array(4).fill().map((_, index) => (
                <div key={index} className="product-item">
                    <img src="product1.jpg" alt="Product 1" />
                    <h3>BIRLA OPUS ONE PURE ELEGANCE 20L</h3>
                    <p>200 Rs</p>
                </div>
            ))}
            {Array(5).fill().map((_, index) => (
                <div key={index} className="product-item">
                    <img src="product2.jpg" alt="Product 2" />
                    <h3>SD Ultima Royal Luxury Termite Terminator Paint</h3>
                    <p>25000 Rs</p>
                </div>
            ))}
        </div>
    );

    const About = () => (
        <div className="about">
            <h2>Overview</h2>
            <p>At Time Global Consultancy, we deliver innovative software solutions...</p>
            <h2>Location</h2>
            <iframe src="https://www.google.com/maps/embed?pb=..." title="Company Location"></iframe>
        </div>
    );

    const Careers = () => {
        const [selectedJob, setSelectedJob] = useState(jobDetails[0]);

        const JobVacancy = ({ job }) => (
            <div className="job-vacancy" onClick={() => setSelectedJob(job)}>
                <h3>{job.title}</h3>
                <p>{job.location}</p>
                <p>{job.exp}</p>
                <p>{job.type} | {job.salary}</p>
            </div>
        );

        const JobDescription = ({ job }) => (
            <div className="job-description">
                <h2>Job Description</h2>
                <p><strong>Job Title:</strong> {job.title}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <h3>Role Overview:</h3>
                <p>{job.description}</p>
                <h3>Requirements:</h3>
                <ul>
                    {job.requirements.map((req, index) => <li key={index}>{req}</li>)}
                </ul>
                <h3>Responsibilities:</h3>
                <ul>
                    {job.responsibilities.map((resp, index) => <li key={index}>{resp}</li>)}
                </ul>
            </div>
        );

        return (
            <div className="careers">
                <h3>Job Vacancies</h3>
                <div className="job-list">
                    {jobDetails.map((job, index) => (
                        <JobVacancy key={index} job={job} />
                    ))}
                </div>
                <JobDescription job={selectedJob} />
            </div>
        );
    };

    const Blogs = () => (
        <div className="blogs">
            <h3>Latest Blogs</h3>
            <ul>
                {postDetails.map((post, index) => (
                    <li key={index}>
                        <h4>{post.title}</h4>
                        <p>{post.date}</p>
                        <p>{post.excerpt}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="company-profile">
            <div className="companyprofile-header">
                <h1>Time Global Consultancy</h1>
                <p>Creating new opportunities</p>
                <button onClick={() => setIsFollowed(!isFollowed)}>
                    {isFollowed ? 'Followed' : 'Follow'}
                </button>
            </div>
            <nav>
                <button onClick={() => setActiveSection('ProductCatalogue')}>Product Catalogue</button>
                <button onClick={() => setActiveSection('About')}>About</button>
                <button onClick={() => setActiveSection('Careers')}>Careers</button>
                <button onClick={() => setActiveSection('Blogs')}>Blogs</button>
            </nav>
            <div className="content">
                {activeSection === 'ProductCatalogue' && <ProductCatalogue />}
                {activeSection === 'About' && <About />}
                {activeSection === 'Careers' && <Careers />}
                {activeSection === 'Blogs' && <Blogs />}
            </div>
        </div>
    );
};

export default CompanyProfile;
