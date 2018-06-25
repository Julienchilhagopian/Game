"use strict";


function Enemy (ctx) {
  this.ctx = ctx; 


  this.speedx =2
  this.speedy = -2

 this.x = Math.floor(Math.random() * canvas.width);
 this.y = 10;


};


Enemy.prototype.draw = function () {
  var self = this; 
  
  // self.ctx.fillStyle = "red";
  // self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.width);


  self.ctx.beginPath();
  self.ctx.arc(self.x, self.y, 10, 0, Math.PI*2);
  self.ctx.fillStyle = "red";
  self.ctx.fill();
  self.ctx.closePath();
  self.x += self.speedx;
  self.y += self.speedy;

};


Enemy.prototype.move = function () {
  var self = this;
    
  // self.position.x += self.speed.x;
  // self.position.y -= self.speed.y;
}

// Enemy.prototype.nextOne = function () {
//   var self = this;
//   self.speed.x = 0.20; 
// }

Enemy.prototype.checkCollision = function () {
  var self = this;
  if (self.y <= 10 ){
    self.speedy *= -1;
  } 
  else if (self.y + 10 >= canvas.height) {
    self.speedy = -self.speedy
  } 
  else if (self.x <= 10) {
    self.speedx *= -1; 
  }  
  else if (self.x + 10 >= canvas.width) {
    self.speedx = -self.speedx;
  }
  
}; 

