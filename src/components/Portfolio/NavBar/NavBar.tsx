import React, { useEffect, useState } from 'react';
import './NavBar.css';

interface Section {
  navName: string,
  idName: string,
  element: HTMLDivElement | null;
}

const sections : Section[] = [
  {
    navName: "ABOUT",
    idName: "about",
    element: null
  },
  {
    navName: "SKILLS",
    idName: "skills",
    element: null
  },
  {
    navName: "EXPERIENCE",
    idName: "experience",
    element: null
  },
  {
    navName: "PROJECTS",
    idName: "projects",
    element: null
  }
];

function NavBar() {
  const [selectedSectionInd, setSelectedSectionInd] = useState(-1);

  useEffect(() => {
    sections.forEach((section) => {
      section.element = document.getElementById(section.idName) as HTMLDivElement;
    }); 
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleScroll = (event: any) => {
    const curYPos = window.scrollY + 200;
    var newSelectedSectionInd = -1;

    for (let i = 0; i < sections.length; i++) {
      const sectionDiv = sections[i].element;
      if (!sectionDiv) continue;
      if (curYPos >= sectionDiv.offsetTop && curYPos <= (sectionDiv.offsetTop + sectionDiv.offsetHeight)) {
        newSelectedSectionInd = i;
        break;
      }
    }

    setSelectedSectionInd(newSelectedSectionInd);
  }

  return (
    <div id="navBar">
      <div className="flexGrow">
        <img id="portfolioLogo" src="advikLogo.png"/>
      </div>
      <div>
        <a className={"navLink" + (selectedSectionInd === -1 ? " selected" : "")} href="#">HOME</a>
        {
          sections.map((section, index) => (
            <a 
              key={index} 
              className={"navLink" + (selectedSectionInd === index ? " selected" : "")}
              href={"#" + section.idName}>
                {section.navName}
            </a>
          ))
        }
      </div>
    </div>
  );
}

export default NavBar;
