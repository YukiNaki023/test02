 //  let navLinks = $('.ham-btn')


 const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});


$(document).ready(function () {
    const tabs = ['#tabb', '#tabb-02', '#tabb-03'];

    $('.notice-ma li').click(function (e) {
        e.preventDefault(); // 링크 이동 방지

        const index = $(this).index();

        // 모든 탭 숨기고 선택된 탭만 보여줌
        $('#tabb, #tabb-02, #tabb-03').hide();
        $(tabs[index]).show();

        // 선택된 메뉴 강조 (선택 사항)
        $('.notice-ma li').removeClass('active');
        $(this).addClass('active');
    });

    // 페이지 로드시 기본 탭만 보이게
    $('#tabb-02, #tabb-03').hide();
});

$('.notice-ma li').click(function (e) {
    e.preventDefault();

    // 탭 전환
    let index = $(this).index();
    $('#tabb, #tabb-02, #tabb-03').hide();
    ['#tabb', '#tabb-02', '#tabb-03'][index] && $(['#tabb', '#tabb-02', '#tabb-03'][index]).show();

    // 클릭한 li에만 active 클래스 부여
    $('.notice-ma li').removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function () {
    // 탭 내용 제어
    $('#tabb, #tabb-02, #tabb-03').hide();  // 모두 숨기고
    $('#tabb').show();                      // 공지사항만 표시

    // 메뉴 상태 제어
    $('.notice-ma li').removeClass('active');
    $('.notice-ma li:first-child').addClass('active');
});
// ------------여기까지 슬라이더-------------

// --------------여기부터 모바일 제이쿼리----------------------
let pcSwiper, mobileSwiper;

function setSwiper() {
    let isMobile = $(window).width() <= 768;

    if (isMobile) {
        $('.pc-swiper').removeClass('on');
        $('.mobile-slide').addClass('on');

        if (pcSwiper) {
            pcSwiper.destroy(true, true);
            pcSwiper = null;
        }

        if (!mobileSwiper) {
            mobileSwiper = new Swiper('.mobile-swiper', {
                loop: true,
                navigation: {
                    nextEl: '.mobile-swiper .swiper-button-next',
                    prevEl: '.mobile-swiper .swiper-button-prev'
                }
            });
        }

    } else {
        $('.mobile-slide').removeClass('on');
        $('.pc-swiper').addClass('on');

        if (mobileSwiper) {
            mobileSwiper.destroy(true, true);
            mobileSwiper = null;
        }

        if (pcSwiper) {
            pcSwiper = new Swiper('.pc-swiper', {
                loop: true,
                navigation: {
                    nextEl: '.pc-swiper .swiper-button-next',
                    prevEl: '.pc-swiper .swiper-button-prev'
                }
            });
        }
    }
}

$(document).ready(setSwiper);
$(window).on('resize', setSwiper);
// 여기까지 슬라이더
function toggleMobileZip() {
    const winW = $(window).width();

    if (winW <= 768) {
        // 모바일: zip 숨기고, zip-moba 보이되 2개만
        $('.zip').hide();
        $('.zip-moba').show();

        $('.zip-moba li').hide();            // 전체 숨기고
        $('.zip-moba li').slice(0, 2).show(); // 처음 2개만 보여줌

    } else {
        // PC: zip 보이기, zip-moba 숨기기, li 전체 보이기
        $('.zip').show();
        $('.zip-moba').hide();
        $('.zip-moba li').show();
    }
}

$(document).ready(toggleMobileZip);
$(window).resize(toggleMobileZip)

// 여기부터 햄버튼
let navLinks = $('.menu>ul>li')
let section = $('section')
let curScroll = $(this).scrollTop().toFixed(0)


function checkHeader() {
    let winWidth = $(window).width();
    let curScroll = $(window).scrollTop().toFixed(0)
    if (curScroll > 0 && winWidth >= 767) {
        $('header').addClass('on')
    }
    else {
        $('header').removeClass('on')
    }
}
$(window).on('scroll resize', checkHeader);
$(document).ready(checkHeader)
// --------------------------

navLinks.click(function () {
    $(this).addClass('on').siblings().removeClass('on')

    if ($(window).width() < 768) {
        $('.ham-btn, .mobile-menu').removeClass('on')
    }

    if ($('.gnb').hasClass('on')) {
        $('.ham-btn, .mobile-menu').removeClass('on')
    }
})
$(function () {
    $('.ham-btn').click(function () {
        $('.mobile-menu').toggleClass('open');
        $(this).toggleClass('active');
    });
});

$(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    var $hamBtn = $('.ham-btn.moblie'); // 클래스명 오타 체크!

    if (scrollTop > 50) {
        $hamBtn.addClass('fixed');
    } else {
        $hamBtn.removeClass('fixed');
    }
});

// 여기까지 햄버튼

// 여기부터 아코디언코드
$(document).ready(function () {
    // 햄버거 토글 (기존 코드)
    $('.ham-btn').click(function () {
        $(this).toggleClass('on');
        $('.mobile-menu').toggleClass('active');
    });

    // 서브메뉴 아코디언
    $('.mobile-menu > nav > ul > li > a').click(function (e) {
        // 하위 ul이 있는 경우에만 기본 이벤트 막기
        if ($(this).next('ul').length > 0) {
            e.preventDefault();

            const submenu = $(this).next('ul');

            // 다른 열린 메뉴 닫기 (선택 사항)
            $('.mobile-menu ul ul').not(submenu).slideUp();

            // 현재 클릭한 것만 토글
            submenu.stop().slideToggle();
        }
    });
});


function toggleHamburgerByWidth() {
    if ($(window).width() <= 767) {
        $('.ham-btn.moblie').show();
    } else {
        $('.ham-btn.moblie').hide();
    }
}

// 문서 로드 시 한 번 실행
$(document).ready(function () {
    toggleHamburgerByWidth();
});

// 창 크기 바뀔 때도 다시 실행
$(window).on('resize', function () {
    toggleHamburgerByWidth();
});

// 여기까지 아코디언 코드
