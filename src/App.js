import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './Components/Home';  
import Job from "./Components/Job"
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';  
import Navbar from './Components/Navbar'; // Make sure this path is correct
import Feed from "./Components/Feed"
import Product from './Components/Product';

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
          
        </Routes>
      </div>
    </Router>
  );  
};  

export default App;  
