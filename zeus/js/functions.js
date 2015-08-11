 /* Funciones */
 function resizeIframe(iframeW,iframeID) {

     /* Capamos las medidas */
     var _iframe = iframeID.parent().find('.iframe-wrapper .iframe');
     var currentIframe = _iframe.width() + 42;
     if (iframeW > 319 && iframeW < 971 && iframeW != currentIframe) {
         /* Modificamos el border dashed */
         var border = iframeW < 970 ? '1px dashed #e2e5e6' : '1px solid #e2e5e6';
         _iframe.css('border-right', border);

         /* Hacemos el resize */
         $(iframeID).add(_iframe).animate({
             width: iframeW
         }, 500);
         var inputResolution = iframeID.find('.input-resolution');
         inputResolution.prop('Counter', _iframe.width() + 41).animate({
             Counter: iframeW
         }, {
             step: function(now) {
                 $(this).val(Math.ceil(now));
             }
         },500);
     }

     return false;
 };

 function resizeMenu() {
     var duration = 500;
     if ($(this).scrollTop() > 160) {
         $('.container-menu').addClass('isFixed');
         $('.container-button-arrow').fadeIn(duration);
     } else {
         $('.container-menu').removeClass('isFixed');
         $('.container-button-arrow').fadeOut(duration);
     }
 }

 function onScroll(event) {
     var scrollPos = $(document).scrollTop();
     var last = $('.nav-float ul li a').first();
     $('.nav-float ul li a').each(function() {
        currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.offset().top <= scrollPos) {
            last = currLink;
            if (!(currLink.parent().parent().hasClass('submenu'))) {
                 $('.display-block').removeClass("display-block");
            };
            currLink.parent().find('.submenu').addClass('display-block');
        }     
     });
    $('.nav-float ul li a').removeClass("active");
    last.addClass("active");
 }