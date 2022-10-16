const pageOne = document.querySelector(".pageOne");
const pageTwo = document.querySelector(".pageTwo");
const container = document.querySelector(".container");

pageOne.addEventListener("mouseenter", () => {
  pageOne.classList.add("transition");
});

pageOne.addEventListener("mouseleave", () => {
  pageOne.classList.remove("transition");
});

pageTwo.addEventListener("mouseenter", () => {
  pageTwo.classList.add("transition");
});

pageTwo.addEventListener("mouseleave", () => {
  pageTwo.classList.remove("transition");
});
