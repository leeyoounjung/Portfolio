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
   

  
});

  function fnMove(seq){
        var offset = $(".content" + seq).offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
    }
