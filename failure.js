$(document).ready(function(){
    let d_width = 0;
    let d_height = 0;
    
    function tmp(){
      let con_width = $(window).otherWidth() * $(".content").length
    };
    
    $(".h-scroll").css({
      width : con_width ,
      height : "100vh" ,
      position : "fixed" ,
      top : 0 ,
      left : 0 ,
    });
    
    $(".content").css({
      width : cin_width / $(".content").length ,
      height : "100vh" ,
      float : "left" ,
    });
    
    $("body").css({
      height : "100vh" ,
    });
    
    d_width = con_width - w_width;
    d_height = $("body").height() - w_height
    
    
    tmp();
    
    let array = [];
    for(let i =0 ; i < $(".content").length ; i++){
      arrar[i] = $(".content").eq(i).offset().left
    }
  
    let chk = true;
    $(".content").on("mousuwheel DOMMouseScroll", function(){
      
      if(chk){
        chk = false;
        setTimeout(function(){
          chk = true;
        },500)
        
        let w_delta = event.wheelDelta / 120;
        
        if(w_delta < 0 && $(this).next().length > 0){
          $(".h-scroll").animate({
            left : -array[$(this).index()+1]
          },500)
        }
        else if(w_delta > 0 && $(this).prev().length > 0){
          $(".h-scroll").animate({
            left : -array[$(this).index()-1]
          },500)
        }
      }
    });
    
    $(window).resize(function(){
      for(let i =0 ; i < $(".content").length; i++){
        array[i] = $(".content").eq(i).offset().left
      }
      tmp()
    });
  });