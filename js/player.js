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

  this.mouseCorrectionX = 30; 
  this.mouseCorrectionY = 40;

  this.image = new Image();
  this.image.src = 'img/FINAL-V2.png'
}

  Player.prototype.draw = function () {
    var self = this;

  
    
    
    self.ctx.strokeStyle = 'rgba(128, 128, 128, 0.61)';
    self.ctx.strokeRect(self.position.x, self.position.y, self.size.width, self.size.height);
   
    self.ctx.drawImage(self.image, self.position.x, self.position.y, self.size.width, self.size.height); 
    // self.ctx.fillStyle = "blue";
    // self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height); 

    
  }

  // Movements 

  // Player.prototype.moveUp = function () {
  //   var self = this;
  //   self.position.y -= 30;
  // }
  
  // Player.prototype.moveDown = function () {
  //   var self = this;
  //   self.position.y += 30;
  // }

  // Player.prototype.moveLeft = function () {
  //   var self = this;
  //   self.position.x -= 30;
  // }

  // Player.prototype.moveRight = function () {
  //   var self = this;
  //   self.position.x += 30;
  // }


  // Gift powers

  Player.prototype.smallerPowerGift = function () {
    var self = this;

    self.size.width = 15;
    self.size.height = 15;

    self.mouseCorrectionX = 20;
    self.mouseCorrectionY = 10;

  };

  Player.prototype.biggerPowerGift = function () {
    var self = this;
  
    self.size.width = 125;
    self.size.height = 175;

    self.mouseCorrectionX = 60;
    self.mouseCorrectionY = 100;

  };

  Player.prototype.normalPlayer = function () {
    var self = this;

    self.size.width = 60;
    self.size.height = 80;

    self.mouseCorrectionX = 30;
    self.mouseCorrectionY = 40;

  };



  
  Player.prototype.mouseControle = function() {
  var self = this;
    function showMouse (event) {
     self.position.x = event.clientX - self.mouseCorrectionX; 
     self.position.y = event.clientY - self.mouseCorrectionY;
   
  }

  return showMouse(event);

  };


