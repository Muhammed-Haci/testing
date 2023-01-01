let settings = document.querySelectorAll("input[type=range]");

function changeValue() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value + this.dataset.sizing || "");
}

settings.forEach((e) => {
  e.addEventListener("input", changeValue);
})

