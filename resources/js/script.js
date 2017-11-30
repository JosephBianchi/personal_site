$(document).ready(function() {





// scroll on BUTTONS
  $('.js--scroll-to-port').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-portfolio').offset().top}, 1000)
  });

  $('.js--scroll-to-header').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-header').offset().top}, 1000)
  });

  $('.js--scroll-to-skills').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-skills').offset().top}, 1000)
  });

  $('.js--scroll-to-contact').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000)
  });

// animations on scroll

  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass("animated fadeInLeft");
  }, {
    offset: '50%'
  });






});
