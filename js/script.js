let text = document.querySelector("h2").textContent;
let index = 1;

function writeText() {
  document.querySelector("h2").innerHTML = text.slice(0, index);
  index++;
  if (index > text.length) index = 1;
}
setInterval(writeText, 200);
