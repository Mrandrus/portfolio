import $ from "jquery";
import { useEffect, useState } from "react";
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


export default function Skills() {
  const slides = [
    { id: 1, value: "HTML", experience: "6+ years"},
    { id: 2, value: "CSS", experience: "6+ years" },
    { id: 3, value: "JavaScript", experience: "4+ years" },
    { id: 4, value: "WordPress", experience: "6+ years" },
    { id: 5, value: "React", experience: "3+ years" },
    { id: 6, value: "JQuery", experience: "1+ years" },
    { id: 7, value: "C#", experience: "2+ years" },
    { id: 8, value: "Selenium", experience: "2+ years" },
    { id: 9, value: "SQL", experience: "1+ years" },
    { id: 10, value: "MySQL", experience: "1+ years" },
    { id: 11, value: "Adobe Suite", experience: "7+ years" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [leftSlide, setLeftSlide] = useState(0);
  const [rightSlide, setRightSlide] = useState(1);
  const [moveLeft, setMoveLeft] = useState(0);
  const [moveRight, setMoveRight] = useState(0);
  const [deckLeftCount, setdeckLeftCount] = useState(0);
  const [deckRightCount, setdeckRightCount] = useState(slides.length - 2);
  // const [deckLeft, setDeckLeft] = useState([0]);
  // const [deckRight, setDeckRight] = useState([slides]);

  useEffect(() => {
    // setdeckRightCount(slides)
  }, []);

  const traverseRight = () => {
    if (currentSlide >= slides.length - 1 || rightSlide >= slides.length - 1) {
      setCurrentSlide(slides.length - 1);
      setLeftSlide(slides.length - 2);
      setRightSlide(slides.length - 1);
      //setdeckLeftCount([0])
    } else {
      setCurrentSlide(currentSlide + 1);
      setRightSlide(rightSlide + 1);
      if (leftSlide <= slides.length - 1 && currentSlide >= 1) {
        setLeftSlide(leftSlide + 1);
      }
      //console.log("left deck number", deckLeftCount)
    }
  };

  const traverseLeft = () => {
    //let updateSlides = deckRightCount

    if (currentSlide <= 0) {
      setCurrentSlide(0);
      setLeftSlide(0);
      setRightSlide(1);
    } else {
      setCurrentSlide(currentSlide - 1);
      if (leftSlide > 0) {
        setLeftSlide(leftSlide - 1);
      }
      if (currentSlide < slides.length - 1) {
        setRightSlide(rightSlide - 1);
      }
      // if (leftSlide >= slides.length - 2) {
      //   setLeftSlide(slides.length - 2)
      // }
    }
    //console.log(currentSlide)
  };

  const handleSwipe = (direction) => {
    if (direction === "left") {
      if (deckRightCount <= slides.length - 1 && deckLeftCount >= 1) {
        setdeckRightCount(deckRightCount + 1);
        setdeckLeftCount(deckLeftCount - 1);
        console.log(deckLeftCount, "Left and Right decks", deckRightCount);
      }
    } else if (direction === "right") {
      if (deckRightCount >= 1 && deckLeftCount <= slides.length - 1) {
        setdeckRightCount(deckRightCount - 1);
        setdeckLeftCount(deckLeftCount + 1);
        console.log(deckLeftCount, "Left and Right decks", deckRightCount);
      }
    }
  };

  const renderCards = (count, direction) => {
    const cards = [];
    for (let i = 0; i < count - 1; i++) {
      if (direction === "left") {
        cards.push(
          <div className="skillCard-deck-left" key={i}>
            {/* {i} */}
          </div>
        );
      } else if (direction === "right") {
        cards.push(
          <div className="skillCard-deck-right" key={i}>
            {/* {i} */}
          </div>
        );
      }
    }
    return cards;
  };

  const calculateCardStyle = (count) => {
    const scale = Math.max(1 - count * 0.1, 0.5);
    const translateY = -10 * count;
    return {
      //transform: `scale(${scale}) translateY(${translateY}px)`,
      //marginRight: `scale(${scale})`,

      display: "flex",
      //width: "25px",
      height: "100%",
      background: "none",
      // background:
      //   "radial-gradient(circle, rgba(6,70,99,1) 0%, rgba(0,0,0,1) 100%)",
      // borderRadius: "25px",
      // borderLeft: `1px solid #fff`,
      zIndex: "1",
      justifyContent: "center",
      alignSelf: "center",
      gap: "0",
    };
  };

  const animator = () => {
    //do stuff here
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
        <div
          className={
            currentSlide > 0 ? "slider-button-left" : "slider-button-left-non"
          }
        >
          <button
            className="slide-arrow"
            id="slide-arrow-prev"
            onClick={() => {
              traverseLeft();
              //animator();
              handleSwipe("left");
            }}
            
            onAnimationEnd={() => setMoveLeft(0)}
            move={moveLeft}
          >
            &#8249;
          </button>
        </div>
        <div className="skillCards">
          {/* {deckLeftCount >= 1 && (
            <div
              className={
                deckLeftCount > 1 && deckLeftCount < slides.length - 1
                  ? "skillCard-deck-left"
                  : "deck-left-non"
              }
            >
              {renderCards(deckLeftCount, "left")}
            </div>
          )} */}
          <div
            className={
              currentSlide >= 1 ? "skillCard-pre" : "skillCard-pre-non"
            }
            onClick={() => {
              traverseLeft();
              handleSwipe("left");
            }}
          >
            <h6>{slides[leftSlide].value}</h6>
            <hr className='card-divider-sides' />
            <p>{slides[leftSlide].experience}</p>
          </div>
          <div className="skillCard">
            <h4>{slides[currentSlide].value}</h4>
            <hr className='card-divider' />
            {slides[currentSlide].experience}
          </div>
          <div
            className={
              currentSlide != slides.length - 1
                ? "skillCard-post"
                : "skillCard-post-non"
            }
            onClick={() => {
              traverseRight();
              handleSwipe("right");
            }}
          >
            <h6>{slides[rightSlide].value}</h6>
            <hr className='card-divider-sides' />
            {slides[rightSlide].experience}
          </div>
          {/* {deckRightCount > 1 && (
            <div
              className={
                deckRightCount < slides.length - 1 && deckRightCount > 1
                  ? "skillCard-deck-right"
                  : "deck-right-non"
              }
            >
              {renderCards(deckRightCount, "right")}
            </div>
          )} */}
        </div>
        <div
          className={
            currentSlide < slides.length - 1
              ? "slider-button-right"
              : "slider-button-right-non"
          }
        >
          <button
            className="slide-arrow"
            id="slide-arrow-next"
            onClick={() => {
              traverseRight();
              handleSwipe("right");
            }}
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}
