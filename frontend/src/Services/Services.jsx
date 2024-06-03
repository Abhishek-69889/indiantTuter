import React from 'react';
import './Services.css';
import Footer from '../components/footer/Footer';

const Service = ({ title, description, features }) => {
  return (
    <div className="service">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <>
    <div className="app">
      <header>
        <h1>Our Services</h1>
      </header>
      <Service
        title="Online Tuition"
        description="We offer comprehensive online tuition services tailored to meet the unique learning needs of each student. Our online platform provides a dynamic and interactive learning environment where students can engage with experienced tutors, access resources, and collaborate with peers from the comfort of their homes."
        features={[
          "Live, interactive sessions with experienced tutors",
          "Flexible scheduling to accommodate your busy lifestyle",
          "Access to a wide range of resources, including study materials and practice exercises",
          "Personalized learning plans tailored to your individual strengths and areas for improvement",
          "Regular progress updates and feedback to track your development"
        ]}
      />
      <Service
        title="Offline Tuition"
        description="Our offline tuition services provide a personalised learning experience delivered in a traditional classroom setting. With a team of dedicated tutors and state-of-the-art facilities, we create an environment that fosters academic excellence and promotes intellectual growth."
        features={[
          "Individualised instruction tailored to your learning pace and preferences",
          "Small group classes for collaborative learning and peer support",
          "Experienced tutors with a proven track record of academic success",
          "Access to supplemental learning materials and resources to enhance your understanding of key concepts",
          "Regular assessments and feedback to monitor your progress and identify areas for improvement"
        ]}
      />
      <Service
        title="Hybrid Tuition"
        description="Our hybrid tuition services combine the flexibility of online learning with the personalised attention of offline instruction. This unique approach allows students to benefit from the convenience of online sessions while also enjoying the advantages of face-to-face interaction with tutors and peers."
        features={[
          "Flexibility to choose between online and offline sessions based on your preferences and schedule",
          "Personalized learning plans designed to maximise your academic potential",
          "Dedicated tutors who provide individualised support and guidance",
          "Interactive online platform for engaging with course materials and collaborating with classmates",
          "Regular progress assessments and feedback to keep you on track towards your goals"
        ]}
      />
      <footer>
        <p>At Indian Tutor Expert, we are committed to providing high-quality tuition services that empower students to reach their full potential. Get in touch with us today to learn more!</p>
      </footer>
    </div>
    <Footer/>
    </>
  );
};

export default App;
