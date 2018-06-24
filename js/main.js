"use strict";



function main () {

  var container = null; 
  var button = null; 
  var canvas; 
  var game= null; 
  

  function buildSplash() {
    container = document.getElementById("game-container"); 
    button = document.createElement("button"); 
    button.setAttribute("id", "btn-start"); 
    button.innerText = "START"; 
    container.appendChild(button);
    button.addEventListener("click", handleStartClick);
  }

  function handleStartClick () {
    button.removeEventListener("click", handleStartClick); 
    button.remove();
    buildGame();

  }

  function buildGame () {
    canvas = document.createElement("canvas"); 
    canvas.setAttribute("id", "canvas"); 
    container.appendChild(canvas); 

    // canvas.width = window.innerWidth; 
    // canvas.height = window.innerHeight; 

    playGame();
      
  }

  function playGame() {
    

    var canvasCtx = canvas.getContext("2d");

    game = new Game(canvasCtx, canvas, endGame);

    //   var gameTest = setTimeout(function(){
    //   endGame();
    // }, 3000);

    // gameTest; 

  }

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

