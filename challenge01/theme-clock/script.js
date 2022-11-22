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

setInterval(() => {
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

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  hourEl.style.transform = `rotate(${scale(hour, 0, 12, 0, 360)}deg)`;

  minuteEl.style.transform = ` rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;

  secondEl.style.transform = `rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;
}, 1000);
