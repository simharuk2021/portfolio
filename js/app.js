 	

$(document).ready(function(){
  $(".slide-toggle").click(function(){
    $(".sidebar").animate({
      width: "toggle"
    });
  });
});

var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");
  // Do something else, like open/close menu
});