// // Animate Smoooth Scroll
// $('#view-work').on('click', function() {
//     console.log("It works");
//     const images = $('#images').position().top;
    

//     $('html, body').animate({
//        scrollTop: images 
//     }, 900);
//     console.log("It works");

    
// });

// Smooth scrolling
$('#view-work').on('click', function () {
    console.log('this part works')

    let images = $('#images').position().top;


    $('html, body').animate({
        scrollTop: images
    }, 900);
});