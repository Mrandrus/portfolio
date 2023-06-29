import React from "react";
import "../App.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects-heading">
        <h2>Here are some of my projects</h2>
      </div>
      {/* <div className="project-coming-soon">
        <marquee>Coming Soon</marquee>
      </div> */}
              <marquee>

      <div className="projectItems">
          <div className="projectCard">
            <div className="projectOne">
              <h1>Colorado Nom-Noms</h1>
              <p>Coming soon!</p>
            </div>
          </div>

          <div className="projectCard">
            <div className="projectTwo">
              <h1>Movie Trivia Game</h1>
              <p>Coming soon!</p>
            </div>
          </div>
          <div className="projectCard">
            <div className="projectThree">
              <h1>Music Landing Page</h1>
              <p>Coming soon!</p>
            </div>
          </div>
      </div>
      </marquee>

    </div>
  );
}
