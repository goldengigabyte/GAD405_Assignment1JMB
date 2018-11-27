
function setup(){
  //the canvas will be the size of the window with this option selected
  createCanvas(windowWidth, windowHeight);
  //frameRate(24);
}
function draw() {
  strokeWeight(2);
  stroke(255);
  background(0);
  let mX = int(map(mouseX,0, windowWidth, 0, 256));
  let mY = int(map(mouseY,0, windowHeight, 0, 256));
  let mXI = int(map(mouseX,0, windowWidth, 255, -1));
  let mYI = int(map(mouseY,0, windowHeight, 255, -1));
  topRect(mX, 255,0, 0, 0, 0);
  topRect(mY, 0, 255, 0, 2, 0);
  topRect(mXI, 255, 255, 0, 0, 2);
  topRect(mYI, 0, 255, 255, 2, 2);
}
//a function to create the 4 top rects() and assign the opacity
function topRect(a, r, g, b, offX, offY){
  fill(r, g, b, a);
  //logic to avoid a divide by 0 "issue" (moving the rectangles to )
  if(offX == 0 || offY == 0){
    //more logic!
    if(offX == 0 && offY == 0){
      rect(0, 0, width/2, height/2);
      //Do i have a problem with math? yes.
    }else if(offX == 0 && offY != 0){
      rect(0, height/offY, width/2, height/2);
    }else if(offX != 0 && offY == 0){
      rect(width/offX, 0, width/2, height/2);
    }
  } else {
    rect(width/offX, height/offY, width/2, height/2);
  }

}
//a function to change the canvas size whaen the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
