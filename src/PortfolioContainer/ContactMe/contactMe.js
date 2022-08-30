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
            <span className="value">7987952805</span>
          </div>
          <div>
            <span className="heading">Alt. Mobile:</span>
            <span className="value">7415866964</span>
          </div>
        </div>
      </div>
    </div>
  );
}
