$(document).ready(function(){

  /* top button */
  $(window).scroll(function(){
    let top = $(this).scrollTop()
    if(top<=200){
      $(".top").hide();
    } else{
      $(".top").show("fast");
    }
  });

  /* quick menu */
  quick = true;
  $(".quickIcon .icon3").click(function(){

    if(quick){
      $(".sns1").stop(true,true).animate({"left":"-110%","opacity":"1"},500,"easeOutBack");
      $(".sns2").stop(true,true).animate({"left":"-150%","opacity":"1"},600,"easeOutBack");
      $(".sns3").stop(true,true).animate({"left":"-80%","opacity":"1"},700,"easeOutBack");
			quick = false;
    }else{
      $(".sns1").stop(true,true).animate({"left":"0","opacity":"0"},200);
      $(".sns2").stop(true,true).animate({"left":"0","opacity":"0"},300);
      $(".sns3").stop(true,true).animate({"left":"0","opacity":"0"},400);
			quick = true;
    }

  });

  /* visual */
  function visualAuto(){
    $(".changeImg ul").stop(true,true).animate({marginLeft:"-=100vw"},500,function(){
      $(".changeImg ul li:first-child").appendTo(".changeImg ul");
      $(this).css({marginLeft:"0px"});
    });
  };
  setInterval(visualAuto,3000);

  /* gnb */
  $(".depth1").hover(function(){ 
    $(this).find(".lnb1").stop().show("slow");
    $(".lnb1Box").stop().show("slow");
  },function(){
    $(this).find(".lnb1").stop().hide("fast");
    $(".lnb1Box").stop().hide("slow");
  });
  
  $(".depth2").hover(function(){ 
    $(".lnb1Box").stop().show("slow");
    $(this).find(".lnb2").stop().show("slow");
  },function(){
    $(this).find(".lnb2").stop().hide("fast");
  });

  /* fulldown */
  $(".fullDown").hover(function(){
    $(this).find(".main .sub").stop().slideDown(500,"easeOutBounce");
  },function(){
    $(this).find(".main .sub").stop().slideUp();
  });

  /* banner */
  function bannerAuto(){
    $(".ban ul").stop(true,true).animate({marginLeft:"-=170px"},500,function(){
      $(".ban ul li:first-child").appendTo(".ban ul");
      $(this).css({marginLeft:"0px"});
    });
  };

  $(".fa-arrow-right").click(function(){
    clearInterval(bauto);
    $(".ban ul").stop(true,true).animate({marginLeft:"-=170px"},300,function(){
      $(".ban ul li:first-child").appendTo(".ban ul");
      $(this).css({marginLeft:"0px"});
    });
    bauto = setInterval(bannerAuto,4000);
  });

  $(".fa-arrow-left").click(function(){
    clearInterval(bauto);
    $(".ban ul").stop(true,true).animate({marginLeft:"170px"},300,function(){
      $(".ban ul li:last-child").prependTo(".ban ul");
      $(this).css({marginLeft:"0px"});
    });
    bauto = setInterval(bannerAuto,4000);
  });

  $(".ban").hover(function(){
    clearInterval(bauto);
  },function(){
    bauto = setInterval(bannerAuto,4000);
  });
  bauto = setInterval(bannerAuto,4000);

  /* tapmenu */
  $(".tab li").click(function(){ 

    let num = $(this).index();
    let move = 70 * num;

    $(".tabHeader .tabHighlight").animate({top:move});
    $(this).siblings("").removeClass("active");
    $(this).addClass("active");
    
    let result = $(this).attr("data-alt");
    $(".tabContents div").removeClass("active");
    $("#"+result).addClass("active");
  });

  $(".mediaBtn li").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let result = $(this).attr("data-alt");

    $(".mediaContents div").removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn();

  });

let soldidx = 0;
let sidx = 0;
let simg_w = $("#largeImg img").width();

$(".thumbs a").click(function(){

  sidx=$(this).index();
  smove=-(simg_w*sidx);

  $(".notice #largeImg").animate({"left":smove});
  $(".thumbs a").eq(soldidx).removeClass("on");
  $(".thumbs a").eq(sidx).addClass("on");
  soldidx=sidx;

return false;
})

  /* scrollmenu */
  $(window).scroll(function(){
    let sc = $(this).scrollTop()
    if(sc>1046){
      $(".scMenuIn").animate({marginLeft:"100px"},900);
    }
  });

  /* modal */
  $(".menu").click(function(){
    $(this).next().show();
    return false;
  });
  $(".close, .pop").click(function(){
    $(".pop").hide();
  });

  /* family site */
  family=true;
  $(".select").click(function(){

    $(".familyIn").stop().slideToggle();
    $(this).toggleClass("active");

    if(family){
      $(this).find("span").html("<i class='fa fa-chevron-down'></i>");
      $(this).find("h3").css({"opacity":"0"});
      family=false;
    }else{
      $(this).find("span").html("<i class='fa fa-chevron-up'></i>");
      $(this).find("h3").css({"opacity":"1"});
      family=true;
    }
  });
});