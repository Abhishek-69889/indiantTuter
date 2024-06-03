import React, { useState } from 'react';
import './TutorFinder.css';

const TutorFinder = () => {
  const [location, setLocation] = useState('');
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [isTeacher, setIsTeacher] = useState(false); // Track whether the user is a teacher

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log('Location:', location);
    console.log('Grade:', grade);
    console.log('Subject:', subject);
  };

  return (
    <div className="tutor-finder" id="TutorFinder-main">
      <div className="role-buttons">
        <button className={`role-button ${!isTeacher ? 'active' : ''}`} onClick={() => setIsTeacher(false)}>I'm Student</button>
        <button className={`role-button ${isTeacher ? 'active' : ''}`} onClick={() => setIsTeacher(true)}>I'm Teacher</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter Your Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="filter-options">
          <select value={grade} onChange={(e) => setGrade(e.target.value)}>
            <option value="">Select Grade</option>
            <option value="VI-VIII">Class VI - VIII</option>
            {/* Add more grade options as needed */}
          </select>
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="">Select Subject</option>
            {/* Add subject options as needed */}
          </select>
        </div>
        <button type="submit">{isTeacher ? "Find Student" : "Find Tutor"}</button>
      </form>
    </div>
  );
};

export default TutorFinder;
