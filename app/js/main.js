(function (appl) {
  'use strict';

  $(".button-collapse").sideNav();



  var owlBaseSettings = {
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem: true,
    itemsCustom: false
  }
  $("#owl-slideOne").owlCarousel(owlBaseSettings);

  $("#owl-slideTwo").owlCarousel(owlBaseSettings);


})(window);
