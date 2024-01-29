import React, { useEffect, useRef, useState } from 'react';
import './SkillsSection.css';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AssistantIcon from '@mui/icons-material/Assistant';
import VerifiedIcon from '@mui/icons-material/Verified';

interface Skill {
  name: string,
  description: string
}

const skills = [
  {
    name: "ReactJS",
    description: "I was first exposed to ReactJS while working as a front end developer for Rapid Effect, a company focused on providing IT automation products and services for various engineering industries. I was able to use ReactJS to connect and display their client's data to their web app in an easily accessible and intuitive manner.\nI later experimented with ReactJS myself, using it to create a calendar web app and a craiglist redesign concept page."
  }, 
  {
    name: "React Native",
    description: "Having had a little experience with ReactJS and React hooks already, choosing to learn React Native felt like a natural next step, expanding my development capabilities from just web to all mobile platforms.\nMy skills were further honed using it while earning my 'Meta Android Development' Coursera Certificate, where I was able to implement basic Android and IOS apps that I was able to test through Expo"
  }, 
  {
    name: "Angular",
    description: "As part of my internship with Cuspera, a company focused on recommending software to other businesses, I worked with a mentor to learn Angular and apply it to creating a section of their website, aimed to provide their clients with options to choose and package selected data.\nTo achieve this, I had to build a custom table populated by querying a backend database, that supported filtering of various options, similar to the service provided by 'Bombora.com'."
  }, 
  {
    name: "PHP",
    description: "After learning the basics of HTML and being dissatisfied with its static nature, I chose to pickup PHP next.\nWhen provided with the opportunity to freelance design a website for an Indian non-profit organization, HHH Powai, I utilized PHP as the main scripting language to provide dynamic content and more easily communicate with my databases through MySQL."
  }, 
  {
    name: "CSS",
    description: "As a person who loves to express my creativity, I continuosly expand and experiment with CSS, constantly aiming to master every aspect of it from the various selectors to animation and transitions.\nI am always on the lookout for creative uses of CSS in other websites to be inspired as well as challanged by."
  },
  {
    name: "TypeScript",
    description: "JavaScript was the first scripting language I learnt and quickly found its lack of type safety, while quick to iterate, was also quick to lead to unintended errors.\nTypescript was the obvious solution, reinforcing my type safety habits and leading to more legible and less error prone code."
  }, 
  {
    name: "Java",
    description: "Java was the first coding language I ever learnt, starting when I was 14 years old.\nIt gave me a strong base understanding of OOP programming and was the main language I used for the next 4 years, eventually providing me with a foundation for learning Kotlin and Android programming."
  }, 
  {
    name: "C#",
    description: "My initial passion for coding was spawned from the desire to create my own games, which eventually lead me to the Unity game engine. Learning C# was then a necessity, being the language the Unity engine uses, but was fairly easy to pickup given my prior knowledge with Java.\nI used C# to develop various Unity games, mainly during my 4 years in college, where I collobarated with teams as well as made my own solo projects."
  },
  {
    name: "Kotlin",
    description: "As part of my 'Meta Android Development' certification, I was thought how to code in Kotlin, a language similar to Java (of which I was already very familiar) but focused for Android development.\nWhile participating in the course as well as after, Kotlin was essential for me to learn to be a better Android developer and to fully utilize the capabilites of Android Studio."
  },
  {
    name: "NodeJS",
    description: "In my professional experience thus far, I have always used NodeJS to simulate the backend and server-side code for both development and testing.\nI have over 3 years of experience using NodeJS, having used it as a front end developer when working with Rapid Effect and with Cuspera."
  },
  {
    name: "MySQL",
    description: "After learning the basics of MySQL through my school and college education, I further refined my skills when having to create my own freelance website for an Indian non-profit organization, HHH Powai.\nThe website allowed users to register their own accounts, view articles written by editors, and post comments on said articles, all of which used MySQL queries to connect with a backend database to store and retrieve the data."
  },
  {
    name: "Github",
    description: "For nearly the whole of my coding experience so far, I have utilized Github as a means to keep track of my version history and save my progress on any major project I have worked on.\nI have also used Github as a means of collaborating with teams, and so understand the various best practices for an efficient development progress."
  },
  {
    name: "Figma",
    description: "I first learnt how to use Figma as part of my 'Meta Android Development' certification and it has come into use several times after that as well.\nLeaning how to navigate and use Figma to create wireframe designs not only helped me to quickly plan and iterate on screen designs/layouts, but it also helped me to convey my vision to the rest of my team and my clients."
  },
  {
    name: "Photoshop",
    description: "Learning to use Photoshop was initially a hobby, but it quickly became useful to create mockups, edit screenshots to convey changes, and create custom designs for my games and apps."
  },
];

interface Certificate {
  name: string,
  source: string,
  date: string,
  description: string,
  proofLink: string,
}

const certificates : Certificate[] = [
  {
    name: "Meta Android Development",
    source: "Coursera Certificate",
    date: "May 2023",
    description: "Learned the full development life cycle for an android app, including designing using figma, developing the app using React, and how to publish an app on the Google play Store",
    proofLink: "https://www.coursera.org/account/accomplishments/professional-cert/X9XVGHWDA3YR"
  },
  {
    name: "IBM Applied AI",
    source: "Coursera Certificate",
    date: "July 2023",
    description: "Grasped a foundational understanding of AI systems, chat bots, and virtual assistants, with a focus on IBM's Watson and AI Services",
    proofLink: "https://www.coursera.org/account/accomplishments/professional-cert/ZEDH929VYWLP"
  }
];

function SkillsSection() {
  const [curHoverSkill, setCurHoverSkill] = useState<Skill | null>(null);

  return (
    <div id="skills">
      <div id="skillsCard" className="cutoutHole">
        <div className="cutoutPiece">
          <p id="skillsHeader" className="header">My Skills</p>

          <div id="skillsCardContent">
            <div id="certifcateSection">
              {
                certificates.map((certificate, index) =>
                  <div key={index} className="certificateDiv">
                    <div className="certificateHeaderRow">
                      <PhoneAndroidIcon className="certificateIcon"/>
                      <div>
                        <p className="certificateHeader">{certificate.name}</p>
                        <div className="certificateSubheaderDiv">
                          <p className="certificateSubheader">{certificate.source}</p>
                          <p className="certificateDate">{certificate.date}</p>
                        </div>
                      </div>
                    </div>
                    <p>{certificate.description}</p>
                    <div className="certificateLinkRow">
                      <VerifiedIcon className="certificateLinkIcon"/>
                      <a href={certificate.proofLink} className="certificateLink">View Certificate</a>
                    </div>
                  </div>
                )
              }
            </div>

            <div id="skillsChipSection">
              {
                skills.map((skill, index) => (
                  <p 
                    key={index} 
                    className={"skillChip" + (curHoverSkill === skill ? " activeSkillChip" : "")}
                    onMouseEnter={() => setCurHoverSkill(skill)}>{skill.name}</p>
                ))
              }
            </div>

            <div id="skillsDescriptionSection">
              {curHoverSkill && (
                <div>
                  <p id="skillsDescriptionHeader">{curHoverSkill.name}</p>
                  {
                    curHoverSkill.description.split("\n").map((line, index) => (
                      <p key={index} className="skillsDescriptionLine">{line}</p>
                    ))
                  }
                </div>
              )}
              {!curHoverSkill && (
                <p id="skillsDescriptionHoverPrompt">Hover over a skill to view details</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
