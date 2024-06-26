import React from "react";
import Homepage from "./pages/HomePage/HomePage";
import "./App.scss";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SidebarItem from "./components/SidebarItem/SidebarItem";
import OtherInterestsPage from "./pages/OtherInterestsPage/OtherInterestsPage";

function scrollTo(id: string) {
	(document.getElementById(id) as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
}

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
                    <SidebarItem onClick={() => scrollTo("homePage")} icon="material-symbols:home"/>
                    <SidebarItem onClick={() => scrollTo("skillsPage")} icon="jam:tools"/>
                    <SidebarItem onClick={() => scrollTo("projectsPage")} icon="material-symbols:list-alt-outline-rounded"/>
                    <SidebarItem onClick={() => scrollTo("otherInterestsPage")} icon="ph:drone-fill"/>
                    <SidebarItem onClick={() => scrollTo("aboutPage")} icon="material-symbols:info-outline-rounded"/>
                </div>
            </div>
        </div>
    );
}

export default App;
