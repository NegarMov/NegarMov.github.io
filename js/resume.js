(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

$(function() {
  $('.fixed-size-tab').each(function() {
    var maxHeight = 0;

    // Find the maximum height for the current tab content
    $(this).find('.tab-pane').each(function() {
      var thisHeight = $(this).outerHeight();
      if (thisHeight > maxHeight) {
        maxHeight = thisHeight;
      }
    });

    // Set the height of the current tab content to the max height found
    $(this).css('height', maxHeight + 'px');
  });


  var maxHeight = 0;

  // Find the maximum height of all the cards
  $(this).find('.skill-card').each(function() {
    var thisHeight = $(this).outerHeight();
    if (thisHeight > maxHeight) {
      maxHeight = thisHeight;
    }
  });

  // Set the height of all the cards to the max height found
  $(this).find('.skill-card').each(function() {
    $(this).css('height', maxHeight + 'px');
  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () { // Configure the AOS animations
  $('h2').each(function() {
    $(this).attr('data-aos', 'fade-up')
  })

  AOS.init({
    duration: 1000,
    easing: 'ease-out'
  })
})

