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
  ];

  const programmingSkillsDetails = [
    {
      skill: "Programming Languages",
      desc: "C, C++, Java, Python, JavaScript, SQL",
    },
    { skill: "Operating Systems", desc: "Windows, macOS, Linux" },
    {
      skill: "Databases",
      desc: " MySQL, PostgreSQL, NoSQL: MongoDB, DynamoDB",
    },
    {
      skill: "Softwares",
      desc: "Visual Studio Code, IntelliJ IDEA, MS Office",
    },
    { skill: "Frameworks", desc: "ReactJS, NodeJS, Spring Boot" },
    { skill: "Cloud", desc: "Amazon Web Services" },
    { skill: "Problem Solving", desc: "LeetCode, GeeksforGeeks" },
  ];

  const projectDetails = [
    {
      title: "Deep Learning Model Optimization",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "Implemented pruning techniques to optimize convolutional neural networks by up to 80% while maintaining high accuracy, conducted fine-tuning and retraining to minimize performance degradation, and visualized pruning outcomes to validate improved model efficiency.",
      subHeading: "Tech used: PyTorch, NumPy, YAML",
    },
    {
      title: "Multithreaded FTP Client and Server",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Developed a multithreaded FTP client and server supporting commands like get, put, delete, and terminate, implemented multi-port handling and thread-safe mechanisms for concurrency and data consistency, and enhanced client functionality to execute commands in parallel threads for efficient multitasking.",
      subHeading: "Tech used: Java, Multithreading, Socket Programming",
    },
    {
      title: "Face Recognition based Attendance System",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "System recognizes faces from already maintained database and marks attendance in csv format. Feature to feed data for new person.",
      subHeading: "Tech used: Python, OpenCV",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Univeristy of Georgia | Athens, GA, US | GPA: 3.89"}
        subHeading={
          "Franklin College of Arts and Sciences | MS in Computer Science"
        }
        description={
          "Completed coursework in advanced topics such as algorithms, operating systems, distributed systems, computer-vision, database management, and machine learning."
        }
        fromDate={"May"}
        toDate={"2025"}
      />
      <ResumeHeading
        heading={"Medicaps University | Indore, India | GPA: 3.8"}
        subHeading={
          "College of Engineering | B.Tech in Computer Science Engineering"
        }
        description={""}
        fromDate={"Aug"}
        toDate={"2023"}
      />
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <ResumeHeading
          key={index}
          heading={skill.skill}
          description={skill.desc}
        />
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
