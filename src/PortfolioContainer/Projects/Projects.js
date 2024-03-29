import React from "react";
// import { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import frokifyImage from "../../assets/Projects/forkify.png";
import faceRecog from "../../assets/Projects/faceRecog.jpeg";
import phpImage from "../../assets/Projects/php-website.png";
import "./Projects.css";
import { faCentercode } from "@fortawesome/free-brands-svg-icons";

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
      title: "Face Recognition based Attendance System",
      desc: "● Application built to simplify the attendance taking process using Machine Learning ● Powered by Python, OpenCV, Face-recognition ● Recognizes the faces and mark their attendance in CSV format",
      link: "#",
      photo: faceRecog,
    },
    {
      title: "ElectroniKArt - ECommerce Website",
      desc: "This is an E-commerce website using PHP that has database connectivity using MySQL. It has a Signup, login, logout, functionality, and filters to find products present in the database",
      link: "#",
      photo: phpImage,
    },
    {
      title: "Forkify - Food Recipe Webapp",
      desc: "This website follows MVC Architecture, which fetches recipe data from the MongoDB database, and displays results in pagination. People can log in to this website to upload their own recipe.",
      link: "https://forkify-varma.netlify.app/",
      photo: frokifyImage,
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
    <div
      className="projects-container screen-container"
      id={props.id || ""}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="projects-parent">
        <ScreenHeading
          title={"Projects"}
          subHeading={"Projects I have worked on"}
        />
        <div className="projects-card-container">{renderProjectCards()}</div>
      </div>
    </div>
  );
}
