// --- Toggle dark light mood ---:
const checkbox = document.querySelector("header [type='checkbox']");
let localData = window.localStorage.getItem("Theme");
let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "Dark"
  : "Light";

// check the Machine Theme:
if (theme == "Dark") {
  // check the localStorage Theme:
  if (localData) {
    if (localData == "Dark") {
      checkbox.classList.add("checked");
      checkbox.setAttribute("checked", "");
    }
  } else {
    checkbox.classList.add("checked");
    checkbox.setAttribute("checked", "");
  }
} else {
  // check the localStorage Theme:
  if (localData) {
    if (localData == "Dark") {
      checkbox.classList.add("checked");
      checkbox.setAttribute("checked", "");
    }
  }
}

// Change The Theme function:
checkbox.addEventListener("click", (e) => {
  checkbox.classList.toggle("checked");

  if (checkbox.classList.contains("checked")) {
    checkbox.setAttribute("checked", "");
    window.localStorage.setItem("Theme", "Dark");
    // add the audio to the body:
    const audio = document.createElement("audio");
    audio.src = "https://b.top4top.io/m_25146mzva2.mp3";
    audio.play();
    audio.remove();
  } else {
    checkbox.removeAttribute("checked");
    window.localStorage.setItem("Theme", "Light");
    // add the audio to the body:
    const audio = document.createElement("audio");
    audio.src = "https://a.top4top.io/m_2514r403l1.mp3";
    audio.play();
    audio.remove();
  }
});

// Add the copyright year to the footer:
let year = document.querySelector("footer .year");
year.innerHTML = new Date().getFullYear();
