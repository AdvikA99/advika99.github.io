import React, { useState } from 'react';
import './ProjectsSection.css';

interface Project {
  name: string
  description: string,
  screenshotUrls: string[],
  demoLink: string
}

const projects : Project[] = [
  {
    name: "React Daily Fact Calendar",
    description: "A calendar webapp built using ReactJS that shows a fact about an event that occured on the same date in the past. The user can add notes and reminders to each day, change between year, month, and week view, and favorite facts for later viewing. Makes use of Material UI theming to be able to switch between a light and dark mode.",
    screenshotUrls: ["calendar_0.png", "calendar_1.png", "calendar_2.png", "calendar_3.png", "calendar_4.png"],
    demoLink: "#/calendar"
  },
  {
    name: "Craigslist Redesign",
    description: "Utilizing React's versatility, I've recreated Craigslist original cluttered design into a clean, responsive, and user-friendly interface. This project showcases modern design principles, leveraging React's state management and dynamic rendering capabilities to provide a more intuitive and visually appealing platform.",
    screenshotUrls: ["craigslist_0.png", "craigslist_1.png", "craigslist_2.png"],
    demoLink: "#/craigslist"
  }
];

function ProjectsSection() {
  const [projectScreenshotInds, setProjectScreenshotInds] = useState<number[]>(new Array(projects.length).fill(0));

  const handleNextProjectScreenshot = (projectInd : number) => {
    const curProjectScreenshotInd = projectScreenshotInds[projectInd];
    const nextProjectScreenShotInd = (curProjectScreenshotInd + 1) % projects[projectInd].screenshotUrls.length;
    const newProjectScreenshotInds = [...projectScreenshotInds];
    newProjectScreenshotInds[projectInd] = nextProjectScreenShotInd;
    setProjectScreenshotInds(newProjectScreenshotInds);
  }

  return (
    <div id="projects">
      {
        projects.map((project, projectInd) => (
          <div key={projectInd} className="projectCard cutoutHole">
            <div className="cutoutPiece">
              <p className="projectHeader header">{project.name}</p>

              <div className="projectImagesDiv" onClick={() => handleNextProjectScreenshot(projectInd)}>
                <img className="projectImage" src={"projectScreenshots/" + project.screenshotUrls[projectScreenshotInds[projectInd]]}/>
              </div>

              <p className="projectDescription">{project.description}</p>

              <div className="projectDemoButton cutoutHoleButton">
                <button className="cutoutPieceButton" onClick={() => window.open(project.demoLink, "_blank")}>
                  <p>TRY OUT DEMO</p>
                </button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ProjectsSection;
