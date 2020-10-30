$(function(){
  

  // Trigger
  $(".trigger").click(function() {
    $(this).toggleClass('active');
    $(".gnb").toggleClass('active');
  })

  $(".gnb a").click(function() {
    $(".gnb, .trigger").removeClass('active');
  })
 
  
  // Header Scroll Change
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, .goto-top').addClass('active')
    }
    else {
      $('header, .goto-top').removeClass('active')
    }    
  })
  
  // Slick.js
  $('.myslider').slick({
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
})