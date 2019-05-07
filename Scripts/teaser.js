var vid = document.getElementById("smoke");
vid.playbackRate = 1.5;
// var anim = document.getElementById("anim");

// myFunction();
// animateBee();
// document.getElementsByTagName("BODY")[0].onresize = function(){myFunction()};

function animateBee(){
  if(screen.width > 1200){
    var bee = new Image();
    bee.src = "Assets/BeeLogo.png";
    bee.style.animation = "logoAnim 1.5s linear 2.5s forwards";
  }
}

// function myFunction(){
//   if(screen.width < 576){
//     anim.style.transform = "scale(" + (screen.width/800) + ")";
//   }
// }

var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden',
          'fade-in'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();

window.onload = setTimeout(function(){
    vid.play();
  }, 5000);

// function changeGif(){
//   // Check if Mobile client
//   var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/);
//   var gif = new Image();
//   if(isMobile){
//     gif.src = "Assets/smokeGif.gif";
//     gif.id = "smoke";
//     document.getElementById("smokeHolder").remove();
//     document.getElementById("smokeHolder").appendChild(gif);
//   }
// }
// changeGif().init();