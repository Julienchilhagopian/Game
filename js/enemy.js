"use strict";


function Enemy (ctx) {
  this.ctx = ctx; 

  this.position = {
    x: Math.floor(Math.random() * canvas.width),
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
  
  self.ctx.fillStyle = "red";
  self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.width);

  // var endAngle = Math.PI*2; 
  // self.ctx.arc(self.position.x, self.position.y, self.size.radius, 0, endAngle, true);
  // self.ctx.stroke();

 


};


Enemy.prototype.move = function () {
  var self = this;
    
  self.position.x += self.speed.x;
  self.position.y -= self.speed.y;
}

// Enemy.prototype.nextOne = function () {
//   var self = this;
//   self.speed.x = 0.20; 
// }

Enemy.prototype.checkCollision = function () {
  var self = this;
  if (self.position.y <= 0 ){
    self.speed.y *= -1;
  } 
  else if (self.position.y + self.size.height >= canvas.height) {
    self.speed.y = -self.speed.y
  } 
  else if (self.position.x <= 0) {
    self.speed.x *= -1; 
  }  
  else if (self.position.x + self.size.width >= canvas.width) {
    self.speed.x = -self.speed.x;
  }
  
}; 

