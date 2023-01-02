const gridContainer = document.querySelector(".grid-container");

let row;
let square;
let resolution = 16;

// function getHeight() {
//   return;
// }

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

document.querySelectorAll(".square").forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  });
});
