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
$("#go-up").on("click", function(){
     if($(window).scrollTop() <= 1){
         return false;
     }
     $("body").animate({
         scrollTop : 0
     }, 500);

 });











