const searchBox = document.querySelector(".search-box");
const icon = document.querySelector(".icon");

icon.addEventListener("click",function(){
     searchBox.classList.toggle("active");
     icon.classList.toggle("active");
})


const searchForm = document.querySelector(".search-box");
const searchInput = document.querySelector(".search-box input");

searchForm.addEventListener("submit",function(e){
     e.preventDefault();
     location.href="https://www.google.co.kr/search?q="+searchInput.value;
     searchInput.value="";
})