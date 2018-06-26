"use strict";

function Game(ctx, canvas, theEnd) {
  this.ctx = ctx;
  this.size = {
    width: canvas.width, 
    height: canvas.height, 
  };


this.player = null; 
this.enemy = null; 
this.gift = null; 
this.callback = theEnd; 
this.isEnded = false; 
this.enemyArray = []; 
this.counter = 0; 
this.start();



};

Game.prototype.addEnemy = function () {
  var self = this; 

  self.enemyArray.push(new Enemy(self.ctx));
  console.log(self.enemyArray);
  
 
} 


Game.prototype.start = function () {
  var self = this;

  
  self.enemy = new Enemy(self.ctx);
  self.player = new Player(self.ctx);  
  self.gift = new Gift('smaller', self.ctx); 

 

  self.doFrame();
};


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

     var giftPower = function (){
       console.log("putain")
       self.player.smallerPower();
      
      }
      giftPower();
 }


}

Game.prototype.playerCollisionEnemy = function () {

  var self = this;

  var enemyData = {
    x: self.enemy.x, 
    y: self.enemy.y, 
    width: self.enemy.size.width, 
    height: self.enemy.size.height,

  };

  var playerData = {
    x: self.player.position.x, 
    y: self.player.position.y, 
    width: self.player.size.width, 
    height: self.player.size.height,
  }

  if (enemyData.x < playerData.x + playerData.width &&
    enemyData.x + enemyData.width > playerData.x &&
    enemyData.y < playerData.y + playerData.height &&
    enemyData.height + enemyData.y > playerData.y) {
      console.log("ok"); 
      this.isEnded = true; 
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
  self.counter++; 

  // self.checkIfEnded();
  
  self.playerCollisionEnemy();
  self.giftCollision();
  // self.collisionDetector(self.gift, self.player);
  self.implementCheckCollision();
  self.clearCanvas();
  self.update();
  self.draw();

  if (self.counter === 150) {
    self.addEnemy()
    self.counter = 0; 
  }

  self.enemyArray.forEach(function(item) {
    item.draw();
    item.move(); 
    item.checkCollision();
  })
 
  
  window.requestAnimationFrame(function() {
    if (!self.isEnded) {
      self.doFrame();
    }
    else if (self.isEnded) {
      self.callback();
    }

  });


  
};



