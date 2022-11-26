const fill = document.querySelector(".fill");
const boxes = document.querySelectorAll(".box");

fill.addEventListener("dragstart", dragStart);

boxes.forEach((box) => {
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", drop);
});

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
}

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add(".dragOver");
}
function dragOver(e) {
  e.preventDefault();
  e.target.classList.add("dragOver");
}
function dragLeave(e) {
  e.target.classList.remove("dragOver");
}
function drop(e) {
  e.target.classList.remove("dragOver");
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);

  e.target.appendChild(draggable);
  draggable.classList.remove("hide");
}
