let offset = 0;
const photoSlider = document.querySelector('.slider-restaurant');
const viewportWidth = document.body.clientWidth;
const buttonRight = document.querySelector('.restaurant-gallery .button-right');
const buttonLeft = document.querySelector('.restaurant-gallery .button-left');

if (viewportWidth >= 768) {
  buttonRight.addEventListener('click', function () {
    offset = offset + 468;
    if (offset > 1372) {
      offset = 0;
    }
    photoSlider.style.right = offset + 'px';
  });

  buttonLeft.addEventListener('click', function () {
    offset = offset - 468;
    if (offset < 0) {
      offset = 0;
    }
    photoSlider.style.right = offset + 'px';
  });
} else {
  buttonRight.addEventListener('click', function () {
    offset = offset + 270;
    if (offset > 540) {
      offset = 0;
    }
    photoSlider.style.right = offset + 'px';
  });
  buttonLeft.addEventListener('click', function () {
    offset = offset - 270;
    if (offset < 0) {
      offset = 0;
    }
    photoSlider.style.right = offset + 'px';
  });
}
