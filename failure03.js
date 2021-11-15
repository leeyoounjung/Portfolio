$(document).ready(function () {
    function SectionGroup__init() {
      $(".h-scroll").each(function (index, node) {
          var $group = $(node);
          var $section = $group.find(" > .content");
  
          gsap.to($section, {
              xPercent: -100 * ($section.length - 1),
              ease: "none",
              scrollTrigger: {
                  trigger: $group,
                  start: "top top",
                  end: "+=" + ($section.length - 1) + "00%",
                  pin: true,
                  scrub: true,
                  markers:true
              }
          });
      });
    }
    
    SectionGroup__init();
  
  });
  