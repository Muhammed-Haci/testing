// // --- Toggle dark light mood ---:

// // Get the variables:
// let themeSwicher = document.querySelector("#theme-swicher");
// let themeIcon = document.querySelector("#theme-swicher .icon");
// let localData = localStorage.getItem("theme");

// // check the localStorage Theme:
// if (localData) {
//   localData == "light"
//     ? (themeIcon.src = "images/moon.png")
//     : (themeIcon.src = "images/sun.png");
//   document.body.classList.add(localData);
// }

// // Change The Theme function:
// themeSwicher.addEventListener("click", () => {
//   document.body.classList.toggle("dark");

//   if (document.body.classList.contains("dark")) {
//     themeIcon.src = "images/sun.png";
//     localStorage.setItem("theme", "dark");
//     document.body.classList.remove("light");
//   } else {
//     themeIcon.src = "images/moon.png";
//     document.body.classList.add("light");
//     localStorage.setItem("theme", "light");
//   }
// });

// Add the copyright year to the footer:
let year = document.querySelector("footer .year");
year.innerHTML = new Date().getFullYear();
