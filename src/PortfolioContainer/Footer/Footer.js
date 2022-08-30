import React from "react";
import "./Footer.css";

import ContactMe from "../ContactMe/contactMe";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require("../../assets/shape-bg-2.png")}
          alt="No internet connection"
        />
      </div>
      <div className="footer-foot">
        <ContactMe />
      </div>
    </div>
  );
}
