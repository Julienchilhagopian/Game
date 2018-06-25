"use strict";

function Game(ctx, canvas, cb) {
  this.ctx = ctx;
  this.size = {
    width: canvas.width, 
    height: canvas.height, 
  };


this.player = null; 
this.enemy = null; 
this.gift = null; 
this.callback = cb; 
this.isEnded = false; 
this.start();

};


Game.prototype.start = function () {
  var self = this;

  
  self.enemy = new Enemy(self.ctx);
  self.player = new Player(self.ctx);  
  self.gift = new Gift('smaller', self.ctx)
  
  self.doFrame();
};

// Game.prototype.checkIfEnded = function () {
//   self = this;

//   if (self.enemy.top() === self.player.top()){
//     console.log("COOL top"); 
//   } else if (self.enemy.right() === self.player.right()) {
//     console.log("Cool right");
//   } else if (self.enemy.bottom() === self.player.bottom()) {
//     console.log("Cool bottom");
//   } else if (self.enemy.left() === self.player.left()) {
//     console.log("Cool left");
//   };


//   }; 

Game.prototype.giftCollision = function () {
  var self = this;

  var giftData = {
    x: self.gift.position.x, 
    y: self.gift.position.y, 
    width: self.gift.size.width, 
    height: self.gift.size.height,

  };

  var playerData = {
    x: self.player.position.x, 
    y: self.player.position.y, 
    width: self.player.size.width, 
    height: self.player.size.height,
  }

  if (giftData.x < playerData.x + playerData.width &&
    giftData.x + giftData.width > playerData.x &&
    giftData.y < playerData.y + playerData.height &&
    giftData.height + giftData.y > playerData.y) {
     console.log("PUTAIN"); 
 }



}

Game.prototype.implementCheckCollision = function () {
  var self = this;

  self.enemy.checkCollision(); 
  

};


Game.prototype.clearCanvas = function () {
  var self = this;
  self.ctx.clearRect(0, 0, self.size.width, self.size.height);
};

Game.prototype.draw = function () {
  var self = this;

  self.enemy.draw();
  self.player.draw();
  self.gift.draw();
  

};

Game.prototype.update = function () {
  var self = this;

  self.enemy.move()
  // self.player.move();


};


Game.prototype.doFrame = function () {
  var self = this;

  // self.checkIfEnded();
  self.giftCollision();
  self.implementCheckCollision();
  self.clearCanvas();
  self.draw();
  self.update();
  
 
  
  window.requestAnimationFrame(function() {
    self.doFrame();
  });


  
};



