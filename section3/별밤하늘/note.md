


> 큰 배경 뒤에 잡아주고 그 위에 section으로 덮어준 다음 section의 이미지를 position:fixed; -> js에서 스크롤 이벤트 처리를 해줌
> 여기서 section의 이미지는 스크롤 될 때 움직이면 좋겠다 싶은 애임. 

    window.addEventListener("scroll",function(){
        배경element.style.transform = `translateY${-scroll/3}px`
    })
  
