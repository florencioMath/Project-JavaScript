const btnColorMode = document.getElementById("colorMode");
const digitalTime = document.getElementById("digitalTime");
const dateTime = document.getElementById("dateTime");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

btnColorMode.addEventListener("click", colorChange);

function colorChange(e) {
  e.preventDefault();
  setMode();
}

function setMode() {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    html.classList.add("light");
    btnColorMode.innerHTML = "Dark Mode";
  } else {
    html.classList.remove("light");
    html.classList.add("dark");
    btnColorMode.innerHTML = "Ligth Mode";
  }
}

const weeksDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const yearMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octuber",
  "November",
  "December",
];

function setDate() {
  const date = new Date();
  const [day, month, year] = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
  ];
  const [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  const thisWeekDay = weeksDays[date.getDay()];
  const thisMonth = yearMonths[month];

  const dateDigitalTime = `${hour}:${minutes <= 9 ? "0" + minutes : minutes}`;
  const dateTimeBody = `${thisWeekDay}, ${thisMonth} ${day}`;

  digitalTime.innerText = dateDigitalTime;
  dateTime.innerText = dateTimeBody;

  const hourDegrees = (hour / 12) * 360 + (minutes / 60) * 30 + 90;
  const minsDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const secondsDegrees = (seconds / 60) * 360 + 90;

  hourEl.style.transform = `rotate(${hourDegrees}deg)`;
  minuteEl.style.transform = `rotate(${minsDegrees}deg)`;
  secondEl.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
