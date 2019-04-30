var vid = document.getElementById("smoke");
vid.playbackRate = 1.5;
var anim = document.getElementById("anim");

myFunction();
document.getElementsByTagName("BODY")[0].onresize = function(){myFunction()};

function myFunction(){
  if(screen.width < 576){
    anim.style.transform = "scale(" + (screen.width/800) + ")";
  }
}

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


setTimeout(function(){
    vid.play();
  }, 4500);