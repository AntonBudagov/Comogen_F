(function (appl) {
  'use strict';

  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal({
    opacity: .8 // Opacity of modal background
  });

  // $('#modal2').openModal();


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
});