function myFunction() {
  var checkBox = document.getElementById("new_adress_button");
  var adressform = document.getElementById("new_adress");

  if (checkBox.click) {
    adressform.style.display = "block";
  }

}


var userAgent = window.navigator.userAgent;

if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
  $("#nav").css("top", "0px")

}




// function hidefunction() {
//   var checkBox = document.getElementById("new_adress_button");
//   var adressform = document.getElementById("new_adress");

//   if (checkBox.checked == false) {
//     adressform.style.display = "none";
//   }

// }



$(document).ready(function () {


  // var checkBox = document.getElementById("checked_radio");
  // var adressform = document.getElementById("new_adress")

  // if (checkBox.checked == true) {
  //   adressform.style.display = "block";
  // } else {
  //   adressform.style.display = "none";
  // }








  $(window).on("load resize", function () {
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
    dots: true,
    loop: false,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      991: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  })
  var ind = true;
  $('[data-ui="open"]').on('click', function () {
    $('.responsive_navigation').css('display', 'block');

  });

  $('.close_navigation').on('click', function () {
    $('.responsive_navigation').css('display', 'none');

  });




  $(".back_icon").click(function () {
    window.history.back();
  })

  $('.team_members').on('click', function () {
    $(this).find($('.text_content')).slideToggle()
  })

  $('.team_members').on('click', function () {
    $(this).find($('svg')).toggleClass('rotate')
  })

  $('.container .product_section .product_info .product_title ').on('click', function () {
    $(this).next($('.text_content')).slideToggle()
  })


  $('.container .product_section .product_info .product_title ').on('click', function () {
    $(this).find($('svg')).toggleClass('rotate')
  })


  $('.past_workshops .row .reg_button').on('click', function () {
    $('.past_workshops .registration_container').slideToggle()
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



$(document).ready(function () {

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
if (document.getElementById("img_zoom") !== null) {


  var modal = document.getElementById("myModal");


  var img = document.getElementById("img_zoom");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = document.getElementById("myImg").src;
    captionText.innerHTML = this.alt;
  }


  var span = document.getElementsByClassName("close")[0];


  span.onclick = function () {
    modal.style.display = "none";
  }
}


// $('#myModal').click(function(e) {
//   if (!$(e.target).closest('.modal').length){
//       $(".modal").fadeOut(300);
//   }
// });


$('#myModal').on('click', function (event) {
  modal.style.display = "none"
});

// $('#myModal').on('click', function(event) {
//    event.stopPropagation();
// });