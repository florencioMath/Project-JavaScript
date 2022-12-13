const btnNotification = document.getElementById("notification");
const toast = document.getElementById("toast");
const container = document.querySelector(".container");
const toasts = document.getElementById("toasts");

btnNotification.addEventListener("click", createToast);

function createToast() {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = "Mensage here";
  toast.style.display = "flex";
  toasts.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
