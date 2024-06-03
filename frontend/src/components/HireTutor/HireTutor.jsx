import React, { useState } from 'react';
import './HireTutor.css';

const HireTutor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    class: '',
    subject: '',
    location: '',
    tuitionType: 'Tutor home / student home / online'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form data submitted:', formData);
  };

  return (
    <form className="student-enquiry-form" onSubmit={handleSubmit}>
      <h1>Student Enquiry Form</h1>
      <div className="form-group">
        <label>Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Mobile No. *</label>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Class</label>
        <input
          type="tel"
          name="class"
          value={formData.class}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Subject</label>
        <input
          type="tel"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Location</label>
        <input
          type="tel"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Mode Of Learning</label>
        <input
          type="tel"
          name="tuitionType"
          value={formData.tuitionType}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default HireTutor;
