import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import image from "../../Images/loginimage.png";
import image1 from "../../Images/hacking.png";

const SignIn = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('custom-body');

        return () => {
            document.body.classList.remove('custom-body');
        };
    }, []);

    const loginSubmit = (e) => {
        e.preventDefault();
        if (username === 'Dhanshri' && password === '12345') {
            onLogin();
            navigate('/feed');
        } else {
            alert('Invalid credentials, please try again.');
            navigate('/signup');
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
                    <h2>SignIn</h2>
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
                            value={username}
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
                    <button type="submit" className='submit'>
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
