const gridContainer = document.querySelector(".grid-container");
const eraseAllButton = document.querySelector(".erase-all");
const blackButton = document.getElementById("black");
const rainbowButton = document.getElementById("rainbow");
const eraseButton = document.getElementById("erase");
// const gradientButton = document.getElementById("gradient");

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

// function lightenDarkenColor(col, amt) {
//   var usePound = false;

//   if (col[0] == "#") {
//     col = col.slice(1);
//     usePound = true;
//   }

//   var num = parseInt(col, 16);

//   var r = (num >> 16) + amt;

//   if (r > 255) r = 255;
//   else if (r < 0) r = 0;

//   var b = ((num >> 8) & 0x00ff) + amt;

//   if (b > 255) b = 255;
//   else if (b < 0) b = 0;

//   var g = (num & 0x0000ff) + amt;

//   if (g > 255) g = 255;
//   else if (g < 0) g = 0;

//   return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
// }

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
  // doesn't work. just darkens once
  // gradientButton.addEventListener("click", () => {
  //   document.querySelectorAll(".square").forEach((square) => {
  //     square.addEventListener("mouseover", () => {
  //       let darkerColor = lightenDarkenColor("#FFFFFF", -20);
  //       square.style.backgroundColor = darkerColor;
  //     });
  //   });
  // });

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
