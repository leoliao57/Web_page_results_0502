let currentSlide = 0;
const slides = document.querySelectorAll(".carousel img");

// 初始化顯示第一張
slides.forEach((img, i) => img.style.display = i === 0 ? "block" : "none");

// 自動輪播
setInterval(() => {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
}, 4000);

// 新增左右按鈕功能
document.getElementById("prevSlide").addEventListener("click", () => {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
});

document.getElementById("nextSlide").addEventListener("click", () => {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
});
