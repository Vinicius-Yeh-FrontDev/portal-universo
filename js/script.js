const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const images = document.querySelectorAll(".carousel img");

let currentIndex = 0;

function showImage(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === images.length - 1;
}

prevBtn.addEventListener("click", () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = Math.min(currentIndex + 1, images.length - 1);
  showImage(currentIndex);
});

showImage(currentIndex);