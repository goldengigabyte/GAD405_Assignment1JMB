function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let file = "";
let grid;
let cols;
let rows;
let res = 4;

function preload(file){
  let img = loadImage(file);
}

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
      stroke(0);
      strokeWeight(1)
      fill(255);
      rect(x, y, res-1, res-1);
      }
    }
  }
  let next = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let sum = 0;
      let state = grid[i][j];
    }
  }
  grid = next;
}
