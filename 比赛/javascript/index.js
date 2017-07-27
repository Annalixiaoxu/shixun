$("#main-nav div").on("click", function(){
    $("html, body").animate({
        scrollTop : $('#' + $(this).data('rel')).offset().top
    }, 500);

});

var $openAll = $("#open-all"),
    $putAway = $("#put-away");
$openAll.on("click",function(){
    $("#STEP-02-text").css({
        'overflow': 'auto',
        'height': 'inherit'
    });
    $(this).css('display','none');
    $putAway.css('display','block');
});
$putAway.on("click",function(){
    $("#STEP-02-text").css({
        'overflow': 'hidden',
        'height': '273px'
    });
    $openAll.css('display','block');
    $(this).css('display','none');
});

//原生代码实现轮播图
(function(){
    var oBanner = document.getElementById("banner");
    var oTab = document.getElementById("tab");
    var aLi = oTab.getElementsByTagName("li");
    var oContent2 = document.getElementById("content2");
    var aImg = oContent2.getElementsByTagName("img");
    var oPrev = document.getElementById ("prev");
    var oNext = document.getElementById ("next");

    var iNow = 0;
    for(var i=0;i<aLi .length;i++){
        aLi[i].index = i;
        aLi[i].onmouseover = function (){
            iNow = this.index;
            changeImg(this.index);
        };

    };

    oPrev.onclick = function (){
        iNow--;
        if(iNow == -1){
            iNow = aLi.length - 1;
        }
        changeImg(iNow);

    };

    oNext.onclick = function () {
        iNow++;
        if (iNow == aLi.length) {
            iNow = 0;

        }
        changeImg(iNow);
    };

    function changeImg(idx){
        for (var i=0; i<aLi.length; i++){
            aLi[i].className = "";
            aImg[i].className = "";
        }
        aLi[idx].className = "selected";
        aImg[idx].className = "selected";
    }

    var timer;
    function run(){
        timer = setInterval(function (){
            oNext.onclick() ;
        },3000);
    }
    run() ;

    oBanner.onmouseover = function (){
        clearInterval (timer );
    };
    oBanner.onmouseout = function (){
        run() ;
    };
})();



$("#go-up").on("click", function(){
     if($(window).scrollTop() <= 1){
         return false;
     }
     $("html, body").animate({
         scrollTop : 0
     }, 500);

 });

