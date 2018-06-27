function Gift(name, ctx) {
  this.ctx = ctx; 

  this.name = name


  this.position = {
    x: Math.floor(Math.random() * canvas.width), 
    y: Math.floor(Math.random() * canvas.height), 

  }

  this.size = {
    width: 40, 
    height: 40, 
  }

  this.image = new Image()
  this.image.src = 'https://vignette.wikia.nocookie.net/mario/images/9/9c/Bo%C3%AEte%C3%A0objetsMK8.png/revision/latest?cb=20170527080655&path-prefix=fr'
 
}



Gift.prototype.draw = function () {
  var self = this;
  self.ctx.fillStyle = "green";
  self.ctx.drawImage(self.image, self.position.x, self.position.y, self.size.width, self.size.height)
  
}