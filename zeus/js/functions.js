 /* Funciones */
 function resizeIframe(iframeW) {
     /* Capamos las medidas */
     var $iframe = $('.iframe');
     var currentIframe = $iframe.width() + 42;
     if (iframeW > 970 || iframeW < 320 || iframeW == currentIframe) {
         return false;
     } else {
         /* Modificamos el border dashed */
         if (iframeW < 970) {
             $iframe.css('border-right', '1px dashed #e2e5e6');
         } else {
             $iframe.css('border-right', '1px solid #e2e5e6');
         }
         /* Hacemos el resize */
         $('.iframe, .sizes').animate({
             width: iframeW
         }, 500);
         var inputResolution = $('.input-resolution');
         inputResolution.prop('Counter', $iframe.width() + 41).animate({
             Counter: iframeW
         }, {
             duration: 500,
             easing: 'swing',
             step: function(now) {
                 inputResolution.val(Math.ceil(now));
             }
         });
     }
 };

 function resizeMenu() {
     var duration = 500;
     if ($(this).scrollTop() > 160) {
         $('.container-menu').addClass('isFixed');
         $('.button-arrow').fadeIn(duration);
     } else {
         $('.container-menu').removeClass('isFixed');
         $('.button-arrow').fadeOut(duration);
     }
 }

 function onScroll(event) {
     var scrollPos = $(document).scrollTop();
     $('.nav-float ul li a').each(function() {
         var currLink = $(this);
         var refElement = $(currLink.attr("href"));
         if (refElement.length) {
             if (refElement.position().top <= scrollPos) {
                 $('.nav-float ul li a').removeClass("active");
                 if (!(currLink.parent().parent().hasClass('submenu'))) {
                     $('.display-block').removeClass("display-block");
                 };
                 currLink.addClass("active");
                 currLink.parent().find('.submenu').addClass('display-block');
             } else {
                 currLink.removeClass("active");
             }
         }
     });
 }