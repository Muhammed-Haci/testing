// --- Toggle dark light mood ---:
const checkbox = document.querySelector("header [type='checkbox']");
let localData = window.localStorage.getItem("Theme");
let machineTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "Dark"
  : "Light";

// check the Machine Theme:
if (machineTheme == "Dark") {
  // check the localStorage Theme:
  if (localData) {
    document.body.classList.add(localData);
    if (localData == "Dark") {
      checkbox.setAttribute("checked", "");
    }
  } else {
    checkbox.setAttribute("checked", "");
    document.body.classList.add("Dark");
  }
} else {
  // check the localStorage Theme:
  if (localData) {
    document.body.classList.add(localData);
    if (localData == "Dark") {
      checkbox.setAttribute("checked", "");
    }
  }
}

// Change The Theme function:
checkbox.addEventListener("click", (e) => {
  document.body.classList.toggle("Dark");

  if (document.body.classList.contains("Dark")) {
    checkbox.setAttribute("checked", "");
    window.localStorage.setItem("Theme", "Dark");
    // add the audio to the body:
    const audio = document.createElement("audio");
    audio.src = "https://b.top4top.io/m_25146mzva2.mp3";
    audio.play();
    audio.remove();
  } else {
    checkbox.removeAttribute("checked");
    window.localStorage.removeItem("Theme", "Light");
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
