import React, { useState } from 'react';
import './index.css'; // Import your CSS file
import ReactPaginate from 'react-js-pagination';

const MoreJobs = () => {
    const [radius, setRadius] = useState(32);
    const [level, setLevel] = useState('Mid Level');
    const [experience, setExperience] = useState('4 - 6 Years');
    const [education, setEducation] = useState([]);
    const [gender, setGender] = useState('Male');
    const [activePage, setActivePage] = useState(1);
    const itemsPerPage = 5; // Number of items per page

    const jobCards = [
        {
            id: 1,
            name: "Cody Fisher",
            position: "Marketing Officer",
            location: "New York",
            experience: "3 Years experience",
            level: "Mid Level",
            education: "Graduation",
            gender: "Male",
            imgSrc: "https://placehold.co/50x50"
        },
        {
            id: 2,
            name: "Jane Doe",
            position: "Software Engineer",
            location: "San Francisco",
            experience: "5 Years experience",
            level: "Expert Level",
            education: "Bachelor Degree",
            gender: "Female",
            imgSrc: "https://placehold.co/50x50"
        },
        {
            id: 3,
            name: "Alice Smith",
            position: "Product Manager",
            location: "Los Angeles",
            experience: "4 Years experience",
            level: "Mid Level",
            education: "Master Degree",
            gender: "Female",
            imgSrc: "https://placehold.co/50x50"
        },
        {
            id: 1,
            name: "Cody Fisher",
            position: "Marketing Officer",
            location: "New York",
            experience: "3 Years experience",
            level: "Mid Level",
            education: "Graduation",
            gender: "Male",
            imgSrc: "https://placehold.co/50x50"
        },
        {
            id: 2,
            name: "Jane Doe",
            position: "Software Engineer",
            location: "San Francisco",
            experience: "5 Years experience",
            level: "Expert Level",
            education: "Bachelor Degree",
            gender: "Female",
            imgSrc: "https://placehold.co/50x50"
        },
        {
            id: 3,
            name: "Alice Smith",
            position: "Product Manager",
            location: "Los Angeles",
            experience: "4 Years experience",
            level: "Mid Level",
            education: "Master Degree",
            gender: "Female",
            imgSrc: "https://placehold.co/50x50"
        },
        // Add more unique job listings as needed
    ];

    const totalItemsCount = jobCards.length;

    // Calculate the index of the first and last job card for the current page
    const indexOfLastItem = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = jobCards.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    return (
        <>
            <div className="view-job-container">
                <h1>Newest Job Offers</h1>
                <div className="view-job-all-box">
                    <div className="view-job-right-side">
                        <div className="view-job-sidebar">
                            <div className="view-job-filter-group">
                                <h3>Location Radius: <span id="radius-value">{radius} miles</span></h3>
                                <div className="slider-container">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={radius}
                                        onChange={(e) => setRadius(e.target.value)}
                                    />
                                    <span>{radius} miles</span>
                                </div>
                            </div>
                            <div className="view-job-filter-group">
                                <h3>Candidate Level</h3>
                                {['Entry Level', 'Mid Level', 'Expert Level'].map(option => (
                                    <label key={option}>
                                        <input
                                            type="radio"
                                            name="level"
                                            value={option}
                                            checked={level === option}
                                            onChange={() => setLevel(option)}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                            <div className="view-job-filter-group">
                                <h3>Experiences</h3>
                                {['Freshers', '1 - 2 Years', '2 - 4 Years', '4 - 6 Years', '6 - 8 Years', '8 - 10 Years', '10 - 15 Years', '15+ Years'].map(option => (
                                    <label key={option}>
                                        <input
                                            type="radio"
                                            name="experience"
                                            value={option}
                                            checked={experience === option}
                                            onChange={() => setExperience(option)}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                            <div className="view-job-filter-group">
                                <h3>Education</h3>
                                {['All', 'High School', 'Intermediate', 'Graduation', 'Master Degree', 'Bachelor Degree'].map(option => (
                                    <label key={option}>
                                        <input
                                            type="checkbox"
                                            value={option}
                                            checked={education.includes(option)}
                                            onChange={() => {
                                                setEducation(prev =>
                                                    prev.includes(option) ? prev.filter(e => e !== option) : [...prev, option]
                                                );
                                            }}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                            <div className="view-job-filter-group">
                                <h3>Gender</h3>
                                {['Male', 'Female', 'Others'].map(option => (
                                    <label key={option}>
                                        <input
                                            type="radio"
                                            name="gender"
                                            value={option}
                                            checked={gender === option}
                                            onChange={() => setGender(option)}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="view-job-left-side">
                        {currentItems.map(job => (
                            <div key={job.id} className="view-job-profile-card">
                                <img src={job.imgSrc} alt="Profile picture" height="60" width="60" />
                                <div className="view-job-profile-info">
                                    <h2>{job.name}</h2>
                                    <p>{job.position}</p>
                                    <p className="location"><i className="fas fa-map-marker-alt"></i> {job.location}</p>
                                    <p className="experience"><i className="fas fa-briefcase"></i> {job.experience}</p>
                                </div>
                                <div className="view-job-profile-actions">
                                    <i className="far fa-bookmark bookmark"></i>
                                    <a className="view-Details" href="#">View Details <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pagination-container">
                    <ReactPaginate
                        activePage={activePage}
                        itemsCountPerPage={itemsPerPage}
                        totalItemsCount={totalItemsCount}
                        pageRangeDisplayed={2}
                        onChange={handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                </div>
            </div>
        </>
    );
};

export default MoreJobs;
