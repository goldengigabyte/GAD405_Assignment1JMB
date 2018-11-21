  let count = 0;
  function setup(){
    font = loadFont('assets/SourceSansPro-Regular.otf');
    let canvas = createCanvas(300, 300);
    canvas.parent
    ('Holder');
    fR=60;
    frameRate(fR);
    //x = mouseX;
    y = height/2;
    diffY = 9.8;
    diffX = width/9;
    textFont(font);
    textSize(diffX);
    textAlign(CENTER, CENTER);
    flags = boolean(0);
  }
  function draw() {
    count++
    background(127);
    fill(255);
    rectMode(CENTER);
    strokeWeight(1);
    if (flags == boolean(1)){
      y = y + diffY;
      text('Thanks', mouseX, y);
      //var q = setInterval(newStage,20420);
      if(y > height){
        y = 0;
      }else if(diffY>height){
        diffY = 9.8;
      }
      if(count>fR){
        diffY = diffY + 9.8;
        count = 0;
        if(diffY> height){
          diffY = diffY/2;
        }
      }
    } else {
      text('Click here',width/2, height/2);
      if(count>fR){
        count = 0;
      }
    }
  }
  function mousePressed(){
    flags = boolean(1);
  }
  function newStage(){

  }


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function pasteboard(){

}
