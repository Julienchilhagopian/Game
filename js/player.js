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
    x: 15, 
    y: 15, 
  }

 this.radius = (this.size.width / 2);

}

  Player.prototype.draw = function () {
    var self = this;
    self.ctx.fillStyle = "blue";
    self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height); 
  }

  Player.prototype.moveUp = function () {
    var self = this;
    self.position.y -= 20;
  }
  
  Player.prototype.moveDown = function () {
    var self = this;
    self.position.y += 20;
  }

  Player.prototype.moveLeft = function () {
    var self = this;
    self.position.x -= 20;
  }

  Player.prototype.moveRight = function () {
    var self = this;
    self.position.x += 20;
  }


  Player.prototype.smallerPower = function () {
    var self = this;

    self.size.width = 5;
    self.size.height = 5;

  }

  Player.prototype.biggerPower = function () {
    var self = this;
  
    self.radius = 50;
    self.size.width = 75;
    self.size.height = 75;

  }








