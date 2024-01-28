import React, { useState } from 'react';
import './CraigslistApp.css';
import HeaderBar from './HeaderBar/HeaderBar';
import MainBanner from './MainBanner/MainBanner';
import MainSection from './MainSection/MainSection';
import FooterBar from './FooterBar/FooterBar';

function CraigslistApp() {
  const [location, setLocation] = useState("Vancouver");

  return (
    <div id="craigslistApp">
      <HeaderBar location={location} setLocation={setLocation}></HeaderBar>
      <MainBanner location={location}></MainBanner>
      <MainSection></MainSection>
      <FooterBar></FooterBar>
    </div>
  );
}

export default CraigslistApp;
