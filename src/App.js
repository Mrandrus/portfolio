import React from "react";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Experience from "./Components/Experience";
//import { Component } from "react/cjs/react.production.min";

function App() {
  let component;
  let array = [4, 6, 34, 56, 59, 89, 6, 9];
  switch (window.location.pathname) {
    case "/":
      component = <About />;
      break;
    case "/Contact":
      component = <Contact />;
      break;
    case "/Skills":
      component = <Skills />;
      break;
    case "/About":
      component = <About />;
      break;
    case "/Experience":
      component = <Experience />
      break;
    default:
      component = App;
    break;
  }

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
      <Navbar />
      {component}
      {/* <About /> */}
      {c}
      <br />
      {array}
      <Footer />
    </main>
  );
}

export default App;
