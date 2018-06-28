"use strict";


function Player(ctx, canvas) {
  this.ctx  = ctx; 

  this.position = {
    x: 60, 
    y: 40, 

  }

  this.size = {
    width: 60, 
    height: 80, 
  }

  this.speed = {
    x: 0, 
    y: 0, 
  }

  this.canvas = document.getElementById("canvas"); 
  this.canvasCtx = canvas.getContext("2d");

  this.mousePositionX = 0; 
  this.mousePositionY = 0;

  this.image = new Image()
  this.image.src = 'img/FINAL-V2.png'
}

  Player.prototype.draw = function () {
    var self = this;

  
    
    
   
    self.ctx.drawImage(self.image, self.position.x, self.position.y, self.size.width, self.size.height); 

    // self.ctx.fillStyle = "blue";
    // self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height); 


    
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

    self.size.width = 15;
    self.size.height = 15;

  };

  Player.prototype.biggerPowerGift = function () {
    var self = this;
  
    self.size.width = 180;
    self.size.height = 250;

  };

  Player.prototype.normalPlayer = function () {
    var self = this;

    self.size.width = 60;
    self.size.height = 80;

  };







