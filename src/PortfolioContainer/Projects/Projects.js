import React from "react";
// import { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import frokifyImage from "../../assets/Projects/forkify.png";
import teslaImage from "../../assets/Projects/tesla.png";
import phpImage from "../../assets/Projects/php-website.png";
import "./Projects.css";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const projectList = [
    {
      title: "ECommerce Website using PHP",
      desc: "made using PHP, MySQL",
      link: "#",
      photo: phpImage,
    },
    {
      title: "Forkify - Food Recipe Webapp",
      desc: "Front end website made using HTML, CSS, JavaScript",
      link: "https://forkify-varma.netlify.app/",
      photo: frokifyImage,
    },
    {
      title: "Tesla Clone Android App",
      desc: "android application made using React Native",
      link: "#",
      photo: teslaImage,
    },
  ];

  const renderProjectCards = () => {
    return projectList.map((project, index) => (
      <div className="project-card" key={index}>
        <div className="project-photo">
          <img src={project.photo} alt="no" />
        </div>
        <div className="project-description">
          <div className="project-title">
            <a
              href={project.link === "#" ? "" : project.link}
              className="anchor-tag"
              target={project.link === "#" ? "" : "_blank"}
              rel="noreferrer"
            >
              <span>{project.title}</span>
            </a>
          </div>
          <div className="project-desc">
            <span>{project.desc}</span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="projects-container screen-container" id={props.id || ""}>
      <div className="projects-parent">
        <ScreenHeading
          title={"Projects"}
          subHeading={"Porjects I have worked on"}
        />
        <div className="projects-card-container">{renderProjectCards()}</div>
      </div>
    </div>
  );
}
