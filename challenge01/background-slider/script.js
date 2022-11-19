const container = document.getElementById("container");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.getElementById("btnLeft");
const btnRigth = document.getElementById("btnRigth");

let slideActive = 0;

btnLeft.addEventListener("click", () => {
  slideActive--;
  if (slideActive < 0) slideActive = slides.length - 1;

  setActiveSlide();
  setBackground();
});

btnRigth.addEventListener("click", () => {
  slideActive++;

  if (slideActive > slides.length - 1) slideActive = 0;

  setActiveSlide();
  setBackground();
});

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[slideActive].classList.add("active");
}

function setBackground() {
  container.style.backgroundImage = slides[slideActive].style.backgroundImage;
}
setBackground();
