let amountOfRows;
const mainSquare = document.getElementById("main-square");

function changeValue(amountOfRows) {
  const sliderObject = document.getElementById("size");

  sliderObject.nodeValue = amountOfRows;

  changeGridValue(amountOfRows);
}

function changeGridValue(amountOfRows) {
  removePreviousRows();

  for (let index = 0; index < amountOfRows ** 2; index++) {
    const div = document.createElement("div");

    document.getElementById("main-square").appendChild(div);

    div.setAttribute("class", "div1");
    div.setAttribute("onmouseover", "paintItBlack(this)");
  }

  document.getElementById(
    "main-square"
  ).style.gridTemplateColumns = `repeat(${amountOfRows}, auto)`;
  document.getElementById(
    "main-square"
  ).style.gridTemplateRows = `repeat(${amountOfRows}, auto)`;
}

function removePreviousRows() {
  while (mainSquare.hasChildNodes()) {
    mainSquare.removeChild(mainSquare.firstChild);
  }
}

function paintItBlack(x) {
  x.style.backgroundColor = `rgb(${randonRGBColor()},${randonRGBColor()},${randonRGBColor()}) `;
}

function randonRGBColor() {
  return Math.floor(Math.random() * 255);
}
