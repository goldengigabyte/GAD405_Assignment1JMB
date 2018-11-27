//variable soup
let flags = false; //flags variable for when user clicks
let r;
let g;
let b;
let diffY = 9.8;
let fR = 60;
let st_col = 127;
let nY;
let dcel;

function setup(){
  x = mouseX;
  font = loadFont('assets/SourceSansPro-Regular.otf');
  background(127);
  let canvas = createCanvas(600, 600);
  diffX = width/9;
  y = height/2;
  //canvas.parent('Holder');
  frameRate(fR);
  textFont(font);
  textSize(diffX);
  textAlign(CENTER, CENTER);
  st_col = 127
}
function draw() {
  fill(255);
  rectMode(CENTER);
  strokeWeight(1);
  //select between the different screens
  //namely the starting screen, and final screens
  if (flags == true){
    //text changes to thanks and starts falling
    background(r, g, b, 63.5);
    fill(255, 127);
    text('Thanks', mouseX, nY);
    y = y + diffY;
    fill(255);
    text('Thanks', mouseX, y);
    nY = y;
    //an if to reset the y and diffY variables
    if(y > height-diffX){
      diffY = diffY - (diffY*1.3);
    }
    //increment diffY by 9.8 every second
    diffY = diffY + 0.1633;
  }else{
    background(r, g, b);
    text('Click here',width/2, height/2);
  }
  if(r >= 255){
    r = 0;
  } else if(g >= 255){
    g = 0;
  } else if(b >= 255){
    b = 0;
  }
}

function mousePressed(){
  flags = true;
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    y--;
  }else if(keyCode === DOWN_ARROW){
    g = g + 25;
  }else if(keyCode === LEFT_ARROW){
    r = r +25;
  }else if(keyCode === RIGHT_ARROW){
    b = b + 25;
  }
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function pasteboard(){

}
