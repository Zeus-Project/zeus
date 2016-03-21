$(window).resize(function() {
  var initW = $(document).width();
  var menuFloat = (initW - 990) / 2 - 190;
  var backTop = (initW - 990) / 2 - 84;
  $(".menu-float").css('right', menuFloat);
  $(".button-arrow").css('right', backTop);
});
