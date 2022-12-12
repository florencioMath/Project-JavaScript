const btnNotification = document.getElementById("notification");
const toast = document.getElementById("toast");
const container = document.querySelector(".container");

btnNotification.addEventListener("click", showToast);

function showToast() {
  createToast();
  // setTimeout(hideToast, 2000);
}

function hideToast(div) {
  setTimeout(() => {
    div.style.display = "none";
  }, 1000);
}

function createToast() {
  const div = document.createElement("div");
  div.classList.add("toast");
  div.innerHTML = "Mensage here";
  div.style.display = "flex";
  container.appendChild(div);
  hideToast(div);
}
