"strict";

// --------- SMOOTHING SCROLLING ---------
const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     // Scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     // Scroll to other links
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     // Close mobile naviagtion
//     if (link.classList.contains("main-nav-link"))
//       headerEl.classList.toggle("nav-open");
//   });
// });

// ------- STICKY NAV ------------

const sectionHeroEl = document.querySelector(".section-1");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      console.log("1");
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
    // rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

// let lastScrollPosition = 0;
// const sectionHeroEl = document.querySelector(".section-1");

// window.addEventListener("scroll", function () {
//   const currentScrollPosition = window.scrollY || window.pageYOffset;

//   if (currentScrollPosition < lastScrollPosition) {
//     document.body.classList.add("sticky");
//   } else {
//     document.body.classList.remove("sticky");
//   }

//   lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
// });

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
let slideInterval;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clearInterval(slideInterval); // Clear the interval
  showSlides((slideIndex += n));
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 10000); // Restart the interval
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(slideInterval); // Clear the interval
  showSlides((slideIndex = n));
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 10000); // Restart the interval
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
      plusSlides(-1);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", function () {
      plusSlides(1);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentSlide(index + 1);
    });
  });

  // Automatic slide change every 5 seconds
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 10000);
});

// ---- MOBILE NAV -----
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
