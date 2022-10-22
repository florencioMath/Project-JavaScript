const btnToggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

btnToggle.addEventListener("click", (e) => {
  e.preventDefault(e);
  console.log("click");
  nav.classList.toggle("active");
});
