import $ from "jquery";
import { useEffect, useState } from "react";
import SkillsSlider from "./SkillsSlider";
//import "../css/SkillsSlider.css";

const extraContent = (
  <div className="randomStuff">
    <p>Here are some random items</p>
    <ul>
      <li>stuff one</li>
      <li>stuff two</li>
      <li>stuff three</li>
      <li>stuff four</li>
    </ul>
  </div>
);

const getStuff = () => {
  let x = document.getElementById("dob").value;
  let y = document.getElementById("shitNum").value;
  let string = "";
  let s = "";
  let num = document.getElementById("recurse").value;

  switch (x) {
    case "1":
      s = "January";
      break;

    case "2":
      s = "February";
      break;

    case "3":
      s = "March";
      break;

    case "4":
      s = "April";
      break;

    case "5":
      s = "May";
      break;

    default:
      s = "Out of bounds";
  }

  if (y > 100) string = "too damn high!";
  else if (y < 0) string = "wtf, too damn low";
  else string = "just fine I guess, " + y + " is fine.";

  document.getElementById(
    "result"
  ).innerHTML = `Your bday month is ${s} and your random number is ${string}`;
  recursion();
  document.getElementById(
    "resultRecurse"
  ).innerHTML = `The recurive val is ${num}`;
};

//Not working right
function recursion() {
  let num = document.getElementById("recurse").value;
  if (num <= 1) return 1;
  else return num * recursion(num - 1);
}

const form = (
  <div className="formOne">
    <form id="formy">
      Enter DOB: <input type="number" id="dob"></input>
      <br />
      Enter a random number: <input type="number" id="shitNum"></input>
      <br />
      Enter a number to recurse: <input type="number" id="recurse"></input>
      <br />
      <input type="button" onClick={getStuff} value="Submit"></input>
    </form>
  </div>
);

function reverse(str) {
  let string = [...str];
  let newString = [];
  for (let i = string.length; i >= 0; i--) {
    newString.push(string[i]);
  }
  return newString.join("");
}

export default function Skills() {
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [leftSlide, setLeftSlide] = useState(0);
  const [rightSlide, setRightSlide] = useState(1);
  const [moveLeft, setMoveLeft] = useState(0);
  const [moveRight, setMoveRight] = useState(0);
  const [deckLeft, setDeckLeft] = useState([]);
  const [deckRight, setDeckRight] = useState([]);

  useEffect(() => {
    setDeckRight(slides)
  }, []);

  const traverseRight = () => {
    if (currentSlide >= slides.length - 1 || rightSlide >= slides.length - 1) {
      setCurrentSlide(slides.length - 1);
      setLeftSlide(slides.length - 1);
      setRightSlide(slides.length - 2);
    } else {
      setCurrentSlide(currentSlide + 1);
      setLeftSlide(leftSlide + 1);
      setRightSlide(rightSlide + 1);
    }
  };

  const traverseLeft = () => {
    if (currentSlide <= 0 || leftSlide <= 0) {
      setCurrentSlide(0);
      setLeftSlide(0);
      setRightSlide(1);
    } else {
      setCurrentSlide(currentSlide - 1);
      setLeftSlide(leftSlide - 1);
      setRightSlide(rightSlide - 1);
      setDeckRight(deckRight.slice())
    }
    //console.log(currentSlide)
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="skills" id="skills">
      <div className="skills-header">
        <h2>Here are some of my skill cards</h2>
      </div>
      <div className="skills-content">
        <div className="slider-button-left">
          <button
            className="slide-arrow"
            id="slide-arrow-prev"
            onClick={() => {
              traverseLeft();
              setMoveLeft(1);
            }}
            onAnimationEnd={() => setMoveLeft(0)}
            move={moveLeft}
          >
            &#8249;
          </button>
        </div>
        <div className="skillCards">
          <div className="skillCard-pre">
            <h6>{slides[leftSlide].value}</h6>
          </div>
          <div className="skillCard">
            <h4>{slides[currentSlide].value}</h4>
          </div>
          <div className="skillCard-post">
            <h6>{slides[rightSlide].value}</h6>
          </div>
        </div>
        {deckRight.map((i, j) => {
          return (
            <div
              key={j}
              className="deck-right"
              style={{ marginLeft: 5 + i }}
            ></div>
          );
        })}
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
    </div>
  );
}
