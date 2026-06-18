// js/carousel/customCarousels.js

function setupMultiItemCarousel(carouselId) {
  const carousel = document.querySelector(carouselId);
  if (!carousel) return;

  const items = carousel.querySelectorAll(".carousel-item");
  if (items.length === 0) return;

  function itemsPerSlide() {
    if (window.innerWidth >= 992) return 3; // desktop
    if (window.innerWidth >= 768) return 2; // tablet
    return 1; // mobile
  }

  function updateCarousel() {
    const perSlide = itemsPerSlide();

    items.forEach((item) => {
      item.style.display = "none";
    });

    let activeIndex = [...items].findIndex((i) =>
      i.classList.contains("active"),
    );
    if (activeIndex === -1) activeIndex = 0;

    for (let i = 0; i < perSlide; i++) {
      const index = (activeIndex + i) % items.length;
      items[index].style.display = "block";
    }
  }

  updateCarousel();

  window.addEventListener("resize", updateCarousel);

  carousel.addEventListener("slide.bs.carousel", function () {
    setTimeout(updateCarousel, 10);
  });
}

// Run AFTER includes + images + Bootstrap JS are fully loaded
window.addEventListener("load", function () {
  setupMultiItemCarousel("#rcc-carousel");
  setupMultiItemCarousel("#piecefall-carousel");
  setupMultiItemCarousel("#theChantry-carousel");
});

// For a guide on how to add new carousels, see the SOP "JS CAROUSELS" in the SOPs folder.
