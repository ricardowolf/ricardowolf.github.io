$('.slide-product-template').slick({
    infinite:false,
    variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 670,
          settings: {
            variableWidth: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
    ],
});

$('.slide-property-advertiser').slick({
  infinite:false,
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows: false,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
      }
  ],
});

// View more description 

if($('.description-property .description').height() > 125) {
  $('.view-more').css("display", "none");
}

$.fn.extend({
  toggleText: function(a, b){
      return this.text(this.text() == b ? a : b);
  }
});

$('.view-more').click(() => {
  $('.description-property .description').toggleClass('view-full');
  $('.view-more').toggleText('Mostrar mais', 'Mostrar menos');
})