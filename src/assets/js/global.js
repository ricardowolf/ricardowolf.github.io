
// Popup Login

$('.login-popup').click(() => {
    $('aside').addClass('view-popup');
  })
  
  $('aside .box-popup-login').click(() => {
    $('aside').addClass('view-popup');
  });
  
  $('aside').click(function(e) {
    if($(e.target).hasClass('view-popup') || $(e.target).hasClass('close')) {
      $('aside').removeClass('view-popup');
    }
  });
  

// Popup Menus

$('.dropbox-filter').click(() => {
  $('.dropbox-filter').toggleClass('view-menus');
});