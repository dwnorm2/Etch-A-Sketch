const gridContainer = document.querySelector(".grid-container");

let row;
let square;
let resolution = 16;

//change res
function changeRes() {
  gridContainer.innerHTML = "";
  resolution = document.getElementById("myInput").value;
  if (resolution < 2) {
    resolution = 2;
  } else if (resolution > 100) {
    resolution = 100;
  }
  getPixelSize();
  createGrid();
  squareCustomization();
}

//caluclate pixel size
function getPixelSize() {
  return 400 / resolution;
}

//grid creation
function createGrid() {
  for (var i = 0; i < resolution; i++) {
    row = document.createElement("div");
    row.classList.add("square-row");
    gridContainer.appendChild(row);

    for (var x = 0; x < resolution; x++) {
      square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
  }
}

//random color
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  return "rgb(" + x + "," + y + "," + z + ")";
}

//square customization
function squareCustomization() {
  let pixelSize = getPixelSize();
  document.querySelectorAll(".square").forEach((square) => {
    square.setAttribute("style", `width:${pixelSize}px`);
    square.setAttribute("style", `height:${pixelSize}px`);

    square.addEventListener("mouseover", () => {
      let randomColor = random_bg_color();
      square.style.backgroundColor = randomColor;
      // square.style.backgroundColor = "black";
    });
  });
}

createGrid();
squareCustomization();
