const btnNotification = document.getElementById("notification");
const toast = document.getElementById("toast");
const container = document.querySelector(".container");
const toasts = document.getElementById("toasts");

let activeMessage = 0;

btnNotification.addEventListener("click", createToast);

const toastMessages = [
  "First notification",
  "Second notification",
  "Third notification",
  "Fourth notification",
];

const toastTypes = ["info", "success", "error"];

function createToast() {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(getMessageType());
  toast.innerHTML = getMessageName();
  toast.style.display = "flex";
  toasts.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function getMessageName() {
  activeMessage++;

  if (activeMessage > toastMessages.length - 1) {
    activeMessage = 0;
  }
  return toastMessages[activeMessage];
}

function getMessageType() {
  return toastTypes[Math.floor(Math.random() * toastTypes.length)];
}
