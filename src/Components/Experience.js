import "../App.css";
import csu from "../media/csu_sign.jpg";

export default function Experience() {
  return (
    <div className="experiencePage" id="experience">
      {/* {setUp} */}
      <div className="csuLocation-card-container">
        <div className="csuLocation-card">
          <div className="csuLocaton-card-border">
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
            <div className="csuImage-section">
              <div className="csuImage-section-border">
                <img className="csuImage" src={csu}></img>
              </div>
            </div>
            <div className="csuLocation-card-lowerContent">
              <div className="csuLocation-card-lowerContent-text">
                <p>
                  Established in 1870, Colorado State University (CSU) is a
                  public research university in Fort Collins, Colorado, known
                  for its diverse academic programs, strong research focus, and
                  commitment to sustainability.
                </p>
              </div>
            </div>
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
