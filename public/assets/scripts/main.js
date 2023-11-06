"strict";

// ------- STICKY NAV ------------

const sectionHeroEl = document.querySelector(".section-1");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// ------ GOOGLE MAPS API ------

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("contact-map"), {
    center: { lat: 51.5074, lng: -0.1278 }, // London coordinates
    zoom: 10,
  });
}

initMap();

// -------- ROTATING LANDING PICTURES ---------
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");

  if (prevButton) {
    prevButton.addEventListener("click", function () {
      console.log("bu");
      plusSlides(-1);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      console.log("hello");
      plusSlides(1);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentSlide(index + 1);
    });
  });

  // Automatic slide change every 5 seconds
  setInterval(() => {
    plusSlides(1);
  }, 10000);
});

// ---- MOBILE NAV -----
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
