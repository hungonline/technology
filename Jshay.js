// Bỏ nội dung vào trong ô bất kỳ
$('.PL_List_Product .dat_hang a').click(function() {
    var id = $(this).attr('data-title');
    //$('#Home1_ctl34_content').attr('placeholder','noi dung');
    $('#Home1_ctl34_content').val(id);
});

//-- 
var menuTopDrop = function() {
    if ($(".icon_topmenu").size() > 0) {
        $(".icon_topmenu").click(function() {
            if ($(".MainMenu").hasClass("active")) {
                $(".MainMenu").removeClass("active");
            } else {
                $(".MainMenu").addClass("active");
            }
        });
    }
}
$('.item_slide_show').on('click', '.block_thumb_slide_show', function() {


});
// sticky navbar
window.onscroll = function() {
    myFunction()
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function moveScroller() {
    var $anchor = $(".box_bxh");
    var $scroller = $('.box_bxh .sidebar__inner');
    var move = function() {
        var st = $(window).scrollTop();
        var ot = $anchor.offset().top;
        if (st > ot) {
            $scroller.css({
                position: "fixed",
                top: "60px"
            });
        } else {
            $scroller.css({
                position: "relative",
                top: ""
            });
        }
    };
    $(window).scroll(move);
    move();
}
moveScroller();

// Set Height
setTimeout(function() {
    var mh = $('.slide_img').height();
    $('.box_slide_img .conten').css('height', mh + 'px');
}, 1000);

// Scroll set to Div
$(window).scroll(function() {
    var top_start = $(".thongtin_startup .noi_dung").position().top + 130;
    if ($(window).scrollTop() >= top_start) {
        $('.thongtin_startup .scroll_pin').addClass('fixed');
        $('.thongtin_startup .noi_dung').addClass('margin');
    } else if ($(window).scrollTop() <= top_start) {
        $('.thongtin_startup .scroll_pin').removeClass('fixed');
        $('.thongtin_startup .noi_dung').removeClass('margin');
    }
});
$(window).scroll(function() {
    var top_start2 = $(".starup_cunglihvuc").position().top - 0;
    if ($(window).scrollTop() >= top_start2) {
        $('.thongtin_startup .scroll_pin').removeClass('fixed');
    } else if ($(window).scrollTop() <= top_start2) {
        console.log(top_start2)
    }
});

$('html, body').animate({
    scrollTop: $('.faq-container .tab-content').offset().top - 100
}, 500);

// CLick elements
$(".info_donvi .view").click(function() {
    var height = $('.PD_Gioithieu').height();
    if (height == 60) {
        $('.info_donvi .PD_Gioithieu').css({
            height: 'auto'
        });
        $(this).html('Rút gọn');
        $(this).addClass('active');

    } else {
        $('.info_donvi .PD_Gioithieu').css({
            height: '60px'
        });
        $(this).html('Xem thêm');
        $(this).removeClass('active')
    }
});

$('.list_item_panel .has_sub >a').click(
    function() {
        if ($(this).next().css('display') == 'none') {
            $('.cap2').slideUp();
            $(this).next().stop(true, true).slideDown();
            $('.list_item_panel li').removeClass('active');
            $(this).parent().addClass('active');

        } else {
            $(this).parent().find('.cap2').slideUp();
            $('.list_item_panel li').removeClass('active');
        }
    }
)

// Click on show
$(".dien-gia").find(".item").click(function() {
    $(".dien-gia").find('.box_detail').hide();
    $(this).siblings('.item').removeClass('active');
    if (!$(this).hasClass("active")) {
        $(this).addClass("active");
        $('html, body').animate({
            scrollTop: $('.item.active').offset().top - 82
        }, 500);
        $(this).next('.box_detail').show();
    } else {
        $(this).removeClass("active");
        $(this).next('.box_detail').hide();
    }


});
$(".box_detail .close").click(function() {
    $(".dien-gia .item").removeClass("active");
    $(".dien-gia .item").removeClass("samerow");
    $(this).parent().hide();
});

// Click xem thêm
// <a class="less_more_btn" id="gt_see_more" href="javascript:;">Xem thêm</a>
// <p class="less_more_btn" id="gt_see_less" style="display: none;">Thu gọn</p>
$('#gt_see_more').click(function() {
    $('.gioi-thieu .section_content .scrollbar-inner').addClass('show-more');
    $(this).hide();
    $('#gt_see_less').show();
    $('html, body').animate({
        scrollTop: $('#gioi-thieu').offset().top - 49
    }, 500);
});
$('#gt_see_less').click(function() {
    $('.gioi-thieu .section_content .scrollbar-inner').removeClass('show-more');
    $(this).hide();
    $('#gt_see_more').show();
    $('html, body').animate({
        scrollTop: $('#gioi-thieu').offset().top - 49
    }, 500);

});

// Check menu slideDown and slideUp
$('.list_item_panel .has_sub >a').click(
    function() {
        if ($(this).next().css('display') == 'none') {
            $('.cap2').slideUp();
            $(this).next().stop(true, true).slideDown();
            $('.list_item_panel li').removeClass('active');
            $(this).parent().addClass('active');

        } else {
            $(this).parent().find('.cap2').slideUp();
            $('.list_item_panel li').removeClass('active');
        }
    }
)

// check khi scroll element
$(window).scroll(function() {
    if ($('#conten_map').offset().top + 50 >= $('.section_slide_content').offset().top) {
        console.log(1);
    }
});
// Check scroll display
$(window).scroll(function() {
    if ($(window).scrollTop() >= 800) {
        $('.link_vn_fixed').fadeIn();
    } else {
        $('.link_vn_fixed').fadeOut();
    }
});

// Check id <div class="embed-container"> <div id="album-3123">cfvdfg</div> </div>
if ($('div[id^="album-"]').length > 0) {
    $('div[id^="album-"]').parent().removeClass("embed-container");
}
// Hover tongle
$(".hover_country").hover(function() {
    $(".section_top").toggleClass("hover_bg");
    $(this).toggleClass("hovering");
});

// owl-carousel next [0]
owl_slider_1.trigger('owl.goTo', [0]);

// keyup (ESC)
$(document).keyup(function(e) {
    console.log(e.keyCode);
    if (e.keyCode == 27) {

    }
});
// Click ngoài vùng trọn
$(document).click(function() {
    $('.container_section2 .warp .item .bong').removeClass('open');
});
$(".container_section2 .warp .item .bong").click(function(event) {
    event.stopPropagation();
});

//  Hiển thị dữ liệu giữa col_left  and col_right
$(".list_danhmuc .item").click(function() {
    //var id1 = $(this).attr('data-id');
    var index = $(this).parent().children().index(this);
    //console.log(index);				
    var colRight = $(this).closest('.col_left').siblings();
    colRight.find('.noi_dung').hide().removeClass('open');
    colRight.find('.noi_dung:eq(' + index + ')').show().addClass('open');
});
// CHeck Mobile 
if (screen.width > 480) {

}
if (!isMobile.any()) {
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    //-- Tra ve ket qua da chon trong menu
    var htmlactive = $(".main-content-mobile .W_Mobile_Default_PD .W_Mobile_Body_PD .menu ul.level > li.active").html();
    if ($(".main-content-mobile .W_Mobile_Default_PD .W_Mobile_Body_PD .menu ul.level > li.active ul.level > li.active").length > 0) {
        htmlactive = $(".main-content-mobile .W_Mobile_Default_PD .W_Mobile_Body_PD .menu ul.level > li.active ul.level > li.active").html();
    }
    if ($("#viewdetailproduct .PD_Title").length > 0) {
        htmlactive = $("#viewdetailproduct .PD_Title").html();
    }
    $(".Info_Header_PD").html(htmlactive);

    //Trả kết quả sau suwk kiên Clik 
    $(document).on('click', '.p-body', function() {
        var content = $(this).prev(".destination-info").html();
        //console.log(content);
        $("#clonetopdown").html(content);
    });


    // Menu hieuj ung sliedow

    menu_footer(".dlo-footer-menu ul.menuroot li.liroot > a ");
    fixJs();
    append_menu();
    Init();
    addmainmenu();

    $(".shortMenu").click(function() {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(".swipe-menu").css({
                left: 0
            });
        } else {
            $(this).removeClass("active");
            $(".swipe-menu").css({
                left: '-100%'
            });
        }
    });

    $(".swipe-menu .menuroot li.liroot > a ").each(function() {
        if ($(this).next('ul').length > 0) {
            $(this).removeAttr('href');
        }
    });

    $(".swipe-menu .menuroot li.liroot > a ").click(function() {
        if ($(this).next('ul').is(':visible')) {
            $(this).parent().removeClass('active');
            $(this).next('ul').slideUp();
        } else {
            $(".swipe-menu .menuroot li.liroot > ul ").slideUp();
            $(".swipe-menu .menuroot li.liroot.active").removeClass('active');
            $(this).next('ul').slideDown();
            $(this).parent().addClass('active');

        }
    });

    //And
    // Menu hieuj ung sliedow
    menu_footer(".dlo-footer-menu ul.menuroot li.liroot > a ");
    var menu_footer = function(id) {
        $(id).click(function() {
            if ($(this).next('ul').is(':visible')) {
                $(this).next('ul').slideUp();
                return false;
            } else {
                $(this).next('ul').slideDown();
                return false;
            }
        });
    }

    //And
    // Appen $ clone menu
    clone_menufotter();
});
var clone_menufotter = function() {
        var $clone = $('.dlo-footer-menu .menuroot .last ul li').slice(-6).clone();
        $('.dlo-footer-menu .menuroot .last ul li').slice(-6).css('display', 'none');
        $('.dlo-footer-menu .menuroot').append("<li class='liroot liaddnew'>");
        $('li.liaddnew').append('<ul>');
        $('li.liaddnew ul').append($clone);
        $('li.liaddnew ul').addClass('col-2');
    }
    //And

//AddClass tại vị trí bất kỳ
$('.navigation ul li').get(0).addClass("active");
// End

//xuất hiện cuộn top
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-top').fadeIn();
        } else {
            $('.back-top').fadeOut();
        }
    });
    $('.back-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

// Kiểm tra tồn tại 1 giá trị nào đó
var todate = document.getElementById("txt_date").value;
alert(todate);
if (todate != '') {
    alert('Có tồn tại');
} else {
    alert('Không tồn tại');
}

// END

setTimeout(function() {
    var img_big = $('.block_topstory_hinhanh .art_item_top').height();
    var rs = parseInt(img_big) - 20;
    $('.block_topstory_hinhanh .nice_scroll').css('height', rs + 'px');
}, 15000);

// $.fn.pagepiling.moveSectionDown();

var w_h = $(window).height();
console.log(w_h);
$('.section').height(w_h);
$('.video').height(w_h * 3 / 8);
$('.bg').height(w_h * 5 / 8);

$(window).on('resize', function() {
    $('#section1').height(w_h);
    $('.video').height(w_h * 3 / 8);
    $('.bg').height(w_h * 5 / 8);
});

// onclick timeout
setInterval(function() {
    $('#playFancy').click();
}, 9000);

$(".op_thuonghieu .options").find("a").click(function() {
    var text = $(this).html();
    $(".op_thuonghieu .txt_hang span").html(text);
    $(".op_thuonghieu .options").slideUp();
});


// var target = $('#binh-chon');
// if (target.length) {
//     $('html,body').animate({
//         scrollTop: target.offset().top
//     }, 1000);
//     return false;
// }
$('a[href*=\\#]:not([href=\\#])').on('click', function() {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    }
});

// Khởi tạo Magnific Popup cho một phần tử (giả sử bạn đang sử dụng class 'popup-link' cho phần tử mở popup)
<a href="javascript:;" class="close-popup">Đóng</a>
$('.popup-link').magnificPopup({
    type: 'inline', // loại popup, có thể thay đổi theo nhu cầu của bạn
    midClick: true, // cho phép mở popup khi click giữa trang
    callbacks: {
        open: function() {
            // Gắn sự kiện click cho nút đóng khi popup được mở
            $('.close-popup').on('click', function() {
                $.magnificPopup.close(); // Đóng popup khi click vào nút "Đóng"
            });
        },
        close: function() {
            // Gỡ bỏ sự kiện click cho nút đóng khi popup được đóng
            $('.close-popup').off('click');
        }
    }
});

$(document).ready(function() {
    $('.filter-options').find('.nice-select').click(function(event) {
        event.stopPropagation();
        $('.filter-options .nice-select').not(this).removeClass('open');
        $(this).toggleClass('open');
    });
    $(document).click(function() {
        $('.filter-options .nice-select').removeClass('open');
    });
});


$(document).ready(function () {
    $('.sub_menu').on('click', function () {
      const $clickedLi = $(this).closest('li');
      const $clickedSubmenu = $clickedLi.find('.level2');

      // Đóng tất cả level2 trừ cái được click
      $('.nav .level2').not($clickedSubmenu).slideUp(300);

      // Gỡ class active khỏi các .sub_menu khác
      $('.nav .sub_menu').not(this).removeClass('active');

      // Toggle mở/đóng submenu được click
      $clickedSubmenu.slideToggle(300);

      // Toggle class active cho icon
      $(this).toggleClass('active');
    });
  });



<script>
    $(document).ready(function () {
    const initializedTabs = new Set();

    $(".tab-default > a").click(function (event) {
        event.preventDefault();
        $(".tab-default > a").removeClass("active");
        $(this).addClass("active");
        // Lấy id tab
        const tabSelector = $(this).attr("href");
        // Ẩn tất cả tab, hiển thị tab được chọn
        $(".tab-content > div").hide();
        $(tabSelector).fadeIn();

        // Khởi tạo swiper nếu chưa khởi tạo
        if (!initializedTabs.has(tabSelector)) {
            initSwiper(tabSelector);
            initializedTabs.add(tabSelector);
        }
    });

    function initSwiper(tabSelector) {
        const container = $(`${tabSelector} .swiper-container`);
        new Swiper(container[0], {
            autoHeight: true,
            navigation: {
                nextEl: `${tabSelector} .swiper-button-next`,
                prevEl: `${tabSelector} .swiper-button-prev`,
            },
            pagination: {
                el: `${tabSelector} .swiper-pagination`,
                clickable: true,
            },
        });
    }

    // Khởi tạo tab đầu tiên khi load trang
    initSwiper("#tab-cuc-truong");
    initializedTabs.add("#tab-cuc-truong");
    });

</script>