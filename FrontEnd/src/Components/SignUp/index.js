import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './index.css';
import countriesData from '../../Data/countries.json';
import industriesData from '../../Data/industries.json';
import banksData from '../../Data/banks.json';

const SignUp = () => {
    const navigate = useNavigate();
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
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [otpVisible, setOtpVisible] = useState(false);
    const [userType, setUserType] = useState('');
    const [localData, setLocalData] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setLocalData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const getOtp = () => {
        if (localData.aadharNumber) {
            console.log('OTP sent to:', localData.aadharNumber);
            setOtpVisible(true);
        } else {
            alert("Please enter your Aadhar Number before requesting OTP.");
        }
    };

    const validateForm = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (currentStep === 1) {
            if (!localData.fname) newErrors.fname = "First name is required.";
            if (!localData.lname) newErrors.lname = "Last name is required.";
            if (!localData.email) {
                newErrors.email = "Email is required.";
            } else if (!/\S+@\S+\.\S+/.test(localData.email)) {
                newErrors.email = "Email format is invalid.";
            }
            if (!localData.address1) newErrors.address1 = "Address line 1 is required.";
            if (!localData.city) newErrors.city = "City is required.";
            if (!localData.zip) newErrors.zip = "Zip code is required.";
            if (!localData.phone) newErrors.phone = "Phone number is required.";
        }

        if (currentStep === 2) {
            if (!localData.aadharNumber) newErrors.aadharNumber = "Aadhar Number is required.";
            if (!localData.otp && otpVisible) newErrors.otp = "OTP is required.";
        }

        if (currentStep === 3 && userType === 'director') {
            if (!localData.currency) newErrors.currency = "Currency is required.";
            if (!localData.bankName) newErrors.bankName = "Bank Name is required.";
            if (!localData.bankAccountNumber) newErrors.bankAccountNumber = "Bank Account Number is required.";
            if (!localData.ifscNumber) newErrors.ifscNumber = "IFSC Number is required.";
        }

        if (currentStep === 4 && userType === 'director') {
            if (!localData.shopActDinNumber) newErrors.shopActDinNumber = "Shop Act DIN Number is required.";
            if (!localData.industry) newErrors.industry = "Industry is required.";
            if (!localData.organizationWebsite) newErrors.organizationWebsite = "Organization Website is required.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        } else {
            setErrors({});
        }

        if (currentStep === 4) {
            console.log('Final Form Data:', { ...formData, ...localData });
            alert("Account verification completed!");
            navigate('/signin');
            return;
        }

        if (currentStep < 4) {
            setCurrentStep((prevStep) => prevStep + 1);
        }

        if (currentStep === 3) {
            setFormData((prevData) => ({
                ...prevData,
                ...localData,
            }));
        }
    };

    const handleBack = () => {
        setCurrentStep((prevStep) => prevStep - 1);
        if (currentStep > 1) {
            setLocalData((prevData) => ({
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
        setLocalData({});
        setErrors({});
    };

    return (
        <div className="signUp-container">
            <div className="verification-form">
                <div className="signup-header">
                    <div className="button-group">
                        <button className="candidate" onClick={() => handleUserType('candidate')}>Candidate</button>
                        <button className="director" onClick={() => handleUserType('director')}>Director</button>
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
                                    <input type="text" id="fname" placeholder="First name" value={localData.fname || ''} onChange={handleChange} />
                                    {errors.fname && <span className="error">{errors.fname}</span>}
                                    <input type="text" id="lname" placeholder="Last name" value={localData.lname || ''} onChange={handleChange} />
                                    {errors.lname && <span className="error">{errors.lname}</span>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Professional Email</label>
                                <input type="email" id="email" placeholder="Your email" value={localData.email || ''} onChange={handleChange} />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" id="address1" placeholder="Address line 1" value={localData.address1 || ''} onChange={handleChange} />
                                {errors.address1 && <span className="error">{errors.address1}</span>}
                                <input type="text" id="address2" placeholder="Address line 2" value={localData.address2 || ''} onChange={handleChange} />
                                <input type="text" id="city" placeholder="City" value={localData.city || ''} onChange={handleChange} />
                                {errors.city && <span className="error">{errors.city}</span>}
                                <input type="text" id="zip" placeholder="Zip" value={localData.zip || ''} onChange={handleChange} />
                                {errors.zip && <span className="error">{errors.zip}</span>}
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <div className="phone-group">
                                    <select id="countryCode" value={localData.countryCode || formData.countryCode} onChange={handleChange}>
                                        {countriesData.map((country) => (
                                            <option key={country.code} value={country.code}>{country.name}</option>
                                        ))}
                                    </select>
                                    <input type="tel" id="phone" placeholder="Phone number" value={localData.phone || ''} onChange={handleChange} />
                                    {errors.phone && <span className="error">{errors.phone}</span>}
                                </div>
                            </div>
                        </>
                    )}
                    {currentStep === 2 && (
                        <>
                            <div className="form-group">
                                <label>Aadhar Number</label>
                                <input type="text" id="aadharNumber" placeholder="Aadhar Number" value={localData.aadharNumber || ''} onChange={handleChange} />
                                {errors.aadharNumber && <span className="error">{errors.aadharNumber}</span>}
                            </div>
                            <button type="button" className="btn1" onClick={getOtp}>Send OTP</button>
                            {otpVisible && (
                                <div className="form-group">
                                    <label>OTP</label>
                                    <input type="text" id="otp" placeholder="Enter OTP" value={localData.otp || ''} onChange={handleChange} />
                                    {errors.otp && <span className="error">{errors.otp}</span>}
                                </div>
                            )}
                        </>
                    )}
                    {userType === 'director' && currentStep === 3 && (
                        <>
                            <div className="form-group">
                                <label>Currency</label>
                                <input type="text" id="currency" placeholder="Currency" value={localData.currency || ''} onChange={handleChange} />
                                {errors.currency && <span className="error">{errors.currency}</span>}
                            </div>
                            <div className="form-group">
                                <label>Bank Name</label>
                                <select id="bankName" value={localData.bankName || ''} onChange={handleChange}>
                                    <option value="">Select your bank...</option>
                                    {banksData.map((bank) => (
                                        <option key={bank.value} value={bank.value}>{bank.label}</option>
                                    ))}
                                </select>
                                {errors.bankName && <span className="error">{errors.bankName}</span>}
                            </div>
                            <div className="form-group">
                                <label>Bank Account Number</label>
                                <input type="text" id="bankAccountNumber" placeholder="Bank Account Number" value={localData.bankAccountNumber || ''} onChange={handleChange} />
                                {errors.bankAccountNumber && <span className="error">{errors.bankAccountNumber}</span>}
                            </div>
                            <div className="form-group">
                                <label>IFSC Number</label>
                                <input type="text" id="ifscNumber" placeholder="IFSC Number" value={localData.ifscNumber || ''} onChange={handleChange} />
                                {errors.ifscNumber && <span className="error">{errors.ifscNumber}</span>}
                            </div>
                        </>
                    )}
                    {userType === 'director' && currentStep === 4 && (
                        <>
                            <div className="form-group">
                                <label>Shop Act DIN Number</label>
                                <input type="text" id="shopActDinNumber" placeholder="Shop Act DIN Number" value={localData.shopActDinNumber || ''} onChange={handleChange} />
                                {errors.shopActDinNumber && <span className="error">{errors.shopActDinNumber}</span>}
                            </div>
                            <div className="form-group">
                                <label>Industry</label>
                                <select id="industry" value={localData.industry || ''} onChange={handleChange}>
                                    <option value="">Select your industry...</option>
                                    {industriesData.map((industry) => (
                                        <option key={industry.value} value={industry.value}>{industry.label}</option>
                                    ))}
                                </select>
                                {errors.industry && <span className="error">{errors.industry}</span>}
                            </div>
                            <div className="form-group">
                                <label>Organization Website</label>
                                <input type="text" id="organizationWebsite" placeholder="Organization Website" value={localData.organizationWebsite || ''} onChange={handleChange} />
                                {errors.organizationWebsite && <span className="error">{errors.organizationWebsite}</span>}
                            </div>
                        </>
                    )}
                    <button type="submit" className="btn1">Next</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
