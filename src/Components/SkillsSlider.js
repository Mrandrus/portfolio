//import '../App.css'
import "../css/SkillsSlider.css";
import { useState, useEffect } from "react";

const SkillsSlider = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    { id: 1, value: "HTML" },
    { id: 2, value: "CSS" },
    { id: 3, value: "JavaScript" },
    { id: 4, value: "WordPress" },
    { id: 5, value: "React" },
    { id: 6, value: "JQuery" },
    { id: 7, value: "C#" },
    { id: 8, value: "Selenium" },
    { id: 9, value: "SQL" },
    { id: 10, value: "MySQL" },
    { id: 11, value: "Adobe Suite" },
  ];

  const traverseLeft = () => {

  }

  const traverseRight = () => {}

  return (
    <>
      <div className="SkillCard-Content">
        <div className="slider-button-left">
          <button
            className="slide-arrow"
            id="slide-arrow-prev"
            onClick={traverseLeft}
          >
            &#8249;
          </button>
        </div>
        <div className={current == 0 ? "skillCard-pre" : "skillCard-pre-non"}>
          <h4>{slides[current - 1]?.value}</h4>
        </div>
        <div className="skillCards">
          <div className="skillCard">
            <h4>{slides[current].value}</h4>
          </div>
          <div className="skillCard">
            <h4>{slides[current + 1].value}</h4>
          </div>
          <div className="skillCard">
            <h4>{slides[current + 2].value}</h4>
          </div>
        </div>
        <div
          className={
            current <= slides.length ? "skillCard-post" : "skillCard-post-non"
          }
        >
          <h4>{slides[current + 3].value}</h4>
        </div>
        <div className="slider-button-right">
          <button
            className="slide-arrow"
            id="slide-arrow-next"
            onClick={traverseRight}
          >
            &#8250;
          </button>
        </div>
      </div>
    </>
  );
};

export default SkillsSlider;
