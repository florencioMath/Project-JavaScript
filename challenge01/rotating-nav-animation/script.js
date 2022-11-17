const open = document.getElementById("open");
const close = document.getElementById("close");
const containerRotanting = document.querySelector(".container-rotanting");

open.addEventListener("click", () =>
  containerRotanting.classList.add("rotate")
);

close.addEventListener("click", () =>
  containerRotanting.classList.remove("rotate")
);
