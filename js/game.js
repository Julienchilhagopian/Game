"use strict";

function Game(ctx, canvas, cb) {
  this.ctx = ctx;
  this.size = {
    width: canvas.width, 
    height: canvas.height, 
  };

this.player = null; 
this.enemy = null; 
// this.enemy1 = null;
this.callback = cb; 
this.isEnded = false; 
this.start();

};


Game.prototype.start = function () {
  var self = this;

  
  self.enemy = new Enemy(self.ctx);
  // self.enemy1 = new Enemy(self.ctx);
  self.player = new Player(self.ctx);  
  
  self.doFrame();
};

Game.prototype.checkIfEnded = function () {
  self = this;
  
  if (self.enemy.position.x === self.player.position.x){
    console.log("COOL"); 
  }
}


Game.prototype.implementCheckCollision = function () {
  var self = this;

  self.enemy.checkCollision(); 
  // self.enemy1.checkCollision(); 

};


Game.prototype.clearCanvas = function () {
  var self = this;
  self.ctx.clearRect(0, 0, self.size.width, self.size.height);
};

Game.prototype.draw = function () {
  var self = this;
  self.enemy.draw();
  // self.enemy1.draw();

  self.player.draw();
};

Game.prototype.update = function () {
  var self = this;
  self.enemy.move()
  // self.enemy1.move();
};


Game.prototype.doFrame = function () {
  var self = this;

  self.checkIfEnded();
  self.implementCheckCollision();
  self.clearCanvas();
  self.draw();
  self.update();
  
 
  
  window.requestAnimationFrame(function() {
    self.doFrame();
  });


  
};



