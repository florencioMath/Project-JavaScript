const cupSmall = document.querySelectorAll(".cupSmall");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remaining = document.getElementById("remaining");

fullCup();

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

  fullCup();
}

function fullCup() {
  const totalSmallCupsFull = document.querySelectorAll(".cupSmall.full").length;
  const totalCups = cupSmall.length;

  if (totalSmallCupsFull === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(totalSmallCupsFull / totalCups) * 400}px`;
    percentage.innerText = `${(totalSmallCupsFull / totalCups) * 100}%`;
  }

  if (totalSmallCupsFull === totalCups) {
    remaining.style.visibility = "hidden";
    remaining.style.height = 0;
  } else {
    remaining.style.visibility = "visible";
    liters.innerText = `${2 - (250 * totalSmallCupsFull) / 1000}L`;
  }
}
