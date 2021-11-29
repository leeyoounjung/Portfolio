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
    } 
    // else if(scrollTop >= 4500){
    //   $(".slider-wrap .slider > .move-menu").fadeOut()
    // }
    
    if(scrollTop > 5810){
      $(".slider-wrap .slider > .move-menu").removeClass("active")
    }
    
  });
console.log($(this).scrollTop());
            if ($(this).scrollTop() == 0) {
                $(".move-menu").hide();
            }
            $(document).scroll(function() {
                if ($(this).scrollTop() > 0) {
                    $(".move-menu").show();
                } else {
                    $(".move-menu").hide();
                }
            })

            $(".move01").click(function() {
                $("html,body").animate({
                    scrollTop: 900
                }, 1000)
            })
            $(".move02").click(function() {
                $("html,body").animate({
                    scrollTop: 1800
                }, 1000)
            })
             $(".move03").click(function() {
                $("html,body").animate({
                    scrollTop: 2800
                }, 1000)
            })
             $(".move04").click(function() {
                $("html,body").animate({
                    scrollTop: 3800
                }, 1000)
            })
             $(".move05").click(function() {
                $("html,body").animate({
                    scrollTop: 4800
                }, 1000)
            })
             $(".move06").click(function() {
                $("html,body").animate({
                    scrollTop: 5813
                }, 1000)
            })
  function move(){
    window.open("https://github.com/leeyoounjung");
    window.open("https://to2.kr/dcU");
  }
  
});