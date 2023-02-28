let offset = 0;
const photoSlider = document.querySelector('.restaurant-hero-photo-slider');
const viewportWidth = document.body.clientWidth;
const buttonRight = document.querySelector('.restaurant-hero-button-right');
const buttonLeft = document.querySelector('.restaurant-hero-button-left');

if (viewportWidth >= 1440) {
  buttonRight.addEventListener('click', function () {
    offset = offset + 298;
    if (offset > 1490) {
      offset = 0;
    }
    photoSlider.style.right = offset + 'px';
  });

  buttonLeft.addEventListener('click', function () {
    offset = offset - 298;
    if (offset < 0) {
      offset = 0;
    }
    photoSlider.style.right = offset + 'px';
  });
} else if (viewportWidth >= 768) {
  buttonRight.addEventListener('click', function () {
    offset = offset + 456;
    if (offset > 2180) {
      offset = 0;
    }
    photoSlider.style.right = offset + 'px';
  });
  buttonLeft.addEventListener('click', function () {
    offset = offset - 456;
    if (offset < 0) {
      offset = 0;
    }
    photoSlider.style.right = offset + 'px';
  });
} else {
  buttonRight.addEventListener('click', function () {
    offset = offset + 270;
    if (offset > 1250) {
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
