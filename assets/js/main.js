"use strict";
const slider = document.querySelector('.slider');
const items = slider.querySelectorAll('.slider-item');
const scrollBtns = document.createElement('div');
scrollBtns.classList.add('scroll_btns');
slider.append(scrollBtns);

items.forEach(function add(items, index) {
    const scrollBtn = document.createElement('button');
    scrollBtn.classList.add('scroll_btn');
    scrollBtns.append(scrollBtn);
    const span = document.createElement('span');
    span.classList.add('not-visible');
    scrollBtn.append(span);
    let textNode = document.createTextNode(Number(++index));
    span.append(textNode);
});

scrollBtns.firstChild.classList.add('scroll__active');
const prev = document.createElement('button');
prev.classList.add("arrow_btn", "left-btn");
slider.append(prev);
const next = document.createElement('button');
next.classList.add("arrow_btn", "right-btn");
slider.append(next);


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


    let pseudoArray = scrollBtns.children;
    let array = [];
    for (let i = 0; i < pseudoArray.length; i++) {
        array.push(pseudoArray[i]);
    }
    array.forEach(function (element) {
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

        array.forEach(function (array) {
            array.classList.remove('scroll__active');
        });
    }


    function slideShow() {
        items[numberOfSlide].classList.add('slider-play');
        array[numberOfSlide].classList.add('scroll__active');
    }
}

playSlider(items, prev, next);
