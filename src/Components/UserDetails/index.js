import React, { useState } from 'react';
import Sandip from "../../Images/sandip-removebg-preview.png"
import Shivaji from "../../Images/shrishivaji.jpg"
import Logo from "../../Images/time_global_consultancy_logo.jpg"
import Capgemini from "../../Images/capgeminilogo.jpg"
import Background from "../../Images/coverpage.jpg"
import LeftSideBar from '../LeftSideBar';
import jobportal from "../../Images/jobportal.jpg"


const UserDetails = () => {
    const [isFollowed, setIsFollowed] = useState(false);
    const [followersCount, setFollowersCount] = useState(147);
    const [activeTab, setActiveTab] = useState('About');
    const [skills, setSkills] = useState(['SQL', 'Tableau', 'Python(programming)', 'Snowflake']);
    const [newSkill, setNewSkill] = useState('');

    const handleFollowClick = () => {
        setIsFollowed(!isFollowed);
        setFollowersCount(isFollowed ? followersCount - 1 : followersCount + 1);
    };

    const handleAddSkill = () => {
        if (newSkill.trim() !== '') {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill('');
        }
    };

    const handleSkillKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddSkill();
        }
    };
    const [showMoreInfo, setShowMoreInfo] = React.useState(false);
 
const handleViewProjectClick = () => {
    setShowMoreInfo(!showMoreInfo);
};
 

const projects = [
    {
      "title": "Job Portal Development",
      "description": "The objective of this project is to create a user-friendly online platform that connects job seekers with employers facilitating job searches, applications, and recruitment processes.",
      "image": "jobportal",
      "duration": "6 months",
      "technologies": ["React", "Node.js", "MongoDB"],
      "teamSize": 5,
      "status": "In Progress"
    },
    {
      "title": "Project 2 Title",
      "description": "Short description of Project 2...",
      "image": "https://placehold.co/100x100",
      "duration": "3 months",
      "technologies": ["Technology 1", "Technology 2"],
      "teamSize": 3,
      "status": "Completed"
    },
    {
      "title": "Project 3 Title",
      "description": "Short description of Project 3...",
      "image": "https://placehold.co/100x100",
      "duration": "4 months",
      "technologies": ["Technology 1", "Technology 2"],
      "teamSize": 4,
      "status": "In Progress"
    }
  ];
  

    return (
        <div className="feed-container">

            <LeftSideBar/>
        <div className="max-w-4xl m-auto p-4">
            <div className="bg-white rounded-lg shadow-md">
                <div className="relative">
                    <img src={Background}alt="Cover Image" className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="absolute top-20 left-4">
                        <img src={Logo} alt="logo" className="w-24 h-24 rounded-full border-3 mt-11 border-black" />
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-2xl font-semibold">John Doe</h1>
                            <p className="text-gray-600">UI Designer at TGC</p>
                            <p className="text-gray-500">IT Services and IT Consulting</p>
                            <p className="text-gray-500">Pune, Maharashtra · 147 products · {followersCount} Followers</p>
                        </div>
                        <button onClick={handleFollowClick} className="mt-4 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-full">
                            {isFollowed ? 'Following' : 'Follow'}
                        </button>
                    </div>
                    <div className="mt-4 border-b border-gray-200 sticky top-0 bg-white z-10">
                        <nav className="flex space-x-4 justify-center md:justify-start">
                            <button  onClick={() => setActiveTab('Projects')} className={`pb-2 border-b-2 ${activeTab === 'Projects' ? 'border-blue-500 text-black' : 'border-transparent text-gray-600'} hover:border-gray-400`}>Projects</button>
                            <button onClick={() => setActiveTab('About')} className={`pb-2 border-b-2 ${activeTab === 'About' ? 'border-blue-500 text-black' : 'border-transparent text-gray-600'} hover:border-gray-400`}>About</button>
                            <button onClick={() => setActiveTab('Contact')} className={`pb-2 border-b-2 ${activeTab === 'Contact' ? 'border-blue-500 text-black' : 'border-transparent text-gray-600'} hover:border-gray-400`}>Contact</button>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Project */}
            {activeTab === 'Projects' && (
  <div className="mt-6 bg-white rounded-lg shadow-md p-4 ">
    <h2 className="text-xl font-semibold mb-4">Projects</h2>
    <div className="grid gap-6 md:grid-rows-2" >
      {projects.map((project, index) => (
        <div className="bg-gray-100 rounded-lg shadow-md p-4" key={index}>
          <img src={jobportal} alt={jobportal} className="w-250 h-[300px] object-cover rounded-lg mb-4" />
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>
          <button onClick={handleViewProjectClick} className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-full">View Project</button>
          {showMoreInfo && (
            <div className="mt-4 text-gray-700">
              <p>More information about the project:</p>
              <ul className="list-disc list-inside">
                <li>Project Duration: {project.duration}</li>
                <li>Technologies Used: {project.technologies.join(', ')}</li>
                <li>Team Size: {project.teamSize} members</li>
                <li>Project Status: {project.status}</li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)}


            {activeTab === 'About' && (
                <div>
                    <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">About</h2>
                        <p className="text-gray-700">
                            I am a passionate UI/UX designer with over three years of experience in creating user-centered digital products...
                        </p>
                        <div className="border border-gray-300 rounded-lg p-3 mb-6 m-3">
                            <div className="p-3">
                                <p className="text-gray-600">Skills</p>
                                <div className="flex flex-wrap gap-4">
                                    {skills.map((skill, index) => (
                                        <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full">{skill}</span>
                                    ))}
                                    <input
                                        type="text"
                                        value={newSkill}
                                        onChange={(e) => setNewSkill(e.target.value)}
                                        onKeyPress={handleSkillKeyPress}
                                        placeholder="Add skill"
                                        className="border border-gray-300 rounded-full px-2 py-1"
                                    />
                                    <button onClick={handleAddSkill} className="bg-blue-500 text-white px-2 py-1 rounded-full">+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Experience</h2>
                        <div className="flex items-start mb-4">
                            <img src={Logo} alt="logo" className="w-15 h-12 rounded-full mr-4" />
                            <div>
                                <h3 className="text-lg font-semibold">UI/UX Designer Intern</h3>
                                <p className="text-gray-600">Time Global Consultancy</p>
                                <p className="text-gray-500">Baner, Pune, Maharashtra</p>
                                <p className="text-gray-500">Oct 2024-Present · 1 month</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <img src={Capgemini} alt="capgeminilogo" className="w-14 h-14 rounded-full mr-4" />
                            <div>
                                <h3 className="text-lg font-semibold">Data Engineer</h3>
                                <p className="text-gray-600">Capgemini</p>
                                <p className="text-gray-500">Pune, Maharashtra</p>
                                <p className="text-gray-500">Oct 2023-Sept 2024 · 1 year</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Education</h2>
                        <div className="flex items-start mb-4">
                            <img src={Sandip} alt="sandip" className="w-15 h-16 rounded-full mr-4" />
                            <div>
                                <h3 className="text-lg font-semibold">Masters of Computer Application</h3>
                                <p className="text-gray-600">Sandip University</p>
                                <p className="text-gray-500">Nashik, Maharashtra</p>
                                <p className="text-gray-500">2022-2024</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <img src={Shivaji} alt="shrishivaji" className="w-15 h-16 rounded-full mr-4" />
                            <div>
                                <h3 className="text-lg font-semibold">BSc</h3>
                                <p className="text-gray-600">Shri Shivaji College</p>
                                <p className="text-gray-500">Akola, Maharashtra</p>
                                <p className="text-gray-500">2019-2022</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4">Languages</h2>
                        <div className="mb-4">
                            <p className="text-gray-800">English</p>
                            <p className="text-gray-500">Native</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-800">Hindi</p>
                            <p className="text-gray-500">Full professional proficiency</p>
                        </div>
                        <div>
                            <p className="text-gray-800">Marathi</p>
                            <p className="text-gray-500">Full professional proficiency</p>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'Contact' && (
                <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Contact</h2>
                    <div className="border border-gray-300 rounded-lg p-4 mb-4">
                        <p className="text-gray-600">Email:</p>
                        <p className="text-blue-500">cyxtpsut@gmail.com</p>
                    </div>
                </div>
            )}
        </div>
    </div>

    );
};

export default UserDetails;
