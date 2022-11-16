let slider = document.querySelector(".slider");
let slides = Array.from(document.querySelectorAll(".slider > figure"));
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let current = 0;
let slidesCount = slides.length - 1;

// create the indicaters items:
for (let i = 0; i <= slidesCount; i++) {
  let bullet = document.createElement("li");
  bullet.setAttribute("data-index", i);
  if (i === 0) {
    bullet.classList.add("active");
  }
  document.querySelector(".indicators").appendChild(bullet);
}

// select the indicators items:
let indicators = Array.from(document.querySelectorAll(".indicators li"));

// ----------- prev button function -----------:
prev.addEventListener("click", () => {
  removeActive();

  current--;

  if (current < 0) {
    current = slidesCount;
  }

  addActive();
});

// ----------- Next button function -----------:
next.addEventListener("click", () => {
  removeActive();

  current++;

  if (current > slidesCount) {
    current = 0;
  }

  addActive();
});

// ------ indicators click function --------:
indicators.forEach((indicator) => {
  indicator.addEventListener("click", (e) => {
    removeActive();
    current = e.target.dataset.index;
    addActive();
  });
});

// ----------- Set autoplay function -----------:
let clickNext = () => {
  next.click();
};

let repeater = setInterval(clickNext, 5000);

// ----------- Stop autoplay on hover function -----------:
slider.addEventListener("mouseover", () => {
  clearInterval(repeater);
});

// ----------- Set autoplay on mouse out function -----------:
slider.addEventListener("mouseout", () => {
  repeater = setInterval(clickNext, 5000);
});

// ----------- Remove Active Class function -----------:
function removeActive() {
  slides.forEach((slide) => slide.classList.remove("active"));
  indicators.forEach((indicator) => indicator.classList.remove("active"));
}

// ----------- Add Active Class function -----------:
function addActive() {
  slides[current].classList.add("active");
  indicators[current].classList.add("active");
}
