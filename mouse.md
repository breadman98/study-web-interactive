`# 마우스 커서 따라다니는 물체 만들기`

  
    if(document.addEventListener){
        document.addEventListener("mousemove",getMouse);
    }else if(document.attachEvent){
        document.attachEvent("onmousemove",getMouse);
    }
    
> 이벤트리스너, 어태치이벤트 둘 다 역할은 같지만 브라우저 호환성 문제 때문에 if문을 통한 분기가 필요.<br>
> addEventListener : 표준 브라우저. 이벤트 = event명<br>
> attachEvent : IE8 이하는 안됨. 이벤트 = "on" + event명
    
    
    
    function getMouse(e){
        const mouseLeft = e.clientX;
        const mouseTop = e.clientY;
        //좌표값 받고
        
        document.element('').style.left = mouseLeft -10+"px";
        document.element('').style.top = mouseTop -10+"px";
        //위치잡아줌
    }
  
  
