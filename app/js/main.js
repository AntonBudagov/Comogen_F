(function (appl) {
  'use strict';

  $(".button-collapse").sideNav();



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
