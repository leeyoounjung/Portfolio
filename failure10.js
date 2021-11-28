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
  
  // function fnMove(seq){
  //       var offset = $(".content" + seq).offset();
  //       $('html, body').animate({scrollTop : offset.top}, 400);
  //   }
  
        $(".menu1").on("click",function(event){
          // 이동 버튼을 클릭시 pre 태그로 스크롤의 위치가 이동되도록 한다.
 
          // 1. pre태그의 위치를 가지고 있는 객체를 얻어온다. => offset 객체
          var offset = $("#preId").offset();
 
          // offset은 절대 위치를 가져온다. offset.top을 통해 상단의 좌표를 가져온다.
          // position은 부모를 기준으로한 상대위치를 가져온다.
          $("html body").animate({scrollTop:offset.top},2000);
 
        });

  
});
