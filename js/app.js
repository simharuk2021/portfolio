// toggles the display from none to block based on a conditional

function myFunction() {
    var x = document.querySelector(".sidebar-wrapper");
    if (x.style.display === "block") {
      x.style.display = "none";
      
     } else {
      x.style.display = "block";
      document.querySelector("#burger").style.display = "none";
    }
  }
function closeButton() {
  document.querySelector(".sidebar-wrapper").style.display="none";
  document.querySelector("#burger").style.display = "block";
}