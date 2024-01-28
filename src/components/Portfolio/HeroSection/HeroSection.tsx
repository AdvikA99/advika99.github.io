import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div id="heroSection">
      <img id="heroImage" src="hero-bg.jpg"/>
      <div id="heroContent">
        <p id="heroTitle">I am Advik Ayya</p>
        <p id="heroSubtitle">an aspiring software developer</p>
      </div>
    </div>
  );
}

export default HeroSection;
