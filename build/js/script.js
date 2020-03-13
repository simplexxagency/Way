'use strict';
$(document).ready(function(){
// Initialize Slick Slider for section Hero

    $('.hero__slider').slick({
        dots: true,
        arrows: false,
        mobileFirst: true,
        swipe: true,
        // nextArrow: '<a href="#" class="hero__arrowright slick__arrows"><img src="img/arrright.png" class="arrowright-img" alt="arrright"></a>',
        // prevArrow: '<a href="#" class="hero__arrowleft slick__arrows"><img src="img/arrleft.png" class="arrowleft-img" alt="arrleft"></a>',
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              dots: true
            }
          }
        ]
    });


  // Initialize Slick Slider for section Product

  $('.product__slider').slick({
      dots: false,
      arrows: true,
      mobileFirst: true,
      swipe: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<a href="#" class="product__arrowright slick__arrows"><img src="img/arrright.png" class="arrowright-img" alt="arrright"></a>',
      prevArrow: '<a href="#" class="product__arrowleft slick__arrows"><img src="img/arrleft.png" class="arrowleft-img" alt="arrleft"></a>',
      responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: true
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: true
          }
        }       
      ]
  });


  // Initialize Slick Slider for section Testimonials

    $('.testim__slider').slick({
        dots: false,
        arrows: true,
        mobileFirst: true,
        infinite: false,
        swipe: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.testim__container'),
        nextArrow: '<a href="#" class="testim__arrowright slick__arrows"><img src="img/arrright.png" class="arrowright-img" alt="arrright"></a>',
        prevArrow: '<a href="#" class="testim__arrowleft slick__arrows"><img src="img/arrleft.png" class="arrowleft-img" alt="arrleft"></a>',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true
            }
          }
        ]
    });
 

    // Initialize Slick Slider for section College

  $('.colleague__slider').slick({
      dots: false,
      arrows: true,
      mobileFirst: true,
      swipe: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<a href="#" class="colleague__arrowright slick__arrows"><img src="img/arrright.png" class="arrowright-img" alt="arrright"></a>',
      prevArrow: '<a href="#" class="colleague__arrowleft slick__arrows"><img src="img/arrleft.png" class="arrowleft-img" alt="arrleft"></a>',
      responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: true
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: true
          }
        } 
      ]
  });

  // Initialize Slick Slider for section College
  $('.cert__slider').slick({
    dots: false,
    arrows: true,
    mobileFirst: true,
    infinite: true,
    swipe: true,
    // asNavFor: '.cert__slider-popup',
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<a href="#" class="cert__arrowright slick__arrows"><img src="img/arrright.png" class="arrowright-img" alt="arrright"></a>',
      prevArrow: '<a href="#" class="cert__arrowleft slick__arrows"><img src="img/arrleft.png" class="arrowleft-img" alt="arrleft"></a>',
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      }
    ]
});
// $('.cert__slider-popup').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   asNavFor: '.cert__slider',
//   nextArrow: '<a href="#" class="popup__arrowright slick__arrows"><img src="img/arrright.png" class="arrowright-img" alt="arrright"></a>',
//   prevArrow: '<a href="#" class="popup__arrowleft slick__arrows"><img src="img/arrleft.png" class="arrowleft-img" alt="arrleft"></a>',
//   dots: false,
//   swipe: true,
//   mobileFirst: true,
//   centerMode: true,
//   focusOnSelect: true
// });

// Pop-up
$('.pop-up-slider .cover, .pop-up-slider .wrapper-close-pop-up').on('click', function () {
  $(this).closest('.pop-up-mark').addClass('passive-slider');
});

$('.cert__item').on('click', function () {
  $('.pop-up-slider').removeClass('passive-slider');
});

  // Initialize Slick Slider for section Filters
  $('.filters__pagination').slick({
    dots: false,
    arrows: true,
    mobileFirst: true,
    infinite: true,
    swipe: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<a href="#" class="filters__arrowright slick__arrows"><img src="img/arrright.png" class="arrowright-img" alt="arrright"></a>',
    prevArrow: '<a href="#" class="filters__arrowleft slick__arrows"><img src="img/arrleft.png" class="arrowleft-img" alt="arrleft"></a>',
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      }
    ]
});

  // Initialize Slick Slider for section Card
  $('.d-card__slider-top').slick({
    dots: false,
    arrows: false,
    mobileFirst: true,
    swipe: true,
    fade: true,
    asNavFor: '.d-card__slider-bottom',
    slidesToShow: 1,
    slidesToScroll: 1,
});
$('.d-card__slider-bottom').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.d-card__slider-top',
  dots: false,
  swipe: true,
  mobileFirst: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
  ]
});

 // Initialize Slick Slider for section Another
$('.another__slider').slick({
  dots: false,
  arrows: true,
  mobileFirst: true,
  swipe: true,
  slidesToShow: 4,
  nextArrow: '<a href="#" class="product__arrowright slick__arrows"><img src="img/arrright.png" class="arrowright-img" alt="arrright"></a>',
  prevArrow: '<a href="#" class="product__arrowleft slick__arrows"><img src="img/arrleft.png" class="arrowleft-img" alt="arrleft"></a>',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true
      }
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
      }
    }
  ]
});

// Initialize Slick Slider for section Testimonials

$('.cause__slider').slick({
  dots: false,
  arrows: true,
  mobileFirst: true,
  swipe: true,
  infinite: false,
  slidesToShow: 1,
  appendArrows: $('.cause__container'),
  nextArrow: '<a href="#" class="cause__arrowright slick__arrows"><img src="img/arrright.png" class="arrowright-img" alt="arrright"></a>',
  prevArrow: '<a href="#" class="cause__arrowleft slick__arrows"><img src="img/arrleft.png" class="arrowleft-img" alt="arrleft"></a>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true
      }
    }
  ]
});

// Initialize Slick Slider for section Video-Testimonials

$('.v-testim__slider').slick({
  dots: false,
  arrows: true,
  mobileFirst: true,
  infinite: false,
  swipe: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendArrows: $('.v-testim__container'),
  nextArrow: '<a href="#" class="v-testim__arrowright slick__arrows"><img src="img/arrright.png" class="arrowright-img" alt="arrright"></a>',
  prevArrow: '<a href="#" class="v-testim__arrowleft slick__arrows"><img src="img/arrleft.png" class="arrowleft-img" alt="arrleft"></a>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true
      }
    }
  ]
});

//    ------------------------------- header ---------------------------------------------

let $header = $('header');
let $btn = $('.line-button');
let $navMenu = $('.menu-list');
let $callMenu = $('.call-list');
let $checkMenu = $('.check-list')
let $container = $('.nav-fixed .container-fluid:nth-child(2)');

$('.to-check, .to-call, .to-search').on('click', function () {
    if (!$(this).hasClass('clicked')) {
        $(this).addClass('clicked');

        if (!($btn.hasClass('active'))) {
            $btn.addClass('active');
            $container.addClass('active');
        }
    } else {
        $(this).removeClass('clicked');

        if (!($btn.hasClass('active'))) {
            $btn.addClass('active');
            $container.addClass('active');

        } else {
            $btn.removeClass('active');
            $container.removeClass('active');

        }

    }
});

$('.to-show-menu').on('click', function () {
    $('.to-check, .to-call, .to-search').removeClass('clicked');
    if (!($btn.hasClass('active'))) {
        $btn.addClass('active');
        $navMenu.addClass('active');
        $container.addClass('active');
    } else {
        $btn.removeClass('active');
        $navMenu.removeClass('active');
        $container.removeClass('active');
    }
    $callMenu.removeClass('active');
    $checkMenu.removeClass('active');

});

$('.to-check').on('click', function () {
    $('.to-call, .to-search').removeClass('clicked');
    $callMenu.removeClass('active');
    $navMenu.removeClass('active');
    $checkMenu.toggleClass('active');
    $('.menu-item').removeClass('hover');
    $('.sub-menu-item').removeClass('hover');
});

$('.to-call').on('click', function () {
    $('.to-check, .to-search').removeClass('clicked');
    $checkMenu.removeClass('active');
    $navMenu.removeClass('active');
    $callMenu.toggleClass('active');
    $('.menu-item').removeClass('hover');
    $('.sub-menu-item').removeClass('hover');
});

$('.to-search').on('click', function () {
    $('.to-check, .to-call').removeClass('clicked');
    $checkMenu.removeClass('active');
    $navMenu.removeClass('active');
    $callMenu.removeClass('active');
    $('.menu-item').removeClass('hover');
    $('.sub-menu-item').removeClass('hover');
});
$(document).mouseup(function (e) {


    if (!$header.is(e.target)
        && $header.has(e.target).length === 0) {
        $('.to-check, .to-call, .to-search').removeClass('clicked');

        $btn.removeClass('active');
        $navMenu.removeClass('active');
        $container.removeClass('active');

        $callMenu.removeClass('active');
        $checkMenu.removeClass('active');

        $('.menu-item').removeClass('hover');
        $('.sub-menu-item').removeClass('hover');
    }
    
});

// Pop-up Search
$('.to-search').on('click', function () {
    $('.pop-up-search').removeClass('passive');
});

$('.cover, .wrapper-close-pop-up').on('click', function () {
    $(this).closest('.pop-up-mark').addClass('passive');
});

// Pop-up Book
$('.to-book').on('click', function () {
  $('.pop-up-book').removeClass('passive');
});

$('.cover, .wrapper-close-pop-up').on('click', function () {
  $(this).closest('.pop-up-mark').addClass('passive');
});

// Pop-up Place
$('.to-place').on('click', function () {
  $('.pop-up-place').removeClass('passive');
});

$('.cover, .wrapper-close-pop-up').on('click', function () {
  $(this).closest('.pop-up-mark').addClass('passive');
});

$('.nav-fixed .menu-item > a').on('click', function () {

    if ($(window).width() >= '1200') {
        // $('.menu-item').removeClass('hover');
        $(this).closest('.menu-item').toggleClass('hover');
        $('.sub-menu-item').removeClass('hover');
        $checkMenu.removeClass('active');
        $navMenu.removeClass('active');
        $callMenu.removeClass('active');
        $container.removeClass('active');
    } else {
        $(this).closest('.menu-item').toggleClass('hover');
        $('.sub-menu-item').removeClass('hover');
    }
});

$('.nav-fixed .sub-menu-item > a').on('click', function () {
    $(this).closest('.sub-menu-item').toggleClass('hover');
});

// ---------------------------


// Form Mask
jQuery(function($){
	$('.phone').mask('+99 (999) 999-99-99');
	
});

// Navbar Toggle
$('.navbar-toggler').click(function() {
  $('.header__menu').toggleClass('active');
  $('body').toggleClass('active');
});

// Active btn in Product
var $menu = $(".product__nav"), 
    $links = $menu.find("a"); 

$links.on("click", function() {
    $links.removeClass("active"); 
    $(this).addClass("active"); 
});

// Active btn in Contact
var $menuContact = $(".contact__list"), 
    $linksContact = $menuContact.find("a"); 

  $linksContact.on("click", function() {
    $linksContact.removeClass("active"); 
    $(this).addClass("active"); 
});

// Active btn in Cataloge
var $menuCataloge = $(".cat-cataloge"), 
    $linksCataloge = $menuCataloge.find(".cat-cataloge__link"); 

  $linksCataloge.on("click", function() {
    $linksCataloge.removeClass("active"); 
    $(this).addClass("active"); 
});

// Active btn in Colors
var $menuColors = $(".d-card__colors-items"), 
    $colors = $menuColors.find(".d-card__colors-item"); 

$colors.on("click", function() {
    $colors.removeClass("active"); 
    $(this).addClass("active"); 
});

// Active btn in Size
var $menuSize = $(".d-card__size-items"), 
    $size = $menuSize.find(".d-card__size-item"); 

$size.on("click", function() {
    $size.removeClass("active"); 
    $(this).addClass("active"); 
});

// Active btn in Size
var $fitting = $(".fitting"), 
    $place = $fitting.find(".fitting__item"); 

$place.on("click", function() {
    $place.removeClass("active"); 
    $(this).addClass("active"); 
});

// Active btn in Blog
var $menuBlog = $(".blog__nav"), 
    $itemBlog = $menuBlog.find(".blog__nav-item"); 

$itemBlog.on("click", function() {
    $itemBlog.removeClass("active"); 
    $(this).addClass("active"); 
});

// //Custom Scrollbar
// (function($){
//   $(window).on("load",function(){
//       $("#desc__nav-scroll").mCustomScrollbar({
//         axis: "x"
//       });
//   });
// })(jQuery);

$('button').click(function(e){
  var button_classes, value = +$('.d-counter').val();
  button_classes = $(e.currentTarget).prop('class');        
  if(button_classes.indexOf('up_count') !== -1){
      value = (value) + 1;            
  } else {
      value = (value) - 1;            
  }
  value = value < 0 ? 0 : value;
  $('.d-counter').val(value);
});  
$('.d-counter').click(function(){
  $(this).focus().select();
});


  // Tabs in main
  $('.js-tab-trigger').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="'+ id +'"]');
    
    $('.js-tab-trigger.active').removeClass('active');
    $(this).addClass('active');
    
    $('.js-tab-content.active').removeClass('active');
    content.addClass('active');
 });


//  Video in Product
$('#play').on('click', function () {
  $('.video-container-wrapper').addClass('active');
  $('#show-bg').addClass('active');
});


$('#show-bg').on('click', function () {
  $('.video-container-wrapper').removeClass('active');
  $('#show-bg').removeClass('active');
});


$('#stop-2').on('click', function () {
  $('.video-container-wrapper').removeClass('active');
  $('#show-bg').removeClass('active');
});

//  Video in Video Testimonials
$('#play0').on('click', function () {
  $('#video-container-wrapper0').addClass('active');
  // $('#show-bg-1').addClass('active');
});

$('#play1').on('click', function () {
  $('#video-container-wrapper1').addClass('active');
  // $('#show-bg-1').addClass('active');
});

$('#play2').on('click', function () {
  $('#video-container-wrapper2').addClass('active');
  // $('#show-bg-1').addClass('active');
});

$('#play3').on('click', function () {
  $('#video-container-wrapper3').addClass('active');
  // $('#show-bg-1').addClass('active');
});

$('#play4').on('click', function () {
  $('#video-container-wrapper4').addClass('active');
  // $('#show-bg-1').addClass('active');
});

$('#play5').on('click', function () {
  $('#video-container-wrapper5').addClass('active');
  // $('#show-bg-1').addClass('active');
});

$('#play6').on('click', function () {
  $('#video-container-wrapper6').addClass('active');
  // $('#show-bg-1').addClass('active');
});


// ---------- Event -------------

 $('.e-header__show-menu').on('click', function () {
   if (!($btn.hasClass('active'))) {
    $('.e-header__menu-list').addClass('active');
    $btn.addClass('active');
    $container.addClass('active');
   } else {
      $btn.removeClass('active');
      $navMenu.removeClass('active');
      $container.removeClass('active');
   }
   
 });

 // Initialize Google map
 $(window).load(function(){
  var map;
  var mapConteiner = $('#where-map')[0];
  var mapCenter = {lat: 55.7501717, lng: 49.2428482};
    map = new google.maps.Map(mapConteiner, {
      center: mapCenter,
      zoom: 16
    });   
});


});

