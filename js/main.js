"use strict";

function createHtml(html) {
  var div = document.createElement("div");
  div.innerHTML = html;
  return div.children[0];
}

var introScreen = createHtml(`<div id="intro">
<h1 class="intro-title">Survive the flames</h1>

</div>`);

var endScreen = createHtml(`<div id="end">
<h1 class="end-title">THE END</h1>

</div>`);

function main () {
  
  var container = document.getElementById("game-container");  
  var canvas; 
  var game= null;
  var button = null;
  var scoreOutput = null;
  // var score = null;
 
  
  function buildSplash() {
    
    button = createHtml(`
    <div>
    <button id="btn-start">start</button>
    </div>
    `)
    // STYLE 
    
    container.appendChild(introScreen);

    var introDiv = document.getElementById("intro");
    introDiv.appendChild(button);

    button = document.getElementById("btn-start"); 
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

    canvas.classList.add("nocursor");

    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight; 

    playGame();
      
  }

  // function handleKeyDown (event) {
  //   var self = this;
    
  //     switch(event.key){
  //       case 'z': 
  //       game.player.moveUp(); 
  //       break; 
  //       case 's': 
  //       game.player.moveDown();
  //       break;
  //       case 'q':
  //       game.player.moveLeft();
  //       break;
  //       case 'd':
  //       game.player.moveRight();
  //       break; 
  //     }
      
  // };

  function mouseMovement () {
    game.player.mouseControle();
  }


  function playGame() {

    var canvas = document.getElementById("canvas"); 
    var canvasCtx = canvas.getContext("2d");

    game = new Game(canvasCtx, canvas, endGame);

    //   var gameTest = setTimeout(function(){
    //   endGame();
    // }, 3000);

    // gameTest; 
   
   game.audio.play();


    // document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousemove", mouseMovement);


  };



  function endGame () {
    canvas.remove(); 
    game.audio.pause();
  
    buildGameOver(); 
    document.removeEventListener("mousemove", mouseMovement);

  }

  function buildGameOver () {

    container.appendChild(endScreen);
    var endDiv = document.getElementById("end");

   
    var scoreCounter = game.counterScore;
    game = 0; 

    scoreOutput = document.createElement("h2"); 
    scoreOutput.setAttribute("id", "score"); 
    scoreOutput.innerText = "Your score : " + scoreCounter;
    endDiv.appendChild(scoreOutput);

    button = document.createElement("button"); 
    button.setAttribute("id", "end-btn")
    button.innerText = "RESTART"; 
    endDiv.appendChild(button);


    button.addEventListener("click", handleRestartClick);
    
  }


  function handleRestartClick () {
    button.removeEventListener("click", handleRestartClick); 
    button.remove();
    scoreOutput.remove();
    endScreen.remove();
    buildSplash(); 
  }

  buildSplash();
}



window.addEventListener('load', main); 