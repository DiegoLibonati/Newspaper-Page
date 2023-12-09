# Newspaper-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

## Description

I made a website about a newspaper, but basically what I did was to take a design from the internet and implement it on my own without seeing the original code. All this was because I wanted to keep practicing CSS.

## Technologies used

1. CSS3
2. Javascript
3. HTML5

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/79`](https://www.diegolibonati.com.ar/#/project/79)

## Video

https://user-images.githubusercontent.com/99032604/198900603-c47d24db-2361-4648-8762-6587b682b3b3.mp4

## Documentation

In this case we are going to obtain the two buttons that operate the action that the Sidebar opens and closes. And the last element will be the one to which we will assign the class to open or close:

```
const btnOpenNav = document.querySelector(
".header_container-title--button button"
);
const btnCloseNav = document.querySelector(
".header_container-nav--button button"
);
const containerNav = document.querySelector(".header_container-nav");
```

An event is assigned to both buttons that when clicking on the button depending on the button, the class will be added to open the sidebar or to close:

```
btnOpenNav.addEventListener("click", (e) => {
containerNav.classList.add("show-nav");
});

btnCloseNav.addEventListener("click", (e) => {
containerNav.classList.remove("show-nav");
});
```

In this case we will obtain the element in which we will render the current schedule:

```
const containerDate = document.querySelector(
".header_container-title--information h3"
);
```

In this array called `nameDays` we are going to save the days of the week that we will later get that day is through an index:

```
const nameDays = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
];
```

The `getAmOrPm()` function will obtain by parameters the current time and return if it is am or pm:

```
const getAmOrPm = (actualHour) => {
    if (actualHour > 12) {
        return "pm";
    } else {
        return "am";
    }
};
```

This function called `insertActualDate()` what will be rendering in the `containerDate` element the current time. Then at the end of the entire code, this function will be called every 30 seconds:

```
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
```
