// ? Carousel starts
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
// ? Carousel ends

// ? tab starts
function openTab(evt, tabName) {
  var i, tabContent, tabButtons;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Set Tab 1 as the default selected tab
document.getElementById("tabButton1").addEventListener("click", function () {
  openTab(event, "tab1");
});

document.getElementById("tabButton2").addEventListener("click", function () {
  openTab(event, "tab2");
});

// Set Tab 1 as the default selected tab
document.getElementById("tab1").style.display = "block";
document.querySelector(".tab-button.active").classList.remove("active");
document.getElementById("tabButton1").classList.add("active");

// ? accordion starts
