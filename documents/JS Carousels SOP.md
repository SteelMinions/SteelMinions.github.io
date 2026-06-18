# JS CAROUSELS Standard Operating Procedure (SOP)

---

### Version 1.0

### Date: 2024-06-01

### Author: Matthew Ryan Dudley

### Contact: matthewrdudley@gmail.com

---

# Table of Contents

1. [Introduction](#1-introduction)
2. [Purpose of This SOP](#2-purpose-of-this-sop)
3. [Carousel Requirements](#3-carousel-requirements)
4. [HTML Structure](#4-html-structure)
5. [JavaScript File Structure](#5-javascript-file-structure)
6. [Multi-Item Carousel Logic](#6-multi-item-carousel-logic)
7. [JavaScript Implementation](#7-javascript-implementation)
8. [Adding New Carousels](#8-adding-new-carousels)
9. [Maintenance Guidelines](#9-maintenance-guidelines)

---

## 1. Introduction

This document outlines the Standard Operating Procedure (SOP) for implementing and maintaining the custom multi-item Bootstrap 5 carousels used across the Steel Minions website. These carousels are used to display game posters and gameplay images for titles such as The Chantry, Racecar Crashers, and Piecefall.

---

## 2. Purpose of This SOP

Bootstrap 5 does not natively support multi-item carousels. To achieve a responsive, multi-image sliding experience, a custom JavaScript controller has been developed.

This SOP ensures:

- Consistent implementation across all pages.
- Maintainability of carousel logic.
- Clear guidance for adding new carousels.
- Prevention of common Bootstrap carousel errors.

---

## 3. Carousel Requirements

All Steel Minions carousels must:

- Use Bootstrap 5’s `.carousel` structure.
- Contain exactly one `.carousel-item.active`.
- Use `class="d-block w-100"` for all images.
- Have unique IDs for each carousel.
- Be initialised in the shared `carousels.js` file.

The custom JavaScript enables:

- 3 items visible on desktop (≥ 992px).
- 2 items visible on tablets (≥ 768px).
- 1 item visible on mobile (< 768px).
- Smooth looping behaviour.
- Independent control of each carousel.

---

## 4. HTML Structure

Each carousel must follow this structure:

```html
<div id="example-carousel" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/example1.webp" class="d-block w-100" alt="" />
    </div>
    <div class="carousel-item">
      <img src="img/example2.webp" class="d-block w-100" alt="" />
    </div>
    <!-- Additional items as required -->
  </div>

  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#example-carousel"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon"></span>
  </button>

  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#example-carousel"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
```

### Critical HTML Rules

- Only one `.carousel-item` may have the `active` class.
- All images must use `class="d-block w-100"` for consistent scaling.
- `data-bs-target` on the controls must match the carousel `id`.

---

## 5. JavaScript File Structure

All carousel logic is contained in the following file:

```
js/carousels.js
```

This file contains:

- A shared setup function for multi-item carousels.
- Responsive behaviour logic.
- Event listeners for Bootstrap `slide.bs.carousel` events.
- Initialisation calls for each carousel ID.

This structure ensures:

- Centralised maintenance.
- Consistent behaviour across all carousels.
- Easy expansion when adding new carousels.

---

## 6. Multi-Item Carousel Logic

The custom JavaScript determines how many items to show per slide based on viewport width:

- Desktop (≥ 992px): 3 items visible.
- Tablet (≥ 768px and < 992px): 2 items visible.
- Mobile (< 768px): 1 item visible.

The script:

- Hides all `.carousel-item` elements.
- Finds the currently active item.
- Reveals the correct number of items starting from the active item.
- Wraps around when reaching the end of the item list.

This creates a multi-item carousel while still using Bootstrap’s native slide system.

---

## 7. JavaScript Implementation

The following code must be placed in `js/carousels.js`:

```js
document.addEventListener("DOMContentLoaded", function () {
  // Shared multi-item carousel setup function
  function setupMultiItemCarousel(carouselId) {
    const carousel = document.querySelector(carouselId);
    if (!carousel) return;

    const items = carousel.querySelectorAll(".carousel-item");

    function itemsPerSlide() {
      if (window.innerWidth >= 992) return 3; // desktop
      if (window.innerWidth >= 768) return 2; // tablet
      return 1; // mobile
    }

    function updateCarousel() {
      const perSlide = itemsPerSlide();

      // Hide all items
      items.forEach((item) => {
        item.style.display = "none";
      });

      // Find active index
      let activeIndex = [...items].findIndex((i) =>
        i.classList.contains("active"),
      );

      // Show correct number of items
      for (let i = 0; i < perSlide; i++) {
        let index = (activeIndex + i) % items.length;
        items[index].style.display = "block";
      }
    }

    // Initial setup
    updateCarousel();

    // Update on resize
    window.addEventListener("resize", updateCarousel);

    // Update on slide
    carousel.addEventListener("slide.bs.carousel", function () {
      setTimeout(updateCarousel, 10);
    });
  }

  // Initialise all carousels independently
  setupMultiItemCarousel("#theChantry-carousel");
  setupMultiItemCarousel("#rcc-carousel");
  setupMultiItemCarousel("#piecefall-carousel");
});
```

---

## 8. Adding New Carousels

When adding a new carousel to the project, the following steps must be followed:

1. Create the HTML structure as described in Section 4, ensuring:
   - Only one `.carousel-item` has the `active` class.
   - All images use `class="d-block w-100"`.
   - The carousel has a unique `id` attribute.

2. Add the new carousel ID to the initialisation list in `carousels.js`, for example:

```js
setupMultiItemCarousel("#new-carousel-id");
```

3. Ensure the ID used in JavaScript matches the `id` in the HTML.

No further configuration is required for the new carousel to adopt the same multi-item behaviour.

---

## 9. Maintenance Guidelines

- Ensure all images used in carousels have consistent aspect ratios to avoid layout shifts.
- Verify that each carousel has exactly one `.carousel-item.active`.
- Test all carousels at mobile, tablet, and desktop breakpoints after changes.
- Re-test carousel behaviour after updating Bootstrap or related JavaScript.
- Keep all carousel-related logic within `js/carousels.js` to maintain a single source of truth.
- When adding or modifying carousels, follow the naming conventions and patterns established in this SOP.
