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

const thisMonth = yearMonths[date.getMonth()];
const thisWeekDay = weeksDays[date.getDay()];
const digitalTime = document.getElementById("digitalTime");
const dateTime = document.getElementById("dateTime");
const meridiemTime = hour <= 12 ? "AM" : "PM";
const dateDigitalTime = `${hour}:${minutes} ${meridiemTime} `;
const dateTimeBody = `${thisWeekDay}, ${thisMonth} ${day}`;

digitalTime.innerText = dateDigitalTime;
dateTime.innerText = dateTimeBody;
