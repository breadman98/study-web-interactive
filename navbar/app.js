const burger = document.querySelector(".navbar-burger");
const menu = document.querySelector(".navbar-menu");
const icon = document.querySelector(".navbar-icon");

burger.addEventListener("click",function(){
     menu.classList.toggle("active");
     icon.classList.toggle("active");
    
})