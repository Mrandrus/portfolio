import "../App.css";
import { useEffect, useState } from "react";
import csu from "../media/csu_sign.jpg";
import chef from "../media/matt_chef.jpg";
import music from "../media/matt_music_slerp.jpg";
import sport from "../media/matt_sports.jpg";
import gamer from "../media/Matt_Gamer.jpg";
import gardener from "../media/matt_gardener.jpg";
import lit from "../media/matt_literature.jpg";
import amazon from "../media/amazon_matt.jpg";





const Hobbies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [leftSlide, setLeftSlide] = useState(0);
  const [rightSlide, setRightSlide] = useState(1);
  const [cards, setCards] = useState([]);

  const slides = [
    {
      id: 1,
      title: "Aged Intramural Athlete",
      description: "Though a shadow of my formal self, there is still remnants of athleticism.",
      pic: sport,
    },
    {
      id: 2,
      title: "Apprentice Chef to Youtube",
      description: "Whether it's Mexican, Asian, Indian, or Italian, I've found a peace in the kitchen.",
      pic: chef,
    },
    {
      id: 3,
      title: "Pensive Musician",
      description: "A seasoned guitarist and aspiring piansist.",
      pic: music,
    },
    {
      id: 4,
      title: "Unkempt gamer and Cinephile",
      description: "When I'm not rewatching The Lord of the Rings or Tarantino movies, I'm smithing knives in Skyrim.",
      pic: gamer,
    },
    {
      id: 5,
      title: "Budding Gardener",
      description: "I'm new to gardening, but my family tree is full of assiduous gardeners.",
      pic: gardener,
    },
    {
      id: 6,
      title: "Literature",
      description: "I've found an enjoyment for classic literature and history.",
      pic: lit,
    },
    {
      id: 7,
      title: "Amazon Driver",
      description: "This is what I do now.",
      pic: amazon,
    },
  ];

  useEffect(() => {
    const loadCards = async () => {
      const promises = slides.map(async (card) => {
        const image = new Image();
        image.src = card.pic;
        await image.decode();
        return { ...card, image };
      });

      const loadedCards = await Promise.all(promises);
      setCards(loadedCards);
    };

    loadCards();
  }, []);

  const traverseRight = () => {
    if (currentSlide >= slides.length - 1 || rightSlide >= slides.length - 1) {
      setCurrentSlide(slides.length - 1);
      setLeftSlide(slides.length - 2);
      setRightSlide(slides.length - 1);
      //setDeckLeft([0])
    } else {
      setCurrentSlide(currentSlide + 1);
      setRightSlide(rightSlide + 1);
      if (leftSlide <= slides.length - 1 && currentSlide >= 1) {
        setLeftSlide(leftSlide + 1);
      }
      //setDeckLeft(deckLeft.push(1))
      //console.log("left deck number", deckLeft)
    }
  };

  const traverseLeft = () => {
    //let updateSlides = deckRight

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

  return (
    <>
      <div className="hobbies" id="hobbies">
        <div className="hobbiesContent">
          <div className="hobbiesHeader">
            <h2>A little more about me</h2>
          </div>
          <div className="hobbiesCards-container">
            <div className={
            currentSlide > 0 ? "slider-button-left" : "slider-button-left-non"
          }>
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
                <div className="hobbiesCard-left" onClick={() => traverseLeft()}>
                  <div className="hobbiesCard-left-border">
                    <div className="hobbiesCard-left-upper">
                      <div className="hobbiesCard-left-upper-sectionOne">
                        <h4>{slides[leftSlide].title}</h4>
                      </div>
                      <div className="hobbiesCard-left-upper-sectionTwo">
                        <img src={slides[leftSlide].pic} />
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
                      <img src={slides[currentSlide].pic} />
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
                <div className="hobbiesCard-right" onClick={() => traverseRight()}>
                  <div className="hobbiesCard-right-border">
                    <div className="hobbiesCard-right-upper">
                      <div className="hobbiesCard-right-upper-sectionOne">
                        <h4>{slides[rightSlide].title}</h4>
                      </div>
                      <div className="hobbiesCard-right-upper-sectionTwo">
                        <img src={slides[rightSlide].pic} />
                      </div>
                    </div>
                    <div className="hobbiesCard-right-bottom">
                      <p>{slides[rightSlide].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={
            currentSlide < slides.length - 1
              ? "slider-button-right"
              : "slider-button-right-non"
          }>
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
