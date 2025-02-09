// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../Styles/AboutUs.css';
import AboutUsPic from '../assets/WebsitePictures/AboutUsPic.jpg'; // Correctly import the image

const About = () => {
  const description = "Women in Tech is a dynamic club dedicated to empowering and supporting women in the technology field. It strives to create a safe, inclusive, and inspiring space where women can connect, collaborate, and thrive in their tech journeys. The club focuses on fostering professional growth, building confidence, and encouraging innovation through mentorship programs, workshops, networking events, and leadership opportunities. By celebrating the achievements of women in tech and addressing the challenges they face, Women in Tech aims to cultivate a supportive community that inspires members to reach their full potential and make meaningful contributions to the industry. ";
  const description1= "Women In Tech hosts weekly club meetings on Thursdays in the CBA during U-hour (12-1pm), discussing various topics including guest speakers from various tech fields, professional development, and informational discussions about fields in tech! Make sure to follow our socials to keep up with the club :)"
  return (
    <div className="about-container">
      <div className="title-container">
        <h1 className="about-title">About Us</h1>
      </div>
      <div className="about-content">
        <div className="description-section">
          <p>{description}</p>
          <br /> {/* Add an extra line */}
          <p>{description1}</p>
        </div>
        <div className="image-card">
          <div className="purple-dot"></div>
          <img src={AboutUsPic} alt="About Us" className="about-us-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
