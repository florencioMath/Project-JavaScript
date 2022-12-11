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
  images.forEach((image) => {
    image.classList.remove("active");
  });

  images[activeSlide].style.animation = "slide-up 0.5s forwards";
  images[activeSlide].classList.add("active");
}

function setActiveText() {
  texts.forEach((text) => {
    text.classList.remove("active");
  });

  texts[activeSlide].style.animation = "slide-down 0.5s forwards";
  texts[activeSlide].classList.add("active");
}
