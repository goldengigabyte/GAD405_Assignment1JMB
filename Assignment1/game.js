//variable soup
let count = 0; //loop count
let flags = false; //flags variable for when user clicks
let fresh = false; //the variable used for starting a fresh variable
let locX = width/2;
let locY = height/2;
let x = mouseX;
let y = height/2;
let r;
let g;
let b;
let diffY = 9.8;
let diffX = width/9;
let fR = 60;
let st_col = 127;

function setup(){
  font = loadFont('assets/SourceSansPro-Regular.otf');
  background(127);
  let canvas = createCanvas(600, 600);
  canvas.parent('Holder');
  frameRate(fR);
  textFont(font);
  textSize(diffX);
  textAlign(CENTER, CENTER);
}
function draw() {
  count++
  fill(255);
  rectMode(CENTER);
  strokeWeight(1);
  //select between the different screens
  //namely the starting screen, intermediate and final screens
  if (flags == true){
    //text changes to thanks and starts falling
    text('Thanks', x, y);
    y = y + diffY;
    fill(255)
    text('Thanks', x, y);
    //a call to fresh function after 24 seconds
    setinterval(fresh(),24000);
    //an if to reset the y and diffY variables
    if(y > height){
      y = 0;
    }else if(diffY>height){
      diffY = 9.8;
    }
    //increment diffY by 9.8 every second
    if(count>fR){
      diffY = diffY + 9.8;
      count = 0;
    }
  }else if(fresh == true){
    background()
  }else{
    background(st_col);
    text('Click here',width/2, height/2);
    if (st_col < 255){
      gradShift(true);
    }else if(st_col > 255){
      gradShift(false);
    }
  }
  if(count>fR){
    count = 0;
  }
}

function mousePressed(){
  flags = true;
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    y--;
  }else if(keyCode === DOWN_ARROW){
    g = g + 15;
  }else if(keyCode === LEFT_ARROW){
    r = r +15;
  }else if(keyCode === RIGHT_ARROW){
    b = b + 15;
  }else if (key == 82){
    clear();
    fresh = false;
    flags = false;
    count = 0;
    y = 0;
  }
}

function fresh(){
  clear();
  fresh = true;
}

function gradShift(fig){
  if (fig === true){
    st_col = st_col + 21;
  }else if(fig === false){
    st_col = st_col - 21;
  }
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function pasteboard(){

    st_col = st_col + 21;

    st_col = st_col - 21;
}
