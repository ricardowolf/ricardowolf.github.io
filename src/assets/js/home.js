$('.slide-home').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 760,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow:1 ,
            slidesToScroll: 1,
          }
        }
    ],
});

$('.slide-home-views').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
});
