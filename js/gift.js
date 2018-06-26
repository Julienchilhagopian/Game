function Gift(name, ctx) {
  this.ctx = ctx; 

  this.name = name


  this.position = {
    x: Math.floor(Math.random() * canvas.width), 
    y: Math.floor(Math.random() * canvas.height), 

  }

  this.size = {
    width: 15, 
    height: 15, 
  }




}

Gift.prototype.checkName = function () {
  var self = this;

  if(self.name = 'smaller') {
    return true; 
  }

}

Gift.prototype.draw = function () {
  var self = this;
  self.ctx.fillStyle = "green";
  self.ctx.fillRect(self.position.x, self.position.y, self.size.width, self.size.height);
  
}