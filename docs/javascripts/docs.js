$(document).ready(function(){
  // 2.1 Menu for Mobile Devices
  // If JS is enabled, attach the 'hide' class (only affects mobiles - special media query class)
  $('.navigation').prepend('<a href="#" class="nav-toggle nodesktop notablet nomobile">Navigation <span class="arrow">+</span></a>');
  $(".nav-toggle").removeClass('nomobile').addClass('showmobile');
  $('.menu').addClass("nomobile");

  // When the navigation button is clicked, toggle menu
  $(".nav-toggle").click(function() {
    if ( $('.menu:visible').length < 1 ) {
      $('.menu').stop(true, true).slideDown(200, function() {
        $('.nav-toggle .arrow').html('-');
        $('.nav-toggle').toggleClass('active');
        $(this).removeClass('nomobile').removeAttr('style');
      });
    } else {
      $('.menu').stop(true, true).slideUp(200, function() {
        $('.nav-toggle .arrow').html('+');
        $('.nav-toggle').toggleClass('active');
        $(this).addClass('nomobile').removeAttr('style');
      });
    };
    return false;
  });
  
});  