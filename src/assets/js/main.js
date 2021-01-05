//"use strict";

// main-banner== block-1==

$(document).ready(function () {

  $('.toggle-button, .menu-list__item').on('click', function () {
    var menu = $('.menu-list');
    menu.toggleClass('is-Open');
  });

  //Scroll to id
  $(".header-menu a, .menu-list__item a").mPageScroll2id({
    offset: 180
  });


  // block-map== block-14==
  $('.descriptions-map, .closed').on('click', function () {
    $('.map-ya').toggleClass('map-Open');
    $('.overlay').toggleClass('overlay-Closed');
    $('.closed').toggleClass('is-Closed')
  });


  //===== block-whatWeDo== block-6====//
  $('.is-Control').overlayScrollbars({
    className: "os-theme-dark",
    resize: "none",
    sizeAutoCapable: true,
    clipAlways: true,
    normalizeRTL: true,
    paddingAbsolute: false,
    nativeScrollbarsOverlaid: {
      showNativeScrollbars: false,
      initialize: true,
    }
  });

  //========== accordion =============================

  $('.up, .down').click(function () {
    $('.data').removeClass('is-Control');
    $('.up').removeClass('on');
    $('.down').removeClass('off');
  });

  $('.down').click(function () {
    $(this).siblings('.up').addClass('on');
    $(this).parent().parent().siblings('.data').addClass('is-Control');
    $(this).addClass('off');
  });

  $('.up, .down').click(function () {
    $('.is-Control').overlayScrollbars({});
  });


  //====block-speeches== block-7=======
  $('.slider-speeches').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 1000,
    fade: true,
    prevArrow: '<div class="slick-arrow slick-prev"></div>',
    nextArrow: '<div class=" slick-arrow slick-next"></div>',
  });
  //====block-testimonial== block-11=======
  $('.slider-testimonial').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 1000,
    fade: false,
    prevArrow: '<div class="slick-arrow slick-prev"></div>',
    nextArrow: '<div class=" slick-arrow slick-next"></div>',
  });

  //===========================================

  var sections = $('.section'),
    nav = $('#menu'),
    nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');

        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });

  nav.find('a').on('click', function () {
    var $el = $(this),
      id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 500);

    return false;
  });

  //===================Progress-bar===============================
  $(function () {
    $(window).on("scroll resize", function () {
      var o = $(window).scrollTop() / ($('#intro').height());
      $(".progress-bar").css({
        "width": (100 * o | 0) + "%"
      });
      $('progress')[0].value = o;
    })
  });

  $(function () {
    $(window).on("scroll resize", function () {
      var o = ($(window).scrollTop() - $('#intro').height()) / ($('#work').height());
      $(".progress-bar").css({
        "width": (100 * o | 0) + "%"
      });
      $('.work-i')[0].value = o;
    })
  });

  $(function () {
    $(window).on("scroll resize", function () {
      var o = ($(window).scrollTop() - $('#intro').height() - $('#work').height()) / ($('#about').height());
      $(".progress-bar").css({
        "width": (100 * o | 0) + "%"
      });
      $('.about-i')[0].value = o;
    })
  });

  $(function () {
    $(window).on("scroll resize", function () {
      var o = ($(window).scrollTop() - $('#intro').height() -
        $('#work').height() - $('#about').height()) / ($('#contacts').height());
      $(".progress-bar").css({
        "width": (100 * o | 0) + "%"
      });
      $('.contacts-i')[0].value = o;
    })
  });

 


    var StickyElement = function (node) {
      var doc = $(document),
        fixed = false,
        anchor = node.find('.sticky-anchor'),
        content = node.find('.sticky-content');
  
      var onScroll = function (e) {
        var docTop = doc.scrollTop(),
          anchorTop = anchor.offset().top;
  
        
        if (docTop > anchorTop) {
          if (!fixed) {
            anchor.height(content.outerHeight());
            content.addClass('fixed');
            fixed = true;
          }
        } else {
          if (fixed) {
            anchor.height(0);
            content.removeClass('fixed');
            fixed = false;
          }
        }
      };
  
      $(window).on('scroll', onScroll);
    };
  
    var demo = new StickyElement($('#sticky'));
  });
  //=================================

