// nav config
const btnOpenNav = document.querySelector(
  ".header_container-title--button button"
);
const btnCloseNav = document.querySelector(
  ".header_container-nav--button button"
);
const containerNav = document.querySelector(".header_container-nav");

btnOpenNav.addEventListener("click", (e) => {
  containerNav.classList.add("show-nav");
});

btnCloseNav.addEventListener("click", (e) => {
  containerNav.classList.remove("show-nav");
});

// set actual date

const containerDate = document.querySelector(
  ".header_container-title--information h3"
);

const nameDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getAmOrPm = (actualHour) => {
  if (actualHour > 12) {
    return "pm";
  } else {
    return "am";
  }
};

const insertActualDate = () => {
  const actualDate = new Date();
  const actualNumberDay = actualDate.getDay();
  const actualHour = actualDate.getHours();
  const actualMinutes = actualDate.getMinutes();
  const actualDay = actualDate.getDate();
  const actualMonth = actualDate.getMonth() + 1;
  const actualYear = actualDate.getFullYear();
  const IsAmOrPm = getAmOrPm(actualHour);

  return (containerDate.innerHTML = `${nameDays[actualNumberDay]} ${actualHour}:${actualMinutes} ${IsAmOrPm} ${actualDay}/${actualMonth}/${actualYear}`);
};

insertActualDate();

setInterval(insertActualDate, 30000);
