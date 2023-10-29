import React, { useEffect, useState } from "react";
import "../App.css";
import $ from "jquery";
import MouseTrail from "./MouseTrail";
import _ from "lodash";

const Starrrs = () => {
  class Star {
    constructor(className) {
      this.size = Math.floor(Math.random() * 3) + 2;
      this.top = Math.random() * window.innerHeight + "px";
      this.left = Math.random() * window.innerWidth + "px";
      this.className = className;
    }
  }

  const [stars, setStars] = useState([]);
  const [starsTwo, setStarsTwo] = useState([]);
  const [starCount, setStarCount] = useState(20);

  const newWidth = window.innerWidth;

  useEffect(() => {
    const createStars = () => {
      const starElements = [];
      const starTwoElements = [];

      for (let i = 0; i < starCount; i++) {
        const star = new Star("starz");
        starElements.push(star);

        const starTwo = new Star("starzTwo");
        starTwoElements.push(starTwo);
      }

      setStars(starElements);
      setStarsTwo(starTwoElements);
    };

    createStars();
  }, [newWidth]);

  useEffect(() => {
    const handleResize = _.debounce(() => {
      if (newWidth !== window.innerWidth) {
        adjustStars(window.innerWidth);

        const updatedStars = stars.map((star) => ({
          ...star,
          left: Math.random() * window.innerWidth + "px",
          top: Math.random() * window.innerHeight + "px",
        }));

        const updatedStarsTwo = starsTwo.map((star) => ({
          ...star,
          left: Math.random() * window.innerWidth + "px",
          top: Math.random() * window.innerHeight + "px",
        }));

        setStars(updatedStars);
        setStarsTwo(updatedStarsTwo);
      }
      console.log(
        "Checking window size",
        window.innerWidth,
        "checking star count:",
        starCount
      );
    }, 300);

    adjustStars(window.innerWidth);

    console.log("count them stars:", starCount);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  // }, [stars.length, starsTwo.length, starCount]);
  }, [newWidth])
// }, [])


  const adjustStars = (size) => {
    const newWidth = window.innerWidth;

    if (newWidth !== size) {
      if (size > 2000) {
        setStarCount(20);
      } else if (size > 1500 && size < 2000) {
        setStarCount(10);
      } else if (size > 1000 && size < 1500) {
        setStarCount(7);
      } else if (size > 500 && size < 1000) {
        setStarCount(4);
      } else {
        setStarCount(20);
      }
    }
  };

  //Cycle stars to adjust box shadow, can do the same
  //with css animate, doesn't look like exactly wha I'm looking for.
  const blinkingStars = () => {
    const updatedStars = stars.map((star) => ({
      ...star,
      boxShadow: "0px 0px 25px 50px red", // Modify the box shadow here
    }));

    const updatedStarsTwo = starsTwo.map((star) => ({
      ...star,
      boxShadow: "0px 0px 50px 70px red", // Modify the box shadow here
    }));
  };

  return (
    <>
      {stars.map((star, index) => (
        <div
          key={index}
          className={star.className}
          style={{
            top: star.top,
            left: star.left,
            height: star.size + "px",
            width: star.size + "px",
          }}
        />
      ))}

      {starsTwo.map((star, index) => (
        <div
          key={index}
          className={star.className}
          style={{
            top: star.top,
            left: star.left,
            height: star.size + "px",
            width: star.size + "px",
          }}
        />
      ))}
    </>
  );
};

export default Starrrs;
