const inputText = document.getElementById("inputText");
const buttonSearch = document.getElementById("buttonSearch");

buttonSearch.addEventListener("click", () => {
  if (inputText.classList.contains("expand")) {
    buttonSearch.style.borderRadius = ".4rem";
    inputText.classList.remove("expand");
  } else {
    inputText.classList.add("expand");
    buttonSearch.style.borderRadius = "0px 0.4rem 0.4rem 0px";
    inputText.focus();
  }
});
