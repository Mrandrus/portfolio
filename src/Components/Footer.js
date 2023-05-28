import React from "react";
import "../App.css";
import "../css/Footer.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Experience from "./Experience";

export default function Footer() {
  return (
    <BrowserRouter>
      <div className="footer">
        <div className="footer-items-left">
          <Link to="#about">Home</Link>
          <br />
          <Link to="#experience">Experience</Link>
          <br />
          <Link to="#skills">Skills</Link>
          <br />
          <Link to="#projects">Projects</Link>
          <br />
          <Link to="#hobbies">About Me</Link>
          <br />
          <Link to="#contact">Contact</Link>
          <br />
        </div>
        {/* <div className="footer-items-right">
          <p>Matt Andrus</p>
        </div> */}
      </div>
    </BrowserRouter>
  );
}
