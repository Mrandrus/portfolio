import React from "react";
import Projects from "./Projects";
import Character from "./Character";
import mockPic from "../media/before.PNG";
import pic from "../media/matt_main - Copy (2).jpg";
import "../App.css";
import "../About.css";
import $ from "jquery";

const statement = "I am a Banana";
const getTime = Date.now();
const today = new Date(getTime);

export default function About() {
  var shitOn = function () {
    let str = "Shit on bro";
    document.getElementById("shit").innerHTML = str;
  };

  // $(document).ready(function(){
  //   function stars() {
  //     this.obj = document.createElement("div")
  //     this.obj.classList.add("box");

  //     this.obj.style.top = (window.innerHeight * Math.random()) + 'px';
  //     this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
  //     this.size = Math.floor(9 * Math.random()) + 2;
  //     this.obj.style.height =  this.size + 'px';
  //     this.obj.style.width = this.size + 'px';

  //     document.body.appendChild(this.obj);
  //   }

  //   let star = []
  //   for (let i = 0; i < 100; i++) {
  //     star.push(new stars())
  //   }
  // })

  return (
    <div className="parentAbout" id="about">
      <div className="aboutName">
        <div className="aboutName-items">
          <h1>
            Hello, <br /> welcome to my website
          </h1>
        </div>
      </div>
      <div className="aboutPicture">
        <div className="aboutPicBorder">
          <div className="aboutPicUpper">
            <div className="aboutPicUpper_sectionOne">
              <div className="aboutPicUpper_sectionOne_One">
                <p>Matt Andrus</p>
              </div>
              <div className="aboutPicUpper_sectionOne_Two">
                <p>מַתִּתְיָהוּ‎</p>
              </div>
            </div>
            <div className="aboutPicUpper_sectionTwo">
              <p>
                Colorado native with six years of experience working with a
                variety of different languages and frameworks.
              </p>
            </div>
            <div className="aboutPicUpper_sectionThree">
              <img src={pic} alt="muhFace" />
            </div>

            {/* <p>peen</p>
              <p>I say {statement}</p>
              <p>{today.toDateString()}</p>
              <button onClick={shitOn}>Click this</button>
              <p id="shit"></p> */}
          </div>
          <div className="aboutPicLower">
            <div className="aboutPicLower_sectionOne">
              <div className="aboutPicLower_sectionOne_One">
                <p>Web Developer</p>
              </div>
              <div className="aboutPicLower_sectionOne_Two">
                <p>Experience 6</p>
              </div>
            </div>
            <div className="aboutPicLower_sectionTwo">
              <div className="aboutPicLower_sectionTwo_One">
                <p>
                  Add to workforce pool to boost productivity and workplace
                  morale.
                </p>
              </div>
            </div>
            <br />
            <div className="aboutPicLower_sectionThree">
              <div className="aboutPicLower_sectionThree_One">
                <p>05~19~1990</p>
              </div>
              <div className="aboutPicLower_sectionThree_Two">
                <p>487FT389R</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Projects /> */}
    </div>
  );
}

/*here 
is my name*/
