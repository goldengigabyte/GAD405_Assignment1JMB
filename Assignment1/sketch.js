let count = 0
function setup(){
  font = loadFont('assets/SourceSansPro-Regular.otf');

  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  fR=frameRate();
  x = width/2;
  y = height/2;
  diffY = 9.8;
  diffX = width/9;
  textFont(font);
  textSize(diffX);
  textAlign(CENTER, CENTER);
}
function draw() {
  count++
  background(25);
  fill(255);
  rectMode(CENTER);
  strokeWeight(1);
  y = y + diffY;
  rect(x, y, width/6, height/6);
  if(y > height){
    y = 0;
  }
  if(count>fR){
    diffY = diffY + 9.8;
    count = 0;
    if(diffY> height){
      diffY = diffY/2;
    }
  }

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
