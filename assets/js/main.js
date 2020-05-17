"use strict";

const next = document.querySelector('.right-btn');
const prev = document.querySelector('.left-btn');
const items = document.querySelectorAll('.slider-item');
const scrollBtns = document.querySelectorAll('.scroll_btn');


function playSlider(items, prev, next) {
    let numberOfSlide = 0;
    items[numberOfSlide].classList.add('slider-play');

    next.addEventListener('click', function (element) {
        element.preventDefault();
        removeStyle(); 
        numberOfSlide++;
        if (numberOfSlide == items.length) { numberOfSlide = 0; }
        slideShow(); 		
    });

    prev.addEventListener('click', function (element) {
        element.preventDefault();
        removeStyle();
        numberOfSlide--;
        if (numberOfSlide == -1) { numberOfSlide = items.length - 1; }
        slideShow();
    });

    scrollBtns.forEach(function (element) {  
        element.addEventListener('click', function (elem) {
            elem.preventDefault();
            removeStyle();
            numberOfSlide = this.textContent - 1;
            slideShow();
        });
    });

    
    function removeStyle() {
        items.forEach(function (item) {
            item.classList.remove('slider-play');
        });

        scrollBtns.forEach(function (scrollBtns) {
            scrollBtns.classList.remove('scroll__active');
        });
    }


    function slideShow() {
        items[numberOfSlide].classList.add('slider-play');
        scrollBtns[numberOfSlide].classList.add('scroll__active');
    }
}

playSlider(items, prev, next);
