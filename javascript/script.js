$(function(){
    $("#image").click(function(ev){
      $("#image").toggleClass("infocardanimation");
      $("#infocard").toggleClass("transparent");
      $("#skillschart").toggleClass("transparent");
      ev.preventDefault();
    });
  });