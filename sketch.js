let webcam;
let ballSystem = [];
let mirror;

function setup() {
  mirror = loadImage ("images/mirror.png");
  createCanvas(990, 540);
  pixelDensity (1);
  webcam = createCapture (VIDEO);
  webcam.size (990, 540);
  webcam.hide ();
  for (x = 0; x < 300 ; x++){
    rx = random (30, width - 30);
    ry = random (15, height -15);
    rr = random (5, 20);
    ballSystem [x] = new Ball (rx, ry, rr);
  }
}

function draw() {
  for (x = 0; x < ballSystem.length; x++){
    ballSystem[x].move ();
    ballSystem[x].show ();
    ballSystem[x].checkEdges();
    background (mirror, [255]);
  }
}

class Ball {
  constructor (x,y,r){
    this.x = x;
    this.y = y
    this.r =r;
  }

move (){
  this.x = this.x + random (-8,8);
  this.y = this.y + random (-8,8);
}

show (){
  let pixelColour = webcam.get (this.x,this.y);
  fill (pixelColour[0], pixelColour[1], pixelColour[2],200);
  noStroke ();
  ellipse (this.x, this.y, this.r);
}

checkEdges (){
  if (this.x <15) {
    this.x = 15;
  } else if (this.x > width -15){
this.x = width -15;
}
if (this.y < 15){
  this.y = 15;
} else if (this.y > height - 15){
  this.y = height - 15;
}
}
}
