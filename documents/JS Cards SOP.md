# JS CARDS Standard Operating Procedure (SOP)

---

### Version 1.0

### Date: 2024-06-01

### Author: Matthew Ryan Dudley

### Contact: matthewrdudley@gmail.com

---

# Table of Contents

1. [Introduction](#1-introduction)
2. [Purpose of This SOP](#2-purpose-of-this-sop)
3. [Card Rendering Requirements](#3-card-rendering-requirements)
4. [HTML Structure](#4-html-structure)
5. [JavaScript File Structure](#5-javascript-file-structure)
6. [Card Rendering Logic](#6-card-rendering-logic)
7. [JavaScript Implementation](#7-javascript-implementation)
8. [Adding New Cards](#8-adding-new-cards)
9. [Maintenance Guidelines](#9-maintenance-guidelines)

---

## 1. Introduction

This document outlines the Standard Operating Procedure (SOP) for implementing and maintaining the JavaScript-driven card system used on the Steel Minions website. These cards are used to display game information dynamically on the homepage and other relevant pages.

---

## 2. Purpose of This SOP

The card system is designed to:

- Dynamically generate Bootstrap 5 cards from a JavaScript data array.
- Ensure consistent styling and behaviour across all pages.
- Allow easy expansion by adding new card objects.
- Maintain a clean separation between data, structure, and behaviour.

This SOP ensures that all contributors follow the same structure and conventions when modifying or extending the card system.

---

## 3. Card Rendering Requirements

All Steel Minions cards must:

- Be generated from a JavaScript array (`indexCards`).
- Contain the following properties:
  - `title`
  - `description`
  - `image`
  - `link`
- Render as fully clickable cards (entire card acts as a button).
- Use Bootstrap 5 card components.
- Be responsive and mobile-friendly.
- Support optional sorting (e.g., newest first).

---

## 4. HTML Structure

The HTML page must contain a container element where cards will be injected:

```html
<div id="cardContainer" class="row justify-content-center"></div>
```

### Requirements:

- The container must have a unique ID.
- The container must support Bootstrap grid layout.
- Cards will be inserted as `.col-md-4` elements for responsive behaviour.

---

## 5. JavaScript File Structure

All card logic is contained in:

```
js/indexCards.js
```

This file contains:

- The card data array.
- The rendering function.
- Sorting logic (if required).
- Event listeners for dynamic behaviour.

This ensures:

- Centralised card management.
- Easy updates and additions.
- Consistent behaviour across the website.

---

## 6. Card Rendering Logic

The card system uses a JavaScript array of objects:

```js
const indexCards = [
  {
    title: "Piecefall",
    description: "A puzzle game where you must clear the board by matching pieces.",
    image: "img/games/piecefall/A0piecefall_compressed_poster.png",
    link: "portfolio.html#piecefall"
  },
  ...
];
```

The rendering logic:

- Loops through the array.
- Generates Bootstrap 5 card markup.
- Wraps each card in an `<a>` tag to make the entire card clickable.
- Inserts the card HTML into the container using `insertAdjacentHTML`.

---

## 7. JavaScript Implementation

The following code must be placed in `js/indexCards.js`:

```js
// Cards to display new games on the index page
const indexCards = [
  {
    title: "Piecefall",
    description:
      "A puzzle game where you must clear the board by matching pieces of the same color.",
    image: "img/games/piecefall/A0piecefall_compressed_poster.png",
    link: "portfolio.html#piecefall",
  },
  {
    title: "Racecar Crashers",
    description:
      "A racing game where you must navigate through a series of obstacles.",
    image: "img/games/rcc/A0_racecar_crashers_.png",
    link: "portfolio.html#rcc",
  },
  {
    title: "The Chantry",
    description: "A narrative-driven game set in a mysterious abbey.",
    image: "img/games/theChantry/A0_The_Chantry_poster.png",
    link: "portfolio.html#chantry",
  },
];

// Sorting state
let newestFirst = true;

// Rendering cards function
function renderCards() {
  const container = document.getElementById("cardContainer");
  container.innerHTML = "";

  const sortedCards = [...indexCards].sort((a, b) => {
    return newestFirst
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });

  sortedCards.forEach((card) => {
    const cardHTML = `
      <div class="col-md-4 mb-4">
        <a href="${card.link}" class="text-decoration-none card-link-wrapper">
          <div class="card h-100">
            <img src="${card.image}" class="card-img-top" alt="${card.title}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${card.title}</h5>
              <p class="card-text">${card.description}</p>
            </div>
          </div>
        </a>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

renderCards();
```

---

## 8. Adding New Cards

To add a new card:

1. Open `js/indexCards.js`.
2. Add a new object to the `indexCards` array:

```js
{
  title: "New Game Title",
  description: "Short description of the game.",
  image: "img/games/newgame/poster.webp",
  link: "portfolio.html#newgame"
}
```

3. Ensure:
   - The image path is correct.
   - The link anchor matches the portfolio section ID.
   - The description is concise and professional.

No further configuration is required.

---

## 9. Maintenance Guidelines

- Ensure all card images use consistent aspect ratios.
- Keep descriptions short and readable.
- Test card layout on mobile, tablet, and desktop.
- Maintain alphabetical or chronological order as required.
- Avoid inline styles; use CSS classes instead.
- Keep all card logic inside `indexCards.js`.

---
