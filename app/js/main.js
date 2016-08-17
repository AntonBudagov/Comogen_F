(function (appl) {
  'use strict';

  $('.parallax').parallax();
  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal({
    opacity: .8 // Opacity of modal background
  });




  $("a#single_image").fancybox();

  $('.btnBrendLight').click(function(e) {

    $('.btnBrendLight').removeClass('active')
    $(this).addClass('active')

  });

  $('.modal-action').click(function() {

    if ($('#first_name').val() !==""){
      $('#modal1').closeModal();
    }

  });

  // modal-action
  var owlBaseSettings = {
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem: true,
    pagination: false,
    itemsCustom: false
  }
  var owlBaseSettingsCarusel = {
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem: false,
    pagination: false,
    items : 3,
      itemsDesktop : [1100,2],
      itemsDesktopSmall : [979,2],
      itemsTablet: [729,1],
      itemsMobile : false
    // itemsCustom: false
  }

  $("#owl-slideOne").owlCarousel(owlBaseSettings);
  $("#owl-slideTwo").owlCarousel(owlBaseSettings);


  $("#owl-product").owlCarousel(owlBaseSettingsCarusel);
  $("#owl-recept").owlCarousel(owlBaseSettingsCarusel);

})(window);

$(document).ready(function() {
  $("a.fancybox").fancybox();
   new WOW().init();
   // $('.whyus .animated').viewportChecker({
   //   classToAdd: 'visible',
   //   classToAddForFullView: 'slideInDown',
   // });

  // VK.init({apiId: 5582951, onlyWidgets: true});
  // VK.Widgets.Comments("vk_comments", {redesign: 1, limit: 10, width: "665", attach: "*"}, );

});

// $(window).scroll(function(){
//  if ($('.whyus').offset().top < $(window).scrollTop()){
//     $('.whyus').find('.animated').addClass('slideInDown');
//  }
// })