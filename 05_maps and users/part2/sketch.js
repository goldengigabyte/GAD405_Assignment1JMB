res = 250;
function setup(){
  createCanvas(500, 500);
  //frameRate(24);
  console.log('setup');

}
function draw() {
  console.log('initiating...');
  strokeWeight(2);
  stroke(0);
  x = map(mouseX, 0, width, 0, 10);
  y = map(mouseY, 0, height, 0, 10);
  opaX = map(mouseX, 0, width, 0, 255);
  opaY = map(mouseY, 0, height, 0, 255);
  avgOpa = int(opaX)*int(opaY)/2;
  console.log('variables set');
  background(0);
  console.log('background set');
  for (let i = 0; i < res; i++){
    for (let j = 0; j< res; i++){

      rect(x*j, y*i, res, res);
      console.log('loop success!');
    }
  }
}
// a quarantine function for script snippets when debugging
function quar(){
  console.log('loop starting');
  if (j==int(x)&&i==int(y)){
    fill(255,0,0);
  }else if(j==int(x)){
    fill(0, 0, 255, opaX);
  }else if(i==int(y)){
    fill(0, 0, 255, opaY);
  }else{
    fill(255, 127.5, 0, avgOpa);
  }
}
