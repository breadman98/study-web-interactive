const burger = document.querySelector(".navbar_burger");
const menu = document.querySelector(".navbar_menu");
const icon = document.querySelector(".navbar_icon");

burger.addEventListener("click",()=>{  
     menu.classList.toggle("active");
     icon.classList.toggle("active");
     
})

