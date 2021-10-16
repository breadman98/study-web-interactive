# 판짜기


   `html` 
   > 한 가운데 콘텐츠 넣을거니까 article 태그로 감싸줌<br>
   > 앨범 클래스를 만드는데, 커버이미지랑 디스크랑 공간을 생각해준다
   > 페이지목록 만들어줌
    
   `css`
   > 효과 들어가는 애들은 콘텐츠가 active상태일때와, default상태일 때를 잘 구분해준다고 생각한다
    
   `js`
   > 버튼누르면 페이지 넘기기, 목록 누르면 해당 페이지로 넘기기
   > 앨범 커버이미지와 어울리는 배경,디스크 색 active주기
 
   

 

# 메모

<h2>js</h2>


    for(let i=0; i<pageLength; i++){
       (function(idx){
           button[idx].onClick = function(){
               cur_page = idx;
               changePage();
          }
      })(i)
    };

> for문 돌면서 idx인자 해당함수에 넘겨주고 클릭될 때, 페이지넘버를 클릭발생한 페이지로 바꿔주기위해 클릭발생한 버튼[idx]와 페이지[idx]를 일치시켜주는모습

즉시실행함수 : https://okayoon.tistory.com/entry/%EC%95%84%ED%8B%B0%ED%81%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-058-%EC%A6%89%EC%8B%9C-%EC%8B%A4%ED%96%89-%ED%95%A8%EC%88%98-IIFE-Immediately-Invoked-Function-Expression



    for(let i=0; i<pageLength; i++){
        button[i].addEventListener("click",()=>{
            cur_page = i;
            changePage();
        })
        
> 이벤트리스너로 한거

------------------------------------------------------------------------------------------------------------------------
      content.style.background = `linear-gradient(120deg,${bgColorArr[pageNum][0]},${bgColorArr[pageNum][1]})`
      small_disk[pageNum].style.background = `${bgColorArr[pageNum][0]}`;
>인덱스만 변수로 해주는게 아니라 배열전체를 변수로 해서 넣어줌. 
<h2>css</h2>


> animation



        tagName{
            ...
            animation: rotateAni 15s ease infinite;
            ...
        }
        @keyframes rotateAni{
            0%{
                transform:rotate(0deg);
            }
            100%{
               transform:rotate(360deg);
            }
        }
------------------------------------------------------------------------------------------------------------------------
> .active이용해서 효과 줬다 뻇다 할 때 주의할점<br>
> opacity,visibilty 둘 다 해줘야 확실하고 안정적임


        tagName{
            ..
            opacity:0;
            visibility:hidden
            ..
        }
        
        tagName.active{
            opacity:1;
            visibility:visible;
        }

