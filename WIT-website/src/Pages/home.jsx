import React, { useState } from 'react'; // Add this line
import '../styles/Home.css'; 
import logo2 from '../assets/Logo/Women_In_Tech_Logo_pink.png';
import instagramLogo from '../assets/Logo/InstaLogo.png';
import instagramLogo2 from '../assets/Logo/InstaWritingLogo.webp';

import discordLogo from '../assets/Logo/DiscordLogo.png';
import discordLogo2 from '../assets/Logo/DiscordWritingLogo.png';

import MembershipLogo from '../assets/Logo/MembershipLogo.png';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const images = [0, 1, 2]; // Use indices instead of actual images

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
        <div className="purpleDot"></div>
      </div>

      <div className="carousel-container">
        <button className="prev-btn" onClick={prevImage}>❮</button>
        <div className="carousel">
          {images.map((_, index) => (
            <div
              key={index}
              className={`carousel-image ${index === currentIndex ? 'center' : ''}`}
            />
          ))}
        </div>
        <button className="next-btn" onClick={nextImage}>❯</button>
      </div>

{/* Social Media section */}
<div className="image-links">
        {/* Instagram */}
        <a href="https://www.instagram.com/calpolywit/" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram" style={{
            width: '80px', height: 'auto', borderRadius:'10px',
          }} />
        </a>

        {/*left of Instagram*/}
        <a href="https://www.instagram.com/calpolywit/" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo2} alt="Instagram" className="insta-logo2" />
        </a>

        
        {/* Discord */}
        <a href="https://discord.com/invite/R5nrdnDFTq" target="_blank" rel="noopener noreferrer">
          <img src={discordLogo} alt="Discord" className="discord" style={{
            width: '45px', height: 'auto', borderRadius:'10px',
          }} />

          {/*left of Discrod*/}
        <a href="https://discord.com/invite/R5nrdnDFTq" target="_blank" rel="noopener noreferrer">
          <img src={discordLogo2} alt="Instagram" className="discord-logo2" />
        </a>
        </a>
        
      {/* Membership */}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFZKpcMzfrsDnQopEoeKCzhD2rrWzPALADaOaxjcTWUdUcRg/viewform" target="_blank" rel="noopener noreferrer">
          <img src={MembershipLogo} alt="Membership Form" className="membership" style={{
            width: '50px', height: 'auto', borderRadius:'10px', marginLeft: '16px', marginTop: '20px',
          }} />
        </a>
      {/*left of Membership*/}
      </div>


    </div>
  );
}

export default Home;
