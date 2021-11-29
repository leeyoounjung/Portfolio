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
  
 $(".slider").each(function (index, node) {
        var $group = $(node);
        var $content = $group.find(" > .content");

        gsap.to($content, {
            xPercent: -100 * ($content.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: $group,
                start: "top top",
                end: "+=" + ($content.length - 1) + "00%",
                pin: true,
                scrub: true,
                markers:true
            }
        });
    });
   
console.clear();
  var $window = $(window);
  
  $window.scroll(function(){
     var scrollTop = $window.scrollTop();
    
    console.log("scrolltop :" + scrollTop);
        
     if (scrollTop <= 700){
      $(".slider-wrap .slider > .move-menu").removeClass("active")
    } else if(scrollTop >= 700){
       $(".slider-wrap .slider > .move-menu").addClass("active")
    } else if(scrollTop == 4500){
      $(".slider-wrap .slider > .move-menu").removeClass("active")
    }
    
  });
   
  $("#move1").click(function(){
    var move = $("#move1").offset();
    $("html").animate({
      scrollTop : move.top},400);
    });
  
});