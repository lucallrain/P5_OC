const slides = [
    {
      image: "slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      image: "slide2.jpg",
      tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
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
  const slide = document.querySelector("#slide");
  const tagline = document.querySelector("#tagLine");
  const dotContainer = document.querySelector("#bullet_points");
  let currentIndex = 0;
  
  function updateSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    slide.src = "./assets/images/slideshow/" + slides[currentIndex].image;
    tagline.innerHTML = slides[currentIndex].tagLine;
    document.querySelectorAll(".dot").forEach((dot, i) => {
      dot.classList.toggle("dot_selected", i === currentIndex);
    });
  }
  
  function createDots() {
    slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot", index === 0 && "dot_selected");
      dot.addEventListener("click", () => updateSlide(index));
      dotContainer.appendChild(dot);
    });
  }
  
  arrowRight.addEventListener("click", () => updateSlide(currentIndex + 1));
  arrowLeft.addEventListener("click", () => updateSlide(currentIndex - 1));
  
  createDots();
  updateSlide(currentIndex);
  