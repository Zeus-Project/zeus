 /* Funciones */
  function resizeIframe(iframeW,input){
    $('#iframe, .sizes').animate({width:iframeW}, 500);
    if(input == 1){
          var inputResolution = $('#input-resolution');
          inputResolution.prop('Counter',$('#iframe').width() + 41).animate({
              Counter: iframeW
          }, {
              duration: 500,
              easing: 'swing',
              step: function (now) {
                  inputResolution.val(Math.ceil(now) + 'px');
              }
          });
    }
  };

  function copyToClipboard(text) {
    $(".codebox").select();
    var successful = document.execCommand('copy');
    var msg = successful ? 'correctamente' : 'incorrectamente';
    alert('Copiado ' + msg);
  }