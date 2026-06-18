// Cards to display new games on the index page
const indexCards = [
  {
    title: "Piecefall",
    image: "img/games/piecefall/A0piecefall_compressed_poster.png",
    link: "portfolio.html#piecefall",
  },
  {
    title: "Racecar Crashers",
    image: "img/games/rcc/A0_racecar_crashers_.png",
    link: "portfolio.html#rcc",
  },
  {
    title: "The Chantry",
    image: "img/games/theChantry/A0_The_Chantry_poster.png",
    link: "portfolio.html#chantry",
  },
  // Add more cards here as needed - See SOP "JS CARDS" for instructions.
];

// Sorting state
let newestFirst = true;

// Rendering cards function
function renderCards() {
  const container = document.getElementById("cardCarousel");
  container.innerHTML = "";

  indexCards.forEach((card) => {
    const cardHTML = `
      <a href="${card.link}" class="text-decoration-none card-link-wrapper">
        <div class="card" style="min-width: 280px; max-width: 280px;">
          <img src="${card.image}" class="card-img-top" alt="${card.title}">
          <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
          </div>
        </div>
      </a>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

renderCards();

// Slider buttons
const carousel = document.getElementById("cardCarousel");
document.querySelector(".left-btn").onclick = () => {
  carousel.scrollLeft -= 300;
};
document.querySelector(".right-btn").onclick = () => {
  carousel.scrollLeft += 300;
};

// // Toggle sorting order
// document.getElementById("sortToggle").addEventListener("click", () => {
//   newestFirst = !newestFirst;
//   document.getElementById("sortToggle").textContent = newestFirst
//     ? "Sort by Newest"
//     : "Sort by Oldest";
//   renderCards();
// });
// renderCards(); // Initial render
