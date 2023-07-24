const slidesContainer = document.querySelector(".slide-container");
const slides = document.querySelectorAll(".slide");
const indicatorsContainer = document.querySelector(".indicators");

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth; // Get the width of a single slide
const slideCount = slides.length;

function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(-${
    currentIndex * slideWidth
  }px)`;
}

function updateIndicators() {
  const indicators = document.querySelectorAll(".indicator");
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateSlidePosition();
  updateIndicators();
}

slides.forEach((slide, index) => {
  const indicator = document.createElement("div");
  indicator.classList.add("indicator");
  indicator.addEventListener("click", () => goToSlide(index));
  indicatorsContainer.appendChild(indicator);
});

updateIndicators();

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlidePosition();
  updateIndicators();
}

setInterval(nextSlide, 5000); // Auto slide every 5 seconds
