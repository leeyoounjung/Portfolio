$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
    var wipeAnimation = new TimelineMax()
      // animate to second
      .to(".h-scroll", 1, { z: -180 })
      .to(".h-scroll", 1, { x: "-25%" })
      .to(".h-scroll", 1, { z: 0 })
      // animate to third
      .to(".h-scroll", 1, { z: -180, delay: 0.6 })
      .to(".h-scroll", 1, { x: "-50%" })
      .to(".h-scroll", 1, { z: 0 })
      // animate to forth
      .to(".h-scroll", 1, { z: -180, delay: 0.6 })
      .to(".h-scroll", 1, { x: "-75%" })
      .to(".h-scroll", 1, { z: 0 })
     
    var scene = new ScrollMagic.Scene({
      triggerElement: ".h-scroll-content",
      triggerHook: "onLeave",
      duration: "800%" //이 값이 클 수록 천천히 덮어씀
    })
      .setPin(".h-scroll-content")
      .setTween(wipeAnimation)
      .addIndicators()
      .addTo(controller);
    });
    