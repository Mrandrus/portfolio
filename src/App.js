import React from "react";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Hobbies from "./Components/Hobbies";
//import { Component } from "react/cjs/react.production.min";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import $ from "jquery";
import Stars from "./Components/Stars";
import Starrrs from "./Components/Starrrs";
import MouseTrail from "./Components/MouseTrail";
import Swiping from "./Components/Swiping";

function App() {
  return (
    <main>
      {/* <Swiping /> */}
      <div className="container-for-stars">
        <Starrrs />
      </div>
      {/* <div className="container-for-mousetrail">
        {window.innerWidth > 950 ? <MouseTrail /> : ""}
      </div> */}
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
