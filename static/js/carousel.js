$(document).ready(function(){
    var carousel = $('.carousel');

    carousel.slick({
        autoplay: true,
        prevArrow: ".carousel-left-btn",
        nextArrow: ".carousel-right-btn"
    });

    // show carousel wrapper that was hidden to prevent flickering
    carousel.parent().show();
});

