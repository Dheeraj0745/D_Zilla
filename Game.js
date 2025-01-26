let score=0;
var Bmark=true;

audio = new Audio('HoliznaCC0 - Mutant Club.mp3');
audiogo = new Audio('male-death-sound-128357.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e) {
  console.log("Key code is: ", e.keyCode);

  if (e.keyCode == 38) { // Up arrow key
    let dhiru = document.querySelector('.dhiru');
    dhiru.classList.add('animateDhiru');
    
    setTimeout(() => {
      dhiru.classList.remove('animateDhiru');
    }, 700); // Matches the animation duration
  }

if(e.keyCode==39){
 dhiru=document.querySelector('.dhiru');
  dhiruX=  parseInt(window.getComputedStyle(dhiru, null).getPropertyValue('left'));  
  dhiru.style.left= (dhiruX + 152) + "px";
}
if(e.keyCode==37){
  dhiru=document.querySelector('.dhiru');
   dhiruX=  parseInt(window.getComputedStyle(dhiru, null).getPropertyValue('left'));  
   dhiru.style.left= (dhiruX - 152) + "px";
 }
 if(e.keyCode==13){
  godzilla=document.querySelector('.godzilla');
   godzilla=  parseInt(window.getComputedStyle(godzilla, null).getPropertyValue('left'));  
   godzilla.classList.remove('godAni')
 }
}


setInterval(() => {
  dhiru = document.querySelector('.dhiru');
  gameOver = document.querySelector('.gameOver');
  godzilla = document.querySelector('.godzilla');

  dx = parseInt(window.getComputedStyle(dhiru, null).getPropertyValue('left'));
  dy = parseInt(window.getComputedStyle(dhiru, null).getPropertyValue('top'));

  gx = parseInt(window.getComputedStyle(godzilla, null).getPropertyValue('left'));
  gy = parseInt(window.getComputedStyle(godzilla, null).getPropertyValue('top'));

  offsetX = Math.abs(dx - gx);
  offsetY = Math.abs(dy - gy);
  // console.log(offsetX, offsetY)
  if (offsetX < 173 && offsetY < 180) {
      gameOver.innerHTML = "Game Over-Reload to Play Again"
      godzilla.classList.remove('godAni')
      audiogo.play();

        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
      }

   else if(offsetX<260&&Bmark){
   score=score+1;
   updateScore(score);

     Bmark=false;
     setTimeout(() =>
     {
     Bmark=true;
     },1000);
   }
      }, 100);

    function updateScore(score){
    scoreCount.innerHTML="Your score:" +score;
    }
    


    