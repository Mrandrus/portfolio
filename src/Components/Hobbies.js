import '../App.css'

const Hobbies = () => {
  return (
    <>
      <div className="hobbies" id="hobbies">
        <div className="hobbiesContent">
          <div className="hobbiesHeader">
            <h2>A little more about me</h2>
          </div>
          <div className="hobbiesCards">
            <div className="hobbiesCard">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hobbies;
