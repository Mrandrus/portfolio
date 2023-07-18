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
              <h3>Colorado Nom-Noms</h3>
              <p>Coming soon!</p>
            </div>
          </div>

          <div className="projectCard">
            <div className="projectTwo">
              <h3>Movie Trivia Game</h3>
              <p>Coming soon!</p>
            </div>
          </div>
          <div className="projectCard">
            <div className="projectThree">
              <h3>Music Landing Page</h3>
              <p>Coming soon!</p>
            </div>
          </div>
      </div>
      </marquee>

    </div>
  );
}
