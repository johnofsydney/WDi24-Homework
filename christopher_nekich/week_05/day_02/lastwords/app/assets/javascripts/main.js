$(document).ready(function(){


  $(".character").on("click", function(){
    var id = $(this).attr("id");
    $(".display").fadeIn(500)
    $(".quotebox").hide();
    // $(".quotebox").removeClass("show");
    // $(`.${id}`).addClass("show");
    $(`.${id}`).fadeIn(1200);
    // $(`.${id}`).removeClass("hide");
  });





});
