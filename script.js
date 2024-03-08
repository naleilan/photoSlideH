document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlideIndex = 0;

  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    // Show the slide at the given index
    slides[index].style.display = "block";
  }

  function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
  }

  function prevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
  }

  // Initial display of the first slide
  showSlide(currentSlideIndex);

  // Event listeners for arrow keys
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    }
  });

  // Event listeners for arrow icons click
  document.querySelectorAll(".right-arrow").forEach(function (arrow) {
    arrow.addEventListener("click", nextSlide);
  });

  document.querySelectorAll(".left-arrow").forEach(function (arrow) {
    arrow.addEventListener("click", prevSlide);
  });
});
