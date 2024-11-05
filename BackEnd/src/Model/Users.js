// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    phone: { type: String, required: true },
    aadharNumber: { type: String, required: true },
    shopActDinNumber: { type: String },
    industry: { type: String },
    organizationWebsite: { type: String },
    currency: { type: String },
    bankName: { type: String },
    bankAccountNumber: { type: String },
    ifscNumber: { type: String },
}, { timestamps: true });

const Users = mongoose.model('Users', userSchema);
module.exports = Users;
