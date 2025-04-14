(function ($) {
    "use strict";
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }

    //backToTop
    function backToTop() {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 200) {
                $('#to_top').fadeIn();
                $('.tp1-topnav').addClass('sticky');
            } else {
                $('#to_top').fadeOut();
                $('.tp1-topnav').removeClass('sticky');
            }
        });


        $("#to_top").click(function () {
            $("html, body").animate({
                scrollTop: 0
            });
            return false;
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 60) {
                $('.topnav ').addClass('sticky');
            } else {
                $('.topnav ').removeClass('sticky');
            }
        });
    }

    //onCLick
    function onCLick() {
        $('.auto_search_button').click(function () {
            $('.search-wrap input').focus();
            if (!$(this).hasClass('is-clicked')) {
                $(this).addClass('is-clicked');
            } else {
                $(this).removeClass('is-clicked');
            }
            $('.search-wrap ').animate({
                width: 'toggle'
            });
        });
        $('#vibeji-ham,.close-menu').off('click').on('click', function () {
            $('.menu-mobile').toggleClass('open');
            // $('body').css('overflow', $(this).hasClass('open') ? 'hidden' : '')
        });
        // $('.sub_menu').on('click', function () {
        //     const $li = $(this).closest('li');
        //     const $submenu = $li.find('.level2');
        //     $submenu.slideToggle(300);
        //     $(this).toggleClass('active');
        // });
        $('.sub_menu').on('click', function () {
            const $clickedLi = $(this).closest('li');
            const $clickedSubmenu = $clickedLi.find('.level2');
            $('.nav .level2').not($clickedSubmenu).slideUp(300);
            $('.nav .sub_menu').not(this).removeClass('active');
            $clickedSubmenu.slideToggle(300);
            $(this).toggleClass('active');
        });


        $(".tab-default >a").click(function (event) {
            $(".tab-default >a").removeClass("active");
            if (!$(this).hasClass("active")) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
            event.preventDefault();
            var tab = $(this).attr("href");
            $(".tab-content >div").not(tab).css("display", "none");
            $(tab).fadeIn();
        });

        $('.form-search input[name="keyword"]').on('keyup', (e) => {
            let query = $(e.currentTarget).val();
            if (query.length) {
                $(e.currentTarget).parents('.form-search').addClass('active');
                return;
            } else {
                $(e.currentTarget).parents('.form-search').removeClass('active');
                return;
            }
        });
        $('.form-search .btn_reset').click(function () {
            $('.form-search').removeClass("active");
        });


    }

    //slide Gallery
    function swiper() {
        var swiperSlideGopy = new Swiper(".box-doitac .swiper-container", {
            slidesPerView: 5,
            spaceBetween: 24,
            loop: true,
            navigation: {
                nextEl: ".box-doitac .swiper-button-next",
                prevEl: ".box-doitac .swiper-button-prev",
            },
            breakpoints: {
                991: {
                    loop: false,
                    slidesPerView: 3,
                },
                600: {
                    loop: false,
                    slidesPerView: 2,
                }
            }
        });
    }


    $(function () {
        backToTop();
        onCLick();
        swiper();
    });
})(jQuery);