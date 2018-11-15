
function setup(){
  //the canvas will be the size of the window with this option selected
  createCanvas(500, 500);
  //frameRate(24);
  res = 10
}
function draw() {
  background(0);
  strokeWeight(2);
  stroke(255);
  gridCol();
}
function gridCol(){
  //fill()
  for (let i = 0; i < res; i++){
    for (let j = 0; j< res; i++){
      rect(j*res, i*res, res, res);
    }
  }
}
//a function to change the canvas size whaen the window is resized
//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}
