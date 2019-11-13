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





// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("img_zoom");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = document.getElementById("myImg").src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}



window.onscroll = function() {myFunction()};
    
var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky")
} else {
navbar.classList.remove("sticky");
}
}


