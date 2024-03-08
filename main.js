function show() {
  document.querySelector(".hamburger").classList.toggle("open");
  document.querySelector(".navigation").classList.toggle("active");
}

const slider = document.getElementById("slider");
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % 5;
  updateSlider();
}

function updateSlider() {
  const translateValue = -currentIndex * 20;
  slider.style.transform = `translateX(${translateValue}%)`;
}

setInterval(nextSlide, 5000);
