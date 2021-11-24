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
        gsap.to(".slider",{
        x : "-120vh" ,
        scrollTrigger :{
        markers : true ,
        start : "0 0" ,
        end : "100% 0" ,
        toggleActions : "restart none none none" ,
  }
  })
});