const openButton = document.querySelector(".open");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".close");
const noButton = document.querySelector(".no");

openButton.addEventListener("click", function () {
    popup.style.display = "block";
    openButton.style.display = "none";   
});

closeButton.addEventListener("click", function () {
    popup.style.display = "none";
    openButton.style.display = "block"; 
});

noButton.addEventListener("click", function () {
    popup.style.display = "none";
    openButton.style.display = "block";  
});