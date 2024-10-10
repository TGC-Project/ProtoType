import React, { useState } from 'react';
import './index.css'; // Make sure to create this CSS file

const testimonials = [
    {
        name: 'Robert',
        job: 'Developer',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, explicabo illum. Earum, commodi. Inventore expedita optio tenetur tempora sequi nesciunt aspernatur eum, deserunt voluptate incidunt, iste consectetur ad cupiditate atque!',
        image: 'https://th.bing.com/th?id=OIP.XSZAFm-5JI7nriDLwZqRQQHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2',
        rating: 5,
    },
    {
        name: 'John',
        job: 'UI/UX Designer',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, explicabo illum. Earum, commodi. Inventore expedita optio tenetur tempora sequi nesciunt aspernatur eum, deserunt voluptate incidunt, iste consectetur ad cupiditate atque!',
        image: 'https://th.bing.com/th?id=OIP.L8bs33mJBAUBA01wBfJnjQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2',
        rating: 5,
    },
    {
        name: 'Robert Fox',
        job: 'UI/UX Designer',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, explicabo illum. Earum, commodi. Inventore expedita optio tenetur tempora sequi nesciunt aspernatur eum, deserunt voluptate incidunt, iste consectetur ad cupiditate atque!',
        image: 'https://i.pravatar.cc/40',
        rating: 5,
    },
    {
        name: 'Vinay',
        job: 'UI/UX Designer',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, explicabo illum. Earum, commodi. Inventore expedita optio tenetur tempora sequi nesciunt aspernatur eum, deserunt voluptate incidunt, iste consectetur ad cupiditate atque!',
        image: 'https://i.pravatar.cc/40',
        rating: 4,
    },
    {
        name: 'Avinash',
        job: 'FrontEnd',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, explicabo illum. Earum, commodi. Inventore expedita optio tenetur tempora sequi nesciunt aspernatur eum, deserunt voluptate incidunt, iste consectetur ad cupiditate atque!',
        image: 'https://i.pravatar.cc/40',
        rating: 4,
    },

    
    // Add more testimonials if needed
];

const TestimonialCarousel = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const itemsPerPage = 3;

    const nextTestimonial = () => {
        setCurrentIdx((prevIdx) => (prevIdx + itemsPerPage) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIdx((prevIdx) => (prevIdx - itemsPerPage + testimonials.length) % testimonials.length);
    };

    return (
        <div className='MainCarousel'>
            <h2 className="carousel-title">Clients Testimonial</h2>
            <div className="carousel">
                <button className="carousel-btn prev" onClick={prevTestimonial}>❮</button>
                <div className="testimonial-container">
                    {testimonials.slice(currentIdx, currentIdx + itemsPerPage).map((testimonial, index) => (
                        <div className="testimonial-card" key={index}>
                            <div className="rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                            </div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                                <div>
                                    <h4 className="author-name">{testimonial.name}</h4>
                                    <p className="author-job">{testimonial.job}</p>
                                </div>
                                <span className="quote-mark">“</span>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-btn next" onClick={nextTestimonial}>❯</button>
            </div>
        </div>
    );
}

export default TestimonialCarousel;
