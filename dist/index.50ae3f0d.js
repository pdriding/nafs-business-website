console.log("Hello World!!");const e=document.querySelector(".section-1"),o=new IntersectionObserver(function(e){let o=e[0];console.log(o),!1===o.isIntersecting&&document.body.classList.add("sticky"),!0===o.isIntersecting&&document.body.classList.remove("sticky")},{// In the viewport
root:null,threshold:0,rootMargin:"-80px"});o.observe(e),async function(){let{Map:e}=await google.maps.importLibrary("maps");new e(document.getElementById("contact-map"),{center:{lat:51.5074,lng:-.1278},zoom:10})}();//# sourceMappingURL=index.50ae3f0d.js.map

//# sourceMappingURL=index.50ae3f0d.js.map
