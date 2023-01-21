// toggles the display from none to block based on a conditional

function myFunction() {
    var x = document.querySelector(".sidebar-wrapper");
    if (x.style.display === "none") {
      x.style.display = "block";
     } else {
      x.style.display = "none";
    }
  }