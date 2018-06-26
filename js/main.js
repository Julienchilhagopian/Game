"use strict";

function createHtml(html) {
  var div = document.createElement("div");
  div.innerHTML = html;
  return div.children[0];
}


var introScreen = createHtml(`<div id="intro">
<h1 class="intro-title">Survive the flames</h1>
<button id="">
</div>`);



function main () {

  var container = null; 
  var button = null; 
  var canvas; 
  var game= null; 
  

  function buildSplash() {
    container = document.getElementById("game-container"); 
    
    // STYLE 
    
    container.appendChild(introScreen);
    button = document.createElement("button"); 
    button.setAttribute("id", "btn-start"); 
    button.innerText = "START"; 
    container.appendChild(button);
    button.addEventListener("click", handleStartClick);
    
  }

  function handleStartClick () {
    button.removeEventListener("click", handleStartClick); 
    button.remove();
    introScreen.remove();
    buildGame();

  }

  function buildGame () {
    canvas = document.createElement("canvas"); 
    canvas.setAttribute("id", "canvas"); 
    container.appendChild(canvas); 

    canvas.width = window.innerWidth; 
    canvas.height = 610; 

    playGame();
      
  }

  function handleKeyDown (event) {
    var self = this;
    
      switch(event.key){
        case 'z': 
        game.player.moveUp(); 
        break; 
        case 's': 
        game.player.moveDown();
        break;
        case 'q':
        game.player.moveLeft();
        break;
        case 'd':
        game.player.moveRight();
        break; 
      }
      
  };


  function playGame() {
    
    var canvasCtx = canvas.getContext("2d");

    game = new Game(canvasCtx, canvas, endGame);

    //   var gameTest = setTimeout(function(){
    //   endGame();
    // }, 3000);

    // gameTest; 

   

    document.addEventListener("keydown", handleKeyDown);

  };

  function endGame () {
    canvas.remove(); 
    game = 0; 
    buildGameOver()

  }

  function buildGameOver () {
    button = document.createElement("button"); 
    button.setAttribute("id", "ending-btn")
    button.innerText = "RESTART"; 
    container.appendChild(button);
    button.addEventListener("click", handleRestartClick);
    
  }


  function handleRestartClick () {
    button.removeEventListener("click", handleRestartClick); 
    button.remove();
    buildSplash(); 
  }




  buildSplash();
}



window.addEventListener('load', main); 