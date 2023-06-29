import "../App.css";
import $ from "jquery";
import "../css/MouseTrail.css";
import { useState, useEffect, Fragment } from "react";

const MouseTrail = () => {
  // dots is an array of Dot objects,
  // mouse is an object used to track the X and Y position
  // of the mouse, set with a mousemove event listener below
  var dots = [],
    mouse = {
      x: 0,
      y: 0,
    };

  // const [dotts, setDotts] = useState(dots)

  // useEffect(() => {

  // }, [])

  // The Dot object used to scaffold the dots
  class Dot {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.node = (function () {
        var n = document.createElement("span");
        // var dash = document.createElement("div");
        // dash.className = "mouseTrailOutter";
        // n.append(dash);
        n.className = "mouseTrail";
        document.body.appendChild(n);
        return n;
      })();
    }
    // The Dot.prototype.draw() method sets the position of
    // the object's <div> node
    draw() {
      // this.node.style.right = this.x + "px";
      this.node.style.left = this.x + "px";

      this.node.style.top = this.y + "px";
      // this.node.style.bottom = this.y + "px";
    }
  }

  // Creates the Dot objects, populates the dots array
  for (var i = 0; i < 50; i++) {
    var d = new Dot();
    dots.push(d);
  }

  // This is the screen redraw function
  function draw() {
    // Make sure the mouse position is set everytime
    // draw() is called.
    var x = mouse.x,
      y = mouse.y,
      p = mouse.x,
      q = mouse.y;

    // This loop is where all the 90s magic happens
    dots.forEach(function (dot, index, dots) {
      var nextDot = dots[index + 1] || dots[0];

      dot.x = x;
      dot.y = y;
      dot.p = p;
      dot.q = q;
      dot.draw();

      x = x + (nextDot.x - dot.x) * 0.5;
      y = y + (nextDot.y - dot.y) * 0.5;

      // p += ((nextDot.p- dot.p) / .25) + 2;
      // q += ((nextDot.q- dot.q) / .25) + 2;
    });
  }

  //Add dot to trail
  // $(document).ready(function() {
  //   $(".box").hover(function() {
  //     var ff = new Dot();
  //     dots.push(ff)
  //     console.log("here", dots)
  //   })
  //   $(".boxTwo").hover(function() {
  //     var ff = new Dot();
  //     dots.push(ff)
  //     console.log("here", dots)
  //   })
  // })

  $(document).mousemove(function (event) {
    //event.preventDefault();
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });

  //   $(document).scroll(function(event) {
  //     mouse.x = event.pageX;
  //     mouse.y = event.pageY;
  //   })

  // animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
  function animate() {
    draw();
    requestAnimationFrame(animate);
  }

  // And get it started by calling animate().
  animate();
};
export default MouseTrail;

