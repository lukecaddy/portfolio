// Navbar 

$(document).ready(function() {
  $('.drawer').drawer();
}); 


// Section animator

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1100);
    }
});

// Modal
