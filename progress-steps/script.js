const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const buttonAnterior = document.getElementById("anterior");
const buttonProximo = document.getElementById("proximo");

let currentActive = 1;

buttonProximo.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  changeActive();
});

buttonAnterior.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  changeActive();
});

function changeActive() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 60 + "%";

  if (currentActive === 1) {
    buttonAnterior.disabled = true;
  } else if (currentActive === circles.length) {
    buttonProximo.disabled = true;
  } else {
    buttonAnterior.disabled = false;
    buttonProximo.disabled = false;
  }
}
