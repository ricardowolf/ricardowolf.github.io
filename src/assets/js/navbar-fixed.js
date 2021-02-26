$(window).scroll(function () {

    if ($(this).scrollTop() > 100) {

        $('nav').addClass("fixed"), 3000;

    } else {

        $('nav').removeClass("fixed"), 3000;

    }

});