import "../App.css";
import mraLogo from "../media/mraLogo.png";
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
  return (
    <BrowserRouter>
    <section id="navBar">
      <div className="nav">
        {/* <div className="siteLogo">
          <a href="/">Blank</a>
        </div> */}
        {/* <div className="navLogo">
          <img className="mLogo" src={mraLogo} alt="mraLogo" />
        </div> */}

        <div className="navItems">
          <ul>
            <li className="active">
              <Link to="#aboutPage" smooth>About</Link>
            </li>
            <li>
              <Link to="#skillsPage" smooth>Skills</Link>
            </li>
            <li>
              <Link to="#experiencePage" smooth>Experience</Link>
            </li>
            <li>
              <Link to="#contactPage" smooth>Contact</Link>
            </li>
            <li>
              <a href="/Resume">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </BrowserRouter>
  );
}
