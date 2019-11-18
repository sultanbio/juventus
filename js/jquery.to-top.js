$(function () {

    $('.js-btn-top')
        .hide()
        .click(function () {
            $('html').stop(true).animate({ scrollTop: 0 }, 500);
        });
    

    var show = false;
    $(window).scroll(function () {
        var windowHeight = $(window).innerHeight();

        if (scrollY >= (windowHeight / 2) && show === false) {
            $('.js-btn-top').stop(true).fadeIn('fast');
            show = true;
        }
        else if (scrollY < (windowHeight / 2) && show === true) {
            $('.js-btn-top').stop(true).fadeOut('fast');
            show = false;
        }
    });

});