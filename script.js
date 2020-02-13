function racer(name, speed, handling) {
  var that = this;
  this.name = name;
  this.speed = speed;
  this.handling = handling;
  this.element = document.createElement("div");
  this.element.classList.add("divstyle");
  this.element.addEventListener("click", function(){that.changediv();})
  this.element.innerHTML = "Name: "+this.name+"<br/>"+ "Speed: "+this.speed+"<br/>"+ "Handling: "+this.handling;
  document.body.appendChild(this.element);
}

racer.prototype.changediv = function(){
  if (this.handling==1){
    this.element.style.outlineColor= "#FF0000";
    this.speed = this.speed+5;
  this.element.innerHTML = "Name: "+this.name+"<br/>"+ "Speed: "+this.speed+"<br/>"+ "Handling: "+this.handling;
  }else{
  this.speed = this.speed+5;
  this.handling = this.handling-2;
  this.element.innerHTML = "Name: "+this.name+"<br/>"+ "Speed: "+this.speed+"<br/>"+ "Handling: "+this.handling;
  if (this.handling==1)
  {
    this.element.style.outlineColor= "#FF0000";
  }
  }
 }
var racer1 = new racer("Alex", 60, 11);
var racer2 = new racer("John", 40, 19);
var racer3 = new racer("Sam", 50, 17);
