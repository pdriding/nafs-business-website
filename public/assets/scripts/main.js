console.log("Hello World!!");

const sectionHeroEl = document.querySelector(".section-1");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

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

// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     const response = await fetch("/api/data");
//     const data = await response.json();
//     console.log(data);
//     const apiKey = data.apiKey; // Assuming the response contains the API key

//     const iframe = document.querySelector(".contact-iframe");
//     const src = iframe.getAttribute("src");
//     const newSrc = src.replace(
//       "AIzaSyAv9QoZeOfI8QAZAKtlm29Awm5nL_KknGc",
//       apiKey
//     );
//     iframe.setAttribute("src", newSrc);
//   } catch (error) {
//     console.error("Failed to fetch API key", error);
//   }
// });

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("contact-map"), {
    center: { lat: 51.5074, lng: -0.1278 }, // London coordinates
    zoom: 10,
  });
}

initMap();
