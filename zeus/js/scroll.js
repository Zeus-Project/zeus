  var offset = 220;
  var duration = 500;
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.button-arrow').fadeIn(duration);
    } else {
      $('.button-arrow').fadeOut(duration);
    }
  });
