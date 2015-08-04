$(function() {
  /* Vars */
  var initW = $(document).width();
  var codebox = $(".codebox").val();
  var menuFloat = (initW - 990) / 2 - 190;
  var backTop = (initW - 990) / 2 - 84;

  /* Resize Iframe */ 
  $('.sizes ul li').click(function() {
    var iframeW = parseInt($(this).attr('data-size'), 10);
    $('.sizes ul li.active').removeClass('active');
    $(this).addClass('active');
    resizeIframe(iframeW,1);
  });

  $('#input-resolution').on("change paste", function() {
    var vpWidth = $(this).val();
    resizeIframe(vpWidth,0);
  });

  /* Menu Float */
  $(".menu-float").css('right',menuFloat);
  $(".button-arrow").css('right',backTop);

  /* Copy text */
  $("#copy-content").click(function() {
    copyToClipboard(codebox);
  });

  $('#picto-img').click(function() {
    $( ".menu-dark" ).slideToggle(300);
      $(this).toggleClass('rotated-left rotated-right');
  });

  $('.button-arrow').click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, duration);
      return false;
  })

});