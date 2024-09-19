# Newspaper Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

---

1. Clone the repository
2. Join to the correct path of the clone
3. Execute: `yarn install`
4. Execute: `yarn dev`

## Description

I made a website about a newspaper, but basically what I did was to take a design from the internet and implement it on my own without seeing the original code. All this was because I wanted to keep practicing CSS.

## Technologies used

1. CSS3
2. Typescript
3. HTML5

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/Newspaper-Page`](https://www.diegolibonati.com.ar/#/project/Newspaper-Page)

## Video

https://github.com/DiegoLibonati/Newspaper-Page/assets/99032604/c49a4eed-29c6-420b-bb76-09c0ae6f60f8

## Documentation

In this case we are going to obtain the two buttons that operate the action that the Sidebar opens and closes. And the last element will be the one to which we will assign the class to open or close:

```
const btnOpenNav = document.querySelector(
  ".header_container-title--button button"
) as HTMLButtonElement;
const btnCloseNav = document.querySelector(
  ".header_container-nav--button button"
) as HTMLButtonElement;
const containerNav = document.querySelector(".header_container-nav") as HTMLElement;
```

An event is assigned to both buttons that when clicking on the button depending on the button, the class will be added to open the sidebar or to close:

```
btnOpenNav.addEventListener("click", () => {
  containerNav.classList.add("show-nav");
});

btnCloseNav.addEventListener("click", () => {
  containerNav.classList.remove("show-nav");
});
```

In this case we will obtain the element in which we will render the current schedule:

```
const containerDate = document.querySelector(
  ".header_container-title--information h3"
) as HTMLHeadingElement;
```

In this array called `nameDays` we are going to save the days of the week that we will later get that day is through an index:

```
const nameDays: DaysWeek[] = [
  DaysWeek.Sunday,
  DaysWeek.Monday,
  DaysWeek.Tuesday,
  DaysWeek.Wednesday,
  DaysWeek.Tuesday,
  DaysWeek.Friday,
  DaysWeek.Saturday,
];
```

The `getAmOrPm()` function will obtain by parameters the current time and return if it is am or pm:

```
const getAmOrPm = (actualHour: number): string => {
  if (actualHour > 12) {
    return "pm";
  }
  return "am";
};
```
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
```
