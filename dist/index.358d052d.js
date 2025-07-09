let e;document.querySelectorAll("a:link");// allLinks.forEach(function (link) {
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
const t=document.querySelector(".section-1"),n=new IntersectionObserver(function(e){let t=e[0];!1===t.isIntersecting&&(console.log("1"),document.body.classList.add("sticky")),!0===t.isIntersecting&&document.body.classList.remove("sticky")},{// In the viewport
root:null,threshold:0});n.observe(t),async function(){let{Map:e}=await google.maps.importLibrary("maps");new e(document.getElementById("contact-map"),{center:{lat:51.5074,lng:-.1278},zoom:10})}();// -------- ROTATING LANDING PICTURES ---------
let c=1;// Next/previous controls
function l(t){clearInterval(e),o(c+=t),e=setInterval(()=>{l(1)},1e4)}function o(e){let t;let n=document.getElementsByClassName("mySlides"),l=document.getElementsByClassName("dot");for(e>n.length&&(c=1),e<1&&(c=n.length),t=0;t<n.length;t++)n[t].style.display="none";for(t=0;t<l.length;t++)l[t].className=l[t].className.replace(" active","");n[c-1].style.display="block",l[c-1].className+=" active"}o(1),document.addEventListener("DOMContentLoaded",function(){let t=document.querySelector(".prev"),n=document.querySelector(".next"),s=document.querySelectorAll(".dot");t&&t.addEventListener("click",function(){l(-1)}),n&&n.addEventListener("click",function(){l(1)}),s.forEach((t,n)=>{t.addEventListener("click",function(){clearInterval(e),o(c=n+1),e=setInterval(()=>{l(1)},1e4)})}),// Automatic slide change every 5 seconds
e=setInterval(()=>{l(1)},1e4)});// ---- MOBILE NAV -----
const s=document.querySelector(".btn-mobile-nav"),a=document.querySelector(".header");s.addEventListener("click",function(){a.classList.toggle("nav-open")});//# sourceMappingURL=index.358d052d.js.map

//# sourceMappingURL=index.358d052d.js.map
