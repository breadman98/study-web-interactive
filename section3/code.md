for(let i=0; i<pageLength; i++){
    (function(idx){
        button[idx].onClick = function(){
            cur_page = idx;
            changePage();
        }
    })(i)
};

for문 돌면서 idx인자 해당함수에 넘겨주고 클릭될 때, 페이지넘버를 클릭발생한 페이지로 바꿔주기위해 클릭발생한 버튼[idx]와 페이지[idx]를 일치시켜주는모습

즉시실행함수 : https://okayoon.tistory.com/entry/%EC%95%84%ED%8B%B0%ED%81%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-058-%EC%A6%89%EC%8B%9C-%EC%8B%A4%ED%96%89-%ED%95%A8%EC%88%98-IIFE-Immediately-Invoked-Function-Expression
