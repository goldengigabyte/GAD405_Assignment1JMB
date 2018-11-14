
function setup(){
  createCanvas(windowWidth, windowHeight);
  //frameRate(24);
}
function draw() {
  let pick = int(random(2));
  y = int(random(height));
  x = int(random(width));
  noStroke();
  if(pick==0){
    circ();
  }else if(pick==1){
    tangles();
  }
}
function circ(){
  let size = int(random(height/4));
  let r = int(random(255));
  let b = int(random(255));
  let g = int(random(255));
  let a = int(random(255));
  fill(r, g, b, a);
  ellipse(x, y, size);
}
function tangles(){
  let size = height/4;
  let r = int(random(255));
  let b = int(random(255));
  let g = int(random(255));
  let a = int(random(255));
  fill(r, g, b, a);
  rect(x, y, random(size), random(size),5);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
