$(document).ready(function() {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 750) {
      $(".footerMenu").removeClass("nav row").addClass("col-12");
      $(".iconList").removeClass("nav-item");
      $(".footerItem").removeClass("nav-item");
      $(".footerLink").removeClass("nav-item");
      $(".footernavlink").removeClass("nav-link");
    }
    if (ww > 750) {
      $(".footerMenu").addClass("nav row").removeClass("col-12");
      $(".iconList").addClass("nav-item");
      $(".footerItem").addClass("nav-item");
      $(".footerLink").addClass("nav-item");
      $(".footernavlink").addClass("nav-link");
    }
    if (ww < 510) {
      $(".topmenu").removeClass("nav justify-content-center").addClass("mobile closed");
    }
    if (ww > 510) {
      $(".topmenu").addClass("nav justify-content-center").removeClass("mobile closed");
    }
  };


$('.mobileIcon').on('click',function(){
  //display the menu by removing the closed class, use toggleClass
  $('.topmenu').toggleClass('closed');
  //add an animation to it with CSS? animate.css
});

  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});
