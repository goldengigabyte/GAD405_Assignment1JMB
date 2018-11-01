var res = 25;var mini = res/2;var micro = mini/2;
function setup(){
  createCanvas(500,500);
  frameRate(5);}
function draw() {
  strokeWeight(2);let r = int(random(255));let g = int(random(255));let b = int(random(255));stroke(r,g,b);
//main grid of swuares with mini squares
  for (let i = 0; i<width/res; i++){
    for (let j = 0; j<height/res; j++){
      {let r = int(random(255));let b = int(random(255));let g = int(random(255));
        fill(r, g, b);
        rect(res*i, res*j, res, res);}
      {let r = int(random(255));let b = int(random(255));let g = int(random(255));
        fill(r, g, b);
        rect(res*i+micro, res*j+micro, mini, mini);}}}}
