import React from 'react';
import './PortfolioApp.css';
import NavBar from './NavBar/NavBar';
import HeroSection from './HeroSection/HeroSection';
import AboutSection from './AboutSection/AboutSection';
import SkillsSection from './SkillsSection/SkillsSection';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import FooterBar from './FooterBar/FooterBar';
import ExperienceSection from './ExperienceSection/ExperienceSection';

function PortfolioApp() {
  return (
    <div id="portfolioApp">
      <NavBar/>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <ExperienceSection/>
      <ProjectsSection/>
      <FooterBar/>
    </div>
  );
}

export default PortfolioApp;
