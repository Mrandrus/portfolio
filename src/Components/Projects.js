import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import nomsLogo from "../media/coNomNomsLogo.png";
import comingSoon from "../media/coming_soon_space.png";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leftSlide, setLeftSlide] = useState(0);
  const [rightSlide, setRightSlide] = useState(1);

  const slides = [
    {
      id: 1,
      site: "Colorado Nom-Noms",
      description:
        "A site dedicated to Colorado's best restaurants, and some of my favorite recipes. Built in react, utilizing the Mapbox api for the food map.",
      pic: nomsLogo,
      link: "https://coloradonomnoms.com/",
    },
    {
      id: 2,
      site: "Movie Trivia",
      description:
        "A site host to a variety of different movie games utilizing the movie database.",
      pic: comingSoon,
      link: "#",
    },
    {
      id: 3,
      site: "Music Site",
      description: "A little site hosting some of my music.",
      pic: comingSoon,
      link: "#",
    },
  ];

  const traverseRight = () => {
    if (currentSlide >= slides.length - 1 || rightSlide >= slides.length - 1) {
      setCurrentSlide(slides.length - 1);
      setLeftSlide(slides.length - 2);
      setRightSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide + 1);
      setRightSlide(rightSlide + 1);
      if (leftSlide <= slides.length - 1 && currentSlide >= 1) {
        setLeftSlide(leftSlide + 1);
      }
    }
  };

  const traverseLeft = () => {
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
    }
  };

  return (
    <div className="projects" id="projects">
      <div className="projects-heading">
        <h2>Here are some of my projects</h2>
      </div>
      {/* <div className="project-coming-soon">
        <marquee>Coming Soon</marquee>
      </div> */}

      <div className="projectItems">
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
            }}
          >
            &#8249;
          </button>
        </div>
        <div className="projectCards">
          <div
            className={
              currentSlide >= 1 ? "projectCard-left" : "skillCard-pre-non"
            }
          >
            <div className="projectCard-left" onClick={() => traverseLeft()}>
              <div className="projectCard-left-border">
                <div className="projectCard-left-upper">
                  <div className="projectCard-left-upper-sectionOne">
                    <h4>{slides[leftSlide].site}</h4>
                  </div>
                  <div className="projectCard-left-upper-sectionTwo">
                    <img
                      src={slides[leftSlide].pic}
                      alt={slides[leftSlide].site}
                    />
                  </div>
                </div>
                <div className="projectCard-left-bottom">
                  <p>{slides[leftSlide].description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="projectCard">
            <div className="projectCard-border">
              <a className="projectCard-link" href={slides[currentSlide].link}>
                <div className="projectCard-upper">
                  <div className="projectCard-upper-sectionOne">
                    <h4>{slides[currentSlide].site}</h4>
                  </div>
                  <div className="projectCard-upper-sectionTwo">
                    <img
                      src={slides[currentSlide].pic}
                      alt={slides[currentSlide].site}
                    />
                  </div>
                </div>
                <div className="projectCard-bottom">
                  <p>{slides[currentSlide].description}</p>
                </div>
              </a>
            </div>
          </div>

          <div
            className={
              currentSlide != slides.length - 1
                ? "projectCard-right"
                : "skillCard-post-non"
            }
          >
            <div className="projectCard-right" onClick={() => traverseRight()}>
              <div className="projectCard-right-border">
                <div className="projectCard-right-upper">
                  <div className="projectCard-right-upper-sectionOne">
                    <h4>{slides[rightSlide].site}</h4>
                  </div>
                  <div className="projectCard-right-upper-sectionTwo">
                    <img
                      src={slides[rightSlide].pic}
                      alt={slides[rightSlide].site}
                    />
                  </div>
                </div>
                <div className="projectCard-right-bottom">
                  <p>{slides[rightSlide].description}</p>
                </div>
              </div>
            </div>
          </div>
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
            onClick={traverseRight}
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}
