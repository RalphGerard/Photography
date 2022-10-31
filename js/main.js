// Animate Smoooth Scroll
$('#view-work').on('click', function() {
    console.log("It works");
    const images = $('#images').position().top;
    

    $('html, body').animate({
       scrollTop: images 
    }, 900);
    console.log("It works");

    
});