$(document).ready(function () {
  $(document).on("scroll", onScroll);

  /* Vars */
  var initW = $(document).width();
  var offset = 160;

  /* Resize Iframe */ 
  $('.sizes ul li').click(function() {
    var iframe = $(this).parent().parent();
    var iframeW = parseInt($(this).attr('data-size'));
    iframe.find('li').removeClass('active');
    $(this).addClass('active');

    resizeIframe(iframeW,iframe);
  });

  $('.input-resolution').on("change paste", function() {
    var iframeW = $(this).val();
    var iframe = $(this).parent();
    iframe.find('li').removeClass('active');

    switch(iframeW){
      case '970':
          iframe.find('.desktop').addClass('active');
          break;
      case '768':
          iframe.find('.ipad').addClass('active');
          break;
      case '320':
          iframe.find('.mobile').addClass('active');
          break;
    }
    resizeIframe(iframeW,iframe);
  });

  $('#picto-img').click(function() {
    $( ".menu-dark" ).slideToggle(300);
    $(this).toggleClass('rotated-left rotated-right');
  });

  $("#picto").mouseenter(function() {
    $(this).find("path, polygon, circle").attr("fill", "#2088c2");
  }).mouseleave(function() {
    $(this).find("path, polygon, circle").attr("fill", "#999999");
  });

  $('.nav-float ul li a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $('.nav-float ul li a').removeClass('active');
      $target = $(this.hash);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 500, function () {
          window.location.hash = this.hash;
      });
  });

  $('.button-arrow').click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 500);
      return false;
  })

  $('.copy-content').mouseleave(function() {
    $(this).prop('title', 'Copy to clipboard')
  })

  var client = new ZeroClipboard($('.copy-content'));
  client.on( 'copy', function(event) {
    event.clipboardData.setData('text/plain', $(event.target).next().html());
  });
  client.on( 'aftercopy', function(event) {
    $('.zeroclipboard-is-hover').prop('title', 'Copied!');
  } );

});

$(window).scroll(function() {
  resizeMenu();
});