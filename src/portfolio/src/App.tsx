import React from "react";
import Homepage from "./components/HomePage";
import "./styles/App.scss";
import SkillsPage from "./components/SkillsPage";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import SidebarItem from "./components/SidebarItem";
import OtherInterestsPage from "./components/OtherInterestsPage";

function scrollTo(id: string) {
	(document.getElementById(id) as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
}

const scrollToHome = () => scrollTo("homePage");
const scrollToSkills = () => scrollTo("skillsPage");
const scrollToProjects = () => scrollTo("projectsPage");
const scrollToInterests = () => scrollTo("otherInterestsPage");
const scrollToAbout = () => scrollTo("aboutPage");

function App() {
    return (
        <div className="appstyle">
                <div className="wrapper">
                <div className="sidebar-left">
                    <SidebarItem icon="mdi:github" url="https://github.com/FrozenAssassine"/>
                    <SidebarItem icon="mdi:instagram" url="https://www.instagram.com/frozenassassine/"/>
                    <SidebarItem icon="mdi:stackoverflow" url="https://stackoverflow.com/users/14772994/frozenassassine"/>
                    <div className="separator" />
                </div>
                <div className="pages" id="homePage">
                    <Homepage/>
                    <div id="skillsPage" className="headline textanimation">Skills</div>
                    <SkillsPage />
                    <div id="projectsPage" className="headline textanimation">Projects</div>
                    <ProjectsPage />
                    <div id="otherInterestsPage" className="headline textanimation">Other Interests</div>
                    <OtherInterestsPage/>
                    <div id="aboutPage" className="headline textanimation">About Me</div>
                    <AboutPage />
                    <div className="imprint"><a  href="./assets/imprint.txt">Impressum/imprint</a></div>
                </div>
                <div className="sidebar-right">
                    <div className="separator" />
                    <SidebarItem onClick={scrollToHome} icon="material-symbols:home"/>
                    <SidebarItem onClick={scrollToSkills} icon="jam:tools" url="#skills"/>
                    <SidebarItem onClick={scrollToProjects} icon="material-symbols:list-alt-outline-rounded"/>
                    <SidebarItem onClick={scrollToInterests} icon="icon-park-outline:drone"/>
                    <SidebarItem onClick={scrollToAbout} icon="material-symbols:info-outline-rounded"/>
                </div>
            </div>
        </div>
    );
}

export default App;
