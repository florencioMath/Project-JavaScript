const texts = document.querySelectorAll(".text");
const images = document.querySelectorAll(".image");
const btnDown = document.getElementById("down");
const btnUp = document.getElementById("up");

let activeSlide = 0;

btnDown.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) activeSlide = texts.length - 1;

  setActiveText();
  setActiveimage();
});

btnUp.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > images.length - 1) activeSlide = 0;

  setActiveText();
  setActiveimage();
});

function setActiveimage() {
  images.forEach((text) => {
    text.classList.remove("active");
  });

  images[activeSlide].classList.add("active");
}

function setActiveText() {
  texts.forEach((text) => {
    text.classList.remove("active");
  });

  texts[activeSlide].classList.add("active");
}
