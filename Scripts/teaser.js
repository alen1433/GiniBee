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


setTimeout(function(){
    vid.play();
  }, 4500);