const works = [
  {
    image: "images/work-01.jpg",
    caption: "Stillness in Bloom, 2026, Textile on fabric, 162.0 × 130.0 cm"
  },
  {
    image: "images/work-02.jpg",
    caption: "Mother-of-Pearl Garden, 2026, Digital textile print, 130.0 × 162.0 cm"
  },
  {
    image: "images/work-03.jpg",
    caption: "Hidden Bloom, 2025, Color on fabric, 112.0 × 81.0 cm"
  },
  {
    image: "images/work-04.jpg",
    caption: "Towards the Surface, 2025, Textile installation, variable size"
  },
  {
    image: "images/work-05.jpg",
    caption: "Quiet Surface, 2024, Textile work, 100.0 × 80.0 cm"
  },
  {
    image: "images/work-06.jpg",
    caption: "Layered Memory, 2024, Mixed media textile, 120.0 × 90.0 cm"
  },
  {
    image: "images/work-07.jpg",
    caption: "Soft Remains, 2023, Fabric and thread, 90.0 × 70.0 cm"
  },
  {
    image: "images/work-08.jpg",
    caption: "Between Fabric and Image, 2023, Textile-based visual work, variable size"
  }
];

let currentIndex = 0;

const artworkImage = document.getElementById("artworkImage");
const artworkCaption = document.getElementById("artworkCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const workCards = document.querySelectorAll(".work-card");

function updateArtwork(index) {
  currentIndex = index;

  artworkImage.style.opacity = "0";

  setTimeout(() => {
    artworkImage.src = works[currentIndex].image;
    artworkCaption.textContent = works[currentIndex].caption;
    artworkImage.style.opacity = "1";
  }, 180);
}

prevBtn.addEventListener("click", () => {
  const nextIndex = currentIndex === 0 ? works.length - 1 : currentIndex - 1;
  updateArtwork(nextIndex);
});

nextBtn.addEventListener("click", () => {
  const nextIndex = currentIndex === works.length - 1 ? 0 : currentIndex + 1;
  updateArtwork(nextIndex);
});

workCards.forEach((card) => {
  card.addEventListener("click", () => {
    const index = Number(card.dataset.index);
    updateArtwork(index);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("is-open");
});

const mobileLinks = document.querySelectorAll(".mobile-nav a");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
  });
});
