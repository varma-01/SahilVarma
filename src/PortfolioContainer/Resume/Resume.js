import React from "react";
import { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    {
      label: "Education",
      logoSrc: "education.svg",
    },
    {
      label: "Programming Skills",
      logoSrc: "programming-skills.svg",
    },
    {
      label: "Projects",
      logoSrc: "projects.svg",
    },
    {
      label: "Interests",
      logoSrc: "interests.svg",
    },
  ];

  const programmingSkillsDetails = [
    { skill: "AWS", ratingPercentage: 85 },
    { skill: "Web Dev", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "NodeJS", ratingPercentage: 85 },
    { skill: "ReactJS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "MongoDB", ratingPercentage: 85 },
    { skill: "DSA", ratingPercentage: 85 },
    { skill: "Core Java", ratingPercentage: 85 },
  ];

  const projectDetails = [
    {
      title: "E Commerce Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "E commerce website made for electronic gadgets",
      subHeading: "Tech used: PHP, MYSQL, Bootstrap",
    },
    {
      title: "Forkify: Food Recipe WebApp",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Food recipe webapp made using NodeJS, MongoDb, HTML, CSS, JavaScript",
      subHeading: "Tech used: NodeJs, MongoDB",
    },
    {
      title: "Tesla Clone android app",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "Made Tesla app in react Native",
      subHeading: "Tech used: React Native, JavaScript",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Medicaps University"}
        subHeading={"B.Tech in Computer Science Engineering"}
        fromDate={"2019"}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={"Gyan Sagar Vidya Niketan"}
        subHeading={"Senior Secondary School"}
        fromDate={"2018"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"St. Norbert School"}
        subHeading={"High School"}
        fromDate={"2016"}
        toDate={"2017"}
      />
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.fromDate}
          toDate={projectDetails.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Gaming"
        description="Computer Games, Open World games, racing games"
      />
      <ResumeHeading heading="Music" description="Listening Music" />
      <ResumeHeading
        heading="Travelling"
        description="Travelling to different places by Bike or Car"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offSetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "TranslateY(" + index * offSetHeight * -1 + "px)" },
    };

    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="OOPS.... No internet Connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((resumeDetail) => resumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
