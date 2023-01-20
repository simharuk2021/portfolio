// toggles the display from none to block based on a conditional - used to render the menu when the hamburger icon is clicked
function toggleNav() {
    var nav= document.getElementById("mySidenav");
    if (nav.style.width == "250px") {
      nav.style.width = "0px";
    } else {
      nav.style.width = "250px";
    }
  }

  //function which passes the header text to the banner overlay and applys a typing style when the page is loaded
var i = 0;
var txt = 'My name is Simon Hart'; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */

window.onload = function textType() {
  if (i < txt.length) {
    document.querySelector(".banner-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(textType, speed);
  }
}

// /* Set the width of the side navigation to 250px */
// function openNav() {
//   document.querySelector("sidebar").style.width = "250px";
// }

// /* Set the width of the side navigation to 0 */
// function closeNav() {
//   document.querySelector("sidebar").style.width = "0px";
// }

// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }