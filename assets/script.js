const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const whiteDot = document.querySelectorAll(".dot");
const bannerImg = document.querySelectorAll(".banner-img");
const slide = document.querySelector("#slide");
const dotContainer = document.querySelector("#bullet_points");
let currentIndex = 0;
let tagLine = 0;

function createDot() {
  slides.forEach((el, index) => {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) {
      dot.classList.add("dot_selected");
    }
    dotContainer.appendChild(dot);
    dot.addEventListener("click", (e) => {
      document.querySelectorAll(".dot").forEach(dot => {
        dot.classList.remove("dot_selected");
      });
      dot.classList.add("dot_selected");
    });
  });
}


function swapImageRight() {
  document.querySelectorAll(".dot").forEach((dot) => {
    dot.classList.remove("dot_selected");
  });
  if (currentIndex >= slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  slide.src = "./assets/images/slideshow/" + slides[currentIndex].image;
  document.querySelectorAll(".dot")[currentIndex].classList.add("dot_selected");
}

function swapImageLeft() {
  document.querySelectorAll(".dot").forEach((dot) => {
    dot.classList.remove("dot_selected");
  });
  if (currentIndex <= 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex--;
  }
  slide.src = "./assets/images/slideshow/" + slides[currentIndex].image;
  document.querySelectorAll(".dot")[currentIndex].classList.add("dot_selected");
}

arrowRight.addEventListener("click", (e) => {
  swapImageRight();
});
arrowLeft.addEventListener("click", (e) => {
  swapImageLeft();
});

console.log(slides[0].image);

slide.src = "./assets/images/slideshow/" + slides[currentIndex].image;
slide.alt = slides[currentIndex].tagLine;

createDot();
