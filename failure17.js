$(document).ready(function(){
  $(".paper01 > .btn-wrap > .right-btn").click(function(){
    $(".paper02").addClass("active");
  });
  $(".paper02 > .btn-wrap > .left-btn").click(function(){
    $(".paper02").toggleClass("active");
  });
  $(".paper02 > .btn-wrap > .right-btn").click(function(){
    $(".paper03").addClass("active");
    $(".paper02 > .btn-wrap").addClass("active");
    $(".paper01 > .btn-wrap").addClass("active");
  });
  $(".paper03 > .btn-wrap > .left-btn").click(function(){
    $(".paper03").toggleClass("active");
    $(".paper02 > .btn-wrap").removeClass("active");
    $(".paper01 > .btn-wrap").removeClass("active");
  });
  
function moveBtn(){
            var ele=document.getElementById('progressbar');
            var width = 5;
            var id =setInterval(frame, 45);
            function frame(){
                if(width>=100){
                    clearInterval(id);
                }else{
                    width ++;
                    ele.style.width=width+"%";
                    ele.innerHTML=width+"%";
                }
            }
        }
  
  
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
            });

            $(".move01").click(function() {
                $("html,body").animate({
                    scrollTop: 900
                }, 1000)
            });
            $(".move02").click(function() {
                $("html,body").animate({
                    scrollTop: 1800
                }, 1000)
            });
             $(".move03").click(function() {
                $("html,body").animate({
                    scrollTop: 2800
                }, 1000)
            });
             $(".move04").click(function() {
                $("html,body").animate({
                    scrollTop: 3800
                }, 1000)
            });
             $(".move05").click(function() {
                $("html,body").animate({
                    scrollTop: 4800
                }, 1000)
            });
             $(".move06").click(function() {
                $("html,body").animate({
                    scrollTop: 5813
                }, 1000)
            });
  
  function move(){
    window.open("https://github.com/leeyoounjung");
    window.open("https://to2.kr/dcU");
    window.open("https://codepen.io/dldbswjdddl/pen/eYEyNao?editors=1000");
    window.open("https://codepen.io/dldbswjdddl/pen/wvqpWZO?editors=1000");
  };
  
});