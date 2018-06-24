"use strict";


function Enemy (ctx) {
  this.ctx = ctx; 

  this.position = {
    x: Math.floor(Math.random() * 200),
    y: 0,
  };
  

  this.size = {
    width: 10,
    height: 10,
  }; 


  this.speed = {
    x: 1.40,
    y: 0.75,
  }; 

};


Enemy.prototype.draw = function () {
  var self = this; 


  self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.width);

  // var endAngle = Math.PI*2; 
  // self.ctx.arc(self.position.x, self.position.y, self.size.radius, 0, endAngle, true);
  // self.ctx.stroke();

  self.ctx.fillStyle = "red";
  self.ctx.fill();

};


Enemy.prototype.move = function () {
  var self = this;
  self.position.x += self.speed.x;
  self.position.y -= self.speed.y;
}

Enemy.prototype.nextOne = function () {
  var self = this;
  self.speed.x = 0.20; 
}
