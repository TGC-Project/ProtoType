import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const SignIn = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginSubmit = (e) => {
        e.preventDefault();
        if (username === 'Dhanshri' && password === '12345') {
            onLogin(); // Call the onLogin function to set the logged-in state
            navigate('/feed'); // Navigate to the feed after successful login
        } else {
            navigate('/signup'); // Navigate to signup on failed login
        }
    };

    const handleSignUpClick = (e) => {
        e.preventDefault();
        navigate('/signup'); // Navigate to sign-up page
    };

    return (
        <div className='wrapper'>
            <div className="login-container">
                <form className="login-form" onSubmit={loginSubmit}>
                    <h2>Login</h2>
                    <div className="input-group">
                        <label htmlFor="username">Username
                            <input 
                                type="text" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                id="username" 
                                name="username" 
                                required 
                            />
                        </label>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                id="password" 
                                name="password" 
                                required 
                            />
                        </label>
                    </div>
                    <button type="submit">Sign In</button>
                    <div className="OR">OR</div>
                    <p className="message">
                        Don't have an account? <a href="/signup" onClick={handleSignUpClick}>Sign Up</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
