(function(){
    var pc = {};

     function rightArrowClick(){
        if(pc.moveCount > 0){
            pc.listImg.style.left = parseFloat(pc.listImg.style.left,10)+pc.liWidth + "px";
            pc.moveCount--;
        }
     }
     function leftArrowClick(){
        if(pc.listImg.childElementCount-1 > pc.moveCount){
            pc.listImg.style.left = parseFloat(pc.listImg.style.left,10)-pc.liWidth +"px";
            pc.moveCount++;
        }
     }
     function init(){
         pc.moveCount = 0;
         pc.listImg = document.getElementById('listImg');

         var liWidth = pc.listImg.firstElementChild.getBoundingClientRect();
         pc.liWidth = liWidth.width;
         pc.listImg.style.width = pc.liWidth * pc.listImg.childElementCount+"px";
         pc.listImg.style.left = "0px";

         var left = document.getElementById('left');
         var right = document.getElementById('right');
         left.addEventListener('click',leftArrowClick, false);
         right.addEventListener('click',rightArrowClick,false);

     }

     init();
})();