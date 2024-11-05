import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import image from "../../Images/loginimage.png";
import image1 from "../../Images/hacking.png";

const SignIn = ({ onLogin }) => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('custom-body');

        return () => {
            document.body.classList.remove('custom-body');
        };
    }, []);

    const loginSubmit = async (e) => {
        e.preventDefault();

        // Client-side validation
        if (!email || !password) {
            setError('Please enter both username and password.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5001/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            console.log("API Response:", data); // Debugging line

            if (response.ok) {
                // Store user data in localStorage
                localStorage.setItem('user', JSON.stringify({
                    fname: data.fname,
                    lname: data.lname,
                    email: data.email,
                }));

                console.log("Login successful, navigating to feed...");
                navigate('/feed'); // Redirect to feed (implement this route)
            } else {
                setError(data.message); // Show error message from the server
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    const handleSignUpClick = (e) => {
        e.preventDefault();
        navigate('/signup');
    };

    return (
        <div className="login-container">
            <div className="box">
                <form className="login-form" onSubmit={loginSubmit}>
                    <h2>Sign In</h2>
                    {error && <div className="error-message">{error}</div>}
                    <div className="social-links">
                        <a href="#" className='google1'>
                            <img className='google' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="Google" />
                            <span style={{ marginLeft: '8px' }}>Google</span>
                        </a>
                        <a href="#" className='twitter1'>
                            <img className='twitter' src="https://img.icons8.com/?size=100&id=13963&format=png&color=000000" alt="Twitter" />
                            <span style={{ marginLeft: '8px' }}>Twitter</span>
                        </a>
                    </div>
                    <div className="divider">OR</div>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={email}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='signin-submit'>
                        <img className="img" src={image1} alt="Login" />
                        Sign In
                    </button>
                    <div className="OR">OR</div>
                    <p className="message">
                        Don't have an account? <a href="/signup" onClick={handleSignUpClick}>Sign Up</a>
                    </p>
                </form>
            </div>
            <div className='right-box'>
                <img className="img" src={image} alt="Login" />
            </div>
        </div>
    );
};

export default SignIn;
