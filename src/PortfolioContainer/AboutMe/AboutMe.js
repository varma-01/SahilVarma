import React from "react";
// import { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "I’m Sahil Varma, a Computer Science graduate student at the University of Georgia. I specialize in software development, machine learning, and cloud technologies, with experience in Java, Python, C++, and SQL. My passion lies in building scalable solutions and optimizing performance. Always eager to learn and tackle new challenges, I strive to make an impact through innovative projects and collaboration.",
    highlights: {
      heading: "Here are a few Highlights",
      bullets: [
        "Software Development: Proficient in Java, Python, C++, and SQL. Hands-on with both front-end and back-end technologies.",
        "Machine Learning: Experience with model optimization and deep learning techniques",
        "Cloud Computing: Skilled in deploying applications on AWS.",
        "Database Management: Expertise in MySQL, PostgreSQL, and NoSQL databases.",
      ],
    },
  };

  // const renderHighlight = () => {
  //   return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
  //     <div className="highlight" key={i}>
  //       <div className="highlight-blob"></div>
  //       <span>{value}</span>
  //     </div>
  //   ));
  // };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => {
      // Split the heading from the description part (before the first colon)
      const [heading, description] = value.split(':');
      return (
        <div className="highlight" key={i}>
          <div className="highlight-header">
            <div className="highlight-blob"></div>
            <span className="highlight-heading">{heading}:</span>
          </div>
          <div className="highlight-description">
            <span>{description}</span>
          </div>
        </div>
      );
    });
  };
  
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose ME?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <a href="sahilResume.pdf" download="Sahil sahilResume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
