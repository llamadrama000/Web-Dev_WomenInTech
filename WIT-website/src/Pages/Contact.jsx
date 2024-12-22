import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using EmailJS, currently using my own personal email
    emailjs
      .sendForm(
        'service_28w62bb',   // Replace with your EmailJS service ID
        'template_xexg95e',   // Replace with your EmailJS template ID
        e.target,
        '0rMjdm8aV_UemYcqM'        // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);  // Log success message
          alert('Your message has been sent!');
        },
        (error) => {
          console.log(error.text);  // Log error message
          alert('An error occurred. Please try again later.');
        }
      );
  };

  return (
    <div className="ContactBackground">
      <div className="ContactContainer">
        {/* Left Section: Form */}
        <div className="ContactFormSection">
          <h1 className="ContactTitle">Get in Touch</h1>
          <p className="ContactSubtitle">We are here for you! How can we help?</p>
          <form className="ContactForm" onSubmit={handleSubmit}>
            {/* Input Fields */}
            <input
              type="text"
              className="ContactInput"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              className="ContactInput"
              name="email"
              placeholder="Enter Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="ContactTextarea"
              name="message"
              placeholder="Go ahead, we are listening...."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {/* Submit Button */}
            <button type="submit" className="ContactButton">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;





