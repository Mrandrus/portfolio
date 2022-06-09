import React from "react";
import Projects from "./Projects";
import "../App.css";
import "../About.css";

const statement = "I am a Banana";
const getTime = Date.now();
const today = new Date(getTime);


export default function About() {
  return (
    <div className="parentAbout">
      <div id="aboutPage">
        <div className="aboutItems">
          <h1>I'm Matt</h1>
          <p>I work in web development</p>
          <p>I say {statement}</p>
          <p>{today.toDateString()}</p>
        </div>
      </div>
      <Projects />
    </div>
  );
}

/*here 
is my name*/
