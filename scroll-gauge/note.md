
# `스크롤하면 페이지가 어느정도 위치에 있는지 보여주기`

 `js`
 
    const 현재Y = document.documentElement.scrollTop; 
    const 전체Y = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
   > 현재위치 잡고,<br>
   > 브라우저전체 높이 - 지금 딱 볼수있는화면높이 => 앞으로 남은 스크린의 높이 <br>
   현재Y / 전체Y  => 이걸로 여태 지나간 화면에 대한 전체화면의 비율을 구한다. 여기에 *100 해주면 백분율 
    
`css`

    .progressbar{
     position:fixed;
     ...
      width:100%
      ...
    }
 >게이지가 변할 때 한 틱당 width가 100%의 단위로 변화 하게끔

    .progressbar .progress{
      width:0%;
      ...
    }
 > 게이지 채워지는 효과를 width로 영역을 채워주며 표현하는 원리
  
  
