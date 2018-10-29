$("#no1").on('click', function() {
    $("#pg1").fadeIn();
    $("#pg2,#pg3,#pg4,#pg5,#pg6,#pg7").fadeOut();
});
$("#no2").on('click', function() {
    $("#pg2").fadeIn();
    $("#pg1,#pg3,#pg4,#pg5,#pg6,#pg7").fadeOut();
});
$("#no3").on('click', function() {
    $("#pg3").fadeIn();
    $("#pg2,#pg1,#pg4,#pg5,#pg6,#pg7").fadeOut();
});
$("#no4").on('click', function() {
    $("#pg4").fadeIn();
    $("#pg2,#pg3,#pg1,#pg5,#pg6,#pg7").fadeOut();
});
$("#no5").on('click', function() {
    $("#pg5").fadeIn();
    $("#pg2,#pg3,#pg4,#pg1,#pg6,#pg7").fadeOut();
});
$("#no6").on('click', function() {
    $("#pg6").fadeIn();
    $("#pg2,#pg3,#pg4,#pg5,#pg1,#pg7").fadeOut();
});
$("#no7").on('click', function() {
    $("#pg7").fadeIn();
    $("#pg2,#pg3,#pg4,#pg5,#pg6,#pg1").fadeOut();
});
