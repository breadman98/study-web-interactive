const button = document.querySelector(".navbar_burger");
const menu = document.querySelector(".navbar_menu");
const icon = document.querySelector(".navbar_icon");


button.addEventListener("click",()=>{
     menu.classList.toggle("active");
     icon.classList.toggle("active");
});