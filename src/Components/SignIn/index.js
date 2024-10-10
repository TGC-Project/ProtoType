import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; // Make sure to create this CSS file for styles

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginSubmit = (e) => {
        e.preventDefault();
        // Handle the login logic here (e.g., authentication)
        console.log('Username:', username);
        console.log('Password:', password);

        // After successful login, navigate to the feed page
        navigate('/feed'); // Adjust the path as necessary
    };

    return (
        <div className="login-container">  
            <form className="login-form" onSubmit={loginSubmit}>
                <h2>Login</h2>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        id="username" 
                        name="username" 
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        id="password" 
                        name="password" 
                        required 
                    />
                </div>
                <button type="submit">Sign In</button>
                <div className="OR">OR</div>
                <p className="message">
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
            </form>
        </div>
    );
};

export default SignIn;
