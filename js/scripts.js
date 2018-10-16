$(document).ready(function(){
  $(".clickable").click(function(){
    $("#initially-showing").fadeToggle();
    $("#initially-hidden").fadeToggle();
  });
  $(".clickable-info").click(function()
  {
    $("#initially-hidden-info").toggle();
    $("#initially-showing-info").toggle();
  })

  $("button#dark").click(function(){
    $("body").addClass("dark-theme");
  });

  $("button#light").click(function(){
    $("body").removeClass();
  });
});
