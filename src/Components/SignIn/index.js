import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; // Make sure to create this CSS file for styles

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginSubmit = (e) => {
        e.preventDefault();

        // Dummy authentication logic
        if (username === 'Dhanshri' && password === '12345') {
            // After successful login, navigate to the feed page
            navigate('/feed');
        } else {
            // If authentication fails, navigate to the sign-up page
            navigate('/signup');
        }
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
                        Don't have an account? <a href="/signup">Sign Up</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
