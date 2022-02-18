$(function(){
    $("#image").click(function(ev){
      var $width =$(window).width();
      if ($width > 992) {
        $("#image").toggleClass("infocardanimation");
      $("#infocard").toggleClass("transparent");
      $("#skillschart").toggleClass("transparent");
      $(".showcase-text").toggleClass("transparent");
      ev.preventDefault();
      }
    });
  });