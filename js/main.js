(function($) {
    //"use strict";

    var spadeart = spadeart || {};

    spadeart = {
        
        init: function(){
            this.Sticky();
            this.resize();
            this.MenuMobile();
            //this.SliderBanner();
            this.SliderRecomment();
            this.SliderProductmedia();
            this.SliderBrand();
            this.Tabs();
            this.Hamburgers();
            this.FilterMobile();
            // this.ratingEnable();
            //this.ratingDisable();
            //this.quatityCustom();
        },
        resize: function(){
            this.handleOnResize();
            this.SliderBrand();
        },

        Hamburgers: function(){
          var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

          var hamburgers = document.querySelectorAll(".hamburger");
          if (hamburgers.length > 0) {
            forEach(hamburgers, function(hamburger) {
              hamburger.addEventListener("click", function() {
                this.classList.toggle("is-active");
              }, false);
            });
          }
        },

        MenuMobile: function(){
          $('body .gridContainer').prepend('<div class="hamburger hamburger--slider"><div class="hamburger-box"><div class="hamburger-inner"></div></div></div>');
          //$('body .main-menu').prepend('<a class="mobile_nav_close" href="#"><span class="icon-arrows_remove"></span>Close</a>');
          $('body').on('click', '.hamburger', function(e) {
            e.preventDefault();
            $('html,body').toggleClass('mobile');
            $('body .main-menu').toggleClass('mobile');
            if(!$('.hamburger').hasClass('is-active')){
              $('nav').removeClass('submenu-open');
              $('nav ul div.submenu').children('.submenu').removeClass('active');
            }
          });
          // $('body .main-menu').on('click', '.mobile_nav_close', function(e) {
          //   e.preventDefault();
          //   $('body').toggleClass('mobile');
          //   $('body .main-menu').toggleClass('mobile');
          // });
          $('nav ul').find('li').on('click', '.sub-icon', function(event) {
            event.preventDefault();
            $(this).parents('li').toggleClass('selector');
          });

          $('nav ul div.submenu').each(function(){
              var label = $(this).parent().children('a').text();
              var destination = $(this).parent().children('a').attr('href');

              $(this).prepend(
                  $('<div/>')
                      .addClass('view-all')
                      .append(
                          $('<a>')
                              .attr('href', destination)
                              .text('View All ' + label)
                      )
              ).prepend(
                  $('<div/>')
                      .addClass('control')
                      .append(
                          $('<a>')
                              .attr('href', '#')
                              .addClass('back')
                              .text(label)
                      )
              );
          });

          $('nav ul > li.parent').click(function(){
            //$('#mobile-menu').scrollTop(0);
            $('nav').addClass('submenu-open');
            $(this).children('.submenu').addClass('active');
          });

          $('nav a.back').click(function(e){
              e.preventDefault();
              e.stopPropagation();


              if ( $(this).closest('.submenu').parent().closest('.submenu').hasClass('submenu-open') ) {
                  $(this).closest('.submenu').parent().closest('.submenu').removeClass('submenu-open');
              }

              if ( $(this).closest('.submenu').hasClass('level0') || ($(this).closest('nav').length > 0) ) {
                  $('nav').removeClass('submenu-open');
              }

              $(this).closest('.submenu').removeClass('active');
          });
        },

        FilterMobile: function(){
          $('.sidebar').on('click', '.title', function(event) {
            event.preventDefault();
            $(this).toggleClass('active');
            $('.filter-main').toggleClass('open');
          });
        },

        SearchBox: function () {
            var searchShow = $('.search-mobile');
            $('.search.ico').on('click', function(e) {
                e.preventDefault();
                searchShow.toggleClass('active');
            });
            $('.close-search').on('click', function(e) {
                e.preventDefault();
                searchShow.removeClass('active');
            });
        },

        Tabs: function(){
            $( "#tabs" ).tabs({
              collapsible: true,
              active: 0
            });
        },

        SliderBanner: function(){
            if(!$('.home-banner').hasClass('slick-initialized')){
                $('.home-banner').slick({
                  infinite: true,
                  speed: 500,
                  arrows: false,
                  dots: false,
                  autoplay: true,
                  autoplaySpeed: 4500,
                  customPaging: function(slider, i) {
                    return $('<span class="dot"></span>').text(i + 1);
                  }
                });
            }
        },

        SliderRecomment: function(){
            if(!$('.slider-cdp .items').hasClass('slick-initialized')){
                $('.slider-cdp .items').slick({
                  infinite: false,
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  arrows: true,
                  //fade: true,
                  prevArrow: '<div data-role="none" class="slick-prev" aria-label="previous">Previous</div>',
                  nextArrow: '<div data-role="none" class="slick-next" aria-label="next">Next</div>',
                  customPaging: function(slider, i) {
                    return $('<span class="dot"></span>').text(i + 1);
                  },
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        arrows: false,
                        dots: true,
                        arrows: false,
                        dots: true,
                        slidesToShow: 3,
                        slidesToScroll: 3
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
                });
            }
        },

        SliderBrand: function(){
            if(!$('.brand-block').hasClass('slick-initialized')){
                $('.brand-block').slick({
                  infinite: false,
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  arrows: true,
                  lazyLoad: 'onDemand',
                  //fade: true,
                  prevArrow: '<div data-role="none" class="slick-prev" aria-label="previous">Previous</div>',
                  nextArrow: '<div data-role="none" class="slick-next" aria-label="next">Next</div>',
                  customPaging: function(slider, i) {
                    return $('<span class="dot"></span>').text(i + 1);
                  },
                  responsive: [
                    {
                      breakpoint: 5000,
                      settings: 'unslick'
                    },
                    {
                      breakpoint: 1200,
                      settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 4,
                        slidesToScroll: 4
                      }
                    },
                    {
                      breakpoint: 1050,
                      settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 3,
                        slidesToScroll: 3
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        arrows: false,
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
                });
            }
        },

        SliderProductmedia: function(){
            if(!$('.slider-pdp .items').hasClass('slick-initialized')){
                $('.slider-pdp .items').slick({
                  infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                  //fade: true,
                  prevArrow: '<div data-role="none" class="slick-prev" aria-label="previous">Previous</div>',
                  nextArrow: '<div data-role="none" class="slick-next" aria-label="next">Next</div>',
                  asNavFor: '.items-thumbnails',
                  responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        arrows: false,
                        dots: true,
                        customPaging: function(slider, i) {
                          return $('<span class="dot"></span>').text(i + 1);
                        }
                      }
                    }
                  ]
                });
                $('.items-thumbnails').slick({
                  infinite: true,
                  slidesToShow: 5,
                  slidesToScroll: 5,
                  arrows: false,
                  //fade: true,
                  prevArrow: '<div data-role="none" class="slick-prev" aria-label="previous">Previous</div>',
                  nextArrow: '<div data-role="none" class="slick-next" aria-label="next">Next</div>',
                  asNavFor: '.slider-pdp .items',
                  //centerMode: true,
                  focusOnSelect: true
                });
            }
        },

        ParallaxScroll: function(){
          
        },

        handleOnResize: function(){
  	      var resize;
  	      var self = this;

  	      $(window).on('resize', function(){

  	        self.wWidth = $(window).width();
  	        self.wHeight = $(window).height();

  	        if (resize) {
  	          clearTimeout(resize);
  	        }

  	        resize = setTimeout(function() {
  	          self.resize();
  	        }, 200);

  	      });
  	    },

  	    Sticky: function(){
          var didScroll;
          var lastScrollTop = 0;
          var delta = 5;
          var navbarHeight = $('header').outerHeight();

          $(window).scroll(function(event){
              didScroll = true;
          });

          setInterval(function() {
              if (didScroll) {
                  hasScrolled();
                  didScroll = false;
              }
          }, 250);

          function hasScrolled() {
              var st = $(this).scrollTop();
              
              if(Math.abs(lastScrollTop - st) <= delta)
                  return;
              
              if (st > lastScrollTop && st > navbarHeight){
                  $('header').removeClass('nav-down').addClass('nav-up');
              } else {
                  if(st + $(window).height() < $(document).height()) {
                      $('header').removeClass('nav-up').addClass('nav-down');
                  }
              }
              
              lastScrollTop = st;
          }
  	    },
        openPopup: function(){
          $('.open-popup').magnificPopup({
              type:'inline',
              mainClass: 'mfp-img-mobile'
          });
            setTimeout(function() {
                if ($('#myPromo').length) {
                    $.magnificPopup.open({
                        items: {
                            src: '#myPromo'
                        },
                        type: 'inline',
                        mainClass: 'mfp-img-mobile'
                    });
                }
            }, 2000);
        },

        ratingStars: function(){
          if($('.stars-rating').length>0){
            $('.rating-enable').click(function(event) {
                event.preventDefault();

                ratingEnable();

                $(this).addClass('deactivated');
                $('.rating-disable').removeClass('deactivated');
            });

            $('.rating-disable').click(function(event) {
                event.preventDefault();

                ratingDisable();

                $(this).addClass('deactivated');
                $('.rating-enable').removeClass('deactivated');
            });
          }
        },

        ratingEnable: function(){
          if($('.stars-rating').length>0){
            $('#comment-stars').barrating({
              //theme: 'css-stars',
              allowEmpty: true,
              showSelectedRating: false
            });
          }
        },  

        ratingDisable: function(){
          if($('.stars-rating').length>0){
            $('select').barrating('destroy');
          }
        },

        quatityCustom: function(){
          if($('.qty-block').length>0){
            var addInput = '#qty';
            var n = 1;
            
            $(addInput).val(n);

            $('.icon-plus').on('click', function(){
              $(addInput).val(++n);
            })

            $('.icon-minus').on('click', function(){
              if (n >= 1) {
                $(addInput).val(--n);
              } else {

              }
            });
          }
        }
    }

    $(document).ready(function(){
        spadeart.init();
        $(window).trigger('resize').trigger('scroll');

        $(document).on('click', '.filter-options h3', function(event) {
          event.preventDefault();
          /* Act on the event */
          $(this).toggleClass('hide');
        });
    });
  

})(jQuery);
