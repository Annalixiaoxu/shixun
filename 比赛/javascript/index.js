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

//点开全文
$("#open-all").on("click",function(){
    $("#STEP-02-text").css('overflow','auto');
    $("#STEP-02-text").css('height','inherit');
    $("#open-all").css('display','none');
    $("#put-away").css('display','block');
});
$("#put-away").on("click",function(){
    $("#STEP-02-text").css('overflow','hidden');
    $("#STEP-02-text").css('height','80px');
    $("#open-all").css('display','block');
    $("#put-away").css('display','none');
});

//轮播图
var oBanner = document.getElementById('banner');
var oTab = document.getElementById('tab');
var aLi = oTab.getElementsByTagName('li');
var oContent = document.getElementById('content');
var aImg = oContent.getElementsByTagName('img');
var oPrev = document.getElementById('prev');
var oNext = document.getElementById('next');

var iNow = 0;

for(var i=0; i<aLi.length; i++){
    aLi[i].index = i;
    aLi[i].onmouseover = function(){
        changeImg(this.index);
    };
}

oPrev.onclick = function(){
    iNow--;
    if(iNow == -1){
        iNow = aLi.length - 1;
    }
    changeImg(iNow);
};
oNext.onclick = function(){
    iNow++;
    if(iNow == aLi.length){
        iNow = 0;
    }
    changeImg(iNow);
};

function changeImg(idx){
    for(var i=0; i<aLi.length; i++){
        aLi[i].className = '';
        aImg[i].className = '';
    }
    aLi[idx].className = 'selected';
    aImg[idx].className = 'selected';
}

var timer;
function run(){
    timer = setInterval(function(){
        oNext.onclick();
    }, 2000);
}
run();

oBanner.onmouseover = function(){
    clearInterval(timer);
};
oBanner.onmouseout = function(){
    run();
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
    location.href = "detail.html";
});
$("#work2").on("click",function(){


})