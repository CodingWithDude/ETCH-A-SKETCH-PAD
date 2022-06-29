function populateBoard(size) {
  let board = document.querySelector(".board");
  // Remove old squares
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
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", square);
  }
}

function changeSize(input) {
  populateBoard(input);
}

populateBoard(16);
