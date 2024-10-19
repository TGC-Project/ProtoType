// src/SignUp.js
import React, { useState, useEffect } from 'react'; // Import useNavigate for redirection
import { useNavigate } from 'react-router-dom';
import './index.css'; // Ensure you have this CSS file for styles
import countriesData from '../../Data/countries.json'; // Adjust the path as necessary
import industriesData from '../../Data/industries.json'; // Adjust the path as necessary
import banksData from '../../Data/banks.json'; // Adjust the path as necessary

const SignUp = () => {
    const navigate = useNavigate();
    // State to manage form data and current step
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        zip: '',
        countryCode: countriesData[0].code, // Default to the first country
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
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [otpVisible, setOtpVisible] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const getOtp = () => {
        console.log('OTP sent to:', formData.aadharNumber);
        setOtpVisible(true); // Show the OTP field
    };

    const validateForm = (e) => {
        e.preventDefault();
        if (currentStep === 4) {
            console.log('OTP entered:', formData.otp);
            alert("Account verification completed!");
            navigate('/signin'); // Redirect to Sign-In page after verification
            return;
        }
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setCurrentStep((prevStep) => prevStep - 1);
        if (currentStep > 1) {
            setFormData((prevData) => {
                // Reset the OTP and visibility when going back
                return { ...prevData, otp: '', aadharNumber: '' };
            });
            setOtpVisible(false);
        }
    };

    return (
        <div className="signUp-container">
            <div className="verification-form">
            <div className="signup-header">
                    {currentStep > 1 && (
                        <button className="back-button" onClick={handleBack}>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                    )}
                    <h1>Account Verification</h1>
                </div>
                <div className="steps">
                    {[1, 2, 3, 4].map((step) => (
                        <div key={step} className={`step ${currentStep > step ? 'completed' : ''} ${ currentStep === step ? 'active' : ''}`}>
                            <div className="circle">{step}</div>
                            {step < 4 && <div className="line"></div>}
                        </div>
                    ))}
                </div>
                <form onSubmit={validateForm}>
                    {currentStep === 1 && (
                        <>
                            <div className="form-group">
                                <label>Name</label>
                                <div className="phone-group1">
                                    <input type="text" id="fname" placeholder="First name" value={formData.fname} onChange={handleChange} />
                                    <input type="text" id="lname" placeholder="Last name" value={formData.lname} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Professional Email</label>
                                <input type="email" id="email" placeholder="Your email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" id="address1" placeholder="Address line 1" value={formData.address1} onChange={handleChange} />
                                <input type="text" id="address2" placeholder="Address line 2" value={formData.address2} onChange={handleChange} />
                                <input type="text" id="city" placeholder="City" value={formData.city} onChange={handleChange} />
                                <input type="text" id="zip" placeholder="Zip" value={formData.zip} onChange={handleChange} />
                            </div>
                            <div className="form-group ">
                                <label>Phone Number</label>
                                <div className="phone-group">
                                    <select id="countryCode" value={formData.countryCode} onChange={handleChange}>
                                        {countriesData.map((country) => (
                                            <option key={country.code} value={country.code}>{country.name}</option>
                                        ))}
                                    </select>
                                    <input type="tel" id="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
                                </div>
                            </div>
                        </>
                    )}
                    {currentStep === 2 && (
                        <>
                            <div className="form-group">
                                <label>Shop Act DIN Number</label>
                                <input type="text" id="shopActDinNumber" placeholder="Shop Act DIN Number" value={formData.shopActDinNumber} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Industry</label>
                                <select id="countryCode" value={formData.industry} onChange={handleChange}>
                                    <option value="">Select your industry...</option>
                                    {industriesData.map((industry) => (
                                        <option key={industry.value} value={industry.value}>{industry.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Organization Website</label>
                                <input type="text" id="organizationWebsite" placeholder="Organization Website" value={formData.organizationWebsite} onChange={handleChange} />
                            </div>
                        </>
                    )}
                    {currentStep === 3 && (
                        <>
                            <div className="form-group">
                                <label>Currency</label>
                                <input type="text" id="currency" placeholder="Currency" value={formData.currency} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Bank Name</label>
                                <select id="countryCode" value={formData.bankName} onChange={handleChange}>
                                    <option value="">Select your bank...</option>
                                    {banksData.map((bank) => (
                                        <option key={bank.value} value={bank.value}>{bank.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Bank Account Number</label>
                                <input type="text" id="bankAccountNumber" placeholder="Bank Account Number" value={formData.bankAccountNumber} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>IFSC Number</label>
                                <input type="text" id="ifscNumber" placeholder="IFSC Number" value={formData.ifscNumber} onChange={handleChange} />
                            </div>
                        </>
                    )}
                    {currentStep === 4 && (
                        <>
                            <div className="form-group">
                                <label>Aadhar Number</label>
                                <input type="text" id="aadharNumber" placeholder="Aadhar Number" value={formData.aadharNumber} onChange={handleChange} />
                            </div>
                            <button type="button" className="btn1" onClick={getOtp}>Send OTP</button>
                            {otpVisible && (
                                <div className="form-group">
                                    <label>OTP</label>
                                    <input type="text" id="otp" placeholder=" Enter OTP" value={formData.otp} onChange={handleChange} />
                                </div>
                            )}
                        </>
                    )}
                    <button type="submit" className="btn1">Next</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;