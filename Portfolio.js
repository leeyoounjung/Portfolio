$(document).ready(function(){
    $(".paper > .right-btn").click(function(){
        $(".paper02").addClass("active");
      });
      $(".paper02 > .left-btn").click(function(){
        $(".paper02").toggleClass("active");
      });
      $(".paper02 > .right-btn").click(function(){
        $(".paper03").addClass("active");
      });
      $(".paper03 > .left-btn").click(function(){
        $(".paper03").toggleClass("active");
      });
});