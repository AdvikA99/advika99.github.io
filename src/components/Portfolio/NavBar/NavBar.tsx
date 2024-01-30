import React, { useEffect, useRef, useState } from 'react';
import './NavBar.css';
import { useMediaQuery } from 'react-responsive';
import MenuIcon from '@mui/icons-material/Menu';

interface Section {
  navName: string,
  idName: string,
  element: HTMLDivElement | null;
}

const sections : Section[] = [
  {
    navName: "HOME",
    idName: "",
    element: null
  },
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
  const [selectedSectionInd, setSelectedSectionInd] = useState(0);
  const [isNavMenuOpen, setNavMenuOpen] = useState(false);

  const showFullNavBar = useMediaQuery({ query: '(min-width: 640px)' })

  useEffect(() => {
    sections.forEach((section) => {
      section.element = document.getElementById(section.idName) as HTMLDivElement;
    }); 
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleMouseDown)

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleMouseDown);
    }
  }, []);

  useEffect(() => {
    setNavMenuOpen(false);
  }, [showFullNavBar])

  const handleScroll = (event: any) => {
    const curYPos = window.scrollY + 200;
    var newSelectedSectionInd = 0;

    for (let i = 0; i < sections.length; i++) {
      if (!sections[i].element) continue;

      const sectionDiv = sections[i].element;
      if (!sectionDiv) continue;
      if (curYPos >= sectionDiv.offsetTop && curYPos <= (sectionDiv.offsetTop + sectionDiv.offsetHeight)) {
        newSelectedSectionInd = i;
        break;
      }
    }

    setSelectedSectionInd(newSelectedSectionInd);
  }

  const handleMouseDown = (event : any) => {
    // If clicked on navMenuItem, let it handle closing menu
    const targetClasses = event.target.classList;
    if (!targetClasses.contains("navMenuItem") && !targetClasses.contains("navMenuIcon") && event.target.tagName !== "path") {
      setNavMenuOpen(false);
    }
  }

  const handleOpenNavMenu = () => {
    setNavMenuOpen(!isNavMenuOpen);
  }

  const handleNavMenuClick = (sectionId : string) => {
    window.location.href = "#" + sectionId;
    setNavMenuOpen(false);
  }

  return (
    <div id="navBar">
      <div className="flexGrow">
        <img id="portfolioLogo" src="advikLogo.png" onClick={() => handleNavMenuClick("")}/>
      </div>

      {showFullNavBar && (
        <div>
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
      )}

      {!showFullNavBar && (
        <div>
          <MenuIcon className="navMenuIcon" onClick={handleOpenNavMenu}/>
          {isNavMenuOpen &&
            <div id="navMenu">
              {sections.map((section, index) => (
                <a key={index} className="navMenuItem" style={{bottom: -(index * 32 + 20) + "px"}} onClick={() => handleNavMenuClick(section.idName)}>{section.navName}</a>
              ))}
            </div>
          }
        </div>
      )}
    </div>
  );
}

export default NavBar;
