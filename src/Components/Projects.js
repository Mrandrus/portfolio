import React from "react";
import '../App.css';

export default function Projects() {
    return (
      <section id="projects">
        <div className="projectItems">
          <div className="projectOne">
            <h1>Colorado Food Reviews</h1>
            <p>
              This particular website explores the best food spots in the
              Northern Front Range.
            </p>
          </div>
          <div className="projectTwo">
            <h1>Movie Game</h1>
            <p>A web application that uses the internet movie database api that tests your movie knowledge.</p>
          </div>
          <div className="projectThree">
            <h1>I'm Matt</h1>
            <p>I work in web development</p>
          </div>
        </div>
      </section>
    );
}
