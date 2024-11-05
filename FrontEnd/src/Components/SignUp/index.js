import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import countriesData from '../../Data/countries.json';
import industriesData from '../../Data/industries.json';
import banksData from '../../Data/banks.json';

const SignUp = () => {
    const navigate = useNavigate();

    // Merge formData and localData state
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        zip: '',
        countryCode: countriesData[0].code,
        phone: '',
        shopActDinNumber: '',
        industry: '',
        organizationWebsite: '',
        currency: '',
        bankName: '',
        bankAccountNumber: '',
        ifscNumber: '',
        aadharNumber: '',
        otp: '',
        password: '',
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [otpVisible, setOtpVisible] = useState(false);
    const [userType, setUserType] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const getOtp = () => {
        if (formData.aadharNumber) {
            console.log('OTP sent to:', formData.aadharNumber);
            setOtpVisible(true);
        } else {
            alert("Please enter your Aadhar Number before requesting OTP.");
        }
    };

    const validateForm = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (currentStep === 1) {
            if (!formData.fname) newErrors.fname = "First name is required.";
            if (!formData.lname) newErrors.lname = "Last name is required.";
            if (!formData.email) {
                newErrors.email = "Email is required.";
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = "Email format is invalid.";
            }

            // Password validation
            if (!formData.password) newErrors.password = "Password is required.";
            if (formData.password && formData.password.length < 6) newErrors.password = "Password must be at least 6 characters long.";
           
            // Address and phone validation
            if (!formData.address1) newErrors.address1 = "Address line 1 is required.";
            if (!formData.city) newErrors.city = "City is required.";
            if (!formData.zip) newErrors.zip = "Zip code is required.";
            if (!formData.phone) newErrors.phone = "Phone number is required.";
        }

        if (currentStep === 2) {
            if (!formData.aadharNumber) newErrors.aadharNumber = "Aadhar Number is required.";
            if (!formData.otp && otpVisible) newErrors.otp = "OTP is required.";
        }

        if (currentStep === 3 && userType === 'director') {
            if (!formData.currency) newErrors.currency = "Currency is required.";
            if (!formData.bankName) newErrors.bankName = "Bank Name is required.";
            if (!formData.bankAccountNumber) newErrors.bankAccountNumber = "Bank Account Number is required.";
            if (!formData.ifscNumber) newErrors.ifscNumber = "IFSC Number is required.";
        }

        if (currentStep === 4 && userType === 'director') {
            if (!formData.shopActDinNumber) newErrors.shopActDinNumber = "Shop Act DIN Number is required.";
            if (!formData.industry) newErrors.industry = "Industry is required.";
            if (!formData.organizationWebsite) newErrors.organizationWebsite = "Organization Website is required.";
        }

        // If validation fails, set errors and stop further execution
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        } else {
            setErrors({});
        }

        // Submit the form data to the backend after step 2
        if (currentStep === 2) {
            try {
                // Merge formData for submission
                const dataToSubmit = { ...formData };

                // Send a POST request to the backend
                const response = await fetch('http://localhost:5001/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataToSubmit),
                });

                const result = await response.json();
                console.log(result);

                if (response.ok) {
                    alert(result.message || 'Account created successfully!');
                    navigate('/signin'); // Redirect to signin page after successful signup
                } else {
                    alert(result.message || 'An error occurred during signup.');
                }

            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while submitting your data. Please try again later.');
            }
        } else {
            // Move to the next step
            setCurrentStep((prevStep) => prevStep + 1);
        }
    };

    const handleBack = () => {
        setCurrentStep((prevStep) => prevStep - 1);
        if (currentStep > 1) {
            setFormData((prevData) => ({
                ...prevData,
                otp: '',
                aadharNumber: ''
            }));
            setOtpVisible(false);
        }
    };

    const handleUserType = (type) => {
        setUserType(type);
        setCurrentStep(1);
        setFormData({ ...formData, otp: '', aadharNumber: '' });
        setErrors({});
    };

    return (
        <div className="signUp-container">
            <div className="verification-form">
                <div className="signup-header">
                    <div className="role-selection">
                        <button className="role-button" onClick={() => handleUserType('candidate')}>Candidate</button>
                        <button className="role-button" onClick={() => handleUserType('director')}>Director</button>
                    </div>
                    {currentStep > 1 && (
                        <button className="back-button" onClick={handleBack}>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                    )}
                </div>
                <div className="steps">
                    {[1, 2, 3, 4].map((step) => (
                        (userType === 'candidate' && (step === 1 || step === 2)) ||
                        (userType === 'director' && step <= 4) ? (
                            <div key={step} className={`step ${currentStep > step ? 'completed' : ''} ${currentStep === step ? 'active' : ''}`}>
                                <div className="circle">{step}</div>
                                {step < 4 && <div className="line"></div>}
                            </div>
                        ) : null
                    ))}
                </div>
                <form onSubmit={validateForm}>
                    {currentStep === 1 && (
                        <>
                            <div className="form-group">
                                <label>Name</label>
                                <div className="phone-group1">
                                    <input type="text" id="fname" placeholder="First name" value={formData.fname} onChange={handleChange} />
                                    {errors.fname && <span className="error">{errors.fname}</span>}
                                    <input type="text" id="lname" placeholder="Last name" value={formData.lname} onChange={handleChange} />
                                    {errors.lname && <span className="error">{errors.lname}</span>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Professional Email</label>
                                <input type="email" id="email" placeholder="Your email" value={formData.email} onChange={handleChange} />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" id="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                                {errors.password && <span className="error">{errors.password}</span>}
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" id="address1" placeholder="Address line 1" value={formData.address1} onChange={handleChange} />
                                {errors.address1 && <span className="error">{errors.address1}</span>}
                                <input type="text" id="address2" placeholder="Address line 2" value={formData.address2} onChange={handleChange} />
                                <input type="text" id="city" placeholder="City" value={formData.city} onChange={handleChange} />
                                {errors.city && <span className="error">{errors.city}</span>}
                                <input type="text" id="zip" placeholder="Zip" value={formData.zip} onChange={handleChange} />
                                {errors.zip && <span className="error">{errors.zip}</span>}
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <div className="phone-group">
                                    <select id="countryCode" value={formData.countryCode} onChange={handleChange}>
                                        {countriesData.map((country) => (
                                            <option key={country.code} value={country.code}>{country.name}</option>
                                        ))}
                                    </select>
                                    <input type="tel" id="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
                                    {errors.phone && <span className="error">{errors.phone}</span>}
                                </div>
                            </div>
                        </>
                    )}
                    {currentStep === 2 && (
                        <>
                            <div className="form-group">
                                <label>Aadhar Number</label>
                                <input type="text" id="aadharNumber" placeholder="Aadhar Number" value={formData.aadharNumber} onChange={handleChange} />
                                {errors.aadharNumber && <span className="error">{errors.aadharNumber}</span>}
                            </div>
                            <button type="button" className="role-button" onClick={getOtp}>Send OTP</button>
                            {otpVisible && (
                                <div className="form-group">
                                    <label>OTP</label>
                                    <input type="text" id="otp" placeholder="Enter OTP" value={formData.otp} onChange={handleChange} />
                                    {errors.otp && <span className="error">{errors.otp}</span>}
                                </div>
                            )}
                        </>
                    )}
                    {userType === 'director' && currentStep === 3 && (
                        <>
                            <div className="form-group">
                                <label>Currency</label>
                                <input type="text" id="currency" placeholder="Currency" value={formData.currency} onChange={handleChange} />
                                {errors.currency && <span className="error">{errors.currency}</span>}
                            </div>
                            <div className="form-group">
                                <label>Bank Name</label>
                                <select id="bankName" value={formData.bankName} onChange={handleChange}>
                                    <option value="">Select your bank...</option>
                                    {banksData.map((bank) => (
                                        <option key={bank.value} value={bank.value}>{bank.label}</option>
                                    ))}
                                </select>
                                {errors.bankName && <span className="error">{errors.bankName}</span>}
                            </div>
                            <div className="form-group">
                                <label>Bank Account Number</label>
                                <input type="text" id="bankAccountNumber" placeholder="Bank Account Number" value={formData.bankAccountNumber} onChange={handleChange} />
                                {errors.bankAccountNumber && <span className="error">{errors.bankAccountNumber}</span>}
                            </div>
                            <div className="form-group">
                                <label>IFSC Number</label>
                                <input type="text" id="ifscNumber" placeholder="IFSC Number" value={formData.ifscNumber} onChange={handleChange} />
                                {errors.ifscNumber && <span className="error">{errors.ifscNumber}</span>}
                            </div>
                        </>
                    )}
                    {userType === 'director' && currentStep === 4 && (
                        <>
                            <div className="form-group">
                                <label>Shop Act DIN Number</label>
                                <input type="text" id="shopActDinNumber" placeholder="Shop Act DIN Number" value={formData.shopActDinNumber} onChange={handleChange} />
                                {errors.shopActDinNumber && <span className="error">{errors.shopActDinNumber}</span>}
                            </div>
                            <div className="form-group">
                                <label>Industry</label>
                                <select id="industry" value={formData.industry} onChange={handleChange}>
                                    <option value="">Select your industry...</option>
                                    {industriesData.map((industry) => (
                                        <option key={industry.value} value={industry.value}>{industry.label}</option>
                                    ))}
                                </select>
                                {errors.industry && <span className="error">{errors.industry}</span>}
                            </div>
                            <div className="form-group">
                                <label>Organization Website</label>
                                <input type="text" id="organizationWebsite" placeholder="Organization Website" value={formData.organizationWebsite} onChange={handleChange} />
                                {errors.organizationWebsite && <span className="error">{errors.organizationWebsite}</span>}
                            </div>
                        </>
                    )}
                    <button type="submit" className="role-button">Next</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
