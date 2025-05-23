$(function () {
    // jQueryを記述
    // $("p").fadeIn();

    // 引数あり
    // $("p").fadeIn(5000);

    // 終了後の処理を指定
    $("p").fadeIn(3000,function() {
        $(this).css("color","#FF0000")
    })
}) ;