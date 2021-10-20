# `화면 맨 아래까지 스크롤을 했는지 확인하기`


`window.innerHeight` : 브라우저에서 실제로 표시되고 있는 영역의 높이. 실제로 사용자가 보고 있는 영역의 높이. (그래서 브라우저 크기에 영향을 받는다.)

`window.scrollY` : 스크롤이 얼마나 이동했는지(Y방향) px로 나타남. 스크롤 내릴수록 값 증가.

`document.body.offsetHeight` : offsetHeight는 요소의 실제 높이이다. 보이는부분, 안보이는부분 다 합한 영역


    if( 보고있는영역높이 + 얼마나내려왔는지 ) >= 전체요소높이{
        끝까지 내려왔으므로 더이상 스크롤 못내린다. // 이 때 새로운 요소를 추가시키도록 한다
        }

참고:https://www.youtube.com/watch?v=9WQBaQs1hC8
