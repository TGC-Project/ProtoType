import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom'
import "./index.css"


function Feed() {

    // State to track whether the icon is clicked
    const [isClicked, setIsClicked] = useState(false);
  
    // Function to toggle the color on click
    const handleClick = () => {
      setIsClicked(!isClicked);
    };
 
  return (
    <>
   <div class="body-all">
      <div class="container-hero">
        <div class="carousel-hero">
          <div class="carousel-nav-hero left-hero">
            <i class="fas fa-chevron-left"> </i>
          </div>
          <div class="carousel-content-hero">
            {/* <!-- Carousel content goes here --> */}
          </div>
          <div class="carousel-nav-hero right-hero">
            <i class="fas fa-chevron-right"> </i>
          </div>
          <div class="carousel-dots-hero">
            <div class="carousel-dot-hero"></div>
            <div class="carousel-dot-hero"></div>
            <div class="carousel-dot-hero"></div>
            <div class="carousel-dot-hero"></div>
            <div class="carousel-dot-hero"></div>
          </div>
        </div>
        <div class="profile-hero">
          <img
            alt="Profile picture of a person sitting at a desk with books in the background"
            height="60"
            src="https://storage.googleapis.com/a1aa/image/CdGcHe2TpD3lTqsbXXbicHFyNsxGg7HYruLPf8cW0zck6blTA.jpg"
            width="60"
          />
          <div class="profile-text-hero">
            <div class="name-hero">Prototype Patil</div>
            <div class="description-hero">
              Hi, I'm [Your Name], a recent graduate with a Master's in Computer
              Applications (MCA). I have a strong passion for technology.
            </div>
          </div>
        </div>
      </div>
      {/* <!-- add post and post section with my groups -->\ */}
      <div class="container-post">
        <div class="main-content-post">
          <div class="new-post-post">
            <input placeholder="What's on your mind?" type="text" />
            <div class="actions-post">
              <div>
                <i class="fas fa-image"> </i>
                <i class="fas fa-video"> </i>
                <i class="fas fa-calendar-alt"> </i>
              </div>
              <button>
                <i class="fas fa-paper-plane"> </i>
              </button>
            </div>
          </div>
          <div class="sort-by-post">
            <span> SORT BY: TRENDING </span>
            <select>
              <option value="trending">Trending</option>
              <option value="latest">Latest</option>
            </select>
          </div>
          <div class="post-post">
            <div class="header-post">
              <img
                alt="Profile picture of Theresa Steward"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/TETI2jBfWXzWLCosyP8EeLQAamNmwOzem75dbNQjRuneOwVOB.jpg"
                width="50"
              />
              <div>
                <div class="name-post">Theresa Steward</div>
                <div class="role-post">CEO at XYZ</div>
              </div>
            </div>
            <div class="content-post">
              What did the Dursleys care if Harry lost his place on the House
              Quidditch team because he hadn’t practiced all summer? What was it
              to the Dursleys if Harry went back to school without any of his
              homework done? The Dursleys were what wizards called Muggles (not
              a drop of magical blood in their veins).
            </div>
            <div class="footer-post">
              <div class="actions-post">
                <span>
                  <i class="fas fa-thumbs-up"     onClick={handleClick}
        style={{ color: isClicked ? 'blue' : 'black', cursor: 'pointer', fontSize: '24px' }} // Change colors as needed
 > </i>
                  42
                </span>
                <span>
                  <i class="fas fa-comment"> </i>
                  9
                </span>
              </div>
              <div class="share-post">
                <i class="fas fa-share"> </i>
                SHARE
              </div>
            </div>
          </div>
          <div class="post-post">
            <div class="header-post">
              <img
                alt="Profile picture of John Doe"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/bdfvm7pqmS1KUSal2XXOaJ6WUNOOafzEgMDNQfyGVl2YL4KnA.jpg"
                width="50"
              />
              <div>
                <div class="name-post">John Doe</div>
                <div class="role-post">Web Developer</div>
              </div>
            </div>
            <div class="content-post">
              Just finished a new project! Check out my latest website design.
              <img
  alt="Screenshot of a website design"
  height="400"
  src="https://storage.googleapis.com/a1aa/image/HEkdeX1SfzthA0QAM8eUkWMJPlf1tuYXEI84yTm7ULMesgrcC.jpg"
  style={{ width: '100%', marginTop: '10px' }}  // Change here
  width="600"
/>
            </div>
            <div class="footer-post">
              <div class="actions-post">
                <span>
                  <i class="fas fa-thumbs-up"> </i>
                  30
                </span>
                <span>
                  <i class="fas fa-comment"> </i>
                  5
                </span>
              </div>
              <div class="share-post">
                <i class="fas fa-share"> </i>
                SHARE
              </div>
            </div>
          </div>
          <div class="post-post">
            <div class="header-post">
<a href='/user-profile.html' target="_blank" rel="noopener noreferrer">
              <img
                alt="Profile picture of Jane Smith"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/GqPcyvg0nsZ5B10QUtIj0y1Goyd6kN4lroZr4ReTXfhoFclTA.jpg"
                width="50"/> 
           </a>  
              <div>
             
                <div class="name-post">Jane Smith</div>
                <div class="role-post">Graphic Designer</div>
              </div>
            </div>
            <div class="content-post">
              Loving the new design trends this year! What do you all think
              about minimalism?
            </div>
            <div class="footer-post">
              <div class="actions-post">
                <span>
                  <i class="fas fa-thumbs-up"> </i>
                  50
                </span>
                <span>
                  <i class="fas fa-comment"> </i>
                  12
                </span>
              </div>
              <div class="share-post">
                <i class="fas fa-share"> </i>
                SHARE
              </div>
            </div>
          </div>
          {/* <!-- product crousel --> */}
          <div class="container-top-categories">
            <div class="header-top-categories">
              <h2>
                Shop From
                <span> Top Categories </span>
              </h2>
              <a href="#">
                View All
                <i class="fas fa-chevron-right"> </i>
              </a>
            </div>
            <div class="categories-wrapper-top-categories">
              <div class="categories-top-categories">
                <div class="category-top-categories">
                  <img
                    alt="Commercial coffee machine"
                    height="150"
                    src="https://storage.googleapis.com/a1aa/image/FNQrX3JiMY7qL1jTUfMXqftzEGSm1hYak6TSBQBY3X7ZlclTA.jpg"
                    width="150"
                  />
                  <p>Coffee Machine</p>
                  <a class="best-price-top-categories" href="#">
                    Get Best Price
                  </a>
                </div>
                <div class="category-top-categories">
                  <img
                    alt="Commercial ice cream machine"
                    height="150"
                    src="https://storage.googleapis.com/a1aa/image/npKqAbPA5j72B16bx5XyGSXuvCcRJ0NXfcoPePNEpO1YlclTA.jpg"
                    width="150"
                  />
                  <p>Ice Cream Machine</p>
                  <a class="best-price-top-categories" href="#">
                    Get Best Price
                  </a>
                </div>
                <div class="category-top-categories">
                  <img
                    alt="Commercial oven"
                    height="150"
                    src="https://storage.googleapis.com/a1aa/image/TCVjnoJXnhKOH1PfcUWiHwrugq3fXqAa7G73wgAkYFHblclTA.jpg"
                    width="150"
                  />
                  <p>Oven</p>
                  <a class="best-price-top-categories" href="#">
                    Get Best Price
                  </a>
                </div>
                <div class="category-top-categories">
                  <img
                    alt="Commercial refrigerator"
                    height="150"
                    src="https://storage.googleapis.com/a1aa/image/DIXwG3P4fX3LUCaymjnQTJKTZsWuzhHkmrugvSdDCjFrSuyJA.jpg"
                    width="150"
                  />
                  <p>Refrigerator</p>
                  <a class="best-price-top-categories" href="#">
                    Get Best Price
                  </a>
                </div>
                <div class="category-top-categories">
                  <img
                    alt="Commercial dishwasher"
                    height="150"
                    src="https://storage.googleapis.com/a1aa/image/fMMAJeaQ2zglfIlLAq2KDey6xYaouJhnUUdnNjdpbeyvqkrcC.jpg"
                    width="150"
                  />
                  <p>Dishwasher</p>
                  <a class="best-price-top-categories" href="#">
                    Get Best Price
                  </a>
                </div>
                <div class="category-top-categories">
                  <img
                    alt="Commercial coffee machine"
                    height="150"
                    src="https://storage.googleapis.com/a1aa/image/FNQrX3JiMY7qL1jTUfMXqftzEGSm1hYak6TSBQBY3X7ZlclTA.jpg"
                    width="150"
                  />
                  <p>Coffee Machine</p>
                  <a class="best-price-top-categories" href="#">
                    Get Best Price
                  </a>
                </div>
                <div class="category-top-categories">
                  <img
                    alt="Commercial ice cream machine"
                    height="150"
                    src="https://storage.googleapis.com/a1aa/image/npKqAbPA5j72B16bx5XyGSXuvCcRJ0NXfcoPePNEpO1YlclTA.jpg"
                    width="150"
                  />
                  <p>Ice Cream Machine</p>
                  <a class="best-price-top-categories" href="#">
                    Get Best Price
                  </a>
                </div>
                <div class="category-top-categories">
                  <img
                    alt="Commercial oven"
                    height="150"
                    src="https://storage.googleapis.com/a1aa/image/TCVjnoJXnhKOH1PfcUWiHwrugq3fXqAa7G73wgAkYFHblclTA.jpg"
                    width="150"
                  />
                  <p>Oven</p>
                  <a class="best-price-top-categories" href="#">
                    Get Best Price
                  </a>
                </div>
                <div class="category-top-categories">
                  <img
                    alt="Commercial refrigerator"
                    height="150"
                    src="https://storage.googleapis.com/a1aa/image/DIXwG3P4fX3LUCaymjnQTJKTZsWuzhHkmrugvSdDCjFrSuyJA.jpg"
                    width="150"
                  />
                  <p>Refrigerator</p>
                  <a class="best-price-top-categories" href="#">
                    Get Best Price
                  </a>
                </div>
                <div class="category-top-categories">
                  <img
                    alt="Commercial dishwasher"
                    height="150"
                    src="https://storage.googleapis.com/a1aa/image/fMMAJeaQ2zglfIlLAq2KDey6xYaouJhnUUdnNjdpbeyvqkrcC.jpg"
                    width="150"
                  />
                  <p>Dishwasher</p>
                  <a class="best-price-top-categories" href="#">
                    Get Best Price
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- product crousel end --> */}
          <div class="post-post">
            <div class="header-post">
              <img
                alt="Profile picture of Alice Johnson"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/1yU9f1V9KLTtekYR6mC24fLlcZfZ6YxpW7CJraQUe7fUZBX5E.jpg"
                width="50"
              />
              <div>
                <div class="name-post">Alice Johnson</div>
                <div class="role-post">Content Writer</div>
              </div>
            </div>
            <div class="content-post">
              Just published a new blog post! Check it out on my website.
            </div>
            <div class="footer-post">
              <div class="actions-post">
                <span>
                  <i class="fas fa-thumbs-up"> </i>
                  20
                </span>
                <span>
                  <i class="fas fa-comment"> </i>
                  3
                </span>
              </div>
              <div class="share-post">
                <i class="fas fa-share"> </i>
                SHARE
              </div>
            </div>
          </div>
          <div class="post-post">
            <div class="header-post">
              <img
                alt="Profile picture of Michael Brown"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/U86ZenNwgR2jCCLUOlefkGVyVIfeYDLJf1Tl8QSAzwvoaBX5E.jpg"
                width="50"
              />
              <div>
                <div class="name-post">Michael Brown</div>
                <div class="role-post">Director at ABC</div>
              </div>
            </div>
            <div class="content-post">
              Excited to start a new project with my team! Let's do this!
            </div>
            <div class="footer-post">
              <div class="actions-post">
                <span>
                  <i class="fas fa-thumbs-up"> </i>
                  15
                </span>
                <span>
                  <i class="fas fa-comment"> </i>
                  2
                </span>
              </div>
              <div class="share-post">
                <i class="fas fa-share"> </i>
                SHARE
              </div>
            </div>
          </div>
          <div class="post-post">
            <div class="header-post">
              <img
                alt="Profile picture of Emily Davis"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/1yU9f1V9KLTtekYR6mC24fLlcZfZ6YxpW7CJraQUe7fUZBX5E.jpg"
                width="50"
              />
              <div>
                <div class="name-post">Emily Davis</div>
                <div class="role-post">CEO at DEF</div>
              </div>
            </div>
            <div class="content-post">
              Just launched a new product! Check it out on our website.
            </div>
            <div class="footer-post">
              <div class="actions-post">
                <span>
                  <i class="fas fa-thumbs-up"> </i>
                  25
                </span>
                <span>
                  <i class="fas fa-comment"> </i>
                  4
                </span>
              </div>
              <div class="share-post">
                <i class="fas fa-share"> </i>
                SHARE
              </div>
            </div>
          </div>
          <div class="post-post">
            <div class="header-post">
              <img
                alt="Profile picture of David Wilson"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/bdfvm7pqmS1KUSal2XXOaJ6WUNOOafzEgMDNQfyGVl2YL4KnA.jpg"
                width="50"
              />
              <div>
                <div class="name-post">David Wilson</div>
                <div class="role-post">Director at GHI</div>
              </div>
            </div>
            <div class="content-post">
              Looking forward to the upcoming conference. See you all there!
            </div>
            <div class="footer-post">
              <div class="actions-post">
                <span>
                  <i class="fas fa-thumbs-up"> </i>
                  18
                </span>
                <span>
                  <i class="fas fa-comment"> </i>
                  6
                </span>
              </div>
              <div class="share-post">
                <i class="fas fa-share"> </i>
                SHARE
              </div>
            </div>
          </div>
        </div>
        <div class="sidebar-post">
          <div class="group-list-post">
            <h2>My Groups</h2>
            <div class="group-post">
              <img
                alt="Moscow State Linguistical University logo"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/rz4DI5IZHtL0Oh4qobJxVcsF0tbfnBm3qpDVIOjsVGF2BuyJA.jpg"
                width="50"
              />
              <div class="name-post">Moscow State Linguistical University</div>
            </div>
            <div class="group-post">
              <img
                alt="Digital freelancers group logo"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/jfGu4Ha1D9W3HSHV5mWxcwV5r9Mn02gjRrbfw9rTSEttDclTA.jpg"
                width="50"
              />
              <div class="name-post">Digital freelancers group</div>
            </div>
            <div class="group-post">
              <img
                alt="Interaction design association logo"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/9P7q1PRjJC4oD5yZMoK3Mkst63Rw0QeASTLCJhFVj8d4BuyJA.jpg"
                width="50"
              />
              <div class="name-post">Interaction design association</div>
            </div>
            <div class="view-all-post">View All (8)</div>
          </div>
          <div class="group-list-post">
            <h2>My Groups</h2>
            <div class="group-post">
              <img
                alt="Moscow State Linguistical University logo"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/rz4DI5IZHtL0Oh4qobJxVcsF0tbfnBm3qpDVIOjsVGF2BuyJA.jpg"
                width="50"
              />
              <div class="name-post">Moscow State Linguistical University</div>
            </div>
            <div class="group-post">
              <img
                alt="Digital freelancers group logo"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/jfGu4Ha1D9W3HSHV5mWxcwV5r9Mn02gjRrbfw9rTSEttDclTA.jpg"
                width="50"
              />
              <div class="name-post">Digital freelancers group</div>
            </div>
            <div class="group-post">
              <img
                alt="Interaction design association logo"
                height="50"
                src="https://storage.googleapis.com/a1aa/image/9P7q1PRjJC4oD5yZMoK3Mkst63Rw0QeASTLCJhFVj8d4BuyJA.jpg"
                width="50"
              />
              <div class="name-post">Interaction design association</div>
            </div>
            <div class="view-all-post">View All (8)</div>
          </div>
        </div>
      </div>
      
    </div>

    </>
  )
}

export default Feed