const menu = document.querySelector("#mobile_menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
});

// Function to make Titles move
const logos = document.querySelector(".rotating__logos-track").cloneNode(true);
document.querySelector(".rotating__logos").appendChild(logos);