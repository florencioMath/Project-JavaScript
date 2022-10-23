const liters = document.getElementById("liters");
const cupSmall = document.querySelectorAll(".cupSmall");
const percentage = document.getElementById("percentage");
const remaining = document.getElementById("remaining");

liters.innerText = "2L";

cupSmall.forEach((cup, index) => {
  cup.addEventListener("click", () => drinkWater(index));
});

function drinkWater(index) {
  if (index === 7 && cupSmall[index].classList.contains("full")) index--;
  else if (
    cupSmall[index].classList.contains("full") &&
    !cupSmall[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  cupSmall.forEach((cup2, index2) => {
    if (index2 <= index) {
      cup2.classList.add("full");
    } else {
      cup2.classList.remove("full");
    }
  });
}
