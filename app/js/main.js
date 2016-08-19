(function (appl) {
  'use strict';

  // INIT=====================================//
  $("a.fancybox").fancybox();
  new WOW().init();

  $('.parallax').parallax();
  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal({
    opacity: .8 // Opacity of modal background
  });
  // INIT=====================================//


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

  var owlBaseSettingsVideo = {
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem: true,
    pagination: true,
    itemsCustom: false
  }

  var owlBaseSettingsCarusel = {
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem: false,
    pagination: false,
    items : 3,
    rewindNav: false,
      itemsDesktop : [1100,2],
      itemsDesktopSmall : [979,2],
      itemsTablet: [729,1],
      itemsMobile : false
    // itemsCustom: false
  }

  $("#owl-slideOne").owlCarousel(owlBaseSettings);
  $("#owl-slideTwo").owlCarousel(owlBaseSettings);
  $("#owl-videosItems").owlCarousel(owlBaseSettingsVideo);



  $("#owl-product").owlCarousel(owlBaseSettingsCarusel);
  $("#owl-recept").owlCarousel(owlBaseSettingsCarusel);
  $("#owl-recept-popup").owlCarousel(owlBaseSettingsCarusel);

  $(".scrollto").click(function(){
    var elementClick = $(this).attr("href")
    if(!$(this).parent().hasClass('infoContact')){
      $('li').removeClass('currentLink');
      $(this).parent().addClass('currentLink');
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
      return false;
    }
  });

})(window);

