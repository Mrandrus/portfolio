import "../App.css";
import { useEffect, useState } from "react";
import csu from "../media/csu_sign.jpg";
import chef from "../media/matt_chef_small.jpg";
import music from "../media/matt_music_slerp_small.jpg";
import sport from "../media/matt_sports_small.jpg";
import gamer from "../media/Matt_Gamer_small.jpg";
import gardener from "../media/matt_gardener_small.jpg";
import lit from "../media/matt_literature_small.jpg";
import amazon from "../media/amazon_matt_small.jpg";

const Hobbies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leftSlide, setLeftSlide] = useState(0);
  const [rightSlide, setRightSlide] = useState(1);
  const [card, setCard] = useState([]);

  const slides = [
    {
      id: 1,
      title: "Aged Intramural Athlete",
      description:
        "Though a shadow of my formal self, there are still remnants of athleticism.",
      pic: sport,
    },
    {
      id: 2,
      title: "Apprentice Chef to Youtube",
      description:
        "Whether it's Mexican, Asian, Indian, or Italian, I've found a peace in the kitchen.",
      pic: chef,
    },
    {
      id: 3,
      title: "Pensive Musician",
      description: "A seasoned guitarist and aspiring pianist.",
      pic: music,
    },
    {
      id: 4,
      title: "Unkempt gamer and Cinephile",
      description:
        "When I'm not rewatching The Lord of the Rings or Tarantino movies, I'm smithing knives in Skyrim.",
      pic: gamer,
    },
    {
      id: 5,
      title: "Budding Gardener",
      description:
        "I'm new to gardening, but my family tree is full of assiduous gardeners.",
      pic: gardener,
    },
    {
      id: 6,
      title: "Literary Enthusiast",
      description:
        "I've found a new enjoyment for classic literature and history.",
      pic: lit,
    },
    {
      id: 7,
      title: "Amazon Driver",
      description: "This is what I do now.",
      pic: amazon,
    },
  ];

  const loadCards = async () => {
    const promises = slides.map(async (card) => {
      const image = new Image();
      image.src = card.pic;
      await image.decode();
      return { ...card, image };
    });

    const loadedCards = await Promise.all(promises);
    setCard(loadedCards);
  };

  useEffect(() => {
    loadCards();
  }, [slides]);

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
    <>
      <div className="hobbies" id="hobbies">
        <div className="hobbiesContent">
          <div className="hobbiesHeader">
            <h2>A little more about me</h2>
          </div>
          <div className="hobbiesCards-container">
            <div
              className={
                currentSlide > 0
                  ? "slider-button-left"
                  : "slider-button-left-non"
              }
            >
              <button
                className="slide-arrow"
                id="slide-arrow-prev"
                onClick={() => {
                  traverseLeft();
                  //animator();
                }}
                //onAnimationEnd={() => setMoveLeft(0)}
                //move={moveLeft}
              >
                &#8249;
              </button>
            </div>
            {/* <div className="hobbiesCard">
              <h4>Unkempt Gamer & Cinephile</h4>
            </div>
            <div className="hobbiesCard">
              <h4>Intramural Athlete</h4>
            </div>
            <div className="hobbiesCard">
              <h4>Apprentice Chef to YouTube</h4>
            </div>
            <div className="hobbiesCard">
              <h4>Pensive Musician</h4>
            </div> */}
            <div className="hobbiesCards">
              <div
                className={
                  currentSlide >= 1 ? "hobbiesCard-left" : "skillCard-pre-non"
                }
              >
                <div
                  className="hobbiesCard-left"
                  onClick={() => traverseLeft()}
                >
                  <div className="hobbiesCard-left-border">
                    <div className="hobbiesCard-left-upper">
                      <div className="hobbiesCard-left-upper-sectionOne">
                        <h4>{slides[leftSlide].title}</h4>
                      </div>
                      <div className="hobbiesCard-left-upper-sectionTwo">
                        <img loading="lazy" src={slides[leftSlide].pic} />
                      </div>
                    </div>
                    <div className="hobbiesCard-left-bottom">
                      <p>{slides[leftSlide].description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hobbiesCard">
                <div className="hobbiesCard-border">
                  <div className="hobbiesCard-upper">
                    <div className="hobbiesCard-upper-sectionOne">
                      <h4>{slides[currentSlide].title}</h4>
                    </div>
                    <div className="hobbiesCard-upper-sectionTwo">
                      <img loading="lazy" src={slides[currentSlide].pic} />
                    </div>
                  </div>
                  <div className="hobbiesCard-bottom">
                    <p>{slides[currentSlide].description}</p>
                  </div>
                </div>
              </div>
              <div
                className={
                  currentSlide != slides.length - 1
                    ? "hobbiesCard-right"
                    : "skillCard-post-non"
                }
              >
                <div
                  className="hobbiesCard-right"
                  onClick={() => traverseRight()}
                >
                  <div className="hobbiesCard-right-border">
                    <div className="hobbiesCard-right-upper">
                      <div className="hobbiesCard-right-upper-sectionOne">
                        <h4>{slides[rightSlide].title}</h4>
                      </div>
                      <div className="hobbiesCard-right-upper-sectionTwo">
                        <img loading="lazy" src={slides[rightSlide].pic} />
                      </div>
                    </div>
                    <div className="hobbiesCard-right-bottom">
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
      </div>
    </>
  );
};

export default Hobbies;
