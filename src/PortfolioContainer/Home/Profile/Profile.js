// eslint-disable-next-line
import React from "react";
import Typical from "react-typical";

import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Sahil Varma</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev",
                    2000,
                    "Machine Learning",
                    2000,
                    "Full-Stack Dev",
                    2000,
                    "Solution Architect",
                    2000,
                    "DSA enthusiast",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Skilled in Building Full-Stack Applications with Cloud
                Integration and Machine Learning Capabilities
              </span>
            </span>
            <div className="profile-options">
              <a href="sahilResume.pdf" download="Sahil sahilResume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
