import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import linkedInLogo from "../../assets/ConnectWithMe/linkedInLogo.png";
import githubLogo from "../../assets/ConnectWithMe/githubLogo.png";
import hackerRankLogo from "../../assets/ConnectWithMe/hackerRankLogo.png";
import leetcodeLogo from "../../assets/ConnectWithMe/leetcodeLogo.png";

import "./knowMyProgress.css";

export default function knowMyProgress(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div
      className="connect-with-me-container screen-container"
      id={props.id || ""}
    >
      <div className="connect-with-me-parent">
        <ScreenHeading
          title={"Know My Growth"}
          subHeading={"Track my learning Progress"}
        />
        <div className="icons-container">
          <a
            href="https://www.linkedin.com/in/sahil-varma-a65615236/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="icon-buttons">
              <img className="linkedin-icon" src={linkedInLogo} alt="no" />
            </button>
          </a>
          <a
            href="https://github.com/varma-01"
            target="_blank"
            rel="noreferrer"
          >
            <button className="icon-buttons">
              <img className="github-icon" src={githubLogo} alt="no" />
            </button>
          </a>
          <a
            href="https://www.hackerrank.com/sahilindore01"
            target="_blank"
            rel="noreferrer"
          >
            <button className="icon-buttons">
              <img className="hackerrank-icon" src={hackerRankLogo} alt="no" />
            </button>
          </a>
          <a
            href="https://leetcode.com/sahilindore01/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="icon-buttons">
              <img className="leetcode-icon" src={leetcodeLogo} alt="no" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
