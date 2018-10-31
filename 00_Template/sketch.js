function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols;
let rows;
let res = 4;

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
      if (grid[i][j] == 1){
        stroke(0);
        fill(0);
        rect(x, y, res-1, res-1);
      }
    }
  }
  let next = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let sum = 0;
      let state = grid[i][j];
      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)){
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }

    }
  }
  grid = next;
}