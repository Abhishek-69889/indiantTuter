import React from 'react';
import './TeacherDashboard.css'; // Import CSS for styling
import Sidebar from './Sidebar/Sidebar';
import Content from './MainContent/Content';

const TeacherDashboard = () => {
  return (
    <>
    <div className="teacher-dashboard" id='dashboard-main'>
     <Sidebar/>
      <Content/>
    </div>
    
    </>
  );
};

export default TeacherDashboard;
