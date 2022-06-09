import "../App.css";

export default function Navbar() {
  return (
    <section id="navBar">
      <div className="nav">
        {/* <div className="siteLogo">
          <a href="/">Blank</a>
        </div> */}
        <div className="navItems">
          <ul>
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Experience">Experience</a>
            </li>
            <li>
              <a href="/Skills">Skills</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
            <li>
              <a href="/Resume">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
