!function(e){"use strict";$(".button-collapse").sideNav(),$(".modal-trigger").leanModal({opacity:.8}),$("a#single_image").fancybox(),$(".btnBrendLight").click(function(e){$(".btnBrendLight").removeClass("active"),$(this).addClass("active")}),$(".modal-action").click(function(){""!==$("#first_name").val()&&$("#modal1").closeModal()});var i={navigation:!0,slideSpeed:300,paginationSpeed:400,singleItem:!0,pagination:!1,itemsCustom:!1},o={navigation:!0,slideSpeed:300,paginationSpeed:400,singleItem:!1,pagination:!1,items:3,itemsDesktop:[1100,2],itemsDesktopSmall:[979,2],itemsTablet:[729,1],itemsMobile:!1};$("#owl-slideOne").owlCarousel(i),$("#owl-slideTwo").owlCarousel(i),$("#owl-product").owlCarousel(o),$("#owl-recept").owlCarousel(o)}(window),$(document).ready(function(){$("a.fancybox").fancybox(),$(".whyus .animated").viewportChecker({classToAdd:"visible",classToAddForFullView:"slideInDown"})});