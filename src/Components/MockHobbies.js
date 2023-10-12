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
import slides from "./HobbieSlideObjects";


const MockHobbies = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const loadCards = async () => {
    const promises = slides.map(async (slide) => {
      const image = new Image();
      image.src = slide.pic;
      await image.decode();
      return { ...slide, image };
    });

    const loadedSlides = await Promise.all(promises);
    setCurrentSlide(loadedSlides);
  };

  useEffect(() => {
    loadCards();
  }, []);

  const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
  const nextSlide = (currentSlide + 1) % slides.length;

  const goToPrevSlide = () => {
    setCurrentSlide(prevSlide);
  };

  const goToNextSlide = () => {
    setCurrentSlide(nextSlide);
  };

  return (
    <div className="slider-container">
      <button className="slide-arrow" onClick={goToPrevSlide}>
        &#8249;
      </button>
      <div className="slider">
        <div className="slider-card">
          <h4>{slides[prevSlide].title}</h4>
          <img src={slides[prevSlide].pic} alt={slides[prevSlide].title} />
          <p>{slides[prevSlide].description}</p>
        </div>
        <div className="slider-card current">
          <h4>{slides[currentSlide].title}</h4>
          <img src={slides[currentSlide].pic} alt={slides[currentSlide].title} />
          <p>{slides[currentSlide].description}</p>
        </div>
        <div className="slider-card">
          <h4>{slides[nextSlide].title}</h4>
          <img src={slides[nextSlide].pic} alt={slides[nextSlide].title} />
          <p>{slides[nextSlide].description}</p>
        </div>
      </div>
      <button className="slide-arrow" onClick={goToNextSlide}>
        &#8250;
      </button>
    </div>
  );
}


export default MockHobbies;
