let icon = document.querySelector(".icon");
let input = document.querySelector("#theme-swicher input");


if (localStorage.getItem("theme") === "dark") {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    document.styleSheets[1].cssRules[1].style.setProperty("--primary-clr", "#448460");
    document.styleSheets[1].cssRules[1].style.setProperty("--clr-1", "#e2e3e7");
    document.styleSheets[1].cssRules[1].style.setProperty("--clr-2", "#232529");
    document.styleSheets[1].cssRules[1].style.setProperty("--clr-3", "#11190d");
} else if (localStorage.getItem("theme") === "light") {
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
    document.styleSheets[1].cssRules[1].style.setProperty("--primary-clr", "#00bcd4");
    document.styleSheets[1].cssRules[1].style.setProperty("--clr-1", "#232529");
    document.styleSheets[1].cssRules[1].style.setProperty("--clr-2", "#e2e3e7");
    document.styleSheets[1].cssRules[1].style.setProperty("--clr-3", "#e3796a");
}







icon.addEventListener("click", (e) => {
  
  

  if (input.checked) {
    document.styleSheets[1].cssRules[1].style.setProperty("--primary-clr", "#448460");
    document.styleSheets[1].cssRules[1].style.setProperty("--clr-1", "#e2e3e7");
    document.styleSheets[1].cssRules[1].style.setProperty("--clr-2", "#232529");
    document.styleSheets[1].cssRules[1].style.setProperty("--clr-3", "#11190d");

    window.localStorage.setItem("theme", "dark");

    icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");

  } else {
    document.styleSheets[1].cssRules[1].style.setProperty("--primary-clr", "#00bcd4");
    document.styleSheets[1].cssRules[1].style.setProperty("--clr-1", "#232529");
    document.styleSheets[1].cssRules[1].style.setProperty("--clr-2", "#e2e3e7");
    document.styleSheets[1].cssRules[1].style.setProperty("--clr-3", "#e3796a");

    window.localStorage.setItem("theme", "light");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});

