// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../Styles/AboutUs.css';

const About = () => {
  const description = "Women in Tech is a dynamic club dedicated to empowering and supporting women in the technology field. It strives to create a safe, inclusive, and inspiring space where women can connect, collaborate, and thrive in their tech journeys. The club focuses on fostering professional growth, building confidence, and encouraging innovation through mentorship programs, workshops, networking events, and leadership opportunities. By celebrating the achievements of women in tech and addressing the challenges they face, Women in Tech aims to cultivate a supportive community that inspires members to reach their full potential and make meaningful contributions to the industry.";

  return (
    <div className="about-container">
      <div className="title-container">
        <h1 className="about-title">About Us</h1>
      </div>
      <div className="about-content">
        <div className="description-section">
          <p>{description}</p>
        </div>
        <div className="image-card">
          <div className="purple-dot"></div>
          <div className="image-placeholder">
            <span>Image</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;