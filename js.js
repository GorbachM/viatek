new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // spaceBetween: 22,
    watchOverflow: false,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        1920: {
            slidesPerView: 4,
        }
    }

});

new Swiper('#swiper5', {
    navigation: {
        nextEl: '.swiper-button-next-pay',
        prevEl: '.swiper-button-prev-pay'
    },
    slidesPerView: 1,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
    }

});


//MENU
let burger = document.getElementById('burger-menu');
let aside = document.getElementById('aside');
let navText = document.getElementById('navText');
let sideIcon = document.getElementById('sideIcon');
let navIcon = document.querySelector('.icon-nav');
let navIcon1 = document.querySelector('.icon-nav1');
let navIcon2 = document.querySelector('.icon-nav2');
let navIcon3 = document.querySelector('.icon-nav3');
let navIcon4 = document.querySelector('.icon-nav4');
let navIcon5 = document.querySelector('.icon-nav5');
let navIcon6 = document.querySelector('.icon-nav6');
let navIcon7 = document.querySelector('.icon-nav7');
let navIcon8 = document.querySelector('.icon-nav8');
let navIcon9 = document.querySelector('.icon-nav9');
let navIcon10 = document.querySelector('.icon-nav10');

burger.addEventListener('click', function () {
    this.classList.toggle("close");
    aside.classList.toggle("open");
    navText.classList.toggle("open");
    sideIcon.classList.toggle("open");
    navIcon.classList.toggle("open");
    navIcon1.classList.toggle("open");
    navIcon2.classList.toggle("open");
    navIcon3.classList.toggle("open");
    navIcon4.classList.toggle("open");
    navIcon5.classList.toggle("open");
    navIcon6.classList.toggle("open");
    navIcon7.classList.toggle("open");
    navIcon8.classList.toggle("open");
    navIcon9.classList.toggle("open");
    navIcon10.classList.toggle("open");
})




let respons = document.getElementById('respons');
let arr = document.getElementById('arr_block');

arr.addEventListener('click', function () {
    respons.classList.toggle('open');
});

