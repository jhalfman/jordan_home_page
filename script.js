const smash = document.getElementById("smashbros");
smash.addEventListener('click', function() {
    alert('Luigi, Sheik, and Ness!');
});

const cats = document.getElementById("finalpic");
const pics = document.getElementById("lastone")
cats.addEventListener("mouseover", function(event) {
    pics.style.zIndex = "0";
})

cats.addEventListener("mouseleave", function(event) {
    pics.style.zIndex = "-2";
})