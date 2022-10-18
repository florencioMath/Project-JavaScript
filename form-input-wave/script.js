const labelName = document.getElementById("labelName");
const labelPassword = document.getElementById("labelPassword");
const inputName = document.getElementById("inputName");
const inputPassword = document.getElementById("inputPassword");

const labels = document.querySelectorAll(".containerLabelInput label");
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 80}ms">${letter}</span>`
    )
    .join("");
});

// inputName.addEventListener("focus", () => {
//   labelName.classList.add("formWave");
// });

// // inputName.addEventListener("focusout", () => {
// //   labelName.classList.remove("formWave");
// // });

// inputPassword.addEventListener("focus", () => {
//   labelPassword.classList.add("formWave");
// });

// inputPassword.addEventListener("focusout", () => {
//   labelPassword.classList.remove("formWave");
// });

// labelName.addEventListener("click", () => {
//   inputName.focus();
// });

// labelPassword.addEventListener("click", () => {
//   inputPassword.focus();
// });
