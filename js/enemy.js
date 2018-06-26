"use strict";


function Enemy (ctx) {
  this.ctx = ctx; 


  this.speedx = 0.6;
  this.speedy = 0.85;
 

 this.x = Math.floor(Math.random() * canvas.width);
 this.y = 10;

  this.size = {
      width: 10,
      height: 10,
  }; 

 this.radius = 10;


};


Enemy.prototype.draw = function () {
  var self = this; 
  
  self.ctx.fillStyle = "red";
  self.ctx.fillRect(self.x, self.y, self.size.width, self.size.width);


  // self.ctx.beginPath();
  // self.ctx.arc(self.x, self.y, self.radius, 0, Math.PI*2);
  // self.ctx.fillStyle = "red";
  // self.ctx.fill();
  // self.ctx.closePath();
  // self.x += self.speedx;
  // self.y += self.speedy;

};


Enemy.prototype.move = function () {
  var self = this;
    
  self.x += self.speedx;
  self.y -= self.speedy;

}


Enemy.prototype.checkCollision = function () {
  var self = this;
  if (self.y <= 0 ){
    self.speedy *= -1;
  } 
  else if (self.y + self.size.height >= canvas.height) {
    self.speedy = -self.speedy
  } 
  else if (self.x <= 0) {
    self.speedx *= -1; 
  }  
  else if (self.x + self.size.width >= canvas.width) {
    self.speedx = -self.speedx;
  }
  
}; 


