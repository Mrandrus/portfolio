import "../App.css";
import $ from "jquery";
import MouseTrail from "./MouseTrail";
import React from "react";

const Stars = () => {
  $(document).ready(function () {
    class stars {
      constructor() {
        this.obj = document.createElement("div");
        this.obj.classList.add("box");

        this.obj.style.top = window.innerHeight * Math.random() + "px";
        this.obj.style.left = window.innerWidth * Math.random() + "px";
        this.size = Math.floor(1 * Math.random()) + 3;
        this.obj.style.height = this.size + "px";
        this.obj.style.width = this.size + "px";

        document.body.appendChild(this.obj);
      }
    }

    class starsTwo {
      constructor() {
        //let random = Math.random(10)
        this.obj = document.createElement("div");
        this.obj.classList.add("boxTwo");
        //this.obj.classList.add(random)

        this.obj.style.top = window.innerHeight * Math.random() + "px";
        this.obj.style.left = window.innerWidth * Math.random() + "px";
        this.size = Math.floor(4 * Math.random()) + 2;
        this.obj.style.height = this.size + "px";
        this.obj.style.width = this.size + "px";

        document.body.appendChild(this.obj);
      }
    }

    let star = [];
    let starTwo = [];
    for (let i = 0; i < 50; i++) {
      star.push(new stars());
      starTwo.push(new starsTwo());
    }

    $("div.box:odd").fadeIn(3000).fadeOut(3000).fadeIn(3000)


    //Hover function to remove star from window
    // $(".box").hover(function () {
    //   $(this).css("background-color", "aqua");
    //   $(this).fadeIn(3000).fadeOut(3000);
    //   $(this).next();
    // });

    // $(".boxTwo").hover(function () {
    //   //$(this).css("background-color", "aqua");
    //   $(this).fadeIn(3000).fadeOut(3000);
    //   $(this).next();
    // });

    //Blink stars function
    //$(document).ready(function() {
      //$(".box:first").append(function(){
        // $("div.box:odd").fadeIn(3000).fadeOut(3000).fadeIn(3000)
        //$(this).next()
        //$(this).fadeIn(3000).fadeOut(3000).fadeIn(3000)

      //})
    //})
      

    //Jquery idea for making the stars appear to move on scroll
    //   $(function () {
    //     var header = $(".boxTwo");
    //     $(window).scroll(function () {
    //         var scroll = $(window).scroll();

    //         if (scroll) {
    //             header.removeClass('boxTwo')
    //                     .addClass("testBox");
    //         } else {
    //             header.removeClass("testBox")
    //                     .addClass('boxTwo');
    //         }
    //     });
    // });

    //   $(window).scroll(function () {
    //     var ad = $(".boxTwo")
    //     ad.addClass("testBox").removeClass("testBox")
    //   })


  });
};

export default Stars;
