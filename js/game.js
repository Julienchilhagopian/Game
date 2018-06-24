"use strict";

function Game(ctx, canvas, cb) {
  this.ctx = ctx;
  this.size = {
    width: canvas.width, 
    height: canvas.height, 
  };

this.player = null; 
this.enemy = null; 
this.enemy1 = null;
this.callback = cb; 
this.isEnded = false; 
this.start();

};


Game.prototype.start = function () {
  var self = this;

  self.enemy = new Enemy(self.ctx);
  // self.enemy1 = new Enemy(self.ctx);  
  
  self.doFrame();
};


Game.prototype.checkCollision = function () {
  var self = this;

  if (self.enemy.position.y <= 0 ){
    self.enemy.speed.y *= -1;
  } 
  else if (self.enemy.position.y + self.enemy.size.height >= self.size.height) {
    self.enemy.speed.y = -self.enemy.speed.y
  } 
  else if (self.enemy.position.x <= 0) {
    self.enemy.speed.x *= -1; 
  }  
  else if (self.enemy.position.x + self.enemy.size.width >= self.size.width) {
    self.enemy.speed.x = -self.enemy.speed.x;
  }
  
};

Game.prototype.update = function () {

};

Game.prototype.clearCanvas = function () {
  var self = this;
  self.ctx.clearRect(0, 0, self.size.width, self.size.height);
};

Game.prototype.draw = function () {
  var self = this;
  self.enemy.draw();
  // self.enemy1.draw();
};

Game.prototype.update = function () {
  var self = this;
  self.enemy.move()
  // self.enemy1.move();
};


Game.prototype.doFrame = function () {
  var self = this;

  self.checkCollision();
  self.clearCanvas();
  self.update();
  self.draw();
  // self.enemy1.nextOne();
 
  
  
  
  
  window.requestAnimationFrame(function() {
    self.doFrame();
  });

  
  
};



