import React from 'react';
import TestimonialCarousel from "../TestimonialCarousel"
import Footer from "../Footer"
import myImage from '../../Images/homeimage.gif';
import Google from "../../Images/google.svg"
import "./index.css";

function Home() {
  return (
    <>   
      {/* Hero Section */}
      <div className='Main'>
      <section className="hero">
        <div className="hero-content">
          <h1>Your One-Stop Wholesale Marketplace and Professional Networking Hub</h1>
          <p>Find the best deals in wholesale and network with professionals</p>
          <div className="search-section">
            <input type="text" placeholder="Search..." className="find-input" />
            <button className="find-btn">Find</button>
          </div>
          <p>Quickly search for jobs and opportunities.</p>
        </div>
       
        <div className="hero-illustration">
          <img src={myImage} alt="Animated GIF" />
        </div>

      </section>
       {/* Simple Card Section */}
 <div className='card-section'>
        <div className="card">
          <img src={myImage} alt="Card Image" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
        </div>

        <div className="card">
          <img src={myImage} alt="Card Image" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
        </div>

        <div className="card">
          <img src={myImage} alt="Card Image" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
        </div>

        <div className="card">
          <img src={myImage} alt="Card Image" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
        </div>
      </div>
      </div>


     


      <section className='PopularProducts'>
        <h1 className='PopularProductHeader'>Most Popular Products</h1>
        <div className='ProductCardDetails'>
        <div className="Productcard">
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>

          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
          </div>

          <div className="Productcard">
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>

          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
          </div>

          <div className="Productcard">
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>

          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
          </div>

          </div>
      </section>


      <section className='section3 '>
        <h1 className='section3Header'>
            Hire <span>Verified Candidates</span> Aligned with Your Business
        </h1>
      </section>

      <section className='section4'>
        <div className='section4Head'>
        <h1>Featured Domain</h1>
        <a href=''>View All </a>
        </div>
 <div className='domainCard'>
      <div className='card-section'>
        <div className="card">
          <img src={myImage} alt="Card Image" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
        </div>

        <div className="card">
          <img src={myImage} alt="Card Image" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
        </div>

        <div className="card">
          <img src={myImage} alt="Card Image" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
        </div>

        <div className="card">
          <img src={myImage} alt="Card Image" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
        </div>
      </div>

      <div className='card-section'>
        <div className="card">
          <img src={myImage} alt="Card Image" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
        </div>

        <div className="card">
          <img src={myImage} alt="Card Image" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
        </div>

        <div className="card">
          <img src={myImage} alt="Card Image" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
        </div>

        <div className="card">
          <img src={myImage} alt="Card Image" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">17,2345</h2>
            <p className="card-description">Products</p>
          </div>
        </div>
      </div>
      </div>
      </section>


      <section className='featuredJob'>
      <div className='section4Head'>
        <h1>Featured Jobs</h1>
        <a href=''>View All </a>
        </div>
  <div className='card-section1'>
  <div className="card">
    <div className="card-content">
      <h1 className="card-title">Technical Support</h1>
      <div className='card-data'>
        <h6 className="card-subtitle">Part-Time</h6>
        <h6 className="card-salary">Salary: $XX,XXX</h6>
      </div>
      <div className="location">
        <img src={Google} alt="Google Logo" className="card-image" /> {/* Updated class */}
        <div className="">
            <h2 className="company-name">Google Inc.</h2>
            <h6>Dhaka, Bangladesh</h6>
        </div>
      </div>
    </div>

  
  </div>

  <div className="card">
    <div className="card-content">
      <h1 className="card-title">Technical Support</h1>
      <div className='card-data'>
        <h6 className="card-subtitle">Part-Time</h6>
        <h6 className="card-salary">Salary: $XX,XXX</h6>
      </div>
      <div className="location">
        <img src={Google} alt="Google Logo" className="card-image" /> {/* Updated class */}
        <div className="">
            <h2 className="company-name">Google Inc.</h2>
            <h6>Dhaka, Bangladesh</h6>
        </div>
      </div>
    </div>

  
  </div>

  <div className="card">
    <div className="card-content">
      <h1 className="card-title">Technical Support</h1>
      <div className='card-data'>
        <h6 className="card-subtitle">Part-Time</h6>
        <h6 className="card-salary">Salary: $XX,XXX</h6>
      </div>
      <div className="location">
        <img src={Google} alt="Google Logo" className="card-image" /> {/* Updated class */}
        <div className="">
            <h2 className="company-name">Google Inc.</h2>
            <h6>Dhaka, Bangladesh</h6>
        </div>
      </div>
    </div>

  
  </div>

  <div className="card">
    <div className="card-content">
      <h1 className="card-title">Technical Support</h1>
      <div className='card-data'>
        <h6 className="card-subtitle">Part-Time</h6>
        <h6 className="card-salary">Salary: $XX,XXX</h6>
      </div>
      <div className="location">
        <img src={Google} alt="Google Logo" className="card-image" /> {/* Updated class */}
        <div className="">
            <h2 className="company-name">Google Inc.</h2>
            <h6>Dhaka, Bangladesh</h6>
        </div>
      </div>
    </div>

  
  </div>

  <div className="card">
    <div className="card-content">
      <h1 className="card-title">Technical Support</h1>
      <div className='card-data'>
        <h6 className="card-subtitle">Part-Time</h6>
        <h6 className="card-salary">Salary: $XX,XXX</h6>
      </div>
      <div className="location">
        <img src={Google} alt="Google Logo" className="card-image" /> {/* Updated class */}
        <div className="">
            <h2 className="company-name">Google Inc.</h2>
            <h6>Dhaka, Bangladesh</h6>
        </div>
      </div>
    </div>

  
  </div>

  <div className="card">
    <div className="card-content">
      <h1 className="card-title">Technical Support</h1>
      <div className='card-data'>
        <h6 className="card-subtitle">Part-Time</h6>
        <h6 className="card-salary">Salary: $XX,XXX</h6>
      </div>
      <div className="location">
        <img src={Google} alt="Google Logo" className="card-image" /> {/* Updated class */}
        <div className="">
            <h2 className="company-name">Google Inc.</h2>
            <h6>Dhaka, Bangladesh</h6>
        </div>
      </div>
    </div>

  
  </div>
  

  
</div>


</section>




<section className='featuredJob'>
      <div className='section4Head'>
        <h1>Top Companies</h1>
        <a href=''>View All </a>
        </div>
        <div className='card-section1'>
  <div className="card">
    <div className="card-content">
      <div className="location">
        <img src={Google} alt="Google Logo" className="card-image" /> {/* Updated class */}
        <div className="">
            <h2 className="company-name">Google Inc.</h2>
            <h6>Dhaka, Bangladesh</h6>
        </div>
      </div>
      <button className="TopComponiesButon">Opening Positions (30)</button>
    </div>

  
  </div>

  <div className="card">
    <div className="card-content">
      <div className="location">
        <img src={Google} alt="Google Logo" className="card-image" /> {/* Updated class */}
        <div className="">
            <h2 className="company-name">Google Inc.</h2>
            <h6>Dhaka, Bangladesh</h6>
        </div>
      </div>
      <button className="TopComponiesButon">Opening Positions (30)</button>
    </div>
  </div>

  <div className="card">
    <div className="card-content">
      <div className="location">
        <img src={Google} alt="Google Logo" className="card-image" /> {/* Updated class */}
        <div className="">
            <h2 className="company-name">Google Inc.</h2>
            <h6>Dhaka, Bangladesh</h6>
        </div>
      </div>
      <button className="TopComponiesButon">Opening Positions (30)</button>
    </div>

  
  </div>

  <div className="card">
    <div className="card-content">
      <div className="location">
        <img src={Google} alt="Google Logo" className="card-image" /> {/* Updated class */}
        <div className="">
            <h2 className="company-name">Google Inc.</h2>
            <h6>Dhaka, Bangladesh</h6>
        </div>
      </div>
      <button className="TopComponiesButon">Opening Positions (30)</button>
    </div>

  
  </div>

  <div className="card">
    <div className="card-content">
      <div className="location">
        <img src={Google} alt="Google Logo" className="card-image" /> {/* Updated class */}
        <div className="">
            <h2 className="company-name">Google Inc.</h2>
            <h6>Dhaka, Bangladesh</h6>
        </div>
      </div>
      <button className="TopComponiesButon">Opening Positions (30)</button>
    </div>

  
  </div>

  <div className="card">
    <div className="card-content">
      <div className="location">
        <img src={Google} alt="Google Logo" className="card-image" /> {/* Updated class */}
        <div className="">
            <h2 className="company-name">Google Inc.</h2>
            <h6>Dhaka, Bangladesh</h6>
        </div>
      </div>
      <button className="TopComponiesButon">Opening Positions (30)</button>
    </div>

  
  </div>
  </div>



</section>

<TestimonialCarousel/>
<Footer/>
    </>
  );
}

export default Home;
