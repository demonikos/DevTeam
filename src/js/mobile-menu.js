const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.popup-menu');
const burgerIcon = document.getElementById('burger-icon');
const crossIcon = document.getElementById('cross-icon');


menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
  if(menu.classList.contains('open')) {
    burgerIcon.style.display = 'none';
    crossIcon.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
  else {
    burgerIcon.style.display = 'block';
    crossIcon.style.display = 'none';
    document.body.style.overflow = 'visible';
  };

});

