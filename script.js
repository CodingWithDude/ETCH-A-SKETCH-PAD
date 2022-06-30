let color = "black";

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  // Update sliderOutput
  let sliderOutput = document.querySelector(".sliderOutput");
  sliderOutput.innerHTML = size + " x " + size;

  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.addEventListener("mousedown", colorSquare);
    square.style.backgroundColor = "white";
    square.style.border = "1px solid lightgrey";
    board.insertAdjacentElement("beforeend", square);
  }
}

function deleteSquares() {}

function changeSize(input) {
  populateBoard(input);
}

function colorSquare(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (color === "rainbow") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

const colorPicker = document.querySelector(".colorPicker");
colorPicker.oninput = (e) => changeColor(e.target.value);

function changeColor(choice) {
  color = choice;
}

function clearBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

// Default board
populateBoard(16);
