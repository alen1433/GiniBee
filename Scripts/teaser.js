var vid = document.getElementById("smoke");
vid.playbackRate = 1.5;
var anim = document.getElementById("anim");

myFunction();
animateBee();
document.getElementsByTagName("BODY")[0].onresize = function(){myFunction()};

function animateBee(){
  if(screen.width > 1200){
    var bee = document.getElementById("beeLogo");
    bee.style.animation = "logoAnim 1.5s linear 2.5s forwards";
  }
}

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

  function changeGif(){
    // Check if Mobile client
     var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/);
      if(isMobile){
      vid.src = "Assets/smokeGif.gif";
      }
  }
  changeGif().init();