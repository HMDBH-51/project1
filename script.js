let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextkBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
evt.preventDefault();
scrollContainer.scrollLeft += evt.deltaY;
scrollContainer.style.scrollBehavior = "smooth";
});

nextBtn.addEventListener("click", ()=> {
scrollContainer.style.scrollBehavior = "smooth";
scrollContainer.scrollLeft += 300;
});

backBtn.addEventListener("click", ()=> {
scrollContainer.style.scrollBehavior = "smooth";
scrollContainer.scrollLeft -= 300;
});