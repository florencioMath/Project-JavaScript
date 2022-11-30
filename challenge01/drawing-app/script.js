const canvas = document.getElementById("canvas");
const colorEl = document.getElementById("color");
const btnDecrease = document.getElementById("decrease");
const btnIncrease = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const clearEl = document.getElementById("clear");

const contextCanvas = canvas.getContext("2d");
let size = 5;
let isPressed = false;
colorEl.value = "#000000";
let color = colorEl.value;
let x = 0;
let y = 0;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

document.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = 0;
  y = 0;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  contextCanvas.beginPath();
  contextCanvas.arc(x, y, size, 0, Math.PI * 2);
  contextCanvas.fillStyle = color;
  contextCanvas.fill();
}

function drawLine(x1, y1, x2, y2) {
  contextCanvas.beginPath();
  contextCanvas.moveTo(x1, y1);
  contextCanvas.lineTo(x2, y2);
  contextCanvas.strokeStyle = color;
  contextCanvas.lineWidth = size * 2;
  contextCanvas.stroke();
}

function updateSize() {
  sizeEl.innerText = size;
}

btnIncrease.addEventListener("click", () => {
  size += 5;
  if (size > 50) size = 50;

  updateSize();
});

btnDecrease.addEventListener("click", () => {
  size -= 5;
  if (size < 5) size = 5;

  updateSize();
});

colorEl.addEventListener("change", (e) => (color = e.target.value));

clearEl.addEventListener("click", () =>
  contextCanvas.clearRect(0, 0, canvas.width, canvas.height)
);

function redraw() {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
}

window.addEventListener("resize", redraw);

redraw();
