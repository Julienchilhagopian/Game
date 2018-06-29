"use strict";


function Enemy (ctx) {
  this.ctx = ctx; 


  var randomX = Math.random() * ((0 - (-1)) + 1) + (-1);

  this.speedx = Math.round(randomX * 100) / 100;
  this.speedy = 0.85;
 

 this.x = canvas.width / 2;
 this.y = canvas.height * 0.6;

  this.size = {
      width: 30,
      height: 30,
  }; 



 this.image = new Image()
 this.image.src = 'img/projectile_fireball.png'


};


Enemy.prototype.draw = function () {
  var self = this; 
  
  // keeping this just in case.
  // self.ctx.fillStyle = "red";
  // self.ctx.fillRect(self.x, self.y, self.size.width, self.size.width);

  self.ctx.drawImage(self.image, self.x, self.y, self.size.width, self.size.height);

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


