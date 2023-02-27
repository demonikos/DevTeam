let offset = 0;
const photoSlider = document.querySelector('.hotel-photo-slider');
const viewportWidth = document.body.clientWidth;
const buttonLeft = document.querySelector('.hotel-btn-left');
const buttonRight = document.querySelector('.hotel-btn-right');

if (viewportWidth >= 1440) {
  buttonRight.addEventListener('click', function () {
    offset = offset + 298;
    if (offset > 894) {
      offset = 894;
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
    offset = offset + 368;
    if (offset > 736) {
      offset = 736;
    }
    photoSlider.style.right = offset + 'px';
  });
  buttonLeft.addEventListener('click', function () {
    offset = offset - 368;
    if (offset < 0) {
      offset = 0;
    }
    photoSlider.style.right = offset + 'px';
  });
} else {
  buttonRight.addEventListener('click', function () {
    offset = offset + 177;
    if (offset > 531) {
      offset = 531;
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
}