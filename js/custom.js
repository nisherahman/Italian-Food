$(document).ready(function(){
   // scroll position
   $(window).on('scroll',function(){
    var scrolling = $(this).scrollTop();

    // back to top appearance 
    if(scrolling > 100){
      $('.back-to-top').fadeIn();
    }else{
      $('.back-to-top').fadeOut();  
    }
    // navbar class 
    if(scrolling > 150){
      $('nav').addClass('nav-fix');
    }else{
      $('nav').removeClass('nav-fix');
    }

    });

    // back to top action 
    $('.back-to-top').on('click',function(){
      $('html,body').animate({
      scrollTop: '0px',
    },2000);

    });

    //wow js
    new WOW().init();

    //discount image tilt
    $('.discount-img1').tilt();
    $('.discount-img2').tilt();

});