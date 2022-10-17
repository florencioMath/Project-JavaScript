const labelName = document.getElementById("labelName");
const labelPassword = document.getElementById("labelPassword");
const inputName = document.getElementById("inputName");
const inputPassword = document.getElementById("inputPassword");

inputName.addEventListener("focus", (event) => {
  labelName.classList.add("formWave");
});

inputName.addEventListener("focusout", (event) => {
  labelName.classList.remove("formWave");
});

inputPassword.addEventListener("focus", (event) => {
  labelPassword.classList.add("formWave");
});

inputPassword.addEventListener("focusout", (event) => {
  labelPassword.classList.remove("formWave");
});

labelName.addEventListener("click", (event) => {
  inputName.focus();
});

labelPassword.addEventListener("click", (event) => {
  inputPassword.focus();
});
