// Animate Smoooth Scroll
$('#view-work').on('click', function() {
    const codes = $ ('#codes').position().top;

    $('html,body').animate({
       scrollTop: codes 
    }, 900);
});