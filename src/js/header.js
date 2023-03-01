let currentPage = window.location.href;

const iconInst = document.getElementById('soc-med-icon-inst');
const iconFB = document.getElementById('soc-med-icon-fb');
const iconTwitter = document.getElementById('soc-med-icon-twitter');
const headerLogo = document.getElementById('header-logo');
const headerNavList = document.getElementById('header-nav-list');
const header = document.getElementById('header');
const menuIcon = document.getElementById('menu-icon');
const popMenu = document.getElementById('popup-menu'); 
const popLink = document.querySelectorAll('.popup-menu-link');

if (currentPage.includes('index')){
    document.getElementById('home').classList.add('active');

};

if (currentPage.includes('restaurant')){
    document.getElementById('restaurant').classList.add('active', 'secondary');

    iconInst.classList.add('secondary');
    iconFB.classList.add('secondary');
    iconTwitter.classList.add('secondary');
    headerLogo.classList.add('secondary');
    headerNavList.classList.add('secondary');
    header.classList.add('secondary');
    menuIcon.classList.add('secondary');
    popMenu.classList.add('secondary');
    popLink.forEach(popLink => {popLink.classList.add('secondary')});
};

if (currentPage.includes('hotel')){
    document.getElementById('hotel').classList.add('active', 'secondary');

    iconInst.classList.add('secondary');
    iconFB.classList.add('secondary');
    iconTwitter.classList.add('secondary');
    headerLogo.classList.add('secondary');
    headerNavList.classList.add('secondary');
    header.classList.add('secondary');
    menuIcon.classList.add('secondary');
    popMenu.classList.add('secondary');
    popLink.forEach(popLink => {popLink.classList.add('secondary')});
};

if (currentPage.includes('room')){

    iconInst.classList.add('secondary');
    iconFB.classList.add('secondary');
    iconTwitter.classList.add('secondary');
    headerLogo.classList.add('secondary');
    headerNavList.classList.add('secondary');
    header.classList.add('secondary');
    menuIcon.classList.add('secondary');
    popMenu.classList.add('secondary');
    popLink.forEach(popLink => {popLink.classList.add('secondary')});
};