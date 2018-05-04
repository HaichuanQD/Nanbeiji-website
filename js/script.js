$(document).ready(function(){
      /*$('.swiper-wrapper').on('init', function(slick) {
            $('.swiper-wrapper').css("visibility","visible");
            $('.swiper-wrapper').css("opacity","1");
        })*/
      
      

      $('.swiper-wrapper').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        prevArrow: $('.customprev'),
        nextArrow: $('.customnext'),
        speed:500,
        touchThreshold:20,
        responsive: [
        {
          breakpoint:1200,
          settings:{
            autoplay: true,
            pauseOnHover: false,
            infinite: true,
            arrows: false,
            prevArrow: '',
            nextArrow: '',
          }

        }]
});
      $('.swiper-wrapper').slickAnimation();
      $(".swiper-container").hover(function () {
         $('.customnext').removeClass("animated fadeOut");
         $('.customprev').removeClass("animated fadeOut");
         $('.customnext').addClass("animated fadeIn");
         $('.customprev').addClass("animated fadeIn");
         },
         function () {
         $('.customnext').removeClass("animated fadeIn");
         $('.customprev').removeClass("animated fadeIn");
         $('.customnext').addClass("animated fadeOut");
         $('.customprev').addClass("animated fadeOut");
}) ;
         
         
         





         
        $('.others_slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        slidesToShow: 5,
        speed:500,
        touchThreshold:100,
        variableWidth: true,
        arrows:false,
        draggable:false,
        pauseOnHover:false,
        swipe:false,
});
        $('.slider_moblie').slick({
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                speed:200,
                touchThreshold:100,
                arrows:false,
                draggable:true,
                pauseOnHover:false,
        });

        AOS.init({
          once: true,
          offset:180,
          });
    
    
    });
    lightbox.option({
    'albumLabel': "第 %1 张   共 %2 张"
  }) 