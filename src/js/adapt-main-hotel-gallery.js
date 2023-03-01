let categoryItem1 = document.querySelector('#slide1');
let categoryItem2 = document.querySelector('#slide2');
let categoryItem3 = document.querySelector('#slide3');
let categoryItem4 = document.querySelector('#slide4');

const btnNext = document.querySelector('.next-btn');
const btnPrevious = document.querySelector('.previous-btn');

btnNext.addEventListener('click', function () {
    if (categoryItem1.classList.contains('isopen')) {
        categoryItem2.classList.toggle('isopen');
        categoryItem1.classList.toggle('isopen');
    }
    else if (categoryItem2.classList.contains('isopen')) {
        categoryItem3.classList.toggle('isopen');
        categoryItem2.classList.toggle('isopen');
    }
    else if (categoryItem3.classList.contains('isopen')) {
        categoryItem4.classList.toggle('isopen');
        categoryItem3.classList.toggle('isopen');
    }
    else {
        categoryItem4.classList.toggle('isopen');
        categoryItem1.classList.toggle('isopen');
    }
});

btnPrevious.addEventListener('click', function () {
    if (categoryItem1.classList.contains('isopen')) {
        categoryItem4.classList.toggle('isopen');
        categoryItem1.classList.toggle('isopen');
    }
    else if (categoryItem2.classList.contains('isopen')) {
        categoryItem1.classList.toggle('isopen');
        categoryItem2.classList.toggle('isopen');
    }
    else if (categoryItem3.classList.contains('isopen')) {
        categoryItem2.classList.toggle('isopen');
        categoryItem3.classList.toggle('isopen');
    }
    else {
        categoryItem4.classList.toggle('isopen');
        categoryItem3.classList.toggle('isopen');
    }
});