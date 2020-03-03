//Carousel

const previous = document.querySelector(".fa-chevron-left");
const next = document.querySelector(".fa-chevron-right");


const box = document.querySelectorAll(".box li")
const carousel = document.querySelectorAll(".carousel-slide");


previous.addEventListener("click", function() {
    console.log("Prev - Zostałem naciśnięty ! ")
    
})

next.addEventListener("click", function() {
    console.log("Next - Zostałem naciśnięty !");
   

});
