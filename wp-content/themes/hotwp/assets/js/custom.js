jQuery(document).ready(function($) {

    $(".hotwp-nav-secondary .hotwp-secondary-nav-menu").addClass("hotwp-secondary-responsive-menu").before('<div class="hotwp-secondary-responsive-menu-icon"></div>');

    $(".hotwp-secondary-responsive-menu-icon").click(function(){
        $(this).next(".hotwp-nav-secondary .hotwp-secondary-nav-menu").slideToggle();
    });

    $(window).resize(function(){
        if(window.innerWidth > 1112) {
            $(".hotwp-nav-secondary .hotwp-secondary-nav-menu, nav .sub-menu, nav .children").removeAttr("style");
            $(".hotwp-secondary-responsive-menu > li").removeClass("hotwp-secondary-menu-open");
        }
    });

    $(".hotwp-secondary-responsive-menu > li").click(function(event){
        if (event.target !== this)
        return;
        $(this).find(".sub-menu:first").slideToggle(function() {
            $(this).parent().toggleClass("hotwp-secondary-menu-open");
        });
        $(this).find(".children:first").slideToggle(function() {
            $(this).parent().toggleClass("hotwp-secondary-menu-open");
        });
    });

    $("div.hotwp-secondary-responsive-menu > ul > li").click(function(event) {
        if (event.target !== this)
            return;
        $(this).find("ul:first").slideToggle(function() {
            $(this).parent().toggleClass("hotwp-secondary-menu-open");
        });
    });

    if(hotwp_ajax_object.sticky_menu){
    // grab the initial top offset of the navigation 
    var hotwpstickyNavTop = $('.hotwp-primary-menu-container').offset().top;
    
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var hotwpstickyNav = function(){
        var hotwpscrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative

        if(hotwp_ajax_object.sticky_menu_mobile){
            if (hotwpscrollTop > hotwpstickyNavTop) {
                $('.hotwp-primary-menu-container').addClass('hotwp-fixed');
            } else {
                $('.hotwp-primary-menu-container').removeClass('hotwp-fixed');
            }
        } else {
            if(window.innerWidth > 1112) {
                if (hotwpscrollTop > hotwpstickyNavTop) {
                    $('.hotwp-primary-menu-container').addClass('hotwp-fixed');
                } else {
                    $('.hotwp-primary-menu-container').removeClass('hotwp-fixed'); 
                }
            }
        }
    };

    hotwpstickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        hotwpstickyNav();
    });
    }

    $(".hotwp-nav-primary .hotwp-nav-primary-menu").addClass("hotwp-primary-responsive-menu").before('<div class="hotwp-primary-responsive-menu-icon"></div>');

    $(".hotwp-primary-responsive-menu-icon").click(function(){
        $(this).next(".hotwp-nav-primary .hotwp-nav-primary-menu").slideToggle();
    });

    $(window).resize(function(){
        if(window.innerWidth > 1112) {
            $(".hotwp-nav-primary .hotwp-nav-primary-menu, nav .sub-menu, nav .children").removeAttr("style");
            $(".hotwp-primary-responsive-menu > li").removeClass("hotwp-primary-menu-open");
        }
    });

    $(".hotwp-primary-responsive-menu > li").click(function(event){
        if (event.target !== this)
        return;
        $(this).find(".sub-menu:first").slideToggle(function() {
            $(this).parent().toggleClass("hotwp-primary-menu-open");
        });
        $(this).find(".children:first").slideToggle(function() {
            $(this).parent().toggleClass("hotwp-primary-menu-open");
        });
    });

    $("div.hotwp-primary-responsive-menu > ul > li").click(function(event) {
        if (event.target !== this)
            return;
        $(this).find("ul:first").slideToggle(function() {
            $(this).parent().toggleClass("hotwp-primary-menu-open");
        });
    });

    /*$(".hotwp-social-search-icon").on('click', function (e) {
        e.preventDefault();
        $('.hotwp-social-search-box').slideToggle(400);
    });*/

    $(".hotwp-social-icon-search").on('click', function (e) {
        e.preventDefault();
        document.getElementById("hotwp-search-overlay-wrap").style.display = "block";
    });

    $(".hotwp-search-closebtn").on('click', function (e) {
        e.preventDefault();
        document.getElementById("hotwp-search-overlay-wrap").style.display = "none";
    });

    $(".post").fitVids();

    $( 'body' ).prepend( '<div class="hotwp-scroll-top"></div>');
    var scrollButtonEl = $( '.hotwp-scroll-top' );
    scrollButtonEl.hide();

    $( window ).scroll( function () {
        if ( $( window ).scrollTop() < 20 ) {
            $( '.hotwp-scroll-top' ).fadeOut();
        } else {
            $( '.hotwp-scroll-top' ).fadeIn();
        }
    } );

    scrollButtonEl.click( function () {
        $( "html, body" ).animate( { scrollTop: 0 }, 300 );
        return false;
    } );

    if ( $().owlCarousel ) {
        var hotwpcarouselwrapper = $('.hotwp-posts-carousel');
        var imgLoad = imagesLoaded(hotwpcarouselwrapper);
        imgLoad.on( 'always', function() {
            hotwpcarouselwrapper.each(function(){
                    var $this = $(this);
                    $this.find('.owl-carousel').owlCarousel({
                        autoplay: true,
                        loop: true,
                        margin: 0,
                        smartSpeed: 250,
                        dots: false,
                        nav: true,
                        autoplayTimeout: 4000,
                        autoHeight: true,
                        navText: [ '<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>' ],
                        responsive:{
                        0:{
                            items: 1
                        },
                        480:{
                            items: 1
                        },
                        991:{
                            items: 1
                        },
                        1024:{
                            items: 1
                        }
                    }
                });
            });
        });
    } // end if

    if(hotwp_ajax_object.sticky_sidebar){
    $('.hotwp-main-wrapper, .hotwp-sidebar-one-wrapper, .hotwp-sidebar-two-wrapper').theiaStickySidebar({
        containerSelector: ".hotwp-content-wrapper",
        additionalMarginTop: 0,
        additionalMarginBottom: 0,
        minWidth: 890,
    });
    }

});