"use strict";

function Game(ctx, canvas, theEnd) {
  this.ctx = ctx;
  this.size = {
    width: canvas.width, 
    height: canvas.height, 
  };

  this.player = null; 
  this.canvas = canvas;

  this.callback = theEnd; 
  this.isEnded = false; 
  this.enemyArray = [];
  this.giftArray = []; 
  this.counterEnemy = 0; 
  this.counterGift = 0; 
  this.counterScore = 0;
  this.giftPowerArray = ['smaller', 'bigger', 'speed', 'slow']; 
  this.triggerFastSpeed = false; 
  this.triggerSlowSpeed = false; 
  this.eraseGift = false;
  this.start();
  this.audio = new Audio("sound/FIRE  Fire Sound Effect.mp3"); 

};

Game.prototype.addEnemy = function () {
  var self = this; 

  self.enemyArray.push(new Enemy(self.ctx));
  // console.log(self.enemyArray);
  
} 


Game.prototype.addGift = function () {
  var self = this; 

  var randomPower = self.giftPowerArray[Math.floor(Math.random() * 4)]

  self.giftArray.push(new Gift(randomPower, self.ctx)); 
  // console.log(self.giftArray); 
}


Game.prototype.removeGift = function () {
  var self = this; 

  self.giftArray.pop(); 
}


Game.prototype.start = function () {
  var self = this;

  self.player = new Player(self.ctx, canvas);  
 
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
      // console.log("ok"); 
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
      self.eraseGift = true;

// ADDING THE SPECIAL POWER TO EACH GIFT 

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

       } else if (item.name === 'speed') {
         self.triggerFastSpeed = true; 

         setTimeout(function() {
          self.triggerFastSpeed = false; 
         }, 800);  

      } else if (item.name === 'slow') {
        self.triggerSlowSpeed = true; 

        setTimeout(function() {
         self.triggerSlowSpeed = false; 
        }, 500);  
      }
       
      
      }
      giftPower();
 }


}





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

// SCORE

Game.prototype.score = function () {
  var self = this;

  self.ctx.font = '30px sans-serif';
  self.ctx.fillStyle = 'white'
  self.ctx.fillText('Score: ' + self.counterScore, 1100, 50);
}

// DO FRAME PART 

Game.prototype.doFrame = function () {
  var self = this;
  self.counterEnemy++; 
  self.counterGift++; 
  self.counterScore++;


  self.clearCanvas();
  self.draw();

  self.score();

  // ADDING ENEMY 
  
  if (self.counterEnemy % 30 === 0) {
    self.addEnemy();
  }

  self.enemyArray.forEach(function(item) {
    item.draw();
    item.move();

    // fast speed gift 
    if (self.triggerFastSpeed) {
    item.speedx += 0.5;
    item.speedy += 0.5;
  };

  // slow speed gift 
  if (self.triggerSlowSpeed) {
    item.speedx += 0.01;
    item.speedy -= 0.09;
  };

    item.checkCollision();
    self.playerCollisionFINAL(item); 
    

  })
 
  // ADDING AND REMOVING GIFTS 

  if (self.counterGift === 100) {
    self.addGift();
    self.counterGift = 101;

  } else if (self.eraseGift) {
    self.removeGift();
    self.counterGift = 0; 
    self.eraseGift = false;

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




