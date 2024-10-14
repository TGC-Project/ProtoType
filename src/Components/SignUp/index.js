import React, { useState, useEffect } from 'react';
import './index.css'; // Ensure your CSS file is imported

const SignUp = () => {
    const [userType, setUserType] = useState('user'); // State for user type
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        aadhaar: '',
        din: '',
        shopact: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle user type change
    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    // Effect to handle user type changes, similar to your JavaScript
    useEffect(() => {
        // This effect runs whenever userType changes
        const companyFields = document.getElementById('company-fields');
        if (userType === 'company-owner') {
            companyFields.style.display = 'block'; // Show fields for Company Owner
        } else {
            companyFields.style.display = 'none'; // Hide fields for others
        }
    }, [userType]);

    return (
        <div className="registration-form">
            <h2>Join Our Prototype</h2>

            <div className="button-group">
                <input
                    type="radio"
                    id="candidate"
                    name="user-type"
                    value="user"
                    checked={userType === 'user'}
                    onChange={handleUserTypeChange}
                />
                <label className="user-type-button" htmlFor="candidate">Candidate</label>

                <input
                    type="radio"
                    id="company-owner"
                    name="user-type"
                    value="company-owner"
                    checked={userType === 'company-owner'}
                    onChange={handleUserTypeChange}
                />
                <label className="user-type-button" htmlFor="company-owner">Company Owner</label>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="aadhaar">Aadhaar Number</label>
                    <input
                        type="text"
                        id="aadhaar"
                        name="aadhaar"
                        required
                        value={formData.aadhaar}
                        onChange={handleChange}
                    />
                </div>

                <div id="company-fields" className="company-fields" style={{ display: userType === 'company-owner' ? 'block' : 'none' }}>
                    <div className="form-group">
                        <label htmlFor="din">DIN</label>
                        <input
                            type="text"
                            id="din"
                            name="din"
                            value={formData.din}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="shopact">Shop Act Number</label>
                        <input
                            type="text"
                            id="shopact"
                            name="shopact"
                            value={formData.shopact}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button className="register-button" type="submit">Register</button>
                <div className="OR">OR</div>
                <div className="loginIn">
                    Already On Prototype? <a href="/signin">SignIn</a>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
