let offset = 0;
const photoSlider = document.querySelector('.photo-slider');
let viewportWidth = document.body.clientWidth;
const buttonRight = document.querySelector('.button-right');
const buttonLeft = document.querySelector('.button-left');

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
    offset = offset + 368;
    if (offset > 368*5) {
      offset = 0;
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
    if (offset > 177*5) {
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
}
