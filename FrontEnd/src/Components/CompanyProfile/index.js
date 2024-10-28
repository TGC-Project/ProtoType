import { useState } from "react";
import "./index.css";
import Product from "../../Images/Products impression.png";
import Impression from "../../Images/Profile impression.png"
import { useNavigate } from 'react-router-dom';

const CompanyProfile = () => {

    const navigate = useNavigate();

    const [isFollowed, setIsFollowed] = useState(false);
    const [followersCount, setFollowersCount] = useState(147); // Initial follower count
  
    const handleFollowToggle = () => {
      setIsFollowed(!isFollowed);
      setFollowersCount(prevCount => isFollowed ? prevCount - 1 : prevCount + 1);
    };

    

    const ProductCatalogue = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {Array(4).fill().map((_, index) => (
                <div key={index} className=" bg-white rounded-lg shadow-md p-4 slide-up hover-zoom">
                    <img src="product1.jpg" alt="product1" className="w-full h-40 object-cover rounded-lg" />
                    <h3 className="mt-4 text-gray-700 font-medium hover-text text-sm">BIRLA OPUS ONE PURE ELEGANCE 20L, Packaging Size: Bucket of 20 Litre</h3>
                    <p className="mt-2 text-gr ProductCatalogueay-900 font-bold text-sm">200 Rs</p>
                </div>
            ))}
            {Array(5).fill().map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 slide-up hover-zoom">
                    <img src="product2.jpg" alt="product2" className="w-full h-40 object-cover rounded-lg" />
                    <h3 className="mt-4 text-gray-700 font-medium hover-text text-sm">SD Ultima Royal Luxury Termite Terminator Paint - 20 ltrs</h3>
                    <p className="mt-2 text-gray-900 font-bold text-sm">25000 Rs</p>
                </div>
            ))}
        </div >
    );

    const About = () => (
        <div className="max-w-5xl mx-50px p-4-company-profile">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold mb-4-company-profile">Overview</h2>
                <p className="mb-4-company-profile text-sm">
                    At Time Global Consultancy, we are dedicated to delivering innovative software solutions that empower businesses to thrive in a digital landscape. Founded in 2010, we pride ourselves on our commitment to quality, customer satisfaction, and continuous innovation.
                </p>
                <p className="mb-4-company-profile text-sm">
                    Our mission is to transform the way organizations operate by providing cutting-edge solutions that drive efficiency and growth. We achieve this through a combination of industry expertise, innovative technology, and a customer-centric approach.
                </p>
                <p className="mb-4-company-profile text-sm">
                    With our team of experts, we aim to focus on sustainability and ethical practices, which is integral to our business model.
                </p>
                <div className="grid grid-cols-2 gap-4-company-profile text-sm">
                    <div>
                        <h3 className="font-semibold-company-profile text-sm">Website</h3>
                        <p className="font-company-profile text-sm"style={{ color: "grey"}}>https://website.example</p>
                    </div>
                    <div>
                        <h3 className="font-semibold-company-profile text-sm">Products</h3>
                        <p className="font-company-profile"style={{ color: "grey"}}>17500 Products</p>
                    </div>
                    <div>
                        <h3 className="font-semibold-company-profile text-sm">Industry</h3>
                        <p className="font-company-profile text-sm"style={{ color: "grey"}}>IT Services and IT Consulting</p>
                    </div>
                    <div>
                        <h3 className="font-semibold-company-profile text-sm">Location</h3>
                        <p className="font-company-profile text-sm"style={{ color: "grey"}}>Pune, Maharashtra</p>
                    </div>
                    <div>
                        <h3 className="font-semibold-company-profile text-sm">Verified Employee</h3>
                        <p className="font-company-profile text-sm"style={{ color: "grey"}}>10-15 Employees</p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md-company-profile">
                <h2 className="text-sm font-semibold mb-4-company-profile">Location</h2>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.643160315634!2d73.847784314368!3d18.5204306874097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07a1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    className="w-full rounded-lg-company-profile"
                    title="Company Location"
                ></iframe>
            </div>
        </div>
    );

    const Careers = () => {
    const jobDetails = [
        {
            title: "Fresher Backend Developer",
            location: "Pune, Maharashtra",
            type: "Full Time",
            salary: "12000-13000",
            exp: "0-1 years",
            description: "As a Fresher Backend Developer, you will play a key role in developing and maintaining server-side logic, ensuring high performance and responsiveness to requests from the front-end.",
            requirements:["Proficiency in backend programming languages (e.g., Java, Python, Node.js).",
                                "Understanding of RESTful API design and development.",
                                "Familiarity with databases (e.g., MySQL, MongoDB) and basic querying.",
                                "Knowledge of version control systems (e.g., Git).",
                                "Understanding of server-side frameworks (e.g., Express, Spring).",
                                "Basic knowledge of security best practices for backend development.",
                                "Problem-solving skills and a collaborative mindset.",
                                "Eagerness to learn and adapt to new technologies.",
                                "Awareness of cloud services (e.g., AWS, Azure) and deployment practices.",
                              
        ],            
            responsibilities:["Develop and maintain server-side logic and functionality.",
                                "Build and integrate APIs for seamless system communication.",
                                "Collaborate with front-end developers to ensure smooth data flow.",
                                "Optimize backend performance for speed and scalability.",
                                "Implement data storage solutions and manage databases.",
                                "Troubleshoot and debug backend issues.",
                                "Ensure data security and protection in backend systems.",
                                "Write clean, maintainable, and efficient code.",
                                

            ]
        },
        {
            title: "Data Analyst",
            location: "Pune, Maharashtra",
            type: "Full Time",
            salary: "15000-20000",
            exp: "1-2 years",
            description: "As a Data Analyst, you will be responsible for interpreting data, analyzing results using statistical techniques, and providing ongoing reports.",
            requirements:["Collect, clean, and organize large datasets.",
                                "Analyze data to identify trends and insights.",
                                "Create reports and visualizations for stakeholders.",
                                "Create reports and visualizations for stakeholders.",
                                "Use statistical tools to interpret data.",
                                "Assist in decision-making through data-driven insights.",
                                "Collaborate with teams to understand data needs.",
                                "Maintain data integrity and ensure accuracy."
                                

            ],
            responsibilities:["Collect, clean, and organize data from various sources.",
                                "Analyze data sets to identify trends, patterns, and insights.",
                                "Create reports, dashboards, and visualizations to present findings.",
                                "Interpret data and provide actionable recommendations for decision-making.",
                                "Collaborate with teams to understand data requirements and business needs.",
                                "Perform statistical analyses to support business strategies.",
                                "Monitor data quality and ensure accuracy.",
                                "Identify areas for process improvement based on data insights.",
                                "Track key performance indicators (KPIs).",
                               " Work with teams to understand data needs."

            ],
        },
        {
            title: "UI/UX",
            location: "Pune, Maharashtra",
            type: "Full Time",
            salary: "15000-20000",
            exp: "1-2 years",
            description: "As a Fresher UI/UX Designer, you will be responsible for creating visually appealing and user-friendly designs for web and mobile applications. You will work on wireframes, prototypes, and user flows to ensure intuitive and efficient user experiences.",
            requirements:["proficiency in design tools (Figma, Adobe XD, Sketch).",
                            "Strong understanding of user-centered design principles.",
                            "Ability to create wireframes, prototypes, and user flows.",
                            "Experience with usability testing and user research.",
                            "Collaboration with developers to implement designs.",
                            "Attention to detail and problem-solving skills.",
                            "Familiarity with design systems and style guides.",

            ],
            responsibilities:["Create user-centered designs by understanding business requirements and user feedback.",
                            "Develop wireframes, prototypes, and user flows to visualize design concepts.",
                            "Conduct usability testing and gather user feedback to improve designs.",
                            "Collaborate with developers to implement design elements into web and mobile applications.",
                            "Ensure designs are visually appealing, intuitive, and meet accessibility standards.",
                            "Stay updated with design trends and best practices.",
                            "Optimize user experience through continuous iteration based on user interactions and feedback.",
                            "Maintain consistency in design elements across all platforms.",

            ],
        },
        {
            title: "Software Tester",
            location: "Pune, Maharashtra",
            type: "Full Time",
            salary: "15000-20000",
            exp: "1-2 years",
            description: "As a Fresher Software Tester, you will be responsible for ensuring the quality and functionality of software applications through rigorous testing processes. You will write, execute, and manage test cases, identify bugs, and collaborate with developers to ensure issues are resolved. ",
            requirements:["Strong knowledge of software testing principles and methodologies.",
                        "Experience with manual and automated testing tools.",
                        "Ability to create and execute test cases, scenarios, and scripts.",
                        "Familiarity with bug tracking systems (e.g., JIRA, Bugzilla).",
                        "Understanding of SDLC and STLC processes.",
                        "Strong attention to detail and problem-solving skills.",
                        "Ability to collaborate with developers to resolve issues.",
                        "Knowledge of regression, functional, and performance testing.",

            ],
            responsibilities:["Design and execute test cases to evaluate software quality.",
                            "Identify, report, and track bugs or defects in the system.",
                            "Collaborate with developers to resolve issues.",
                            "Perform functional, regression, and performance testing.",
                            "Ensure that software meets business requirements and standards.",
                            "Write and maintain testing documentation and reports.",
                            "Validate fixes and new features through re-testing.",
                            "Automate test processes where applicable to improve efficiency.",

            ],
        },
            {
            title: " IT Support Specialist",
            location: "Pune, Maharashtra",
            type: "Full Time",
            salary: "15000-20000",
            exp: "1-2 years",
            },
            
            {
            title: " Web Developer",
            location: "Pune, Maharashtra",
            type: "Full Time",
            salary: "15000-20000",
            exp: "1-2 years",
            },

            {
            title: "Software Engineer",
            location: "Pune, Maharashtra",
            type: "Full Time",
            salary: "15000-20000",
            exp: "1-2 years",
            },

       
        // Add more job details as needed...
    ];

    const [selectedJob, setSelectedJob] = useState(jobDetails[0]);

    const JobVacancy = ({ job, onClick }) => (
        <div className="flex justify-between items-center p-4 border rounded-lg shadow-sm mb-4 bg-white transition-transform transform hover:scale-105 cursor-pointer" onClick={onClick}>
            <div>
                <h3 className="font-semibold text-base">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.location}</p>
                <p className="text-sm text-gray-600">{job.exp}</p>
                <p className="text-sm text-gray-600">{job.type} | {job.salary}</p>
            </div>
            <div className="text-right">
                <button className="btn-animated bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">View Details</button>
            </div>
        </div>
    );

    const JobDescription = ({ job ,responsibilities}) => (
        <div className="sticky top-0 z-10 p-4 border rounded-lg shadow-sm bg-white transition-opacity duration-500 ease-in-out max-h-screen overflow-y-auto">
        <div className="p-4 border rounded-lg shadow-sm bg-white transition-opacity duration-500 ease-in-out">
            <h2 className="font-semibold text-lg mb-4">Job Description</h2>
            <p className="text-sm"><strong>Job Title:</strong> {job.title}</p>
            <p className="text-sm"><strong>Location:</strong> {job.location}</p>
            <h2 className="font-semibold mt-4 ">Role Overview:</h2>
            <p className="text-sm">{job.description}</p>

            <h2 className="mt-4 font-semibold"> Requirements:</h2>
            <ul className="list-disc pl-5">
                {job. requirements.map(( requirements, index) => (
                    <li key={index} className="text-black-700 text-sm">{requirements}</li>
                ))}
            </ul>
                
            <h2 className="mt-4 font-semibold"> Responsibilities:</h2>
            <ul className="list-disc pl-5 text-sm">
                {job.responsibilities.map((responsibilities, index) => (
                    <li key={index} className="text-black-700">{responsibilities}</li>
                ))}
            </ul>
        </div>
        </div>
    );

    return (
        <div className="mt-4 slide-up">
            <h3 className="text-lg font-bold">Job Vacancies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div>
                    {jobDetails.map((job, index) => (
                        <JobVacancy key={index} job={job} onClick={() => setSelectedJob(job)} />
                    ))}
                </div>
                <div>
                    <JobDescription job={selectedJob} />
                </div>
            </div>
        </div>
    );
};

const Blogs = () => {
    const postDetails = [
        {
            title: "New Product Launch: SD Ultima Royal Luxury Termite Terminator Paint",
            date: "October 10, 2023",
            excerpt: "Discover our latest product that provides superior protection against termites."
        },
        {
            title: "How to Choose the Right IT Consulting Firm",
            date: "September 15, 2023",
            excerpt: "Learn the key factors to consider when selecting an IT consulting partner."
        },
        {
            title: "Top 5 IT Trends to Watch in 2023",
            date: "August 20, 2023",
            excerpt: "Stay ahead of the curve with these emerging trends in the IT industry."
        },
        {
            title: "Case Study: Successful IT Implementation for a Leading Retailer",
            date: "July 5, 2023",
            excerpt: "Read about our successful collaboration with a major retailer to improve their IT systems."
        }
    ];

    return (
        <div className="mt-4 slide-up">
            <h3 className="text-lg font-bold">Latest Blogs</h3>
            <ul className="mt-1 text-gray-700">
                {postDetails.map((post, index) => (
                    <li key={index} className="mb-4 p-4 text-sm border rounded-lg shadow-sm bg-white transition-transform transform hover:scale-105">
                        <h4 className="font-semibold text-base hover:text-blue-600">{post.title}</h4>
                        <p className="text-sm text-gray-500">{post.date}</p>
                        <p className="mt-2">{post.excerpt}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};


        const [activeSection, setActiveSection] = useState('ProductCatalogue');
        const handleSectionChange = (section) => {
            setActiveSection (section);
        };

        return (

            <div className="feed-container">

<div className="sidebar">
                <div className="profile">
                <img 
                        alt="Profile" 
                        src="https://storage.googleapis.com/a1aa/image/fBSgqgbP36SYM6uTnNdqKoBvMTClOXJyeIu5dNVI5C0ePMPnA.jpg" 
                        onClick={() => navigate('/companyprofile')} // Navigate on click
                        style={{ cursor: 'pointer' }} // Add pointer cursor
                    />   <h2>Sadashiv Tape</h2>
                    <label>I'm committed to growth and innovation.</label>
                    <label>Pune, Maharastra</label>
                    <label>Prototype 1</label>
                </div>
                <div class="card">
                    <div class="item">
                        <div className="componyprofile-impression">
                            <img src={Impression}style={{marginRight:"10px"}}/>
                            <span>Profile impression</span>
                        </div>
                        <div class="value">3k</div>
                    </div>
                    <div class="item">
                        <div className="componyprofile-impression">
                            <img src={Product} style={{marginRight:"5px"}}/>
                            <span>Products Impression</span>
                        </div>
                        <div class="value">34k</div>
                    </div>
                </div>
                <div className="links">
                    <h2>Employer</h2>
                    <hr/>
                    <a href="#">Post a Job</a>
                    <a href="#">Browse Candidate</a>
                    <a href="#">Employer Dashboard</a>
                    <a href="#">Applications</a>
                </div>
                <div className="links">
                    <h2>Candidate</h2>
                    <hr/>
                    <a href="#">Browse Jobs</a>
                    <a href="#">Browse Employer</a>
                    <a href="#">Candidate Dashboard</a>
                    <a href="#">Saved Jobs</a>
                </div>
                <div className="links">
                    <h2>Quick Links</h2>
                    <hr/>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Products</a>
                    <a href="#">Blogs</a>
                </div>
                <div className="links">
                    <h2>Support</h2>
                    <hr/>
                    <a href="#">FAQ</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Condition</a>
                </div>
            </div>


            
            <div className="feed-main-content fade-in" >
                <div className="bg-white rounded-lg shadow-md">
                    <div className="relative">
                        <img src="cover-image.jpg" alt="cover-image" className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="absolute bottom-0 left-4 transform translate-y-1/2">
                            <img src="logo.jpg" alt="logo" className="w-24 h-24 rounded-full border-4 border-white" />
                        </div>
                    </div>
                    <div className="p-6 pt-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Time Global Consultancy</h1>
          <p className="text-gray-600 text-sm">Creating new opportunities</p>
          <p className="text-gray-500 text-sm">IT Services and IT Consulting</p>
          <p className="text-gray-500 text-sm">
            Pune, Maharashtra · 147 products · {followersCount} Followers
          </p>
        </div>
        <button 
          className={`px-4 py-2 rounded-full transition duration-300 button-bounce text-sm ${isFollowed ? 'bg-gray-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          onClick={handleFollowToggle}
        >
          {isFollowed ? 'Followed' : 'Follow'}
        </button>
      </div>
    </div>
                    <div className="border-t">
                        <nav className="flex space-x-4 p-4">
                            <button className={`text-gray-500 ${activeSection === 'ProductCatalogue' ? 'text-black' : ''}`} onClick={() => handleSectionChange('ProductCatalogue')}>Product Catalogue</button>
                            <button className={`text-gray-500 ${activeSection === 'About' ? 'text-black-500' : ''}`} onClick={() => handleSectionChange('About')}>About</button>
                            <button className={`text-gray-500 ${activeSection === 'Careers' ? 'text-black' : ''}`} onClick={() => handleSectionChange('Careers')}>Careers</button>
                            <button className={`text-gray-500 ${activeSection === 'Blogs' ? 'text-black' : ''}`} onClick={() => handleSectionChange('Blogs')}>Blogs</button>
                        </nav>
                    </div>

                    
                </div>
                <div className="mt-8">
                    {activeSection === 'ProductCatalogue' && <ProductCatalogue />}
                    {activeSection === 'About' && <About />}
                    {activeSection === 'Careers' && <Careers />}
                    {activeSection === 'Blogs' && <Blogs />}
                </div>

                </div>
            

                <div className="feed-right-sidebar">
            <div  class="sideproduct">
                <h2>Top Selling Product</h2>
                <hr/>
                <div className="product-item-1">
                    <a href="#">Brick Making Machines</a>
                    <div className="count">900 products</div>
                </div>
               
                <div className="product-item-1">
                    <a href="#">Passenger Lifts</a>
                    <div className="count">1200 products</div>
                </div>
                <div className="product-item-1">
                    <a href="#">Batteries</a>
                    <div className="count">1700 products</div>
                </div>
                <div className="product-item-1">
                    <a href="#">Solar Panels</a>
                    <div className="count">2000 products</div>
                </div>
                <div className="product-item-1">
                    <a href="#">Brick Making Machines</a>
                    <div className="count">900 products</div>
                </div>
                <div className="product-item-1">
                    <a href="#">Passenger Lifts</a>
                    <div className="count">1200 products</div>
                </div>
                <div className="product-item-1">
                    <a href="#">Batteries</a>
                    <div className="count">1700 products</div>
                </div>
                <div className="product-item-1">
                    <a href="#">Solar Panels</a>
                    <div className="count">2000 products</div>
                </div>
            </div>
            </div>
            </div>
        );
    };
export default CompanyProfile;
