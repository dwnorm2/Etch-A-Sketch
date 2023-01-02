const gridContainer = document.querySelector(".grid-container");

let row;
let square;
let resolution = 50;

function getPixelSize() {
  return 500 / resolution;
}

const pixelSize = getPixelSize();

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

function random_bg_color() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return "rgb(" + x + "," + y + "," + z + ")";
}

const randomColor = random_bg_color();

document.querySelectorAll(".square").forEach((square) => {
  square.setAttribute("style", `width:${pixelSize}px`);
  square.setAttribute("style", `height:${pixelSize}px`);

  function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
  }

  const randomColor = random_bg_color();

  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = randomColor;
    // square.style.backgroundColor = "black";
  });
});
