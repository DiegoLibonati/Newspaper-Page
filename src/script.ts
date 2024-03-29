import { DaysWeek } from "./entities/vite-env.d";

// nav config
const btnOpenNav = document.querySelector(
  ".header_container-title--button button"
) as HTMLButtonElement;
const btnCloseNav = document.querySelector(
  ".header_container-nav--button button"
) as HTMLButtonElement;
const containerNav = document.querySelector(
  ".header_container-nav"
) as HTMLElement;

btnOpenNav.addEventListener("click", () => {
  containerNav.classList.add("show-nav");
});

btnCloseNav.addEventListener("click", () => {
  containerNav.classList.remove("show-nav");
});

// set actual date

const containerDate = document.querySelector(
  ".header_container-title--information h3"
) as HTMLHeadingElement;

const nameDays: DaysWeek[] = [
  DaysWeek.Sunday,
  DaysWeek.Monday,
  DaysWeek.Tuesday,
  DaysWeek.Wednesday,
  DaysWeek.Tuesday,
  DaysWeek.Friday,
  DaysWeek.Saturday,
];

const getAmOrPm = (actualHour: number): string => {
  if (actualHour > 12) {
    return "pm";
  }
  return "am";
};

const addZero = (value: number): string => {
  if (value < 10) {
    return `0${value}`;
  }

  return String(value);
};

const insertActualDate = (): void => {
  const actualDate: Date = new Date();
  const actualNumberDay: number = actualDate.getDay();
  const actualHour: string = addZero(actualDate.getHours());
  const actualMinutes: string = addZero(actualDate.getMinutes());
  const actualDay: string = addZero(actualDate.getDate());
  const actualMonth: string = addZero(actualDate.getMonth() + 1);
  const actualYear: number = actualDate.getFullYear();
  const IsAmOrPm: string = getAmOrPm(actualDate.getHours());

  containerDate.innerHTML = `${nameDays[actualNumberDay]} ${actualHour}:${actualMinutes} ${IsAmOrPm} ${actualDay}/${actualMonth}/${actualYear}`;
};

insertActualDate();

setInterval(insertActualDate, 30000);
