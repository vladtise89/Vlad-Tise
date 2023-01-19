const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelectorAll(".bottom");

let slideNumber = 1;
const length = images.length;

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
};
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber--;
};

const firstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};
const lastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  slideNumber = length;
};

right.addEventListener("click", () => {
  if (slideNumber < length) {
    nextSlide();
  } else {
    firstSlide();
  }
});

left.addEventListener("click", () => {
  if (slideNumber > 1) {
    prevSlide();
  } else {
    lastSlide();
  }
});

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}
