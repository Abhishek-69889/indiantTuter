import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    whatsapp: '',
    password: '',
    rePassword: '',
    dob: '',
    email: '',
    city: '',
    pinCode: '',
    gender: '',
    tutorLocation: '',
    qualification: '',
    experience: '',
    address: '',
    about: '',
    teachingAt: 'studentPlace'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate passwords match
    if (formData.password !== formData.rePassword) {
      alert("Passwords do not match!");
      return;
    }
    axios.post('http://localhost:3000/register-tutor', formData)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error submitting the form:', error);
      });
  };
  

  return (
    <form className="tutor-registration-form" onSubmit={handleSubmit}>
      <h1>Register As Tutor For Free</h1>
      <div className="form-row">
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Mobile *</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>WhatsApp</label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Re-Enter Password *</label>
          <input
            type="password"
            name="rePassword"
            value={formData.rePassword}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>DOB *</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Pin Code</label>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Gender *</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Tutor Location *</label>
          <input
            type="text"
            name="tutorLocation"
            value={formData.tutorLocation}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Highest Qualification *</label>
          <select name="qualification" value={formData.qualification} onChange={handleChange} required>
            <option value="" disabled>Select Qualification</option>
            <option value="bachelor">Bachelor's</option>
            <option value="master">Master's</option>
            <option value="phd">PhD</option>
            {/* Add more qualifications as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Experience *</label>
          <select name="experience" value={formData.experience} onChange={handleChange} required>
            <option value="" disabled>Select Experience</option>
            <option value="1">1 Year</option>
            <option value="2">2 Years</option>
            <option value="3">3 Years</option>
            <option value="4">4 Years</option>
            <option value="5+">5+ Years</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <label>Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label>About Tutor</label>
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-group">
        <label>Teaching At</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="teachingAt"
              value="studentPlace"
              checked={formData.teachingAt === 'studentPlace'}
              onChange={handleChange}
            />
            At student place
          </label>
          <label>
            <input
              type="radio"
              name="teachingAt"
              value="tutorPlace"
              checked={formData.teachingAt === 'tutorPlace'}
              onChange={handleChange}
            />
            At Tutor place
          </label>
          <label>
            <input
              type="radio"
              name="teachingAt"
              value="online"
              checked={formData.teachingAt === 'online'}
              onChange={handleChange}
            />
            Online
          </label>
        </div>
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default SignUp;