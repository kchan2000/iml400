$(document).ready(function () {

    // put javascript code here
    console.log("page has loaded!");
    
    $(function () {
        $("#gif2, #gif3, #gif4").draggable();
    });



    $('.babyme').hover(function () {
        $('.explainer').fadeIn();
    }, function () {
        $('.explainer').fadeOut();
    });


    $('.button').click(function () {
        $('.pop-up').toggle();
    });



    $(".layer8").click(function () {
        $(".layer8").hide();
    });

    $(".layer7").click(function () {
        $(".layer7").hide();
    });

    $(".layer6").click(function () {
        $(".layer6").hide();
    });

    $(".layer5").click(function () {
        $(".layer5").hide();
    });

    $(".layer4").click(function () {
        $(".layer4").hide();
    });

    $(".layer3").click(function () {
        $(".layer3").hide();
    });

    $(".layer2").click(function () {
        $(".layer2").hide();
    });

    $(".layer1").click(function () {
        $(".layer1").hide();
    });

    $("#img0").click(function () {
        $(".layer1").show();
        $(".layer2").show();
        $(".layer3").show();
        $(".layer4").show();
        $(".layer5").show();
        $(".layer6").show();
        $(".layer7").show();
        $(".layer8").show();

    });





});
