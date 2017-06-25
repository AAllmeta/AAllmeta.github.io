$(document).ready(function () {
  $('h1').typeIt({
    strings: ["{hello world}", "{My name is Arben}"],
    speed: 150,
    breakLines: false,
    deleteDelay: 800,
    autoStart: true
  });

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height < 300) {
      pix(height);
    }
  });

  function pix (height) {
    $('h3').typeIt({
      strings: '{About me}',
      speed: 150,
      autoStart: true
    });
    return;
  }
});
