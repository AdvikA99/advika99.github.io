import React from 'react';
import './ExperienceSection.css';

interface Experience {
  name: string,
  role: string,
  duration: string,
  location: string,
  imageUrl: string,
  companyDescription: string,
  roleDescription: string,
  mainSkills: string[]
}

const experiences : Experience[] = [
  {
    name: "Cuspera",
    role: "Angular Front End Developer",
    duration: "June 2023 - Oct 2023",
    location: "Bangalore, India",
    imageUrl: "cusperaLogo.png",
    companyDescription: "Cuspera helps business managers by recommending a personalised software solution based on their business needs, industry and function.",
    roleDescription: "Worked as part of a team to develop an Angular based components that makes use of Restful APIs to display filtered user data in a responsive material table",
    mainSkills: ["Angular", "TypeScript", "Restful APIs", "CSS"]
  },
  {
    name: "Rapid Effect",
    role: "React Front End Developer",
    duration: "Aug 2022 - Mar 2023",
    location: "Singapore",
    imageUrl: "rapidLogo.png",
    companyDescription: "Rapid Effect is a company focused on providing IT automation products and services for various engineering industries.",
    roleDescription: "Learned ReactJS . I was able to use ReactJS to connect and display their client's data to their web app in an easily accessible and intuitive manner.",
    mainSkills: ["ReactJS", "AntDesign", "TypeScript", "Restful APIs"]
  },
  {
    name: "HHH Powai",
    role: "Freelance Web Intern",
    duration: "2020 - 2021",
    location: "Online",
    imageUrl: "HHHPowaiLogo.png",
    companyDescription: "Helping Hands for Humanity (HHH) is an Indian based NGO that aims to improve and uphold environmental, educational, social, cultural and animal welfare",
    roleDescription: "Developed a website built in HTML, CSS, JavaScript, PHP, with data stored on a MySQL database. Includes a login page, donation, articles, admin management, etc. ",
    mainSkills: ["PHP", "JavaScript", "CSS", "MySQL"]
  },
]

function ExperienceSection() {
  return (
    <div id="experience">
      {
        experiences.map((experience, index) => (
          <div key={index} className="experienceCard cutoutHole">
            <div className="cutoutPiece">
              <div className="experienceHeader">
                <p className="experienceTitle">{experience.name}</p>
                <p className="experienceRole">{experience.role}</p>
                <div className="experienceSubHeader">
                  <p className="experienceDuration">{experience.duration}</p>
                  <p className="experienceLocation">{experience.location}</p>
                </div>
              </div>

              <img src={"experienceImages/" + experience.imageUrl} className="experienceImage"></img>
              <p className="experienceCompanyDescription">{experience.companyDescription}</p>
              <p className="experienceRoleDescription">{experience.roleDescription}</p>
              <div className="experienceSkills">
                {experience.mainSkills.map((skill, skillInd) =>
                  <p key={skillInd} className="experienceSkill">{skill}</p>
                )}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ExperienceSection;
