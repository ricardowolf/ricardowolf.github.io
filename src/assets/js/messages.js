// Start - Slide Info Advertiser 
$('.slide-messages').slick({
    infinite: false,
    slidesToShow: 1,
    variableWidth: true,
    arrows:false,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
        }
    ],
});


// View Users 
$('.box-messages .messages .back-step').click(() => {
  $('.box-messages .users').addClass('view');
});

// Back for messages 
$('.box-messages .box-infos-advertiser .back-step').click(() => {
  $('.box-messages').removeClass('view-infos-advertiser');
});

// Views Messages 
$('.box-messages .users ul li').click(() => {
  $('.box-messages .users').removeClass('view');
});

// Views Infos Advertiser 
$('.box-messages .messages .info-button').click(() => {
  $('.box-messages').toggleClass('view-infos-advertiser');
});

