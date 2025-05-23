$(function () {
    // jQueryを記述
    $(window).scroll(function(){
        $("p").html("scloll:" + $(this).scrollTop() + "px")
                .css("color","#ff0000")
                .css("fontSize","24px");
    });
    // $("p")
    // $("target")
}) ;