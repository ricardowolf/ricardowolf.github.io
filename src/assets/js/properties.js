// Format Properties

$('.format-properties').click(function(e) {
    e.preventDefault();

    if($('.format-properties span').html() == 'view_module' ) {
        $('.format-properties span').html('view_stream');
    } else {
        $('.format-properties span').html('view_module');
    }

    $('.format-properties').toggleClass('active');

    $('ul.page-properties-slide').toggleClass('list');
});