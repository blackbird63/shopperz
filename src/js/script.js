// Burger responsive nav

const burgerMenuToggle = document.querySelector("#toggle-menu");

burgerMenuToggle.addEventListener("click", () => {
    burgerMenuToggle.classList.toggle("active");
    document.querySelector(".burger-menu").classList.toggle("active");
});

const burgerMenuToggleOnActive = document.querySelector(".burger-menu__toggle");

burgerMenuToggleOnActive.addEventListener("click", () => {
    burgerMenuToggle.classList.toggle("active");
    document.querySelector(".burger-menu").classList.toggle("active");    
});


