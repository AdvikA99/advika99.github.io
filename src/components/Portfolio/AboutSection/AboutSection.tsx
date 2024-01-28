import React, { useEffect, useRef, useState } from 'react';
import './AboutSection.css';
import DownloadIcon from '@mui/icons-material/Download';
import SchoolIcon from '@mui/icons-material/School';
import LaptopIcon from '@mui/icons-material/Laptop';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function AboutSection() {
  const [curSkillInd, setCurSkillInd] = useState(0);
  const skillsSlotTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Readds first element to loop back in slot
  const skills = ["React", "Angular", "CSS", "TypeScript", "Java", "C#"];
  skills.push(skills[0]);

  const resetTimeout = () => {
    if (skillsSlotTimeoutRef.current) {
      clearTimeout(skillsSlotTimeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    skillsSlotTimeoutRef.current = setTimeout(() => {
      setCurSkillInd((prevIndex) => {
        return (prevIndex + 1) % skills.length;
      })
    }, curSkillInd === 0 ? 100 : 1500)

    return () => resetTimeout();
  }, [curSkillInd]);

  return (
    <div id="about">
      <div id="aboutMeCard" className="cutoutHole">
        <div className="cutoutPiece">
          <p id="aboutHeader" className="header">About Me</p>
          <div id="aboutMeContent">
            <div>
              <p className="aboutMeText">I am a graduate from UBC Vancouver, 2022, with a major in Computer Science and a minor in Economics</p>
              <p className="aboutMeText">I am highly motivated, dedicated, and adaptable, with experience collaborating in teams and communicating with clients</p>
              <p className="aboutMeText">I am passionate to add to my growing repertoire of coding skills, often teaching myself new emerging technologies with the ability to learn quickly and efficiently</p>
            </div>
            <div>
              <div className="accomplishmentsDiv">
                <SchoolIcon/> 
                <p>Major in Computer Science with an Average Grade of 81% </p>
              </div>
              <div className="accomplishmentsDiv">
                <LaptopIcon/> 
                <p>Experience in over 12 Coding Languages</p>
              </div>
              <div className="accomplishmentsDiv">
                <CalendarMonthIcon/> 
                <p>10+ years experience coding</p>
              </div>
              <div className="accomplishmentsDiv">
                <EmojiEventsIcon/> 
                <p>UBC IMES Scholarship Recipient</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="skillsSlotsCard" className="cutoutHole">
        <div className="cutoutPiece">
          <div id="skillsTextDiv">
            <p id="skillsTextPreamble">Experience with</p>
            <div id="skillsTextMask">
              {
                skills.map((skill, index) => (
                  <div key={index} style={{transitionDuration: curSkillInd === 0 ? "0ms" : "200ms", top: `${(curSkillInd - index) * 64}px`}}>
                    <p>{skill}</p>
                  </div>
                ))
              }
            </div>
          </div>
          
          <div id="resumeDownloadButton" className="cutoutHoleButton">
            <button className="cutoutPieceButton">
              <DownloadIcon/>
              <p>DOWNLOAD RESUME</p>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutSection;
