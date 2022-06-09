import SkillsCanvas from "./SkillsCanvas";

const extraContent = (
  <div className="randomStuff">
    <p>Here are some random items</p>
    <ul>
      <li>stuff one</li>
      <li>stuff two</li>
      <li>stuff three</li>
      <li>stuff four</li>
    </ul>
  </div>
);

const getStuff = () => {
    let x = document.getElementById('dob').value;
    let y = document.getElementById('shitNum').value;
    let string = "";
    let s = "";
    let num = document.getElementById('recurse').value;

    switch (x) {
      case '1':
        s = "January";
        break;

      case '2':
        s = "February";
        break;

      case '3':
        s = "March";
        break;

      case '4':
        s = "April";
        break;

      case '5':
        s = "May";
        break;

      default:
        s = "Out of bounds";
    }


    if (y > 100)
        string = "too damn high!";
    else if (y < 0)
        string = "wtf, too damn low";
    else
        string = "just fine I guess, " + y + " is fine."

    document.getElementById('result').innerHTML = `Your bday month is ${s} and your random number is ${string}`;
    recursion();
    document.getElementById('resultRecurse').innerHTML = `The recurive val is ${num}`;
}

//Not working right
function recursion() {
    let num = document.getElementById("recurse").value;
    if (num <= 1)
        return 1;

    else
        return num * recursion(num - 1);
}

const form = (
    <div className="formOne">
        <form id="formy">
            Enter DOB: <input type="number" id="dob"></input><br />
            Enter a random number: <input type="number" id="shitNum"></input><br />
            Enter a number to recurse: <input type="number" id="recurse"></input><br />
            <input type="button" onClick={getStuff} value="Submit"></input>
        </form>
    </div>
);

export default function Skills() {
  return (
    <div className="skillsPage">
      <div>
        <p>Hello these are my skills</p>
        {extraContent}
      </div>
      <div>
        {/* <SkillsCanvas /> */}
        {form}
        <span id="result"></span>
        <span id="resultRecurse"></span>
      </div>
    </div>
  );
}
