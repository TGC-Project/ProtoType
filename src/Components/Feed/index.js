import React from 'react'
import "./index.css"

function Feed() {
  return (
    <>
     <div className="container">
   <div className="header">
    <img alt="Sale banner with text 'SALE UP TO 50% OFF LIMITED TIME OFFER'" height="100" src="https://static.vecteezy.com/system/resources/previews/000/691/688/original/sale-banner-template-with-special-sale-vector.jpg"  style={{height: "200px", width: "80%"}}/>
   </div>
   <div className="main-content">
    <div className="left-column">
     <div className="card">
      <h3>
       New Post
      </h3>
      <div className="post-input">
       <input placeholder="What's on your mind?" type="text"/>
       <button>
        Post
       </button>
      </div>
     </div>
     <div className="card">
      <h3>
       TRENDING POST
      </h3>
      <div className="post">
       <div className="post-header">
        <img alt="User profile picture" height="40" src="https://storage.googleapis.com/a1aa/image/syfHhL52SKXCBqSvXnP18raqdqt6zQfdbyxszdgxVe7FfIVOB.jpg" width="40"/>
        <div>
         <span className="name">
          Theresa Steward
         </span>
         <span className="time">
          29m
         </span>
        </div>
       </div>
       <div className="post-content">
        <p>
         What movies could you watch over and over and still love?
        </p>
       </div>
       <div className="post-actions">
        <i className="fas fa-thumbs-up">
        </i>
        8
        <i className="fas fa-comment">
        </i>
        3
       </div>
      </div>
     </div>
     <div className="card">
      <div className="categories">
       <h3>
        Shop From Top Categories
       </h3>
       <a href="#">
        View All
       </a>
      </div>
      <div className="category-list">
       <div className="category-item">
        <img alt="Furniture category image" height="100" src="https://storage.googleapis.com/a1aa/image/YzKw9tLWgyZyKVAePw3lGyQ8pKFGhS8z96JlQvufSbihPSlTA.jpg" width="100"/>
        <p>
         Furniture
        </p>
       </div>
       <div className="category-item">
        <img alt="Furniture category image" height="100" src="https://storage.googleapis.com/a1aa/image/YzKw9tLWgyZyKVAePw3lGyQ8pKFGhS8z96JlQvufSbihPSlTA.jpg" width="100"/>
        <p>
         Furniture
        </p>
       </div>
       <div className="category-item">
        <img alt="Furniture category image" height="100" src="https://storage.googleapis.com/a1aa/image/YzKw9tLWgyZyKVAePw3lGyQ8pKFGhS8z96JlQvufSbihPSlTA.jpg" width="100"/>
        <p>
         Furniture
        </p>
       </div>
       <div className="category-item">
        <img alt="Furniture category image" height="100" src="https://storage.googleapis.com/a1aa/image/YzKw9tLWgyZyKVAePw3lGyQ8pKFGhS8z96JlQvufSbihPSlTA.jpg" width="100"/>
        <p>
         Furniture
        </p>
       </div>
       <div className="category-item">
        <img alt="Furniture category image" height="100" src="https://storage.googleapis.com/a1aa/image/YzKw9tLWgyZyKVAePw3lGyQ8pKFGhS8z96JlQvufSbihPSlTA.jpg" width="100"/>
        <p>
         Furniture
        </p>
       </div>
      </div>
     </div>
     <div className="card">
      <div className="post">
       <div className="post-header">
        <img alt="User profile picture" height="40" src="https://storage.googleapis.com/a1aa/image/syfHhL52SKXCBqSvXnP18raqdqt6zQfdbyxszdgxVe7FfIVOB.jpg" width="40"/>
        <div>
         <span className="name">
          John Steward
         </span>
         <span className="time">
          29m
         </span>
        </div>
       </div>
       <div className="post-content">
        <p>
         What movies could you watch over and over and still love?
        </p>
       </div>
       <div className="post-actions">
        <i className="fas fa-thumbs-up">
        </i>
        8
        <i className="fas fa-comment">
        </i>
        3
       </div>
      </div>
     </div>
    </div>
    <div className="right-column">
     <div className="sidebar">
      <h3>
       Profile
      </h3>
      <ul>
       <li>
        <a href="#">
         View Profile
        </a>
       </li>
      </ul>
     </div>
     <div className="sidebar">
      <h3>
       My Groups
      </h3>
      <ul>
       <li>
        <a href="#">
         Modern Art University
        </a>
       </li>
       <li>
        <a href="#">
         Digital Nomads
        </a>
       </li>
       <li>
        <a href="#">
         Interaction Design Association
        </a>
       </li>
      </ul>
     </div>
     <div className="sidebar">
      <h3>
       Trending Posts
      </h3>
      <ul>
       <li>
        <a href="#">
         How to design a better user experience
        </a>
       </li>
       <li>
        <a href="#">
         Top 10 UI/UX design trends in 2023
        </a>
       </li>
       <li>
        <a href="#">
         A day in the life of a design nomad
        </a>
       </li>
      </ul>
     </div>
    </div>
   </div>
  </div>

    </>
  )
}

export default Feed