let offset = 0;
const photoSlider = document.querySelector('.main-hotel .photo-slider');
let viewportWidth = document.body.clientWidth;
const buttonRight = document.querySelector('.main-hotel .button-right');
const buttonLeft = document.querySelector('.main-hotel .button-left');


buttonRight.addEventListener('click', function () {
offset = offset + 177;
if (offset > 177*2) {
    offset = 0;
}
photoSlider.style.right = offset + 'px';
});

buttonLeft.addEventListener('click', function () {
offset = offset - 177;
if (offset < 0) {
    offset = 0;
}
photoSlider.style.right = offset + 'px';
});
