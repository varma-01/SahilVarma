import React from "react";

import "./contactMe.css";

export default function contactMe() {
  return (
    <div className="contactMe-container">
      <div className="contactMe-parent">
        <div className="contactMe-heading">
          Let's Stay in <span>Touch</span>
        </div>
        <div className="details-container">
          <div className="email-container">
            <span className="heading">Email:</span>
            <span className="value">sahilindore01@gmail.com</span>
          </div>
          <div className="phone-num-container">
            <span className="heading">Mobile:</span>
            <span className="value">+1 2096307563</span>
          </div>
          <div className="phone-num-container">
            <span className="heading">LinkedIn: </span>
            <span>
              <a
                href="https://www.linkedin.com/in/sahil-varma-a65615236/"
                target="_blank"
                rel="noreferrer"
              >
                Click Here
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
