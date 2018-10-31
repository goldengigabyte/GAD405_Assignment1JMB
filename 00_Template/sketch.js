function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}
let arry = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 0, 255, 0, 255, 255, 0, 0, 255, 255, 255, 0, 255, 0,  255, 255, 0, 0, 0, 255, 255, 0, 255, 0, 255, 255, 0, 255, 0, 255, 255, 0, 255, 0, 255, 255, 0, 255, 0, 255, 255, 0, 255, 255, 255, 255, 0, 255, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
let grid;
let cols;
let rows;
let res = 40;

function setup() {
  createCanvas(400,400);
  cols = width / res;
  rows = height / res;
  grid = make2DArray(cols, rows);
}

function draw() {
  background(255);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * res;
      let y = j * res;
      if (q > 100) {
        q = 0;
      }
      filcol = arry[q]
      stroke(0);
      strokeWeight(1);
      fill(filcol);
      rect(x, y, res-1, res-1);
      q++;
      }
    }
  }
