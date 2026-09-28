const menuButton = document.getElementById("menu-button");
const mainNav = document.getElementById("main-nav");

menuButton.onclick = () => {
    mainNav.classList.toggle("hide-small");
};