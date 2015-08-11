$(document).ready(function () {
  $(document).on("scroll", onScroll);

  /* Vars */
  var initW = $(document).width();
  var offset = 160;

  /* Resize Iframe */ 
  $('.sizes ul li').click(function() {
    var iframeID = $('#'+$(this).parent().parent().attr('id'));
    var iframeW = parseInt($(this).attr('data-size'), 10);

    iframeID.find('.active').removeClass('active');
    $(this).addClass('active');

    resizeIframe(iframeW,iframeID);
  });

  $('.input-resolution').on("change paste", function() {
    var vpWidth = $(this).val();
    var iframeID = $('#'+$(this).parent().attr('id'));

    iframeID.find('.active').removeClass('active');
    switch(vpWidth){
      case '970':
          iframeID.find('.desktop').addClass('active');
          break;
      case '768':
          iframeID.find('.ipad').addClass('active');
          break;
      case '320':
          iframeID.find('.mobile').addClass('active');
          break;
    }
    resizeIframe(vpWidth,iframeID);
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

  $('.copy-content').mouseleave(function() {
    $(this).prop('title', 'Copy to clipboard')
  })

  $('.nav-float ul li a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $('.nav-float ul li a').each(function () {
          $(this).removeClass('active');
      })
      var target = this.hash,
      menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });

  $('.button-arrow').click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 500);
      return false;
  })

  var client = new ZeroClipboard($('.copy-content'));
  client.on( 'copy', function(event) {
    alert($(this).html());
    $codebox = $('.codebox');
    event.clipboardData.setData('text/plain', $codebox.html());
  });
  client.on( 'aftercopy', function(event) {
    $('.zeroclipboard-is-hover').prop('title', 'Copied!');
  } );

});

$(window).scroll(function() {
  resizeMenu();
});