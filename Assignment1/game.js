let count = 0;
let flags = false;
let change = false;
let locX = width/2;
let locY = height/2;
let x = mouseX;
let y = height/2;
let diffY = 9.8;
let diffX = width/9;
let fR = 60;
var in = [];
var go;
function setup(){
  font = loadFont('assets/SourceSansPro-Regular.otf');
  background(127);
  let canvas = createCanvas(600, 600);
  canvas.parent('Holder');
  frameRate(fR);
  textFont(font);
  textSize(diffX);
  textAlign(CENTER, CENTER);
  in[0] = createInput();
  
  in[1] = createinput();
}
function draw() {
  count++
  fill(255);
  rectMode(CENTER);
  strokeWeight(1);
  if(change == true){

  } else if (flags == true){
    text('Thanks', x, y);
    y = y + diffY;
    fill(255)
    text('Thanks', x, y);
    var q = setInterval(newStage,22000);
    if(y > height){
      y = 0;
    }else if(diffY>height){
      diffY = 9.8;
    }
    if(count>fR){
      diffY = diffY + 9.8;
      count = 0;
    }
  } else{
    background(127);
    text('Click here',width/2, height/2);
    if(count>fR){
      count = 0;
    }
  }
}
function mousePressed(){
  flags = true;
}
function newStage(){
  change = true;
  y = 0;
  diffY = 9.8;
}
function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
function pasteboard(){

}
