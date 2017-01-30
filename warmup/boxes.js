$(".orange").hover(function(){
        $(this).css("background-color", "Blue");
        }, function(){
        $(this).css("background-color", "pink");
    });
$(".orange").mousedown(function(){
    $(this).css("background-color", "red");
});

$(".orange").bind("click", function(){
       $(this).css("background-color", "yellow");
    });
$(".orange").dblclick(function(){
    $(this).css("background-color", "green");
});
$(window).scroll(function() {
  $(".orange").css("background-color", "orange");
});


    $(window).keypress(function(){
        $(".orange").css("background-color", "black");
    });
   