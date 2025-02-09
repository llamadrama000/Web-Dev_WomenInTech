import React, { useState } from 'react'; // Add this line
import '../styles/Home.css';
import logo2 from '../assets/Logo/Women_In_Tech_Logo.png';
import instagramLogo from '../assets/Logo/instaPurple.png';

import discordLogo from '../assets/Logo/discordPurple.png';


import MembershipLogo from '../assets/Logo/MembershipLogo.png';

import image3 from '../assets/WebsitePictures/award.jpg';
import image1 from '../assets/WebsitePictures/CSAF.png';
import image2 from '../assets/WebsitePictures/extra.jpg';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const images = [image1, image2, image3];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="home">
      <div className="logo-container">
        <img
          src={logo2}
          alt="Women in Tech Logo"
          className="wit-logo2"
        />
      </div>

      <div className="image-links">
  {/* Instagram */}
  <a href="https://www.instagram.com/calpolywit/" target="_blank" rel="noopener noreferrer" className="social-link">
    <img src={instagramLogo} alt="Instagram" className="social-logo" />
  </a>

  {/* Discord */}
  <a href="https://discord.com/invite/R5nrdnDFTq" target="_blank" rel="noopener noreferrer" className="social-link">
    <img src={discordLogo} alt="Discord" className="social-logo" />
  </a>

  {/* Membership */}
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFZKpcMzfrsDnQopEoeKCzhD2rrWzPALADaOaxjcTWUdUcRg/viewform" target="_blank" rel="noopener noreferrer" className="social-link">
    <img src={MembershipLogo} alt="Membership Form" className="social-logo" />
  </a>
</div>

      <div className="carousel-container">
        <button className="prev-btn" onClick={prevImage}>❮</button>
        <div className="carousel">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-image ${index === currentIndex ? 'center' : ''}`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '500px',
                height: '500px',
                borderRadius: '10px',
              }}
            />
          ))}
        </div>
        <button className="next-btn" onClick={nextImage}>❯</button>
      </div>

      {/* Social Media section */}







    </div>
  );
}

export default Home;


