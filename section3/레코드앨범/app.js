const prev_button = document.querySelector(".prev");
const next_button = document.querySelector(".next");
const controller = document.querySelectorAll(".control-wrap li");

const content = document.querySelector(".content-wrap");

const small_disk = document.querySelectorAll(".small-disk");
const section = document.querySelectorAll("section"); //앨범

let pageNum = 0;
let pageLength = section.length;

const bgColorArr = new Array();
bgColorArr[0] = ["#c6c5c4","#464646"];
bgColorArr[1] = ["#5e130a","#e98f33"];
bgColorArr[2] = ["#a060aa","#a4c27d"];

prev_button.addEventListener("click",function(){
     if(pageNum > 0){
          pageNum--;
     }else{
          pageNum = pageLength - 1;
     }
     pageChange();
})

next_button.addEventListener("click",function(){
     if(pageNum < pageLength -1){
          pageNum++;
     }else{
          pageNum = 0;
     }
     pageChange();
})

//최초실행
pageChange();

function pageChange(){
     for(let i=0; i<pageLength; i++){
          section[i].classList.remove("active");
          controller[i].classList.remove("active");
     }
     section[pageNum].classList.add("active");
     controller[pageNum].classList.add("active");
     content.style.background = `linear-gradient(120deg,${bgColorArr[pageNum][0]},${bgColorArr[pageNum][1]})`
     small_disk[pageNum].style.background = `${bgColorArr[pageNum][0]}`;
}

for(let i=0; i<pageLength; i++){
     controller[i].addEventListener("click",function(){
          pageNum = i;
          pageChange();
     })
}