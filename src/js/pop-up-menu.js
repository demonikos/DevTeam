const hamburger = document.querySelector('.open-menu-btn');
const menu = document.querySelector('.popup-menu');

hamburger.addEventListener('click', function () {
  menu.classList.toggle('open');
});

const burgerBtn = document.querySelector('.open-menu-btn');
const closeBtn = document.querySelector('.close-menu-btn');
const dropdown = document.querySelector('.popup-menu');

burgerBtn.addEventListener('click', () => {
  menu.classList.add('open');
  burgerBtn.style.display = 'none';
  closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
  burgerBtn.style.display = 'block';
  closeBtn.style.display = 'none';
});
