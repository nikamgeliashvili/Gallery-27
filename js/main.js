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

    $('.team_members').on('click',function(){
      $(this).find($('.text_content')).slideToggle()
   })

   $('.container .product_section .product_info .product_title ').on('click',function(){
    $(this).next($('.text_content')).slideToggle()
 })




})



// window.onscroll = function() {myFunction()};
    
// var navbar = document.getElementById("nav");
// var sticky = navbar.offsetTop;

// function myFunction() {
// if (window.pageYOffset >= sticky) {
// navbar.classList.add("sticky")
// } else {
// navbar.classList.remove("sticky");
// }
// }


var $headerCont = $("header");
  var $subHeader = $(".sub-header");
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      $headerCont.removeClass('sticky');
    } else {
      $headerCont.addClass('sticky');
    }

    prevScrollpos = currentScrollPos;
  };



$(document).ready(function(){

    $(".account_img_change_box span").click(function () {
    $(".account_img_change_box input").click();
  });
  $(function () {
    $(".account_img_change_box input").change(function () {
      readURL(this);
    });
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#account_img').attr('src', e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

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









