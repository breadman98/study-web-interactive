검색엔진 input type="text"를 form태그 자식요소로 만들고 인풋박스.value를 저렇게 location.href="url"+인풋박스.value 해주면 검색바로됨

    searchForm.addEventListener("submit",function(e){
         e.preventDefault();
        location.href="https://www.google.co.kr/search?q="+searchInput.value;
    })
    
    
  css로 꾸며주는것도 중요한데 애초에 html을 구조적으로 잘 짜줘야 css다루기가 편함
