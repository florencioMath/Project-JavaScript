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
    date.getUTCDate(),
    date.getUTCMonth() + 1,
    date.getUTCFullYear(),
  ];
  const [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  const thisMonth = yearMonths[date.getMonth()];
  const thisWeekDay = weeksDays[date.getDay()];
  const digitalTime = document.getElementById("digitalTime");
  const dateTime = document.getElementById("dateTime");
  const meridiemTime = hour <= 12 ? "AM" : "PM";
  const dateDigitalTime = `${hour}:${
    minutes <= 9 ? "0" + minutes : minutes
  } ${meridiemTime} `;
  const dateTimeBody = `${thisWeekDay}, ${thisMonth} ${day}`;
  const hourEl = document.querySelector(".hour");
  const minuteEl = document.querySelector(".minute");
  const secondEl = document.querySelector(".second");
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
