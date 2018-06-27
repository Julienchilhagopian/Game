"use strict";


function Player(ctx) {
  this.ctx  = ctx; 

  this.position = {
    x: 60, 
    y: 40, 

  }

  this.size = {
    width: 30, 
    height: 30, 
  }

  this.speed = {
    x: 0, 
    y: 0, 
  }

  this.image = new Image(60, 45)
  this.image.src = 'https://banner2.kisspng.com/20180207/fyq/kisspng-deviantart-flame-icon-golden-yellow-fireball-5a7bb402288d11.6521773815180564501661.jpg'

}

  Player.prototype.draw = function () {
    var self = this;

 




    self.ctx.fillStyle = "blue";
    // self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height); 
    self.ctx.drawImage(self.image, self.position.x, self.position.y, self.size.width, self.size.height)
  }

  // Movements 

  Player.prototype.moveUp = function () {
    var self = this;
    self.position.y -= 30;
  }
  
  Player.prototype.moveDown = function () {
    var self = this;
    self.position.y += 30;
  }

  Player.prototype.moveLeft = function () {
    var self = this;
    self.position.x -= 30;
  }

  Player.prototype.moveRight = function () {
    var self = this;
    self.position.x += 30;
  }


  // Gift powers

  Player.prototype.smallerPowerGift = function () {
    var self = this;

    self.size.width = 5;
    self.size.height = 5;

  };

  Player.prototype.biggerPowerGift = function () {
    var self = this;
  
    self.size.width = 100;
    self.size.height = 100;

  };

  Player.prototype.normalPlayer = function () {
    var self = this;

    self.size.width = 30;
    self.size.height = 30;

  };







