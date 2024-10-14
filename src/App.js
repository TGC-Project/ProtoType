import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './Components/Home';  
import Job from "./Components/Job"
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';  
import Navbar from './Components/Navbar'; // Make sure this path is correct
import Feed from "./Components/Feed"
import Product from './Components/Product';
import UserProfile from './Components/UserProfile';
import MoreJobs from './Components/MoreJobs';

const App = () => {  
  return ( 


    <Router>
      <div className="Main"> {/* Make sure this is applied correctly */}
        <Navbar /> {/* Include Navbar here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/job" element={<Job />} />
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/products" element={<Product/>}/>
          <Route path="/morejobs" element={<MoreJobs />} />
          
        </Routes>
      </div>
    </Router>
  );  
};  

export default App;  
