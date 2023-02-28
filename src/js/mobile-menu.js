const burgerBtn = document.querySelector('.open-menu-btn');
const closeBtn = document.querySelector('.close-menu-btn');
const menu = document.querySelector('.popup-menu');

burgerBtn.addEventListener('click', () => {
  menu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});
