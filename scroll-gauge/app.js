

 window.addEventListener("scroll",function(){
      let currY = document.documentElement.scrollTop;
      let totalY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let percentage = (currY/totalY)*100;
      document.querySelector(".progress").style.width = percentage + '%';
      document.querySelector(".text").innerHTML = `${percentage.toFixed(0)}%`;
      console.log(percentage);
 })