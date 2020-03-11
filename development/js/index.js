//Carousel-Images//

const previous = document.querySelector(".fa-chevron-left");
const next = document.querySelector(".fa-chevron-right");
const carousel = document.querySelectorAll(".carousel-slide");

let i = 0;

function slide() {
    if (i < 0) {
        i = carousel.length - 1
    }
    if (i >= carousel.length) {
        i = 0;
    }
}
previous.addEventListener("click", function () {
    carousel[i].classList.remove("visible");
    i--
    slide();
    carousel[i].classList.add("visible");
});
next.addEventListener("click", function () {
    carousel[i].classList.remove("visible");
    i++
    slide()
    carousel[i].classList.add("visible");
})