$("#college-introduce").on("click", function(){

    $("body").animate({
        scrollTop : 500
    }, 500);

});
$("#competition-rules").on("click", function(){

        $("body").animate({
            scrollTop : 850
        }, 500)

    });
 $("#exhibition-of-works").on("click", function(){

     $("body").animate({
         scrollTop : 1500
     }, 500);

 });

//�㿪ȫ��
$("#open-all").on("click",function(){
    $("#STEP-02-text").css('overflow','auto');
    $("#STEP-02-text").css('height','inherit');
    $("#open-all").css('display','none');
    $("#put-away").css('display','block');
});
$("#put-away").on("click",function(){
    $("#STEP-02-text").css('overflow','hidden');
    $("#STEP-02-text").css('height','273px');
    $("#open-all").css('display','block');
    $("#put-away").css('display','none');
});

//�ֲ�ͼ
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
    },2000);
}
run() ;

oBanner.onmouseover = function (){
    clearInterval (timer );
};
oBanner.onmouseout = function (){
    run() ;
};


$("#go-up").on("click", function(){
     if($(window).scrollTop() <= 1){
         return false;
     }
     $("body").animate({
         scrollTop : 0
     }, 500);

 });

$("#works img").on("mouseover",function(){
    $(this).css("border-width","1px");
    $(this).css("border-style","solid");
    $(this).css("border-color","#c55d09");
});
$("#works img").on("mouseout",function(){
    $(this).css("border","none");
});

$("#work1").on("click", function(){
    location.href = "detaillizhixiang.html";
});
$("#work2").on("click",function(){
    location.href = "detailchenxiaodan.html";
});
$("#work3").on("click",function(){
    location.href = "detailgelin.html";
});
$("#work4").on("click",function(){
    location.href = "detailhuruikun.html";
});
$("#work5").on("click",function(){
    location.href = "detailliubingyan.html";
});
$("#work6").on("click",function(){
    location.href = "detailwanglin.html";
});
$("#work7").on("click",function(){
    location.href = "detailxufei.html";
});
$("#work8").on("click",function(){
    location.href = "detailzhangzikai.html";
});
$("#work9").on("click",function(){
    location.href = "detailzhouying.html";
});
$("#work10").on("click",function(){
    location.href = "detaildaidejin.html";
});
$("#work11").on("click",function(){
    location.href = "detailwangguangsheng.html";
});
$("#work12").on("click",function(){
    location.href = "detailwanghaichun.html";
});
$("#work13").on("click",function(){
    location.href = "detailqihang.html";
});
