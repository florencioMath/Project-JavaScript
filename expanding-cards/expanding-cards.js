const card = document.querySelectorAll(".card");

card.forEach((card) =>
  card.addEventListener("click", () => {
    removeClassActive();
    card.classList.add("active");
  })
);

function removeClassActive() {
  card.forEach((card) => {
    card.classList.remove("active");
  });
}
