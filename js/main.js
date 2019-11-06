$(document).ready(function(){

    


    $(window).on("load resize",function(){
    var imgWidth = $('.img_box').width();
    var imgBox = $('.img_box')
        imgBox.height(imgWidth)
    });

    // $('.member_info img').on('click',function(){
    //    $(this).parent().next($('.text_content')).slideToggle()
    // })

  
        var owl = $('.owl-carousel');
        owl.owlCarousel({
          
          margin: 10,
          nav: false,
          dots:false,
          loop: false,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 3
            }
          }
        })
      
        $('[data-ui="open"]').on('click', function(){
          $(this).toggleClass('active');
          $(".header_navigation ul").slideToggle()
        });


        $(".back_icon").click(function(){
          window.history.back();
    })

    $('.member_info img').on('click',function(){
      $(this).parent().next($('.text_content')).slideToggle()
   })

   $('.container .product_section .product_info .product_title img').on('click',function(){
    $(this).parent().next($('.text_content')).slideToggle()
 })




})


