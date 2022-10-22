const btnToggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

btnToggle.addEventListener("click", (e) => {
  e.preventDefault(e);
  nav.classList.toggle("active");
});
