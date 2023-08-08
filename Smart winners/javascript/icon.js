$(document).ready(function() {
    $("#navicon").click(function() {
        $(".small-bar").toggle();
    });

    $(document).on('scroll', function() {
        $(".small-bar").hide();
    });

    $(".reveal-answer1").click(function() {
        $(".answers1").toggle();
    });
    $(".reveal-answer2").click(function() {
        $(".answers2").toggle();
    });
    $(".reveal-answer3").click(function() {
        $(".answers3").toggle();
    });
});

$(document).ready(function() {
    $('.answers1').hide();
    $('.answers2').hide();
    $('.answers3').hide();
});