"use strict";

function Game(ctx, canvas, theEnd) {
  this.ctx = ctx;
  this.size = {
    width: canvas.width, 
    height: canvas.height, 
  };

  this.player = null; 

  this.callback = theEnd; 
  this.isEnded = false; 
  this.enemyArray = [];
  this.giftArray = []; 
  this.counterEnemy = 0; 
  this.counterGift = 0; 
  this.giftPowerArray = ['smaller', 'bigger']; 
  this.start();

};

Game.prototype.addEnemy = function () {
  var self = this; 

  self.enemyArray.push(new Enemy(self.ctx));
  console.log(self.enemyArray);
  
} 


Game.prototype.addGift = function () {
  var self = this; 

  var randomPower = self.giftPowerArray[Math.floor(Math.random() * 2)]

  self.giftArray.push(new Gift(randomPower, self.ctx)); 
  console.log(self.giftArray); 
}


Game.prototype.removeGift = function () {
  var self = this; 

  self.giftArray.pop(); 
}


Game.prototype.start = function () {
  var self = this;

  self.player = new Player(self.ctx);  
 
  self.doFrame();
};


// COLLISION WORKING FOR ADDING GIFT OR ENNEMY 

Game.prototype.playerCollisionFINAL = function (item) {

  var self = this;

  var enemyData = {
    x: item.x, 
    y: item.y, 
    width: item.size.width, 
    height: item.size.height,

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


Game.prototype.giftCollisionFINAL = function (item) {
  var self = this;

  var giftData = {
    x: item.position.x, 
    y: item.position.y, 
    width: item.size.width, 
    height: item.size.height,

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
       if (item.name === 'smaller') {
        self.player.smallerPowerGift();

        setTimeout(function() {
          self.player.normalPlayer();
        }, 5000); 

       } else if (item.name === 'bigger') {
        self.player.biggerPowerGift();

        setTimeout(function() {
          self.player.normalPlayer();
        }, 5000);  
        
       }; 
       
      
      }
      giftPower();
 }


}

// END OF THE COLLISION FUNCTIONS



Game.prototype.clearCanvas = function () {
  var self = this;
  self.ctx.clearRect(0, 0, self.size.width, self.size.height);
};

Game.prototype.draw = function () {
  var self = this;

  self.player.draw();
};

Game.prototype.update = function () {
  var self = this;

};


Game.prototype.doFrame = function () {
  var self = this;
  self.counterEnemy++; 
  self.counterGift++; 


  self.clearCanvas();
  self.draw();


  // ADDING ENEMY 
  
  if (self.counterEnemy === 10) {
    self.addEnemy()
    self.counterEnemy = 0; 
  }

  self.enemyArray.forEach(function(item) {
    item.draw();
    item.move(); 
    item.checkCollision();
    self.playerCollisionFINAL(item); 
  })
 
  // ADDING AND REMOVING GIFTS 

  if (self.counterGift === 100) {
    self.addGift();
    self.counterGift = 101;
  } else if ( self.counterGift === 400) {
    self.removeGift();
    self.counterGift = 0; 
  }

  self.giftArray.forEach(function(item) {
    item.draw();
    self.giftCollisionFINAL(item); 
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



