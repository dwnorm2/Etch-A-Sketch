const gridContainer = document.querySelector(".grid-container");
const eraseAllButton = document.querySelector(".erase-all");
const blackButton = document.getElementById("black");
const rainbowButton = document.getElementById("rainbow");
const eraseButton = document.getElementById("erase");

eraseAllButton.addEventListener("click", () => {
  document.querySelectorAll(".square").forEach((square) => {
    square.style.backgroundColor = "white";
  });
});

let row;
let square;
let resolution = 16;

function changeRes() {
  gridContainer.innerHTML = "";
  resolution = document.getElementById("myInput").value;
  if (resolution < 2) {
    resolution = 2;
  } else if (resolution > 100) {
    resolution = 100;
  }

  createGrid();
  squareSize();
  squareColor();
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

//square size
function squareSize() {
  let pixelSize = getPixelSize();
  document.querySelectorAll(".square").forEach((square) => {
    square.setAttribute("style", `width:${pixelSize}px`);
    square.setAttribute("style", `height:${pixelSize}px`);
  });
}

function squareColor() {
  //idk why this if works? It makes it so blackButton is checked by default
  if ((blackButton.checked = true)) {
    document.querySelectorAll(".square").forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
    });
  }
  blackButton.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
    });
  });

  rainbowButton.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach((square) => {
      square.addEventListener("mouseover", () => {
        //add different options for color buttons
        let randomColor = random_bg_color();
        square.style.backgroundColor = randomColor;
        // square.style.backgroundColor = "black";
      });
    });
  });

  eraseButton.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "white";
      });
    });
  });
}

createGrid();
squareSize();
squareColor();
