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
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import $ from "jquery"
import Stars from "./Components/Stars";
import Starrrs from "./Components/Starrrs";
import MouseTrail from "./Components/MouseTrail";
import Swiping from "./Components/Swiping";

function App() {
  let component;
  let array = [4, 6, 34, 56, 59, 89, 6, 9];
  // switch (window.location.pathname) {
  //   switch (document.querySelector(component)) {
  //   case "/":
  //     component = <About />;
  //     break;
  //   case "/Contact":
  //     component = <Contact />;
  //     break;
  //   case "/Skills":
  //     component = <Skills />;
  //     break;
  //   case "/About":
  //     component = <About />;
  //     break;
  //   case "/Experience":
  //     component = <Experience />
  //     break;
  //   default:
  //     component = App;
  //   break;
  // }

  let banana = (inHere) => {
    let p = 0;
    for (let i = 0; i < inHere.length; i++) {
      p += inHere[i];
    }
    return p;
  };

  let c = banana(array);


  return (
    <main>
      {/* <Swiping /> */}
      <Starrrs />
      <MouseTrail />
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
