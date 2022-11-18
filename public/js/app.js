//password field show and hide

function PasswordIcon(){
    var x = document.getElementById("myInput");
    if(x.type === "password"){
        x.type = "text";
        document.getElementById('icon_hide').style.display = "inline-block";
        document.getElementById('icon_show').style.display = "none";

    }

    else{
        x.type = "password";
        document.getElementById('icon_hide').style.display = "none";
        document.getElementById('icon_show').style.display = "inline-block";
    }
}

function CreatePasswordIcon(){
    var x = document.getElementById("CreatePasswordInput");
    if(x.type === "password"){
        x.type = "text";
        document.getElementById('create_icon_hide').style.display = "inline-block";
        document.getElementById('create_icon_show').style.display = "none";

    }

    else{
        x.type = "password";
        document.getElementById('create_icon_hide').style.display = "none";
        document.getElementById('create_icon_show').style.display = "inline-block";
    }
}


var swiper = new Swiper(".bannerSwiper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});


var swiper = new Swiper(".topCategoriesSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".categoriesSwiper-button-next",
        prevEl: ".categoriesSwiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 18,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});

var swiper = new Swiper(".featureSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".featureSwiper-button-next",
        prevEl: ".featureSwiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 18,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});

var swiper = new Swiper(".recentSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".recentSwiper-button-next",
        prevEl: ".recentSwiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 18,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});


//testimonials Slider

var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".testimonials-button-next",
        prevEl: ".testimonials-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
    },
});


var galleryThumbs = new Swiper(".gallery-thumbs", {
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 3,
    loop:true,
    navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
    },
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical'
});

var galleryMain = new Swiper(".gallery-main", {
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    effect: 'fade',
    loop: true,
    fadeEffect: {
        crossFade: true
    },
    thumbs: {
        galleryMain: galleryThumbs
    }
});

galleryMain.on('slideChangeTransitionStart', function() {
    galleryThumbs.slideTo(galleryMain.activeIndex);
});

galleryThumbs.on('transitionStart', function() {
    galleryMain.slideTo(galleryThumbs.activeIndex);
});


//dropdown on  click //
$(".custom-dropdown").on('click', function() {
    $(".dropdown-content ul").slideToggle();
});

$(".user-profile").on('click', function() {
    $(".profile-content ul").slideToggle();
});

$(document).ready(function() {
    $('.custom-select').select2({
        minimumResultsForSearch: 5,
    });
});
$(document).ready(function() {
    $('.custom-select2').select2({
        minimumResultsForSearch: 5,
    });
});
$(document).ready(function() {
    $('.custom-select3').select2({
        minimumResultsForSearch: 5,
    });
});

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll < 500) {
        $("#header-sticky").removeClass("header-sticky");
    } else {
        $("#header-sticky").addClass("header-sticky");
    }
});

var menuBtn = document.getElementById('hamburger-btn');
var menuBtnClose = document.getElementById('hamburger-btn-close');
var navMenu = document.getElementById('nav-menu')
var overlay = document.getElementById('overlay')

menuBtn.addEventListener('click', () => {
    navMenu.classList.add('open')
    overlay.classList.add('open')
})
menuBtnClose.addEventListener('click', () => {
    navMenu.classList.remove('open')
    overlay.classList.remove('open')
})
overlay.addEventListener('click', () => {
    navMenu.classList.remove('open')
    overlay.classList.remove('open')
})


// tab js
const tabs = document.querySelectorAll(".tabs");
const tab = document.querySelectorAll(".tab");
const panel = document.querySelectorAll(".tab-content");

function onTabClick(event) {

    // deactivate existing active tabs and panel

    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
    }

    for (let i = 0; i < panel.length; i++) {
        panel[i].classList.remove("active");
    }


    // activate new tabs and panel
    event.target.classList.add('active');
    let classString = event.target.getAttribute('data-target');
    console.log(classString);
    document.getElementById('panels').getElementsByClassName(classString)[0].classList.add("active");
}

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', onTabClick, false);
}

var containerEl = document.querySelector("#portfoliolist");

var mixer = mixitup(containerEl, {
    animation: {
        animateResizeContainer: true,
    },
});