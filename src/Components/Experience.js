import "../App.css";
import csu from "../media/csu_sign.jpg";

export default function Experience() {
  return (
    <div className="experiencePage" id="experience">
      {/* {setUp} */}
      <div className="csuLocation-card-container">
        <div className="csuLocation-card">
          <div className="csuLocation-card-upperContent">
            <div className="csuLocation-card-upperContent-one">
              <div className="csuLocation-card-upperContent-three-inner-container-one">
                <h4>Site</h4>
              </div>
            </div>
            <div className="csuLocation-card-upperContent-two">
              <h3>Colorado State University</h3>
            </div>
            <div className="csuLocation-card-upperContent-three">
              <div className="csuLocation-card-upperContent-three-inner-container-three">
                <h4> 1 </h4>
              </div>
            </div>
          </div>
          <img className="csuImage" src={csu}></img>
          <div className="csuLocation-card-lowerContent">
            <p>Shit man I don't know, this is just where I worked and shit.</p>
          </div>
        </div>
      </div>
      <div className="experienceText-container">
        <div className="experienceText">
          <h4>
            With 6+ years of experience I was able to work on a myriad of
            different projects ranging from website design and development,
            maintaining and improving auto-testing software, and working on
            varrying projects utilizing React, Wordpress, and Angular with
            languages including Javascript and C#.
          </h4>
        </div>
      </div>
    </div>
  );
}
